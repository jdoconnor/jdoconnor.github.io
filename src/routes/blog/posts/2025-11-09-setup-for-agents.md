---
title: "Refactoring for agentic success"
date: "2025-11-09"
description: "It is time to shift opinions (again) about project setup"
slug: "2025-11-09-setup-for-agents"
---

# Strong opinions, loosely held

There's a paradigm shift happening that mirrors the past. This time, the impact is hard to ignore.

# Previous paradigm shifts

## Moving up the stack

I (for better or worse) recall working webservers running c and perl. Eventually, we moved toward common modules and proven results. This also led to some worse outcomes like common bugs and security risks, but the tradeoff was worth it because with those risks came community led fixes. Over time, the industry shifted to Rails, Symphony, Express, etc.

Another shift (further up the stack) was from declarative HTML rendered on the server to frontend web UIs being built in JS on the client from server sent data. These days, there's a lot of backtracking to SSR to remove some of the tradeoffs we all accepted for more common and internet-searchable code. Once again, we are trading higher risk for developer productivity with more supply chain attacks.

Enter coding using LLMs. Not shocking, but we're trading off even more risk by sending our code to LLMs (most of which are training their models on our code). Similar to the other shifts, it is time to refactor and rethink how humans and LLMs can understand and update code. While the industry is still battling a bit on where common instructions live and if MCPs or skills are more valuable, we know that we can re-shape our code for higher LLM-readability and authorability. One of my personal project was written in Svelte 5, and the models are just now catching up to make the correct choicoes more often on the first attempt, but I certainly considered rewrites to make my life easier before the models caught up.

# Refactoring and documenting all the things

We all dreamed about that project where documentation kept up with feature development, but rarely experienced it. The self-nagging of "I should really write some of this down for later me" is now louder and more valuable. The models and tools are getting better about helping and we should be leaning into asking for refactoring help from the tools if we want more assistance. The simple prompt of "I'd like to make this codebase easier for LLM based agents to work with, Provide suggestions" goes a long way now. Give it try.

My experience is that it is making my first passes of vibe coding much better (I still have to hand-fix a number of "choices" that were made outside of my direction). On a team, I'm helping everyone's prompts to be better, independent if they're even changing behavior (as long as they're still doing something with agents).
