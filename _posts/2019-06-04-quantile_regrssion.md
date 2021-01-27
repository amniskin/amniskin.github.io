---
layout: post
title: Quantile Regression Yields Quantiles
category: Mathematics
tags:
- statistics
- mathematics
- regression
- machine-learning
- theory
banner: /assets/images/2018/04/12_banner.jpg
---

## Background

If you've ever read any papers referring to quantile regression (QR), you undoubtedly have read "MSE yields means, MAE yields medians, and QR yields quantiles", but what does that even mean? Like not just hand-wavy nonsense, but really, what does that mean? After all, these are just loss functions and therefore don't *yield* anything at all. Even the regressions yields coefficients, or, more generally, models; so what's with the mean and median talk? It turns out they're talking about the distribution of residuals[^misleading]. In this post, we'll show what they mean, how that's the case, and we'll investigate a bit more about QR.

<!-- more -->

[^misleading]: I find their phrasing to be particularly misleading. A regression does **not** *yield* the distribution of residuals. That's a characteristic of the fitting process. The regression *yields* coefficients -- or more generally, a model. Hopefully if you have the same issue I had, this post will help clarify things.

## What is it?

Given a scaler $q\in[0,1]$, let $l_q:\mathbb{R}\to\mathbb{R}_+$ be:

$$
\begin{align*}
l_q : \mathbb{R}^n& \to \mathbb{R} \\
l_q(r) =& r\cdot\left(q - \mathbb{I}_{r < 0}\right) \\
=& \begin{cases} qr & r > 0 \\ (q-1)(r) & r \leq 0\end{cases} \\
=& \begin{cases} qr & r > 0 \\ (1-q)(-r) & r \leq 0\end{cases} \\
=& \begin{cases} q\|r\| & r > 0 \\ (1 - q)\|r\| & r \leq 0\end{cases}
\end{align*}
$$

We define the **Quantile Loss** with quantile $q$ as the function $L_q:\mathbb{R^n}\to\mathbb{R}$ from the residuals to the loss as:

$$
\begin{align*}
L_q(r) =& \sum\limits_{i=0}^{n-1}l_q(r_i)
\end{align*}
$$

### In words

Basically, the loss is very much like MAE (A.K.A. $L_1$ loss) but we weight the absolute errors based on whether they are above or below zero. We can see by inspection that $L_{0.5} = MAE$. This is looking good, because if $L_q$ yields quantiles, MAE yields medians, and the $0.5$ quantile is the median, than these two should be the same.

## Relation to Quantiles

A natural question to ask at this point is, when are you getting to your point? Er, I mean, what does this have to do with quantiles?

To answer this, let's investigate, when will the derivative of $L_q$ equal zero (a necessary condition for a minima). To make our lives easier, let $\omega_0$ be the number of residuals that are greater than zero, and $\omega_1$ be the number of those that are less than or equal to zero.

$$
\begin{align*}
0 =& \frac{\partial L}{\partial r}(r) \\\\
=& \frac{\partial L}{\partial r}\left(\sum_{r\gt 0}qr + \sum_{r \le 0}(1-q)(-r)\right) \\\\
=& \sum_{r\gt 0}q + \sum_{r \le 0}(q - 1) \\\\
=& q\omega_0 + (q - 1)\omega_1 \\\\
=& -\omega_1 + q(\omega_0 + \omega_1) \iff \\\\
\omega_1 =& q(\omega_0 + \omega_1) \iff \\\\
q =& \frac{\omega_1}{\omega_0 + \omega_1}
\end{align*}
$$

So we can see that the Quantile Regression optimization problem attempts to over-estimate $q$ percent of the observations. In particular, if $q = 0.5$, then the QR loss attempts to ensure that there are just as many over-estimations as under-estimations.

But if $q=0.9$, for instance, then this loss will attempt to ensure your model under-estimates about 90% of the observations and over-estimates about 10% of them.

## Practice

In practice, many things can affect how close to the actual quantile you get. For example, sampling, the number of iterations you allow the optimizer to take, etc. can all affect the accuracy of the optimization. Also, it's useful to note that these optimizations are all in-sample, so any results should only be trusted insofar as how similarly distributed your live data will be to the training data.

## Summary

Quantile regression attempts to distribute the residuals such that your model with under predict with probability $q$.
