---
layout: post
title: "Getting across the river"
category: Riddles
excerpt: The river-crosser's union problem set \#1
tags:
- riddles
banner: /assets/images/2018/06/26_river_crossing.jpg
---

## Part 1

### Foxes, Rabbits, and Lechuga

You stand at the edge of a riverbed with your pet fox, a pet rabbit, and a head of lettuce. You need to cross the river, but can only take one of the three with you each time you cross. If the fox is ever left unsupervised with the rabbit (s)he'll eat it, and the same for the rabbit and the head of lettuce.

Just to clarify what you know:

* You have a fox, rabbit, and a head of lettuce
* The fox will eat the rabbit, and the rabbit will eat the lettuce (if given the opportunity)
* You can only take one across at a time

How can you get all three to the other side of the river without any of them getting eaten?

### Solution:

<div class="hint" markdown="1">
First let's define the sides as $A$ and $B$ (we're on side $A$).

1. Take the rabbit to side $B$ (the fox is left with the lettuce on side $A$, but that's okay)
1. Go back to side $A$ without anything in the boat.
1. Take the fox to side $B$
1. Go back to $A$ with the rabbit
1. Take the lettuce to side $B$
1. Go back alone
1. Take the rabbit to side $B$
1. Profit heavily
</div>

## Part 2

### The riddle

This riddle is courtesy of [@TazoLezhava](https://www.linkedin.com/in/tazo-lezhava-7a5583a5)

Now 5 cannibalistic parents stand on the edge of a riverbed each with their first-born child. These parents are very over-protective and won't let their kids be with any of the other parents if they're not there as well. There is a boat that can take 3 people at a time. How do they use that boat to get all 10 people (the 5 cannibalistic parents and their first-borns) to the other side of the river without any kids getting eaten?

### Solution:

Solution courtesy of [@AndrewRobinson](https://www.linkedin.com/in/andrew-robinson-8b25a454/)

<div class="hint" markdown="1">
Again, let's call them sides $A$ and $B$, and we're on $A$. Let's also call the children be denoted by the numbers $1,2,3,4,5$, and the parents by the letters $a,b,c,d,e$, where $a$ is $1$'s parent and so on.

| move | side $A$ | side $B$ |
|:----:|:--------:|:--------:|
| | $1,2,3,4,5,a,b,c,d,e$ | $\emptyset$ |
| $\rightarrow 1,2,3$ | $4,5,a,b,c,d,e$ | $1,2,3$ |
| $\leftarrow 3$  | $3,4,5,a,b,c,d,e$ | $1,2$ |
| $\rightarrow 3,4$ | $5,a,b,c,d,e$ | $1,2,3,4$ |
| $\leftarrow 4$  | $4,5,a,b,c,d,e$ | $1,2,3$ |
| $\rightarrow a,b,c$ | $4,5,d,e$ | $1,2,3,a,b,c$ |
| $\leftarrow 3,c$    | $3,4,5,c,d,e$ | $1,2,a,b$ |
| $\rightarrow c,d,e$ | $3,4,5$ | $1,2,a,b,c,d,e$ |
| $\leftarrow 2$ | $2,3,4,5$ | $1,a,b,c,d,e$ |
| $\rightarrow 2,3,4$ | $5$ | $1,2,3,4,a,b,c,d,e$ |
| $\leftarrow 4$ | $4,5$ | $1,2,3,a,b,c,d,e$ |
| $\rightarrow 4,5$ | $\emptyset$ | $1,2,3,4,5,a,b,c,d,e$ |

And we're done. This is a pretty confusing way to show it, but with that many moving pieces, there aren't too many great ways to visualize this. At least none that I know of.
</div>
