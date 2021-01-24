---
layout: post
title: "Let's Cover The Fundamental Group (pt 1)"
excerpt: Munkres saves the day and explains the fundamental secrets behind the most invariant of groups!
category: Mathematics
tags:
- data-visualization
- statistics
- mathematics
- topology
- algebra
- theory
banner: /assets/images/2018/08/12_fundamental_group_torus.png
---

## Jumping right in

### Prerequisites:

Firstly, this post builds off of my [previous post]({{ site.baseurl }}{% post_url 2018-08-05-homotopy_revisited %}), so if you're learning these things for the first time and find yourself kinda lost, start there.

In addition to the previous post, the following are mathematical definitions you should probably know before reading this post. If you don't know any of these, trust google.

* __Group__.
* __Homomorphism__
* __Kernel__
* __Subgroup__
* __Normal subgroup__
* __Homotopy__
* __Retraction__
* __Star Convex__

### Moving onward

__Definition__:

Given a path $\alpha$ from $x\_0$ to $x\_1$ in $X$, we define $\hat\alpha:\pi\_1(X,x\_0)\to\pi\_1(X,x\_1)$ as follows:

$$\hat\alpha([f]) = [\bar\alpha]\star[f]\star[\alpha]$$

And it's a theorem that $\hat\alpha$ is a group isomorphism.

__Definition__:

Given a continuous map $h:(X,x\_0)\to(Y,y\_0)$, we define:

$h\_\star:\pi\_1(X,x\_0)\to\pi\_1(Y,y\_0)$ as follows:

$$h\_\star([f]) = [h\circ f]$$

And with that...

Let's get into the questions!

## Exercises

### 1

**Show that if $A\subseteq\mathbb{R}^n$ is star convex then $A$ is simply connected.**

<div class="hint" markdown="1">
Let $a\in A$ be one of the points that make the set star convex. Our task now is to show:

1. For any $x,y\in A$, there is a path entirely within $A$ connecting $x$ and $y$, and
1. $\pi\_1(A,a)$ is trivial.

For the first: just let $x,y\in A$ and let $f\_x,f\_y$ be the paths connecting them to $a$. Then note that $f\_x \star \bar f\_y$ is a path connecting $x$ to $y$.

For the second we can use the same straight-line homotopy that we used for the convex version: let $f$ be a path starting and ending at $a$ and let $H(s,t) = t\cdot a + (1-t)\cdot f(s)$.

