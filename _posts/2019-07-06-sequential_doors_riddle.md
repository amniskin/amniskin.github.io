---
title: "The Sequential Doors and The Data Science Analogue"
type: post
category: Riddle
tags:
- Mathematics
- Riddle
- puzzles
- riddles
feature_image: "/assets/pics/2018/04/12_banner.jpg"
---

This post is going to be something of a combination riddle and blog post.

# The setup

There are $N$ doors indexed by $1,..,N$ along a wall and they're all closed. Then for each $i\in\{1,2,\dots,N\}$, you toggle every $i$ door. So at first ($i = 1$) you toggle every door. Then $i=2$ you toggle every second door -- the even doors ($2, 4, 6, \dots,$).

<!-- more -->

## The task

Given $N$, describe the "door is closed" function. By that I mean, which doors are open and which are closed at the end?

# Solution:

<div class="hint" markdown="1">
Only the perfect squares are open at the end. So $1,4,9,16,\dots$ are open, and $2,3,5,6,7,8,\dots$ are closed.
</div>

# Explanation

**NOTE: Spoilers below!**

So there are really two philosophies to solving this riddle, and they each have their merits.

## Theory

The first philosophy I'm talking about is what I'll call the *theory based* approach. For this approach we'll investigate what's driving the system. By that we mean, given a number $m\leq N$, how many times will that $m$ be toggled? Note that we're not investigating the task directly, but rather something a lot deeper and more specific.

Well, a number $m$ is toggled exactly once per divisor. For instance, the number $6$ is toggled 4 times -- once at $1,2,3,6$ -- and hence is closed at the end. $9$, on the other hand only gets toggled $3$ times -- $1,3,9$ -- and hence is open at the end.

So how many divisors does a given number have? For that, we'll use some beautiful number theory (the number theory we're using isn't deep or anything, but any number theory is beautiful really). So any counting number $m$ can be written as a product of unique primes to non-negative integer exponents. So, mathematically, what I'm saying is:

$$\begin{align*}
m =& \prod p_i^{\alpha_i}
\end{align*}$$

Since every number can be written that way, all $m$'s divisors can be written that way too. By definition, any divisor of $m$ must be $\prod p_i^{\lambda_i}$ such that for each $i$, $0 \leq \lambda_i \leq \alpha_i$ -- and each such collection of $\lambda_i$ determines a unique divisor. So how many such numbers can we create? Clearly: $\prod\limits_i(\alpha_i + 1)$ because we can have up to $\alpha_i$ powers of $p_i$, but we could also have 0 of them. So there are $\alpha_i + 1$ many.

So now we can ask which numbers have an odd number divisors? Those will be the ones left open and the others will be closed. Well an odd number of divisors means that $\gamma = \prod\limits_i(\alpha_i + 1)$ is odd. But since $\gamma$ is odd, then none if its divisors can be even, and hence $\alpha_i + 1$ must be odd for each $i$. But that means $\alpha_i$ must be even for each $i$. And that's the exact description of a perfect square.

Another way to use this understanding is that for every divisor there's a pair, a buddy. But only if it's a perfect square will there be a divisor whose buddy is itself, thereby making an odd number of divisors. But this is still based on our theoretical understanding of the scenario.

# Data Science Approach

The second approach is one that's particularly useful if the theory is very costly to investigate (for whatever reason). For this approach we'll just collect a bunch of data, and see what fits. For this example, we'll collect just the data that's directly what we're looking to question. Let's do up to 11 (just to pick a random number) letting 0 denote closed and 1 open.

| iteration | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | NOTES |
|:---------:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:--:|:--:|:--:|:----- |
| 0         | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0  | 0  | 0  |  |
| 1         | 1 | 1 | 1 | 1 | 1 | 1 | 1 | 1 | 1 | 1  | 1  | 1  | |
| 2         | 1 | 0 | 1 | 0 | 1 | 0 | 1 | 0 | 1 | 0  | 1  | 0  | |
| 3         | 1 | 0 | 0 | 0 | 1 | 1 | 1 | 0 | 0 | 0  | 1  | 1  | |
| 4         | 1 | 0 | 0 | 1 | 1 | 1 | 1 | 1 | 0 | 0  | 1  | 0  | |
| 5         | 1 | 0 | 0 | 1 | 0 | 1 | 1 | 1 | 1 | 0  | 1  | 0  | transcription error |
| 6         | 1 | 0 | 0 | 1 | 0 | 0 | 1 | 1 | 1 | 0  | 1  | 1  | |
| 7         | 1 | 0 | 0 | 1 | 0 | 0 | 0 | 1 | 1 | 0  | 1  | 1  | |
| 8         | 1 | 0 | 0 | 1 | 0 | 0 | 0 | 0 | 1 | 0  | 1  | 1  | |
| 9         | 1 | 0 | 0 | 1 | 0 | 0 | 0 | 0 | 0 | 0  | 1  | 1  | |
| 10        | 1 | 0 | 0 | 1 | 0 | 0 | 0 | 0 | 0 | 1  | 1  | 1  | |
| 11        | 1 | 0 | 0 | 1 | 0 | 0 | 0 | 0 | 0 | 1  | 0  | 1  | |
| 12        | 1 | 0 | 0 | 1 | 0 | 0 | 0 | 0 | 0 | 1  | 0  | 0  | |

