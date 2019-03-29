---
title: "A little geometric walk down risk model lane"
type: post
excerpt: Let's talk about the geometry of risk models
category: Mathematics
tags:
- Geometry
- Statistics
- Mathematics
- Finance
feature_image: "/assets/pics/2019/03/28_banner.jpg"
---

# Risk

## What is it?

When we talk about how *risky* a portfolio is, intuitively you probably understand that as "what's the probability that I lose all of my money", and you're not wrong. That would be what we call *downside risk*. Unfortunately, that's not so easy to compute (at least not on paper), and there isn't much in the way of mathematical research built up on the notion of downside risk. There is, however, a lot of research built up on *standard deviation*, and that's somewhat related ("how irregular are your returns" is not too bad of a proxy). So we define a portfolio's *risk* as the standard deviation of the portfolio's returns.

Now comes the wonderful task of predicting future risk. This involves estimating a covariance matrix of asset-level returns. But if you're in the equities world (and even more-so if you're in the quantitative equities world), the covariance matrix is very large (often on the order of 5,000 by 5,000). So these covariance matrices take quite a lot of data to fit, and they will inherently leave out newer stocks. Clearly, there is a place for a lower dimensional estimation of risk. We call such an estimator a *risk model*.

# Risk Models

There are several versions of a risk model, but this is meant to be a short post, so we'll only go over the Barra style risk model...

## Barra

The barra risk model takes the following form:

$$
(Xh)'V(Xh) + D\cdot h
$$

Where $h \in \mathbb{R}^m$ is our *holdings* (of assets) vector, $X \in \mathbb{R}^{n\times m}$ is called our *exposure matrix*, $V \in \mathbb{R}^{n\times n}$ is called our *factor covariance matrix*, and $D \in \mathbb{R}^{m}$ is our *specific risk* vector. The exposure matrix is computed based off of real-world things like the stock's N-day momentum, the stock's market cap, volatility (yet another word for standard deviation) of returns, etc.

If $n << m$ the covariance matrix can be computed with a lot more efficacy.

## The geometric view

So the first thing to understand is that as long as we have an inner-product defined, we have a geometry. And in case you're unfamiliar with the term inner-product, you can think of it like a slightly more general dot-product.

The next thing to understand is that standard deviation is a norm. It's easily seen from the formula: $\sqrt{\frac{1}{n-1}\sum(x_i - \mu)^2} = \sqrt{\frac{n}{n-1}}||x - \mu|| = \sqrt{\frac{n}{n-1}}\sqrt{\langle x-\mu, x-\mu\rangle}$. So risk is a norm. The two are equivalent. Sweet. Let's move on.

On to our risk-model...

Our exposure matrix $X$ defines a linear transformation from $\mathbb{R}^m\to\mathbb{R}^n$, and with our covariance matrix $V$, we have an inner product defined:

$$
\langle u, v\rangle := u'Vv
$$

And with that inner product, there is a norm.

Okay, so what can we do with this? Well, for one, the notion of *risk-decomposition* becomes a lot more natural. People generally define *marginal contribution to risk* (which is supposed to a measure of how much of our total risk can be explained by a particular factor) as the derivative of total risk with respect to whichever factor in question. But why should we care about an instantaneous rate of change (derivative) when analyzing our current position? It doesn't really make sense. It turns out, that with the geometric approach the risk decomposition becomes a lot more natural and holistic.

If we have a vector in $\mathbb{R}^n$ and want to find the "exposure" of a basis vector (like SIZE or VOLATILITY, etc.). That's just the projection of the SIZE vector onto our risk vector. The formula for the projection of $u$ onto $v$ (denoted as $\text{proj}_vu$ is:

$$
\text{proj}_vu = \frac{\langle u, v\rangle}{||v||} \frac{v}{||v||}
$$

So if you're only interested in the magnitude of the projection (which would be the amount of risk in the direction of the total risk), it would be:

$$
\begin{align*}
\text{proj}_vu =& \left |\left |\frac{\langle u, v\rangle}{||v||} \frac{v}{||v||}\right | \right | \\\\
=& \left |\left |\frac{\langle u, v\rangle}{||v||}\right | \right | \\\\
=& \left |\left |\frac{u'Vv}{\sqrt{v'Vv}}\right | \right | \\\\
=& \left |\left |\frac{(Xh_1)'V(Xh)}{\sqrt{(Xh)'V(Xh)}}\right | \right | \\\\
$$

## Summary

So, in particular, if $h_1$ is a particular risk factor, we get the typical risk-decomposition formula we all know and love, but without messing with any of the unmotivated calculus. What's nice is it also illuminates the place for non-linear manifold approximations: at the end of the day, they're all just defining the geometry we're going to use to assess our portfolio.
