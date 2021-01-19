---
layout: post
title: "Let's Cover The Fundamental Group (pt 1)"
excerpt: Munkres saves the day and explains the fundamental secrets behind the most invariant of groups!
category: Mathematics
tags:
- Data Visualization
- Statistics
- Mathematics
- Topology
- Algebra
- Theory
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

Given a path $\alpha$ from $x_0$ to $x_1$ in $X$, we define $\hat\alpha:\pi_1(X,x_0)\to\pi_1(X,x_1)$ as follows:

$$\hat\alpha([f]) = [\bar\alpha]\star[f]\star[\alpha]$$

And it's a theorem that $\hat\alpha$ is a group isomorphism.

__Definition__:

Given a continuous map $h:(X,x_0)\to(Y,y_0)$, we define:

$h_\star:\pi_1(X,x_0)\to\pi_1(Y,y_0)$ as follows:

$h_\star([f]) = [h\circ f]$.

And with that...

Let's get into the questions!

## Exercises

### Show that if $A\subseteq\mathbb{R}^n$ is star convex then $A$ is simply connected.

<div class="hint" markdown="1">
Let $a\in A$ be one of the points that make the set star convex. Our task now is to show:

1. For any $x,y\in A$, there is a path entirely within $A$ connecting $x$ and $y$, and
1. $\pi_1(A,a)$ is trivial.

For the first: just let $x,y\in A$ and let $f_x,f_y$ be the paths connecting them to $a$. Then note that $f_x \star \bar f_y$ is a path connecting $x$ to $y$.

For the second we can use the same straight-line homotopy that we used for the convex version: let $f$ be a path starting and ending at $a$ and let $H(s,t) = t\cdot a + (1-t)\cdot f(s)$.

Lastly, because part _a_ (that I didn't mention) is to find a set that's star convex but not convex, I'll leave the question with The Star of David.
</div>

### Show that if $\alpha,\beta$ are paths from $x_0\to x_1\to x_2$ all in $X$ and $\gamma = \alpha\star\beta$ that $\hat\gamma = \hat\beta\circ\hat\alpha$.

<div class="hint" markdown="1">
Since these are functions between equivalence classes, our job is now to show that the outputs for a given input are homotopic.

So let $f$ be a path in $X$ starting and stopping at $x_0$. Then:

$$\begin{align*}
\hat\gamma(f) =& [\bar\gamma]\star[f]\star[\gamma] \\
=& [\bar(\alpha\star\beta)]\star[f]\star[\alpha\star\beta]\\
=& [\bar\beta\star\bar\alpha]\star[f]\star[\alpha\star\beta]\\
=& [\bar\beta]\star[\bar\alpha]\star[f]\star[\alpha]\star[\beta]\\
=& [\bar\beta]\star([\bar\alpha]\star[f]\star[\alpha])\star[\beta]\\
=& [\bar\beta]\star(\hat\alpha(f))\star[\beta]\\
=& \hat\beta(\hat\alpha(f))
\end{align*}$$
</div>

### Show that if $x_0,x_1$ are points in a path-connected space $X$, $\pi_1(X,x_0)$ is abelian if and only if for every pair of paths from $\alpha,\beta$ from $x_0$ to $x_1$, $\hat\alpha = \hat\beta$.

<div class="hint" markdown="1">
If $\pi_1(X,x_0)$ is abelian, we have:

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

### Let $A\subset X$ and let $r:X\to A$ be a retraction. Show that for $a_0\in A$, $r_\star:\pi_1(X,a_0)\to\pi_1(A,a_0)$ is surjective.

<div class="hint" markdown="1">
Well, any path $\alpha$ in $A$ starting and stopping at $a_0$ will also be a path in $X$ (because $A\subset X$). So $r_\star([\alpha]_X) = [\alpha]_A$. It's surjective because it's the identity map when we restrict paths to $A$.
</div>

### Let $A\subset\mathbb{R}^n$ and $h:(A,a_0)\to(Y,y_0)$. Show that if $h$ is extendable to a continuous map $\tilde h:\mathbb{R}^n\to Y$, then $h_\star$ is trivial (i.e. sends everybody to the class of the constant loop).

<div class="hint" markdown="1">
Let $G=\pi_1(A,a_0), H=\pi_1(Y,y_0)$. Then, as a reminder, $h_\star:G\to H$ such that $h_\star([\alpha]) = [h\circ\alpha]$.

So let $\alpha,\beta$ be paths in $(A,a_0)$. Since $\alpha,\beta$ were arbitrary, it is sufficient to show that $h_\star([\alpha])$ is homotopic to $h_\star([\beta])$.

Consider $F:I\times I\to \mathbb{R}^n$ given by $F(s,t) = t\alpha(s) + (1-t)\beta(s)$ (the straight line homotopy between the two loops). But since $h$ is extendible to $\tilde h:\mathbb{R}^n\to Y$, we know that even $F$ is a homotopy that leaves $A$ (into some other part of $\mathbb{R}^n$), $\tilde h\circ F$ is a homotopy between $h(\alpha),h(\beta)$ that stays entirely in $Y$. Hence $[\tilde h\circ \alpha] = [\tilde h\circ \beta]$.
</div>


<!--
### Let $X$ be path connected, $h:X\to Y$ be continuous with $h(x_0) = y_0$ and $h(x_1)=y_1$; let $\alpha$ be a path in $X$ from $x_0$ to $x_1$, and $\beta = h\circ\alpha$. Show that

$$\hat\beta\circ(h_{x_0})_\star = (h_{x_1})_\star\circ\hat\alpha$$

As in, show that the following diagram commutes:

$$
\newcommand{\ra}[1]{\xrightarrow{\quad#1\quad}}
\newcommand{\da}[1]{\left\downarrow{\scriptstyle#1}\vphantom{\displaystyle\int_0^1}\right.}
\newcommand{\sea}[1]{\left\searrow{\scriptstyle#1}\vphantom{\displaystyle\int_0^1}\right.}
$$

$$
\begin{array}{ccc}
\pi_1(X,x_0) & \ra{(h_{x_0})_\star} & \pi_1(Y,y_0) \\
\da{\hat\alpha} & & \da{\hat\beta} \\
\pi_1(X,x_1) & \ra{(h_{x_1})_\star} & \pi_1(Y,y_1) \\
\end{array}
$$


<div class="hint" markdown="1">
Let
$$\begin{align*}
f=&\hat\beta\circ (h_{x_0})_\star & \text{and}& & g=&(h_{x_1})_\star\circ\hat\alpha
\end{align*}$$

The claim is now that

$$\forall a \in \pi_1(X,x_0), f(a) = g(a)$$

_Proof_:

Let $b_0 \in f(a) = \hat\beta\circ(h_{x_0})_\star (c)$. That means $b$ is a particular path in $(Y,y_1)$ such that $b_0 = \bar\beta\star(h(c))\star\beta$, whereas $g(a) \ni b_1 = h(\bar\alpha\star d \star\alpha)$ with $c,d$ homotopic.

Let $\alpha$ be a path in $(X,x_0)$ and $\beta = h\circ\alpha$ -- hence a path in $(Y,y_1)$.
</div>

-->