At this point we might already have noticed a pattern. The first is 1, then $1 + 3 = 4$. Then $4 + 2\cdot 3 = 10$. So the next one should be $10 + 3 \cdot 3 = 19$, which we know from the first approach is wrong, so we collect more data and reject this hypothesis. We can imagine that with enough data we'd start to notice that 9 and 10 are outliers and even probably notice the transcription error at iteration 5 and end up with something like this.

| index | open? |
|:----- |:----- |
| 1  | 0  |
| 2  | 1  |
| 3  | 1  |
| 4  | 0  |
| 5  | 1  |
| 6  | 1  |
| 7  | 1  |
| 8  | 1  |
| 9  | 0  |
| 10 | 1  |
| 11 | 1  |
| 12 | 1  |
| 13 | 1  |
| 14 | 1  |
| 15 | 1  |
| 16 | 0  |

And we conclude that the pattern is 1, then skip 3 (to 4), then skip 5 (to 9), then skip 7 (to 16), etc. and confirm it with some out-of-sample:

| index | open? |
|:----- |:----- |
| 17 | 1  |
| 18 | 1  |
| 19 | 1  |
| 20 | 1  |
| 21 | 1  |
| 22 | 1  |
| 23 | 1  |
| 24 | 1  |
| 25 | 0  |
| 26 | 1  |
| 27 | 1  |
| 28 | 1  |
| 29 | 1  |
| 30 | 1  |
| 31 | 1  |
| 32 | 1  |
| 33 | 1  |
| 34 | 1  |
| 35 | 1  |
| 36 | 0  |
| 37 | 1  |

and I'm satisfied. But that pattern isn't very illuminating, and it's only valid in the statistical sense. But either way, we get an answer[^1].

# The Problem

What if we work in a field where data accrual is very slow (think Finance, Economics, or any such field). Clearly this approach has some pretty deep flaws for us. Our out-of-sample grows too slowly to be able to make conclusions like we made at the end there, and we're stuck in the first realm where all data has errors and there are a plethora of theories that look great (in sample). And even if we hold out some data as "out-of-sample" and try to do everything right, we can still over-fit to that sample.

Luckily for us, there's a lot of autocorrelation in these things. So if you've done everything properly and found something that works on the hold-out, it's shouldn't be too surprising if it works well for at least a short period on true out-of-sample, even if the thing is over-fit, but that's not particularly satisfying.

So how else should we go about this? The economist's approach, perhaps? It seems sensible at first glance; you get to build off of the tremendous work of the mathematical community and potentially get conclusive answers. We can certainly model things with increasing complexity and beauty (unrelated), but at the end of the day the only way to assess the validity of these models is through out-of-sample predictions. You know, the way Physicists do it. But we can't really do that here, so we do like we said we would and have a hold out, etc. and we're already back to the data-science approach but with more story-telling. And naturally, since we want to pretend like we're doing something more rigorous that data-science, we judge this largely on the sensibility of the stories. But all that means is that we're unwilling to accept theories that are counter-intuitive -- sorry Einstein, your theory of relativity isn't wanted here.

So either we do the data science approach, or we do the "sensibility" based approach, which is itself based on itself. Why do people prefer the sensibility based approach? If you're reading this, please really do [email](mailto:aaron@niskin.org?Subject=Economics%20data-science%20blog-post) me your thoughts on this -- I'd love to hear other opinions here.

[^1]: We can show that these two solutions are equivalent by induction. Clearly it's true for 1 (1 is a perfect square and is how we defined the start of the sequence). Now imagine a square of size $n$ and let's see how many we have to add to get to a square with side-length $n+1$. Well, we have to add $n$ to each side, then 1 for the corner. So we add $2n + 1$. So for instance, if $n=1$ (the base case) then the next perfect square would be $n + (2n+1) = 1 + 3 = 4$. Indeed!
