---
layout: post
title: What's in a language?
category: Mathematics
excerpt: "The basics of the theory of formal languages"
tags:
- intro
- linguistics
- mathematics
banner: /assets/images/2015/11/Romance-lg-classification-en.png
---

## Languages in abstraction

This post is about Languages from a mathematical and abstract linguistics point of view. Not much more to say about that, so let's get right to it!

<!-- more -->

## The Rigorous definition:

Let $\Sigma$  be an alphabet and let $\Sigma^k$  be the set of all strings of length k over that alphabet. Then, we define $\Sigma^\*$  to be $\bigcup\limits_{k\in\mathbb{N}}\Sigma^k$  (the union of $\Sigma^k$ over all natural numbers k). If $L\subseteq\Sigma^\*$ , we call $L$  a language.


## The Intuition Behind the Definition

Consider an alphabet (some finite set of characters), for example we can consider the letters of the English language, the ASCII symbols, the symbols $\{0, 1\}$  (otherwise known as binary), or the symbols $\{1, 2, 3, 4, 5, 6, 7, 8, 9, 0, +, \times , =\}$ . We can then construct the infinite list of all the different ways we can arrange those characters (e.g. $1001011$  or $0011011011$ , etc. if we're using binary). We call these arrangements "strings". Once we have all that machinery built up, a language is just some subset of that infinite collection of strings. The language may itself be infinite.


## Some Examples

- The alphabet: $\Sigma=\{0, 1\}$ <br />
The language: $\{x\in\Sigma\|x \text{ is prime}\}$  (all prime numbers in binary)<br />
Some strings from the language: $10, 11, 101...$
- The alphabet: ASCII characters<br />
The language: All syntactically correct Clojure programs (the source code)
- The alphabet: All Clojure functions, operators, etc, and list $\{x, 1, 2, 3, 4, 5, 6, 7, 8, 9, 0\}$ <br />
The language: All syntactically correct Clojure programs (the source code)

You see that we need to have an alphabet before we can have a Formal Language. Also, different alphabets may result in equivalent languages -- by equivalent, we mean that both languages contain the same strings.


## What are we getting at?

Well, there are two ways to look at this. On the first hand, linguists would like to study language in its abstract essence. For this, Formal Languages may come in handy (if endowed with a Grammar and possibly more). That is not the reason I will be studying Formal Languages. I'm learning about formal languages to find their applications to computing.
Apparently, with the help of a little Mathematical thinking, we can assign semantics to the strings in a language and somehow correlate them with real world problems -- such as computability, the P=nP problem, cryptography, and more!
