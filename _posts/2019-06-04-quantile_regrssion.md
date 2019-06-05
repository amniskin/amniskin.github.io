---
title: "Quantile Regression and Quantiles of Loss"
type: post
category: Mathematics
tags:
- Statistics
- Mathematics
- Theory
- Intuition
feature_image: "/assets/pics/2018/04/12_banner.jpg"
---

# Background

If you've ever read any papers referring to quantile regression (QR), you undoubtedly have read "MSE yields means, MAE yields medians, and QR yields quantiles". But what they hell does that even mean? Like not just hand-wavy bullshit, but really, what does that mean? After all, these are just loss functions and therefore don't *yield* anything at all. Even the regressions yields coefficients, or, more generally, models; so whence cometh the mean, median talk? It turns out they're talking about the distribution of residuals. In this post, we'll show what they mean, how that's the case, and we'll investigate a bit more about QR.

<!-- more -->

## What is it?

Given a vector of residuals $r\in\mathbb{R}^n$, and a scaler $q\in[0,1]$, we define the **Quantile Loss** with quantile $q$ ($L_q$) as:

$$
\begin{align*}
L_q : \mathbb{R}^n& \to \mathbb{R} \\
L_q(r) =& \begin{cases} qr & r > 0 \\ (1-q)(-r) & r \leq 0\end{cases} \\
=& \begin{cases} q|r| & r > 0 \\ (1-q)|r| & r \leq 0\end{cases}
\end{align*}
$$

### In words

Basically, the loss is very much like MAE (A.K.A. $L_1$ loss) but we weight the absolute errors based on whether they are positive or negative.

## Relation to Quantiles

A natural question to ask at this point is, when are you getting to your point? Er, I mean, what does this have to do with quantiles?

To answer this, let's investigate, when will the derivative equal zero (a necessary condition for a minima). To make our lives easier, let $\omega_0$ be the set of residuals that are greater than zero, and $\omega_1$ be those that are less than or equal to zero.

$$
\begin{align*}
0 =& \frac{\partial L}{\partial r}(r) \\\\
=& \sum_{r\in\omega_0}q + \sum_{r \in\omega_1}(1-q) \\\\
=& q\sum_{r\in\omega_0}1 + (1-q)\sum_{r \in\omega_1}1 \\\\
=& q|\omega_0| + (1-q)|\omega_1| \iff \\\\
\omega_1 =& q(\omega_0 - \omega_1) \iff \\\\
q =& \frac{\omega_1}{\omega_0 - \omega_1}
\end{align*}
$$

So we can see that the Quantile Regression optimization problem attempts to over-estimate $q$ percent of the observations. In particular, if $q = 0.5$, then the QR loss attempts to ensure that there are just as many over-estimations as under-estimations.

But if $q=0.9$, for instance, then this loss will attempt to ensure your model under-estimates about 90\% of the observations and over-estimates about 10\% of them.

### Practice

In practice it seems to converge somewhere around the quantile, but depending on the outlier situation you have, it might be somewhat off. That might be an effect of the number of iterations I've allowed, but either way, it's not far enough from the designated quantile to raise any alarms; especially not since whatever you're doing, it's probably using Stochastic Gradient Descent anyway.

## Further Investigation

I lied. I'm tired and I don't think I'll be following through on my desires for further investigation. "Why don't you just delete the part where you said you'd have further investigation"? Well, frankly, I don't think you're reading this anyway. Email me if you actually read this. I'd be super interested to find out.


## Summary

Quantile regression is\dots interesting.
