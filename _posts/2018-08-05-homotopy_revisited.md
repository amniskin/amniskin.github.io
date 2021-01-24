---
layout: post
title: Let's Cover Homotopy (an apologetic revisionary tale)
excerpt: Munkres will surely save us our trespasses this once, but NEVER AGAIN!
category: Mathematics
tags:
- data-visualization
- statistics
- mathematics
- topology
- algebra
- theory
banner: "/assets/images/2018/08/05_homotopy.jpg"
---

## What am I doing?

### The structure of these posts

This post is not really building off of the theory from my previous post ([homology pt 1]({{ site.baseurl }}{% post_url 2018-04-12-homology %})), but it's about the same subject. It turns out we were using a book I didn't really like too much, so I switched to something with a bit more of a familiar style for me. So I'll be using [Topology by Munkres](https://www.amazon.com/Topology-Classic-Classics-Advanced-Mathematics/dp/0134689518/ref=sr_1_2?ie=UTF8&qid=1533510847&sr=8-2&keywords=topology+munkres) for these posts (at least for now).

I'll not be covering the book in much detail because after all, Munkres did a great job at doing that himself. But I will summarize some things that I feel like summarizing, and do some of the exercises (just the ones I feel like doing because, well, I can -- I know, this is sounding more useful by the second).

So let's dig in!

# Part II

But where did part I go? That's not Algebraic Topology, so we're not gonna cover that part (at least not until I feel like I need a review).

## Chapter 9: The Fundamental Group

Basically, we say $f_0,f_1:X\to Y$ are __homotopic__ if there is a continuous function $F:X\times I\to Y$ (where $I=[0,1]$) with the following two properties:

1. $\forall x\in X, F(x,0) = f_0(x)$
1. $\forall x\in X, F(x,1) = f_1(x)$

Basically, at one end of the interval $I$ $F$ is $f_0$ and on the other end $F$ is $f_1$. Since the whole map is continuous, this must be a continuous deformation. And there's a bunch of (helpful) book-keeping to prove that homotopy defines an equivalence relation, etc. but we won't be covering that right now. But before we move on, let's talk about path homotopy...

We say the paths $f_0,f_1:I\to Y$ are __path homotopic__ if they have the same start and end points ($x_0$ and $x_1$) and there is a homotopy $F$ from $f_0$ to $f_1$ with the following two additional requirements:

1. $\forall s\in I, F(0,s) = x_0$
1. $\forall s\in I, F(1,s) = x_1$

One thing to note: if you consider a torus (because who doesn't love donuts), any two non-intersecting paths will be homotopic, but not necessarily path homotopic because they might go around different sides of the donut hole, for instance. The requirement that the end-points are fixed is no trivial thing.

Let's get into the questions!

## Exercises

### Show that if $h,h':X\to Y$ are homotopic and $k,k':Y\to Z$ are also homotopic, then $k\circ h$ and $k'\circ h'$ are homotopic.

<div class="hint" markdown="1">

Let $H,K$ be homotopies from $h$ to $h'$ and $k$ to $k'$ respectively. Then consider the map $G:X\times I\to Z$ defined by $G(x,i) = K(H(x,i),i)$.

_Claim_: $G$ is a homotopy between $k\circ h$ and $k'\circ h'$.

_Proof_: $G$ is obviously continuous (because $H$ and $K$ are), so we only have to prove that $G(x,0) = k\circ h$ and $G(x,1)= k'\circ h'$. But those follow directly from the definition of $G$.
</div>

### Given spaces $X$ and $Y$, let $[X,Y]$ be the set of homotopy classes of maps from $X$ to $Y$.

a) Show that for any $X$, $[X,I]$ is a singleton.

<div class="hint" markdown="1">
Let $f,g:X\to I$ be continuous maps. Then since $\forall x \in X$, $f(x),g(x)\in[0,1]$, we know that the following map $H:X\times I\to I$ will always be well defined: $H(x,t) = t\cdot f(x) + (1-t)\cdot g(x)$. $H$ is a homotopy.
</div>

b) Show that if $Y$ is path connected, the set $[I,Y]$ is a singleton.

<div class="hint" markdown="1">
Let $Y$ be path connected and let $f:I\to Y$ be continuous. Pick a point $y_o\in Y$ and define $g:I\to Y$ such that $\forall t\in I$, $g(t)=y_0$. We will prove that $f$ is homotopic to $g$ (and hence all maps are), and conclude that $[I,Y]$ is a singleton. We'll prove this in two steps: first we'll show that $f$ is homotopic to the constant map that maps all of $I$ to one of the end-points of $f$; then we'll show that the aforementioned constant map is homotopic to $g$.

To prove the first part, let $h:I\to Y$ be such that $\forall t\in I$, $h(t)=f(0)$. Let $H:I\times I\to Y$ be such that $H(s,t) = f(s\cdot (1-t))$. Then clearly $H$ is a homotopy between $f$ and $h$.

To prove the second part, since $Y$ is path connected, let $p:I\to Y$ be a path from $f(0)$ to $y_0$. Then let $G:I\times I\to Y$ be such that $G(s,t) = p(t)$. Aaaannnnndddd, that's our homotopy between the two constant maps.

So our desired homotopy from $f$ to $g$ is $G\circ H$.
</div>

### A space X is __contractible__ if the identity map $i_x:X\to X$ is homotopic to a constant map (__nullhomotopic__).

a) Show that $I,\mathbb{R}$ are contractible.

<div class="hint" markdown="1">
To show that $I$ is contractible, we can just consider it a corollary of the first part of the previous answer. So we'll prove the second part (that $\mathbb{R}$ is contractible).

Let $i:\mathbb{R}\to\mathbb{R}$ be the identity and let $x_0\in\mathbb{R}$, and $f:\mathbb{R}\to\mathbb{R}$ with $f(x) = x_0$. Our job is to show that there is a homotopy $F:\mathbb{R}\times I\to\mathbb{R}$ between $f$ and $i$.

Consider the map $F(x,t)=\begin{cases} x & | x | < t \\\\ \text{sign}(x)t & \text{otherwise}\end{cases}$. That is our homotopy.
</div>

b) Show that a contractible space is path connected.

<div class="hint" markdown="1">
Let $Y$ be contractible and let $y_0,y_1$ be points. Then let $f:I\to Y$ be the constant map $f(t) = y_1$, and let $F:I\times I\to Y$ be the map contracting $i_Y$ to $f$. Then let $p(t) = F(t,t)$. $p$ is a path connecting $y_0$ and $y_1$. We're done here.
</div>

c) Show that if $Y$ is contractible, then for any $X$ the set $[X,Y]$ is a singleton.

<div class="hint" markdown="1">
The proof is very similar to the last two, so I'm not gonna do it. Ah, the pleasures of self-learning. But basically, contractions have inverses (because they're homotopies too!).
</div>

d) Show that if $X$ is contractible and $Y$ is path connected then $[X,Y]$ is a singleton.

<div class="hint" markdown="1">
The proof that $[I,Y]$ is a singleton is general enough to accommodate this (mutatis mutandis, obvs). Laziness ENGAGE!
</div>

## Summary

We've done so many exercises I don't even feel like I need to workout anymore! (These jokes aren't really free if you consider the toll they take on you).
