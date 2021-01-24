---
title: Data Science and inference
layout: post
excerpt: That's a super convoluted title, but let's revel in it.
category: Misc
tags:
- misc
- thoughts
feature_image: "/assets/pics/2019/11/27_banner.jpg"
---

# The Preamble

I was reading *Foundation* by Isaac Asimov the other day, a book I've had in my reading list for a while but never made the time. After the first few pages, it occurred to me that this book really doesn't seem to have aged very well. The book is centered around a character (Hari Seldon) who single-handedly created and developed a field of science (or Mathematics, kinda), called Psychohistory. As the [wiki](https://en.wikipedia.org/wiki/Psychohistory_(fictional)) says:

> Psychohistory is a fictional science in Isaac Asimov's Foundation universe which combines history, sociology, and mathematical statistics to make general predictions about the future behavior of very large groups of people...

But any data scientist would wonder, where's the out-of-sample? Like there's out-of-sample, and there's _out-of-sample_, and there's no way Seldon could have gotten enough true out-of-sample to confirm his theories along the way. So inevitably, his theory, his body of work, almost the entirety of Psychohistory would surely have been a noisy estimate, if correct at all. So why _should_ they have trusted him?

Okay, so it turns out in that particular case, the action he was suggesting would not really cause any harm, so there's really no reason to not indulge him. But still.

And that's the point of this post, really. If you think about it, humans can really only come to _know_ things in one of two ways: inductive reasoning or deductive reasoning. Anything else isn't really knowledge but rather just a story you tell yourself that sounds good (something the Behavioral Economists have shown empirically to be quite dubious at best). And the reason, at least in the world of Machine Learning, is that, unless the researcher is incapable of learning (so fire him/her?), they will learn from whatever out-of-sample hold-outs you set, thereby invalidating the out-of-sample-ness of the holdout.


