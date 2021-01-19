---
layout: post
title: "The Monty Hall Problem"
excerpt: |
  The infamous Monty Hall! You're on a gameshow with three doors, two have goats and one has a brand new car! What will you win?!
tags:
- puzzles
- riddles
- fun&games
- pokeaneyeout
banner: /assets/images/2018/06/03_monty_hall.png
---

## The scenario:

You're on a game show and they show you three doors (they're all shut). They tell you behind two of these doors are goats, and behind one of them is a brand new car! They say you get to pick one door, then they'll open up one of the remaining doors to reveal a goat, then ask you if you want to change your choice. What do you say?

What you know:

1. There are three doors
1. Only one has the prize
1. All doors have equal probability at the onset
1. You choose one door
1. The host shows a goat behind one of the other doors
1. You're asked if you want to change your choice to the last remaining door


### Hints (click to unblur)

1. Just work out the probabilities
    {: .hint}

1. Think of the microstates
    {: .hint}

## A solution

### A Strategy
You do switch. The door you picked only has 1/3 probability of having the prize while the other door has 2/3 probability.
{: .hint}

### A Description
Let's pretend like there are two different games: one where you pick one door and no chance to change your mind, and one where you pick two doors and if the car is behind either one you win. Obviously the first has a 1/3 probability and the second has a 2/3 probability of success. You can think of the strategy where you don't switch as playing the first game and the one where you do switch as playing the second game. In the switching strategy, the first door you pick will never be the one you end with, so really, you're not picking that door as much as you're picking the other two and letting the host weed one out. At the end of the day, though, if you play with the switching strategy, then if the prize is behind either of the two doors you picked, you win! So it's a 2/3 probability if you switch.
{: .hint}
