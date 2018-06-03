---
title: "Prisoners and The Lightblub"
type: riddle
excerpt: |
  A group of prisoners encounter an evil warden and his sadistic lightbulb. Who will win?
tags:
- puzzles
- riddles
- fun&games
- pokeaneyeout
---

## The scenario:

One day, a drunk warden waltzes into her prison feeling particularly sadistic and decides to put on a little show for herself. She told her guards to gather 100 prisoners into a room so that she could talk to them. When in front of the group of prisoners, she tells them of her plan: All of their prison sentences have been extended indefinitely, but they have a chance to earn their freedom -- through her game.

She explained that she arranged for a room to be secured and left with just a single light bulb inside and that nobody but them would be allowed inside. They would then be brought into the room one prisoner per day and allowed to turn the light on or off. It's guaranteed that nobody else would be given access to the room other than themselves, and that in no way would anyone mess with the light.

They were told that at any time, anyone could come forward and say "I believe all prisoners has been in the room" if they believe it, and if it's true, all the prisoners go free. If the prisoner says the phrase and it's not true, they all are killed by firing squad.

Now, you can't just say the phrase on the 100th day -- I mean, you could, but it probably wouldn't work because the prisoners can be sent in multiple times.

What you know:

1. There are 100 prisoners
1. There is a room with a light bulb that only these prisoners have access to
1. They can really only communicate through this light bulb
1. At any time, any one of them can stop the game, and if all prisoners have been in the room with the light, they go free. If not all prisoners have been in that room, then they all lose the game (or get killed, or the warden steps on their pet bunny or something -- something negative happens).

What's your strategy?

### Hints (click to unblur)

1. There's a non-zero probability (assuming the choice of prisoner is random) that it's 100,000 years before all prisoners go into that room. So don't try to find a perfect solution. Just any solution will work.
    {: .hint}

1. If you haven't found any solutions, how about putting one prisoner in charge?
    {: .hint}

### Some Solutions

#### Solution 1

<div class="hint" markdown="1">
You can put one prisoner in charge and only allow that prisoner to ever turn off the light. Then, whenever anyone else gets in the room, if the light is off and they've never turned it on before, turn it on; otherwise, just leave it be. The chosen prisoner ends the game when he or she turns the light off for the 99th time.

That solution is okay, but not great. It gets the job done, but it'll take forever.
</div>

#### Solution 2

<div class="hint" markdown="1">
My favorite solution is kinda complicated, but it's really cool...

So, you pick a number, say, 10. Then, you say make the following rules:

- You assign a notion of "value" to a light-bulb.
	- For the first ten days, a light bulb is said to have a value of 1.
	- Then every ten days after that, the value doubles, until it gets to 64
	- After 64, it goes back to 1.
- Everybody keeps a record in their own respective cells of the value they currently have.
- When a prisoner enters the room, if the light is on, the prisoner turns it off and adds the current day's value to their own.
	- Then, the prisoner writes out the value they have in binary.
	- The value of the light bulb progresses to the next day's value, let's call it \\(\lambda\\).
	- If the prisoner has a "1" in the \\(\lambda\\) place of the binary description of his or her own value, they turn on the light and decrease their own value by \\(\lambda\\).

So, for example, let's pick 10 as our number of days per value thing. Then if today is the 9th day in the full cycle, then today's value is 1 (and so is tomorrow's). So if the light is on when I get in, I turn it off and increment my value. Let's assume the light is on and I have a value of 20 (or 0010100, in our description). Then I turn off the light and find that I have a value of 21. Since tomorrow's value is 1, and my binary description is 0010101, I return that point and turn on the light bulb, leaving me with 0010100. If on the other hand, it had been the tenth day and tomorrow's value were 2, since I'd have a 0 in the 2's place, I'd keep the point.

The reason I find this solution so interesting is, it really gets to the core of money and value. In this case, the light is only twice as valuable on day 11 as it is on day 10 because we agree to artificially make it so, but as long as we're doing that, the results are astounding and very real.

Also, this is a completely decentralized solution! Come on, that's amazing!
</div>
