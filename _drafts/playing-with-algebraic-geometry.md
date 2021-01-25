---
layout: post
title: Playing with Algebraic Geometry
description: Going over Algebraic Geometry by Serge Lange
category: Studies
tags:
  - mathematics
  - geometry
  - algebra
  - self-study
published: true
---

## Intro
I haven't really studied any Math seriously since I graduated with my undergrad in 2015. It seems I kinda miss it, so I'll be going over *Introduction to Algebraic Geometry* by Serge Lang today.

It starts out with the theory of *Places*. The idea being that homomorphisms between fields are necessarily trivial. Before we prove that, we define a **field homomorphism** as a function $\varphi:F\to K$ such that:
1. $\forall a,b \in F, \varphi(a + b) = \varphi(a) + \varphi(b)$
1. $\forall a,b \in F, \varphi(a \cdot b) = \varphi(a) \cdot \varphi(b)$
1. $\varphi(0) = 0$, and $\varphi(1) = 1$

Although number 3 need not be an axiom as it is an immediate corollary of the first two axioms.

### Field homomorphisms are injective
#### Computational proof

It's been a long time since I've done any math, so let's warm up a bit with a direct, computational proof.

*Proof:*

First we prove $\forall x \neq 0, \varphi(x) \neq 0$. To that end, let's assume toward a contradiction that there exists an $x \neq 0$ such that $\varphi(x) = 0$. Then...

$$
\begin{align*}
	0 =& \varphi(x) \\\\
	0 \cdot \varphi(x^{-1}) =& \varphi(x) \cdot \varphi(x^{-1}) \\\\
	0 =& \varphi(x \cdot x^{-1}) \\\\
	0 =& \varphi(1) \\\\
	0 =& 1
\end{align*}
$$

Next, inverses necessarily get sent to inverses, although you may have noticed that we've already proven it above.

$$
\begin{align*}
	1 =& \varphi(1) \\\\
	=& \varphi(x \cdot x^{-1}) \\\\
	=& \varphi(x) \cdot \varphi(x^{-1})
\end{align*}
$$

Okay, now let's prove it's injective:

$$
\begin{align*}
	\varphi(x_0) =& \varphi(x_1) \\\\
	\varphi(x_0) \cdot \varphi(x_1)^{-1} =& \varphi(x_1) \cdot \varphi(x_1)^{-1} \\\\
	\varphi(x_0) \cdot \varphi(x_1^{-1}) =& \varphi(x_1) \cdot \varphi(x_1^{-1}) \\\\
	\varphi(x_0 \cdot x_1^{-1}) =& \varphi(x_1 \cdot x_1^{-1}) \\\\
	1 - \varphi(x_0 \cdot x_1^{-1}) =& 1 - \varphi(1) \\\\
	\varphi(1 - x_0 \cdot x_1^{-1}) =& 0 \\\\
	1 - x_0 \cdot x_1^{-1} =& 0 \\\\
	1 =& x_0 \cdot x_1^{-1} \\\\
	x_1 =& x_0
\end{align*}
$$

$$
\blacksquare
$$

#### A more mature approach
Okay, so now that our mathematical juices are starting to flow, let's try a more mature mathematical approach... The proof is built upon the theory of rings and ideals. So, let's define them.

A **ring** is a set $R$ along with a commutative operation $+$, a $0$ element, inverses for all non-zero elements. There is also a $\cdot$ operation where inverses are not necessarily defined.

An **ideal** $I \lt R$ is a subset of $R$ such that
1. $\forall a, b \in I$, $a + b \in I$
1. $\forall \lambda \in R, \forall a \in I$, $\lambda \cdot a \in I$

*Proof:*

The kernel of a ring homomorphism[^ring_homo] is an ideal[^kernel-ideal], and the only ideals of a field are $\\{0\\}$ and $F$ itself. Since $\varphi(1) = 1$, we know the kernel is not $F$, and hence $\varphi(x) = 0 \iff x = 0$.

[^ring_homo]: Ring homomorphisms follow the same axioms as field homomorphisms.
[^kernel-ideal]: if $\varphi(a) = 0$ and $\varphi(b) = 0$, then axiom 1 says, $\varphi(a + b) = 0$, so axiom 1 of ideals is satisfied. Similar reasoning gives you axiom 2 of ideals.

Yay! We're real mathematicians now! Let's be happy and all drink.

## Places

Mathematicians are really running out of names for things... But places are the topic of chapter one, so let's do it...

Let $F$ be a field. We can extend $F$ to include the notion of $\infty$ by adding it to the field with the following definitions for the different operations. Let $a\in F_{\neq 0}$.

$$
\begin{align*}
a \pm \infty =& \infty \\\\
a \cdot \infty =& \infty \\\\
1 / \infty =& 0 \\\\
1 / 0 =& \infty \\\\
\infty \cdot \infty =&\infty
\end{align*}
$$

Note: $\infty \pm \infty$, $0\cdot \infty$, $\infty / \infty$, $0 / 0$ are undefined.

Let, $K,F$ be fields, then an $F$-valued **place** is mapping $\varphi:K\to F\cup\\{\infty\\}$ that satisfies the field homomorphism axioms (whenever defined).

### Finite ring
The set, $\nu \subset K$, of elements that don't get mapped to $\infty$ (called the **finite elements** of $\varphi$) form a ring. This can be seen because $+$ and $\cdot$ are extended to include $\infty$, but not overridden for finite elements.

The kernel is an ideal of $\nu$, and in fact, $\nu/\text{ker} \cong \varphi(\nu)$ is a field. This can be seen because if $\varphi(x)$ is finite, then $\varphi(x^{-1})$ is finite too (by axiom 2 of homomorphisms). It is also a consequence of the kernel being a maximal ideal of $\nu$[^ring-mod-max-ideal].

[^ring-mod-max-ideal]: A ring modded by a maximal ideal is a field.

A **valuation ring** of $K$ is a ring $R\subseteq K$ such that $\forall a \in K, a\notin R \implies a^{-1}\in R$. $\nu$ is a valuation ring of $K$. It turns out, there is a 1-to-1 correspondence between valuation rings and places. To prove this, we only need to show that the non-units of $R$ form a maximal ideal, then we'll be able to construct a map between $K$ and $(K/$ker$(\varphi))\cup\\{\infty\\}$ that makes this a place.

### Valuation rings are places

Let $a, b\in R$ be non-units, and let $\lambda \in R$ be arbitrary.
1. Addition: Since this is a valuation ring, if $ab^{-1}\notin R$, then $a^{-1}b\in R$. Without loss of generality, assume $ab^{-1}\in R$. Then, $1 + ab^{-1} = (a + b)b^{-1}\in R$. If $(a + b)^{-1}\in R$, then $b^{-1}\in R$. Since $b^{-1}\notin R$ ($b$ is a non-unit of $R$), $a+b$ is a non-unit of $R$.
1. Multiplication: If $(\lambda a)^{-1}$ is in $R$, then necessarily $\lambda(\lambda a)^{-1}$ is as well, and hence, $a^{-1}$. But $a$ is not a unit in $R$, so $\lambda a$ is not either.

So valuation rings and places are somewhat interchangeable (at least up to equivalence of places[^equivalence-of-places]). And now we're caught up to half-way down page 3.

[^equivalence-of-places]: Two places $\varphi_0:K\to F_0\cup\\{\infty\\}$ and $\varphi_1:K\to F_1\cup\\{\infty\\}$ are equivalent if there exists an isomorphism $\lambda:F_0 \to F_1$ such that $\varphi_1 = \lambda\varphi_0$. We define $\varphi(\infty) = \infty$.
