---
layout: post
title: Intro To Algebraic Geometry, 1.2
description: Going over Algebraic Geometry by Serge Lange
category: Studies
tags:
  - mathematics
  - geometry
  - algebra
  - self-study
banner:
---

## Intro

In the [last post]({% post_url 2021-01-29-intro-to-algebraic-geometry-1-1 %}) we covered the definition of **places** and **valuations** (sometimes called **valuation rings**). We covered how there is a one to one correspondence between valuations and places (up to equivalences). That was the entirety of chapter 1 section 1. This post will be about chapter 1 section 2.

## Valuations

### Group order

Let $\Gamma$ be a multiplicative commutative group. If there exists a multiplicatively closed subset $S\subset \Gamma$ that does not contain the group's $1$ element and has the property that for each $x$ in $\Gamma$ either $x\in S$ or $x^{-1}\in S$[^requirement0], we can define a strict total order on $\Gamma$ as:

[^requirement0]: The requirement used in the textbook is that $\Gamma = S \cup 1 \cup S^{-1}$ (disjoint). The phrasing I used has the benefit of relating directly to the previous section, and is equivalent, so I used it. The equivalence is a consequence of that $S$ is multiplicatively closed and $1\notin S$ means $x,x^{-1}$ cannot both be in $S$.

$$a \lt b \iff ab^{-1}\in S$$

Just to refresh everyone, a total order is a relation with 4 properties,

1. The "total" part (fully connected): for all $a, b \in \Gamma$, either $a = b$, $a \lt b$, or $b\lt a$.
2. The "strict" part (irreflexive): if $a \nless a$, for all $a$ (as opposed to $\le$)
3. The "strict" part (asymmetric): if $a \lt b$, then $b \nless a$ (as opposed to $\le$)
4. Transitivity: if $a \lt b$ and $b \lt c$, then $a \lt c$.

Let's prove that this is, indeed, a strict total order.

1. Let $a,b\in \Gamma$. Let's assume $a \neq b$. Then let $x = a b^{-1}$. $x\neq 1$ because $a\neq b$, so either $x\in S$ or $x^{-1}\in S$, which means, $ab^{-1}\in S$ or $ba^{-1}\in S$, which in turn means either $a \lt b$ or $b \lt a$.
2. $aa^{-1} = 1 \notin S$
3. If $a \lt b$, then $ab^{-1} \in S$. Since $1\notin S$, we know $1 = (ab^{-1})(ba^{-1}) \notin S$. Since $S$ is multiplicatively closed, $ba^{-1}\notin S$, and $b \nless a$.
4. Let $a\lt b$ and $b \lt c$. Then $ab^{-1}\in S$ and $bc^{-1}\in S$. Since $S$ is multiplicatively closed, $(ab^{-1})(bc^{-1}) = ac^{-1} \in S$. So $a \lt c$.

There is, in fact, another property that Lang mentions along side some of the order properties[^order-props]:

[^order-props]: It's strange that Lang includes this property along side two of the other ordering properties, but I'm sure he knows what he's doing, so I'll include it and see where it goes.

1. For all $a, b, \gamma \in \Gamma$, if $a \lt b$, then $a\gamma \lt b\gamma$[^most-fields].

[^most-fields]: This is *not* true in most orderings over fields. For instance, take $\mathbb{Q}$ or $\mathbb{R}$, and let $\gamma = -1$ or $\gamma = 0$. It is true if you restrict $\gamma \gt 0$, though.

This is essentially the same proof used for transitivity (above), so I'll omit it.

We now add a 0 element to the mix, such that for all $a\in \Gamma$, $0a = 0$, and $0 \lt a$.

#### Characteristics
1. $-1\notin\Gamma$. Since $-1$ is its own inverse and $S$ is multiplicatively closed, $-1$ cannot be in $S$. But then it's not in $S^{-1}$ either, and hence not in $\Gamma$.
1. If $a\in\Gamma$, then $-a\notin\Gamma$. If $a, -a\in\Gamma$, then $-aa^{-1}=-1\in\Gamma$, which we know to be false.
1. $\Gamma$ cannot be entirely negative. ($(-x)^2 > 0$).
1. It seems as though one could construct a suitable set $S$ with a mixture of positives and negatives. Imagine $\Gamma = \mathbb{Q}\_{\neq 0}$ (a commutative, multiplicative group). We can express every positive rational number uniquely as $p / q$, where $p, q \in \mathbb{N}$ are relatively prime. We then define $S$ to be those elements where $p \lt q$. This forms an order in the same sense as before. But check this out, both $p$ and $q$ can be written as products of primes. What if we replaced all the $3$'s in those products with $-3$? We would then have to redefine our set $S$ as those elements where $\|p\| \lt \|q\|$, but other than that, everything still seems to hold. So it seems, the set need not be strictly positive.

### Valuations
We now (re?)define "valuations". I guess they're making a distinction between *valuations* and *valuation rings* (or maybe Lang is just adding another equivalent perspective). Either way, in this section we define it seemingly for the second time.

Let $K$ be a field, $\Gamma$ an ordered commutative multiplicative group, a **valuation** on $K$ is a map $v: K\to \Gamma$ (sometimes abbreviated as $v(a) = \|a\|$) with the following properties:

1. $\|a\| = 0 \iff a = 0$
1. $\|ab\| = \|a\|\cdot \|b\|$
3. $\|a + b \| \leq \text{max}(\|a\|, \|b\|)$

The following are noted additional properties (not part of the definition, but provably true):

{:start="4"}
1. $\|1\| = 1$ because $\|1\| = \|1\|^2$
1. $\|\pm a\| = \|a\|$ "proof is obvious", but we don't play that...

	$1 = \|1\| = \|(-1)^2\| = \|-1\|^2$. Since $-1\notin\Gamma$, $\|-1\| = 1$.

	$\|-a\| = \|-1\cdot a\| = \|-1\|\cdot \|a\| = \|a\|$
1. If $\|a\| \lt \|b\|$, then $\|a + b\| = \|b\|$ (see book for proof). What I will include here is that the proof rests on the following (not entirely intuitive) result[^intuitive-for-abs]:

	If $\|a\| \lt \|b\|$, then $\|a\| \le \|a + b \|$.

	But

	$$\begin{align*}
	|a| =& |a + b - b| \\
	\le& \max(|a + b |, |b|) \\
	\le& \max(\max(|a|, |b|), |b|) \\
	=& |b|
	\end{align*}$$
1. In any sum: $a_1 + a_2 + \dots + a_n = 0$, at least two elements of the sum (summands?) have the same value.
	We can first prove that for any sum where each summand has distinct valuations, the valuation of the sum is the maximum of the valuations of the terms. We know this is true for $n=2$, so let's do the inductive thing and show $n \implies n+1$. Well,

	$$\begin{align*}
	|a_1 + \dots a_n + a_{n+1}| =& |(a_1 + \dots a_n) + a_{n+1}| \\
	=& \max(|a_1 + \dots a_n|, |a_{n+1}|) \\
	=& \max(\max(|a_1|, \dots, |a_n|), |a_{n+1}|) \\
	=& \max(|a_1|, \dots, |a_n|, |a_{n+1}|)
	\end{align*}$$

	So if the our given sum equals 0, either the max valuation is 0 (then all terms have valuation = 0), or the premise that all terms have distinct valuations is false.

[^intuitive-for-abs]:  This is trivially true for norms, obviously, but we're using that notation for *valuations*, which aren't entirely the same (in fact, rule 3 contradicts the triangle inequality of norms).
