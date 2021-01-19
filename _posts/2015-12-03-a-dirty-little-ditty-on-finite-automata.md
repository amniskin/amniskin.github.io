---
layout: post
title: A dirty little ditty on Finite Automata
category: Mathematics
excerpt: |
  A basic yet formal introduction to Finite Automata and how strings act on them.
tags:
- dfa
- dfa nfa equivalence
- finite automata
- formal languages
- math
- mathematics
- maths
- nfa
- intro
banner: /assets/images/2015/12/03-DFA_banner.PNG
---

This post builds on the previous post about [Formal Languages]({{ site.baseurl }}/mathematics/2015/11/30/whats-in-a-language/).

### Some Formal Definitions

#### A Deterministic Finite Automata (DFA) is

- A set \\(  \mathcal{Q} \\) called "states"
- A set \\(  \Sigma \\) called "symbols" or "alphabet"
- A function \\(  \delta_F:\mathcal{Q}\times\Sigma \to \mathcal{Q} \\)
- A designated state \\(  q_0\in\mathcal{Q} \\) called the start point
- A subset \\(  F\subseteq\mathcal{Q} \\) called the "accepting states"

The DFA is then often referred to as the ordered quintuple \\(  A=(\mathcal{Q},\Sigma,\delta_F,q_0,F) \\).

<!-- more -->

#### Defining how strings act on DFAs.

Given a DFA, \\(  A=(\mathcal{Q}, \Sigma, \delta, q_0, F) \\), a state \\(  q_i\in\mathcal{Q} \\), and a string \\(  w\in\Sigma^* \\), we can define \\(  \delta(q_i,w) \\) like so:



- If \\(  w \\) only has one symbol, we can consider \\(  w \\) to be the symbol and define \\(  \delta(q_i,w) \\) to be the same as if we considered \\(  w \\) as the symbol
- If \\(  w=xv \\), where \\(  x\in\Sigma \\) and \\(  v\in\Sigma^* \\), then \\(  \delta(q_i, w)=\delta(\delta(q_i,x),v) \\)


And in this way, we have defined how DFAs can interpret strings of symbols rather than just single symbols.


#### The language of a DFA

Given a DFA, \\(  A=(\mathcal{Q}, \Sigma, \delta, q_0, F) \\), we can define "the language of \\(  A \\)", denoted \\(  L(A) \\), as \\(  \{w\in\Sigma^*\|\delta(q_0,w)\in F\} \\).

### Some Examples, Maybe?

#### Example 1:

Let's construct a  DFA that accepts only strings beginning with a 1 that, when interpreted as binary numbers, are multiples of 5. So some examples of strings that would be in \\(  L(A) \\) are 101, 1010, 1111


### Some More Formal Definitions

#### A Nondeterministic Finite Automata (NFA) is



- A set \\(  \mathcal{Q} \\) called "states"
- A set \\(  \Sigma \\) called "symbols"
- A function \\(  \delta_N:\mathcal{Q}\times\Sigma \to \mathcal{P}\left(\mathcal{Q}\right) \\)
- A designated state \\(  q_0\in\mathcal{Q} \\) called the start point
- A subset \\(  F\subseteq\mathcal{Q} \\) called the "accepting states"



The NFA is then often referred to as the ordered quintuple \\(  A=(\mathcal{Q},\Sigma,\delta_N,q_0,F) \\).

#### Defining how strings act on NFAs.

Given an NFA, \\(  N=(\mathcal{Q}, \Sigma, \delta, q_0, F) \\), a collection of states \\(  \mathcal{S}\subseteq\mathcal{Q} \\), and a string \\(  w\in\Sigma^* \\), we can define \\(  \delta(\mathcal{S},w) \\) like so:

- If \\(  w \\) only has one symbol, then we can consider \\(  w \\) to be the symbol and define \\(  \delta(\mathcal{S},w):=\bigcup\limits_{s\in\mathcal{S}}\delta(s,w) \\)
- If \\(  w=xv \\), where \\(  x\in\Sigma \\) and \\(  v\in\Sigma^* \\), then \\(  \delta(\mathcal{S}, w)=\bigcup\limits_{s\in\mathcal{S}}\delta(\delta(s,x),v) \\)

And in this way, we have defined how NFAs can interpret strings of symbols rather than just single symbols.

### Maybe in another post, we'll get past the definitions! :-/


