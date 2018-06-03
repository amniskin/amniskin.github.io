---
title: "The blue-eyed reconing!"
type: riddle
excerpt: |
  In a world of blue eyed and brown eyed people, it's dangerous to know your own eye color.
tags:
- puzzles
- riddles
- fun&games
- pokeaneyeout
---

## The scenario:

There's an island far away from anything we would call recognizable with a particularly strange custom: in this town, any person who discovers his or her own eye color is compelled to go to the town square at 9:00AM the following morning and kill him or her self publicly, so it goes. It's a part of their lives and they all obey this custom diligently.

This island is so secluded that the inhabitants had not seen an outsider until the one fateful day Pat stopped by. On that day, they were so excited to see an outsider that they asked Pat to give a speech in front of the whole town. Not knowing the town's customs, in Pat's opening remarks, Pat mentioned, "it's nice to see other blue eyed people out here". The question is: what happens?

What you know:

1. The town is very secluded and hasn't seen any outsiders before
1. The town has the custom that they kill themselves when they find out their own eye color, so it goes.
1. A newcomer casually mentions in front of the whole town "it's nice to see other blue eyed people here"

What happens?

### Hints (click to unblur)

1. Think inductively
    {: .hint}

1. This is kinda a repeat (sorry for that) but start with the case where there's only 1 blue eyed person, then go from there.
    {: .hint}

## A solution

### The Solution
If there are \\(n\\) many blue eyed people in the town (assuming blue eyed people are the minority), then on the \\(n^\text{th}\\) days, all the blue eyed people kill themselves, so it goes.
{: .hint}

### The Explanation
<div class='hint'>
<div markdown="1">
If there is only 1 blue eyed person, then (s)he looks around after the speaker leaves and says, "there are no blue eyed people here!", then quickly realizes that (s)he must be the only blue eyed person and (s)he goes to the town square the next day and commits suicide, so it goes.


If there are \\(n+1\\) many blue eyed people, then each looks around and sees only \\(n\\) and therefore concludes that \\(n\\) days from now all of those poor bastards are going to kill themselves, so it goes. But then the \\(n^\text{th}\\) day comes and none of them commit suicide (because they each think they're not blue eyed, but the other \\(n\\) are). Then they each come to the conclusion that there must be another blue-eyed person around, and since they don't see one, they each conclude that it's themself. So on the \\(n+1^\text{th}\\) day, they all go to the town square, so it goes.
</div>
</div>