Lastly, because part _a_ (that I didn't mention) is to find a set that's star convex but not convex, I'll leave the question with The Star of David.
</div>

### 2

**Show that if $\alpha,\beta$ are paths from $x\_0\to x\_1\to x\_2$ all in $X$ and $\gamma = \alpha\star\beta$ that $\hat\gamma = \hat\beta\circ\hat\alpha$.**

<div class="hint" markdown="1">
Since these are functions between equivalence classes, our job is now to show that the outputs for a given input are homotopic.

So let $f$ be a path in $X$ starting and stopping at $x\_0$. Then:

$$
\begin{align*}
\hat\gamma(f) =& [\bar\gamma]\star[f]\star[\gamma] \\
=& [\bar(\alpha\star\beta)]\star[f]\star[\alpha\star\beta]\\
=& [\bar\beta\star\bar\alpha]\star[f]\star[\alpha\star\beta]\\
=& [\bar\beta]\star[\bar\alpha]\star[f]\star[\alpha]\star[\beta]\\
=& [\bar\beta]\star([\bar\alpha]\star[f]\star[\alpha])\star[\beta]\\
=& [\bar\beta]\star(\hat\alpha(f))\star[\beta]\\
=& \hat\beta(\hat\alpha(f))
\end{align*}
$$

</div>

### 3
**Show that if $x\_0,x\_1$ are points in a path-connected space $X$, $\pi\_1(X,x\_0)$ is abelian if and only if for every pair of paths from $\alpha,\beta$ from $x\_0$ to $x\_1$, $\hat\alpha = \hat\beta$.**

<div class="hint" markdown="1">
If $\pi\_1(X,x\_0)$ is abelian, we have:

$$\begin{align*}
\hat\alpha([f]) =& [\bar\alpha]\star[f]\star[\alpha]\\
=& [\bar\alpha]\star[\bar{(\beta\star\bar\alpha)} \star(\beta\star\bar\alpha)\star f]\star[\alpha]\\
=& [\bar\alpha]\star[(\alpha\star\bar\beta)\star f\star(\beta\star\bar\alpha)]\star[\alpha]\\
=& [\bar\alpha]\star[\alpha\star\bar\beta]\star[f]\star[\beta\star\bar\alpha]\star[\alpha]\\
=& [\bar\alpha\star\alpha\star\bar\beta]\star[f]\star[\beta\star\bar\alpha\star\alpha]\\
=&[\bar\beta]\star[f]\star[\beta] \\
=&\hat\beta([f])
\end{align*}$$

</div>

### 4

**Let $A\subset X$ and let $r:X\to A$ be a retraction. Show that for $a\_0\in A$, $r\_\star:\pi\_1(X,a\_0)\to\pi\_1(A,a\_0)$ is surjective.**

<div class="hint" markdown="1">
Well, any path $\alpha$ in $A$ starting and stopping at $a\_0$ will also be a path in $X$ (because $A\subset X$). So $r\_\star([\alpha]\_X) = [\alpha]\_A$. It's surjective because it's the identity map when we restrict paths to $A$.

</div>

### 5
**Let $A\subset\mathbb{R}^n$ and $h:(A,a\_0)\to(Y,y\_0)$. Show that if $h$ is extendable to a continuous map $\tilde h:\mathbb{R}^n\to Y$, then $h\_\star$ is trivial (i.e. sends everybody to the class of the constant loop).**

<div class="hint" markdown="1">
Let $G=\pi\_1(A,a\_0), H=\pi\_1(Y,y\_0)$. Then, as a reminder, $h\_\star:G\to H$ such that $h\_\star([\alpha]) = [h\circ\alpha]$.

So let $\alpha,\beta$ be paths in $(A,a\_0)$. Since $\alpha,\beta$ were arbitrary, it is sufficient to show that $h\_\star([\alpha])$ is homotopic to $h\_\star([\beta])$.

Consider $F:I\times I\to \mathbb{R}^n$ given by $F(s,t) = t\alpha(s) + (1-t)\beta(s)$ (the straight line homotopy between the two loops). But since $h$ is extendible to $\tilde h:\mathbb{R}^n\to Y$, we know that even $F$ is a homotopy that leaves $A$ (into some other part of $\mathbb{R}^n$), $\tilde h\circ F$ is a homotopy between $h(\alpha),h(\beta)$ that stays entirely in $Y$. Hence $[\tilde h\circ \alpha] = [\tilde h\circ \beta]$.
</div>

### 6

Let $X$ be path connected, $h:X\to Y$ be continuous with $h(x\_0) = y\_0$ and $h(x\_1)=y\_1$; let $\alpha$ be a path in $X$ from $x\_0$ to $x\_1$, and $\beta = h\circ\alpha$. Show that

$$\hat\beta\circ(h\_{x\_0})\_\star = (h\_{x\_1})\_\star\circ\hat\alpha$$

As in, show that the following diagram commutes:

$$
\newcommand{\ra}[1]{\xrightarrow{\quad#1\quad}}
\newcommand{\da}[1]{\left\downarrow{\scriptstyle#1}\vphantom{\displaystyle\int\_0^1}\right.}
\newcommand{\sea}[1]{\left\searrow{\scriptstyle#1}\vphantom{\displaystyle\int\_0^1}\right.}
$$

$$
\begin{array}{ccc}
\pi\_1(X,x\_0) & \ra{(h\_{x\_0})\_\star} & \pi\_1(Y,y\_0) \\
\da{\hat\alpha} & & \da{\hat\beta} \\
\pi\_1(X,x\_1) & \ra{(h\_{x\_1})\_\star} & \pi\_1(Y,y\_1) \\
\end{array}
$$

<div class="hint" markdown="1">
Let $f=\hat\beta\circ (h_{x_0})\_\star$ and $g=(h_{x_1})\_\star\circ\hat\alpha$. The claim is now that

$$\forall a \in \pi\_1(X,x\_0), f(a) = g(a)$$

_Proof_:

Let $b\_0 \in f(a) = \hat\beta\circ(h\_{x\_0})\_\star (c)$. That means $b$ is a particular path in $(Y,y\_1)$ such that $b\_0 = \bar\beta\star(h(c))\star\beta$, whereas $g(a) \ni b\_1 = h(\bar\alpha\star d \star\alpha)$ with $c,d$ homotopic.

Let $\alpha$ be a path in $(X,x\_0)$ and $\beta = h\circ\alpha$ -- hence a path in $(Y,y\_1)$.
</div>
