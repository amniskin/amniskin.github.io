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

# Prerequisites

## inner products
So the first thing to understand is that as long as we have an inner-product defined, we have a geometry. And in case you're unfamiliar with the term inner-product, you can think of it like a slightly more general dot-product.

Furthermore, an inner product defines a norm and it defines angles. Specifically,

$$
\begin{align*}
\left |\left| u\right|\right| = \sqrt{\langle u, u\rangle} \\\\
\cos(\theta) = \frac{\langle u, v\rangle}{||u||\cdot||v||}
\end{align*}
$$
## Standard deviation
The next thing to understand is that standard deviation is a norm. It's easily seen from the formula:

$$
\begin{align*}
\sqrt{\frac{1}{n-1}\sum(x_i - \mu)^2} =& \sqrt{\frac{n}{n-1}}||x - \mu||\\\\
=& \sqrt{\frac{n}{n-1}}\sqrt{\langle x-\mu, x-\mu\rangle}
\end{align*}
$$

So standard deviation is a norm. The two are equivalent. Sweet. Let's move on.

## Covariance is an inner product
If we have a linear transformation $X$ defines a linear transformation from $X:\mathbb{R}^m\to\mathbb{R}^n$, and with our covariance matrix $V$, we have an inner product defined on the image. Specifically, if $u,v\in\mathbb{R}^n$ are two portfolios already mapped to risk space, the inner product is (the estimated covariance):

$$
\langle u, v\rangle := u'Vv
$$

## Projections
Let $u,v\in\mathbb{R}^n$. Given an inner product $\langle\cdot,\cdot\rangle$ (and the associated norm), the **projection** (sometimes called **vector projection**) of $u$ onto $v$ (denoted as $\text{proj}_vu$)is defined as:

$$
\text{proj}_vu := \frac{\langle u, v\rangle}{||v||} \frac{v}{||v||}
$$

Geometrically, this gives us the component of $u$ in the $v$ direction. See figure below.

![visual of a vector projection]({{ site.baseurl }}/assets/pics/2019/03/28_projection.png "Visual of a vector projection")

If you're wondering why I specified that it's the "**vector** projection" rather than just "projection", it's because there is a notion of a *scaler projection* too: The **scaler projection** of $u$ onto $v$ is simply the coefficient part of the projection:

$$
\text{scaler-proj}_vu = \frac{\langle u, v\rangle}{||v||}
$$

But since they're so similar and we really only care about the latter, I'll abuse notation here and generally use $\text{proj}_vu$ to mean "scaler-projection" unless otherwise noted.

## Risk

When we talk about how *risky* a portfolio is, intuitively you probably understand that as "what's the probability that I lose all of my money", and you're not wrong. That would be what we call **downside risk**. Unfortunately, that's not so easy to compute (at least not on paper), and there isn't much in the way of mathematical research built up on the notion of downside risk. Maybe in a later post, I'll go over how downside risk relates to the Information Ratio, but not today. There is, however, a lot of research built up on *standard deviation*, and that's somewhat related ("how irregular are your returns" is not too bad of a proxy). So we define a portfolio's **risk** as the standard deviation of the portfolio's returns.

# The problem

Now comes the wonderful task of predicting future risk. This involves estimating a covariance matrix of asset-level returns. But if you're in the equities world (and even more-so if you're in the quantitative equities world), the covariance matrix is very large (often on the order of 5,000 by 5,000) and somewhat non-stationary (meaning the data we have deteriorates in value over time). So these covariance matrices take quite a lot of data to fit, and they will inherently leave out newer stocks. Clearly, there is a place for a lower dimensional estimator of risk. We call such an estimator a *risk model*. There are several versions of a risk model, but this is meant to be a short post, so we'll only go over the Barra style risk model...

## Barra

The barra risk model takes the following form:

$$
(Xh)'V(Xh) + D\cdot h
$$

Where $h \in \mathbb{R}^m$ is our **holdings** (of $m$ many assets) vector, $X \in \mathbb{R}^{n\times m}$ is called our **factor exposure matrix** (usually shortened to simply, "exposure matrix"), $V \in \mathbb{R}^{n\times n}$ is called our **factor covariance matrix**, and $D \in \mathbb{R}^{m}$ is our **specific risk** vector. The exposure matrix is computed based off of real-world things like the stock's N-day momentum, the stock's market cap, volatility (yet another word for standard deviation) of returns, etc.

If $n \ll m$ the covariance matrix can be computed with a lot more efficacy and the exposures are computed from external things like official SEC filings, etc. so as to reduce the amount of over-fitting here.

## The geometric view

We can view this style of risk model in a geometric way for some added clarity. Let's focus entirely on the first part ($(Xh)'V(Xh)$) for now, and furthermore let's assume that we've fit the model already -- meaning we've already computed $X$ and $V$. It's clear to see that we're using a lower dimensional embedding of our portfolios and computing the risk in the embedded space, then projecting back.
Formally, we have an inner product defined in $\mathbb{R}^n$ given by:

