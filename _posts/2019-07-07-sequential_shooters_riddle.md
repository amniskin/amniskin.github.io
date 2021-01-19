---
layout: post
title: "The sequential shooters"
category: Mathematics
tags:
- Mathematics
- Riddle
- puzzles
- riddles
banner: /assets/images/2019/07/the_office_guns.gif
mathjax: true
---

There are N people indexed by $1,..,N$ (because down with the zero-indexers! Long live [Peano!](https://en.wikipedia.org/wiki/Peano_axioms)) standing in a circle. They're standing such that $i$ is between $i-1$ and $i+1$ (unless $i \in\{1,N\}$, for obvious reasons).

Then starting with $1$ and going around the circle in turn, each person shoots the person directly to their left. This stops when there's only one person left alive. For example: if $N=5$, it would go:

<!-- more -->

1. 1 shoots 2
1. 3 shoots 4
1. 5 shoots 1
1. 3 shoots 5

and only 3 remains.

## The task

Given $N$, what is the index (1-indexed, unfortunately) of the last shooter standing? For example: if $N=5$, the answer is $3$.

## Solution:

### The Theoretical Solution

<div class="hint" markdown="1">
Every number $N$ can be written uniquely as $2^i + \lambda$, where $i,\lambda\in\mathbb{N}\_{\geq 0}$ and $\lambda$ is minimal (hence $i$ maximal).

The answer to the riddle is $1 + 2\lambda$ for this particular $\lambda$.

So full disclosure, I kinda cheated on this one. We'll get to that in a bit; but first let's go through the motions and let me walk you through my thought process (as if that's super valuable).

Firsty, we can immediately tell that every time there are an even number of people in the circle, that round will end up at the same person it started with (as in if there are 6 people in the circle, then 2, 4, and 6 are killed in the first round and we start round two on 1 again.

From there we can conclude that any power of two should end on 1. e.g.

if $N = 2^1 = 2$ we have:

1. 1 shoots 2

if $N = 2^2 = 4$

1. 1 shoots 2
1. 3 shoots 4
and we're left in pretty much the same scenario as $N=2$.

If $N=8$,

1. 1 shoots 2
1. 3 shoots 4
1. 5 shoots 6
1. 7 shoots 8

and we're left in pretty much the same scenario as $N=4$. In fact, for $2^{i+1}$, the first iteration will wipe out half of the people and leave us starting on 1 again -- thereby leaving us in an analogous scenario as $2^i$.

What about the other cases? Well, naively we can see that every shot moves the head forward by two slots (when 1 shoots 2, the round robbin starts again at 3 but with one fewer player). We now have to prove that this sort of thing reaches parity at $2^i$ and not beforehand. But I'm feeling lazy and I'm pretty confident that it's correct, so I'll just show that it's true for the first few programmatically...
</div>

### The Programmatic Solution

<div class="hint" markdown="1">

```python
def rotate(lst, n=1):
    "rotate a list n times sending the first elems to the back"
    return lst[n:] + lst[:n]

def shoot(lst):
    lst = rotate(lst)
    lst.pop(0)
    return lst

def play(N: int) -> int:
    players = list(range(1, N+1))
    for _ in range(N - 1):  # n-1 shots leaves one standing
        players = shoot(players)
    assert len(players) == 1, "Wrong number of players left"
    return players[0]

def get_lambda(N: int) -> int:
    i = int(np.floor(np.log2(N)))
    return N - (2 ** i)

def check_theory(i):
    return play(i) == (2 * get_lambda(i) + 1)


t0 = time()
for i in range(1, 1000):
    assert check_theory(i)
print(time() - t0)
```


And we can confirm that the relationship holds, at least for the first 1000 positive integers. To do more, we'll have to account for python's speed issues.


```python
from numba import jit

@jit(nopython=True)
def _rotate(lst, n=1):
    "rotate a list n times sending the first elems to the back"
    return lst[n:] + lst[:n]

@jit(nopython=True)
def _shoot(lst):
    lst = _rotate(lst)
    lst.pop(0)
    return lst

@jit(nopython=True)
def _play(N: int) -> int:
    players = list(range(1, N+1))
    for _ in range(N - 1):  # n-1 shots leaves one standing
        players = _shoot(players)
    assert len(players) == 1, "Wrong number of players left"
    return players[0]

@jit(nopython=True)
def _get_lambda(N: int) -> int:
    i = int(np.floor(np.log2(N)))
    return N - (2 ** i)

@jit(nopython=True)
def _check_theory(i):
    return _play(i) == (2 * _get_lambda(i) + 1)

t0 = time()
for i in range(1, 1000):
    assert _check_theory(i)
print(time() - t0)
```


And now we run our horse race!

```python
def race(func, max_n, num_races):
    for _ in range(num_races):
        t0 = time()
        for i in range(1, max_n + 1):
            assert func(i)
        print(time() - t0)

print('no numba')
race(check_theory, 1000, 5)
```

On my machine, that prints something on the order of 1 second for each of the five runs. Now let's try numba!

```python
print('yes numba')
race(_check_theory, 1000, 5)
```

This one takes about 1.5 seconds for the first one, then consistently half a second for the rest.


The point being, if you're going to run a function a bunch of times, it's probably worth while letting numba have a go at it -- it's super cheap to do after all.
</div>
