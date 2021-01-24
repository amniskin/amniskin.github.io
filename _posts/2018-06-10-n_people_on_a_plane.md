---
layout: post
title: "N people on a plane"
category: Riddles
excerpt: In a world of seat stealing curmudgeons, will you get yours?!
tags:
- riddles
banner: /assets/images/2018/06/10_banner.jpg
---

## The scenario:

$n$ people are in line ready to board a full plane (so $n$ people in $n$ seats). The first person in line lost his boarding pass, so he just sits in any random old seat (but specifically not his own). From then on, the people boarding are so nice that they won't confront someone sitting in their respective seats; instead, they'll just take a random empty one. What's the probability that the last person gets to sit in his or her own seat?

What you know:

1. There are $n$ seats on the plane
1. There are $n$ passengers about to board the plane
1. The first passenger sits in the wrong seat
1. Every passenger after sits in his/her own seat if it's available
1. Every passenger sits in a random available seat if his/her seat is not available.

You need to find out what the probability that the last person gets to sit in his/her own seat.

### Hints (click to unblur)

1. It might be best to start with the base case ($n$ = 3)
    {: .hint}

1. What if the first person sat in a totally random seat (instead of specifically not his own)?
    {: .hint}

## A solution

### A description
\\[ \mathbb{P}\left(\cdot | n\right) = \frac{n-2}{2(n-1)} \\]
{: .hint}


### The strategy
<div class='hint' markdown='1'>
Firstly, if $n = 1$, the game is ill defined, if $n=2$, the probability is 0 (because the first person always takes the wrong seat). If $n>2$, then:

There's a $\frac{1}{n-1}$ chance that the first person takes the last person's seat, thereby sealing the eternal aerial fate of the last boarder. So there's a $\frac{n-2}{n-1}$ chance that the first jerk doesn't take the last shlemazel's seat. Every person after that either sits in their own seat (thereby not changing the odds for our lone hero of the skies), or sits in a random seat. When sitting in a random seat, they either:

1. Sit in the first person's seat thereby closing the book on this whole debacle, assuring the vacancy of the posterior protector for our helpless late-boarder.
1. They sit in the last person's seat, thereby ensuring their own place in hell along with our hero's long lost comfort that only comes from sitting in your very own assigned seat.
1. Or they sit in someone else's seat, thereby passing the buck on to someone else and not changing the results at all.

So, there's a 50/50 shot (once we get past the first person, and assuming $n>2$).

To summarize: there's a $\frac{n-1}{n-2}$ probability that the last person's seat is open after the first person takes a seat, then every turn after that has an equal probability of ending the game in a positive or a negative way. So the end formula is
\\[ \mathbb{P}\left(\cdot | n\right) = \frac{n-2}{n-1}\cdot\frac{1}{2} = \frac{n-2}{2(n-1)} \\]
</div>

### The experiment

I essentially played this game 10,000 times for each $n$ between 3 and 100, then plotted the mean for a particular $n$ vs that $n$, along with our theoretical value derived kinda loosely above.
![percentage plot](/assets/images/2018/06/10_percentagePlot.png)
{: .hint}