$$
\langle u, v\rangle =& u'Fv
$$

So our factor risk is the norm of our vector in this space. But now we want to see how seeing things the geometric way can benefit us.

## Marginal contribution to risk
One common task is to attribute some amount of the total risk to a particular factor. By that I mean that we have a portfolio and we would like to express the total risk of this portfolio in terms of the risk factors from our risk model. The theory suggests that we want the **marginal contribution to risk** ($MCAR$) which is defined as:

$$
\begin{align*}
MCAR(i) :=& \frac{\partial \sigma}{\partial u_i}
\end{align*}
$$

It's the partial derivative of the total risk with respect to our factor in question (denoted above as $u_i$). And we can compute this somewhat easily:

$$
\begin{align*}
MCAR(i) :=& \frac{\partial \sigma}{\partial u_i} \\\\
=& \frac{\partial \sqrt{\langle u, u\rangle}}{\partial u_i} \text{ -- risk is the inner product}\\\\
=& \frac{1}{2\sqrt{\langle u, u\rangle}}\cdot \frac{\partial \langle u, u\rangle}{\partial u_i} \text{ -- chain rule}\\\\
=& \frac{1}{2\sqrt{\langle u, u\rangle}}\cdot \frac{\partial u'Vu}{\partial u_i} \text{ -- definition of our inner product}\\\\
=& \frac{(u'V + u'V')u_i}{2\sqrt{\langle u, u\rangle}} \text{ -- computing the derivative}\\\\
=& \frac{u'Vu_i}{\sqrt{\langle u, u\rangle}} \text{ -- $V$ is symmetric}\\\\
=& \frac{\langle u, u_i\rangle}{\left|\left|u, u\right|\right|} \text{ -- Replacing with the geometric notion}\\\\
\end{align*}
$$

But man, is this not illuminating. Why would we even want the derivative to begin with? Are we really concerned with such an extremely local property here or are we trying to find some more global thing? It seems to me that what we want is more about explaining our current position rather than how our position could change with infinitesimal changes in other values. You may have noticed that the end formula above is the same as the projection formula from the *prerequisites* section. That's no coincidence.

If we instead look at MCAR as trying to explain how much of our total portfolio risk can be explained by the portion of our portfolio in the direction of a chosen basis vector (factor), we end up with the same formula. In order to see how much the portion of $u$ in the direction of a particular basis explains the total risk, we compute the projection of $u_i$ onto $u$, which would look like:

$$
\begin{align*}
\text{proj}_uu_i =& \frac{\langle u, u_i\rangle}{\left|\left|u, u\right|\right|}
\end{align*}
$$

And it comes with the all the geometric intuition we all know and love.

## U.F.P.'s
What the hell are they? The standard definition of a **UFP** is: the characteristic portfolio with unit exposure to a particular factor, and zero exposure to all the others. What does this mean? How are we guaranteed that such a thing always exists, and just, what? Well, yet again, our geometric interpretation can come to our rescue...

Let's pick a particular factor $i$. Now let's construct an ortho-normal basis (perhaps using Gram-Schmidt) in factor space starting with every other factor *but* $i$, leaving $i$ for last. That last basis vector would be, by construction, orthogonal to every other factor (hence zero exposure to them) and have some exposure to our chosen factor. We can now take that last basis vector, rescale it as appropriately and we have ourselves a sweet UFP.

## Specific risk
So how do we interpret specific risk (what we called $D$) in the geometric way? Can we simply add a column to our risk model for specific risk -- even if it is mostly zeros? It turns out, no. For one, the specific risk is stock-specific (hence the name), but also, the thing we want to measure -- variance -- is not linear. So what is specific risk?

Well, one way to interpret it is as the norm of the projection of our vector in holdings space onto the kernel of our embedding. Let me explain what I mean there...

We have a surjective map $X:\mathbb{R}^n\to\mathbb{R}^m$ where $n\lt m$. Since the dimension of the domain is larger than the dimension of the range we know that several dimensions have to be in the kernel. In particular, since the map is surjective we know exactly that the dimension of the kernel is $m-n$. So there is an $n$ dimensional substructure of our holdings space that matters -- as far as factors are concerned -- and $m-n$ dimensions that don't. We project that parts that do matter into factor space and compute their magnitude there where we know the geometry, and compute the magnitude in ambient space of the part that doesn't map to factor-space. It's that latter piece that we call **specific risk**.

## Summary

So, in particular, if $h_1$ is a particular risk factor, we get the typical risk-decomposition formula we all know and love, but without messing with any of the unmotivated calculus. What's nice is it also illuminates the place for non-linear manifold approximations: at the end of the day, they're all just defining the geometry we're going to use to assess our portfolio.
