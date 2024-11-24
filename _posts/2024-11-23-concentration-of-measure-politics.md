---
layout: post
title: High dimensional human politics
excerpt: |
  What does the concentration of measure have to say about politics?
category: Mathematics
tags:
- mathematics
- politics
- short
banner: /assets/images/2024/11/23-banner.jpg
---

## Politics via math?

When I learn a new thing, I like to see what sorts of unexpected things I can model with it. I'm dabbling in some less intuitive properties of high dimensional spaces right now and the [concentration of measure](https://en.wikipedia.org/wiki/Concentration_of_measure) is a pretty core part of that. This post is about a particularly amusing model with some interesting results I came up with earlier today.

## Concentration of Measure

If you take a **unit ball** (the surface of a sphere) in N dimensions, nearly all the points lie on the equator if N is sufficiently large. Note that the equator is relative because I haven't told you which side is north! That's the **concentration of measure**. Now let's go to our model.

## Model

Let's represent people's political beliefs as vectors in some high dimensional space. It'll look like `[pro-life/pro-choice, pro-2A/anti-2A, ...]` and so on where each coordinate is $\pm 1$. We'd have one coordinate for every version of every position (so pro-life is different from pro-life-with-rape-clause, and so on), so this would actually be a very high dimensional space. Since everything is a one-hot vector, we can consider just the directions of the vectors (e.g. the surface of the sphere).

A society is represented by a collection of vectors on the surface of that sphere (one for each member). A more homogeneous society is more concentrated and more diverse society is more uniformly distributed.

The consequence is: as a society becomes more diverse, the elected officials become more orthogonal to their constituents.

## Conclusion

As a government grows in scope, it loses the ability to represent its citizens. This is pretty obvious, but it's nice that we can show this mathematically (via an admittedly limited model).
