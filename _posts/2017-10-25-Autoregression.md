---
layout: post
title: Decomposition of Autoregressive Models
excerpt: |
  We discuss the decomposition of AR models into components, and how eigenvalues are involved (because they always are).
categories:
- Statistics
tags:
- Time Series
- Statistics
- Stochastic
- Autoregression
- Autoregressive
- Theory
banner: /assets/images/2017/10/25_banner.jpg
mathjax: true
---

# Autoregression

## Background

This post will be a formal introduction into some of the theory of Autoregressive models. Specifically, we'll tackle how to decompose an AR(p) model into a bunch of AR(1) models. We'll discuss the interpretability of these models and howto therein. This post will develop the subject using what seems to be an atypical approach, but one that I find to be very elegant.

<!-- more -->

# The traditional way

Let $x_t$ be an AR(p) process. So $x_t = \sum\limits_{i=1}^pa_ix_{t-i} + w_t$. We can express $x_t$ thusly:

$$\begin{align*}
x_t =& \sum\limits_{i=1}^pa_ix_{t-i} + w_t \\
x_t - \sum\limits_{i=1}^pa_ix_{t-i} =& w_t \\
\left(1 - \sum\limits_{i=1}^pa_iL^i\right)x_t =& w_t
\end{align*}$$

Where $L$ is the **lag operator**. We define the AR polynomial $\Phi$ as $\Phi(L) := \left(1 - \sum\limits_{i=1}^pa_iL^i\right)$. Then as long as we're considering this polynomial to be over an algebraically closed field (like $\mathbb{C}$), we can factor this polynomial. So

$$\Phi(L) = c\prod\limits_{i=1}^p(L-\varphi_i)$$

