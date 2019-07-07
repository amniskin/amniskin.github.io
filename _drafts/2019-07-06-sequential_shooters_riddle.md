---
title: "The sequential shooters"
type: post
category: Mathematics
tags:
- Mathematics
- Riddle
- puzzles
- riddles
feature_image: "/assets/pics/2018/04/12_banner.jpg"
---

# The setup

There are N people indexed by $1,..,N$ standing in a circle. They're standing such that $i$ is between $i-1$ and $i+1$ (unless $i \in\{1,N\}$, for obvious reasons).

<!-- more -->

Then starting with $1$ and going around the circle in turn, each person shoots the person directly to their left. This stops when there's only one person left alive. For example: if $N=5$, it would go:

1. 1 shoots 2
1. 3 shoots 4
1. 5 shoots 1
1. 3 shoots 5

and only 3 remains.

## The task

Given $N$, what is the index of the last shooter standing e.g. for $N=5$, the answer is $3$?

### Solution:

<div class="hint" markdown="1">
```python3
def foo():
    return False
```
</div>

