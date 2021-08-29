---
title: 'The Layered Architecture'
excerpt: "The one architecture that just simply work."
date: "2021-29-09"
author:
  name: Loc Mai
---

## So ... what is it???

The code base of my Humble project is derived from a similar architecture design pattern that we have at my current company.  

The main idea is to breaking down the stack into logical layers with separate responsibilities and manage dependencies. A higher layer can use services in a lower layer, but not the other way around. Therefore, the folder structure and the dependecies will look like this:

```
┌───────────────────────────┐
│   L3. Applications        │
└─────────────▲─────────────┘
              │
┌─────────────┴─────────────┐
│     L2. Platform          │
└─────────────▲─────────────┘
              │
┌─────────────┴─────────────┐
│   L1. Infrastructure      │
└─────────────▲─────────────┘
              │
┌─────────────┴─────────────┐
│       L0. Metal           │
└───────────────────────────┘
```

So from lower to higher, we have 4 layers, from L0 to L3 (cuz we're hipsters and we count from 0).

## Deep dive

Let's go through one by one and see what they (will) do and have.

### Layer 0: Metal

![Metal Arm is awesome](https://j.gifs.com/82A4Ag.gif)