Where $\varphi_i$ are the roots of $\Phi$. This polynomial will be the star of our show today. In fact, if we want to understand $\Phi$ (the AR process we're considering), we need only understand each $x_t = \varphi_ix_{t-1} + w_t$ model. We'll actually prove this later.

We'll be investigating several of its properties but first (just for fun) let's investigate the conditions under which it's invertible.

We can reduce the problem of determining whether or not the AR polynomial is invertible to the problem of inverting each factor. After all, the polynomial is invertible if and only if each factor is. So let's restrict our considerations to just a single factor for the time being. When will $x-\lambda$ be invertible?

Now, we recall the Taylor Series Expansion formula from our trusty calculus class.

$$f(x) = \sum\limits_{i=0}^\infty \frac{f^{(i)}(a)}{i!}(x-a)^i$$

In general, we tend to use $a=0$ as a good arbitrary choice (the Maclaurin Series), resulting in:

$$f(x) = \sum\limits_{i=0}^\infty \frac{f^{(i)}(0)}{i!}x^i$$

Well, if we consider the Taylor expansion of $\frac{1}{x-\lambda}$, we find

$$\begin{align*}
\frac{1}{x-\lambda} =& \frac{-1}{\lambda}(x) + (-1)^1\frac{-1}{\lambda^2}x^2 + (-1)^2\frac{-1}{\lambda^3}x^3 + ... \\
=& \sum\limits_{i=0}^\infty (-1)^{i+1}\frac{1}{\lambda^{i+1}}x^{i+1} \\
=& \sum\limits_{i=1}^\infty (-1)^{i}\frac{1}{\lambda^{i}}x^{i}
\end{align*}$$

Which is square summable if and only if $\|\lambda\| > 1$. So we see that if the AR roots are all outside the unit circle, then the AR polynomial will be invertible (in such a case, the AR process is called **causal**).

# The new(?) approach

## Definition

Let $X_t\in \mathbb{R}^n, A_i\in\mathbb{R}^{n\times n}, B\in\mathbb{R}^{k_0\times n}$, and $p\in\mathbb{N}_{>0}$. Also let, $W_t$ be $k_0$ dimensional white noise. Then, $X_t$ is called a VAR(p) process if,

$$ X_t = \sum\limits_{i=1}^p A_iX_{t-i} + BW_t$$

Basically a VAR(p) model is an analogue of AR(p) models where the scalars are matrices and the variable itself is a vector. The noise in such a model need not be independent per coordinate, nor restricted to only one. In fact, we can have any number of driving noise processes that get mixed together linearly into $X_t$. Hence cometh $B$ -- the linear transformation from the driving noise space into the $X_t$ space.

Furthermore, let's say that we don't directly observe $X_t$ directly, but rather we observe some $Y_t$ that's a linear function of $X_t$ (plus some noise). Formally, we observe $Y_t$ s.t.:

$$ Y_t = C X_t + D U_t $$

Where $Y_t \in\mathbb{R}^m, C\in\mathbb{R}^{m\times n}, D\in \mathbb{R}^{k_1\times m}$. And again, $U_t$ is $k_1$ dimensional white noise.

Here $D$ serves the same purpose as $B$ did above, but for the observations themselves.

This is called a "State Space" model.

## Examplificate

How does this relate to our star (the AR polynomial $\Phi$)? Let's try to express an AR(p) process as a VAR(1) process...

Let $x_t$ be an AR(p) process. That is to say, $x_t = \sum\limits_{i=1}^p a_ix_{t-i} + w_t$ where $w_t$ is some white noise process.

Let $W_t$ be a 1 dimensional white-noise processes such that $W_t = w_t$. We define

$$ X_t := \left[\begin{matrix} x_t \\ x_{t-1} \\ \vdots \\ x_{t-(p-1)} \end{matrix}\right] $$

Then, we can see that the first coordinate of $X_t$ is always $x_t$. Our notation for this will be $X_t[0] = x_t$.

Furthermore, let

$$ A = \left[\begin{matrix}
a_1 & a_2 & \dots & a_{p-1} & a_p \\
1 & 0 & \dots & 0 & 0 \\
0 & 1 & \dots & 0 & 0 \\
 &  & \ddots & & \\
0 & \dots & 0 & 1 & 0 \\
\end{matrix} \right] $$

We can see that for $0 < i < p$, we have $(AX_{t-1})[i] = x_{t-i}$, and $(AX_{t-1})[0] = \sum\limits_{i=1}^p a_i x_{t-i} = x_t - w_t$. As it stands, $AX_{t-1}$ is almost $X_t$, just without the added noise in the first coordinate. So let's add noise to only the first coordinate. To this end, let

$$ B := \left[\begin{matrix} 1 \\ 0 \\ \vdots \\ 0 \end{matrix}\right] $$

$$ X_t = AX_{t-1} + BW_t $$

and

$$ \forall t \in \mathbb{N}_{>p} (X_t[0] = x_t) $$

Now we want $Y_t = x_t$. So we set

$$C = \left[\begin{matrix}1 & 0 & 0 & \dots & 0\end{matrix}\right]$$

That way, $Y_t = CX_t = x_t$ and all is right with the world.

So yay! We've expressed this AR(p) process as a $p$ dimensional $VAR(1)$ process! So... Why?

## Why do?

Well, one natural question to ask at this point is, what are the eigenvalues of $A$?

$$\begin{align*}
0 =& \det(A - \lambda I) \\
=& \left\|\begin{matrix}
a_1 - \lambda & a_2 & \dots & a_{p-1} & a_p \\
1 & -\lambda & \dots & 0 & 0 \\
0 & 1 & \dots & 0 & 0 \\
 &  & \ddots & & \\
0 & \dots & 0 & 1 & -\lambda \\
\end{matrix} \right\| \\
=& (-\lambda)^p + a_1(-\lambda)^{p-1} - a_2(-\lambda)^{p-2} + \dots + (-1)^{p-1}a_p
\end{align*}$$

This polynomial is the characteristic polynomial of $A$, so the roots of this polynomial are the eigenvalues of $A$. Let's see how this relates to $\Phi$...

$$\begin{align*}
0 =& (-\lambda)^p + a_1(-\lambda)^{p-1} - a_2(-\lambda)^{p-2} + \dots + (-1)^{p-1}a_p \\
(-\lambda)^{-p}(0) =& 1 - a_1\lambda^{-1} - a_2\lambda^{-2} - \dots - a_p\lambda^{-p} \\
\text{Define } L :=& \lambda^{-1} \\
0 =& 1 - a_1L - a_2L^2 - \dots - a_pL^p \\
=& 1 - \sum\limits_{i=1}^pa_iL^i \\
=& \Phi(L)
\end{align*}$$

So the characteristic polynomial is really just $\Phi(L)$ revisited! Furthermore, check this sweetness out...

$$\begin{align*}
\Phi(L) =& c\prod\limits_{i=1}^p\left(L-\varphi_i\right) \\
=& c\prod\limits_{i=1}^p\left(\lambda^{-1}-\varphi_i\right) \Rightarrow \\
\lambda_i =& \frac{1}{\varphi_i}
\end{align*}$$

So we can see that the eigenvalues are actually intimately related with the roots (in fact they're inverses of each other)! With that in mind, let's see what happens when we try to diagonalize this matrix $A$. Firstly, let's assume that $A$ matrix is diagonalizable. I.e., let

$$\begin{align*}
\bar H^{-1}AH =& A \Leftrightarrow \\
\bar A =& HAH^{-1}
\end{align*}$$

where $H$ is a coordinate transformation (an invertible map) and $\bar A$ is diagonal.

Then

$$\begin{align*}
X_t =& H^{-1}\bar AH X_{t-1} + BW_t \\
=& H^{-1}\left(\bar AHX_{t-1} + HBW_t\right)
\end{align*}
$$

So if we let $\tilde X_t = HX_t$, we get

$$\begin{align*}
\tilde X_t =& HX_t \\
=& HH^{-1}\left(\bar AHX_{t-1} + HBW_t\right) \\
=& \bar AHX_{t-1} + HBW_t \\
=& \bar A\tilde X_{t-1} + HBW_t
\end{align*}$$

So $\tilde X_t$ is a bunch of AR(1) processes (because the matrix $\bar A$ is diagonal), and,

$$\begin{align*}
Y_t =& CX_t \text{ because $U_t=0$ for our scenario}\\
=& CH^{-1}\tilde X_t \\
=& \left(CH^{-1}\right)\tilde X_t
\end{align*}$$

Which is to say that $Y_t$ is a linear combination of AR(1) processes! So we started out with a general AR(p) process, and found that expressing it as a VAR(1) model allows us to see that this is just a linear combination of AR(1) processes. I think that's pretty cool. But let's investigate this a bit further...

# What more?!

As per our previous section, we have that $Y_t$, which was really just $x_t$ -- our original AR(p) variable, is a linear combination of AR(1) models. More specifically, if we let $F := CH^{-1}$, then

$$\begin{align*}
x_t =& Y_t \\
=& F\tilde X_t
\end{align*}$$

So indeed, $x_t$ is a linear combination of $p$ many AR(1) processes. In fact, since $\tilde X_t = \bar A \tilde X_{t-1} + \left(HB\right)W_t$, we know the AR(1) models explicitly:

$$\begin{align*}
\tilde x_{t,i} =& \lambda_i\tilde x_{t-1,i} + w_t \\
\tilde x_{t,i} - \lambda_i\tilde x_{t-1,i} =& w_{t,i} \\
\left(1-\lambda_iL\right)\tilde x_{t,i} =& w_{t,i} \\
\frac{-1}{\lambda_i}\left(L-\lambda_i\right)\tilde x_{t,i} =& w_{t,i} \\
\end{align*}$$

Where $\lambda_i$ is the $i$th eigenvalue of $A$ (hence the $(i,i)$th element of $\bar A$). So we see that the AR(1) processes each have their respective roots from the roots of the original AR polynomial $\Phi$. Pretty cool, right?



## Summary

So we can express any AR(p) model as a linear combination of AR(1) processes (albeit with correlated noise terms), where each AR(1) process is determined by the roots of the AR polynomial (or the characteristic polynomial).

We've essentially reduced the problem of studying AR(p) models to studying their eigenvalues (or AR roots).
