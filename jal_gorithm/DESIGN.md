---
name: JALGORITHM
description: A near-black engineering portfolio — Inter Variable bold at display scale, one electric-cyan accent, mono coordinates, and scroll-triggered reveals.
colors:
  ground-dark: "#0a0a0f"
  panel-dark: "#0f0f1a"
  panel-raised: "#141424"
  signal-white: "#ffffff"
  warm-paper: "#f5f5f5"
  warm-surface: "#e8e8f0"
  ink: "#0d0d1a"
  ink-strong: "#0a0a0f"
  cyan: "#00e5ff"
  cyan-dim: "#007a8a"
  green: "#00ff88"
  dark-hairline: "#1e1e2e"
typography:
  hero:
    fontFamily: "Inter, system-ui, sans-serif"
    fontSize: "clamp(52px, 11vw, 180px)"
    fontWeight: 800
    lineHeight: 0.88
    letterSpacing: "-0.04em"
  headline:
    fontFamily: "Inter, system-ui, sans-serif"
    fontSize: "clamp(40px, 7vw, 110px)"
    fontWeight: 800
    lineHeight: 0.9
    letterSpacing: "-0.035em"
  display:
    fontFamily: "Inter, system-ui, sans-serif"
    fontSize: "clamp(32px, 5.5vw, 80px)"
    fontWeight: 700
    lineHeight: 0.92
    letterSpacing: "-0.03em"
  title:
    fontFamily: "Inter, system-ui, sans-serif"
    fontSize: "clamp(22px, 2.8vw, 40px)"
    fontWeight: 700
    lineHeight: 1.0
    letterSpacing: "-0.02em"
  thesis:
    fontFamily: "Inter, system-ui, sans-serif"
    fontSize: "clamp(18px, 2.2vw, 28px)"
    fontWeight: 500
    lineHeight: 1.4
    letterSpacing: "-0.01em"
  body:
    fontFamily: "Inter, system-ui, sans-serif"
    fontSize: "16px"
    fontWeight: 400
    lineHeight: 1.6
    letterSpacing: "0"
  label:
    fontFamily: "JetBrains Mono, ui-monospace, Consolas, monospace"
    fontSize: "11px"
    fontWeight: 400
    lineHeight: 1.6
    letterSpacing: "0.08em"
rounded:
  micro: "2px"
  control: "4px"
  panel: "6px"
spacing:
  xs: "4px"
  sm: "8px"
  md: "16px"
  lg: "24px"
  xl: "48px"
components:
  button-primary:
    backgroundColor: "{colors.cyan}"
    textColor: "{colors.ink}"
    rounded: "{rounded.control}"
    height: "48px"
  tag:
    textColor: "{colors.signal-white}"
    rounded: "{rounded.micro}"
    padding: "5px 9px"
---

# Design System: JALGORITHM

## Overview

**Creative North Star: "The Algorithm Sheet"**

A pure engineering portfolio. Near-black ground (`#0a0a0f`), one electric-cyan accent (`#00e5ff`), Inter Variable at heavy weight for every display string, JetBrains Mono for every coordinate, label, and status. No serifs. No orange. No decorative scatter.

The world is dual-theme. Dark is the signature: near-black with cyan as the single signal color. Light inverts to off-white paper with ink text; cyan stays as the accent in both.

Motion is purposeful: entrance reveals, scroll-linked parallax on the hero name, timeline line draw. Every effect has a reduced-motion path.

**Key Characteristics:**

- Bold sans at scale: Inter Variable 700–800 from 180px hero to 16px body.
- One accent: electric cyan `#00e5ff` — selection, progress, dots, active underline, CTA hover, the logo mark.
- Near-black engineering ground with hairline rules and compressed negative space.
- Mono only for data: JetBrains Mono, tracked, used for labels, coordinates, statuses, periods, tags.
- 2–6px radii — machine geometry, no pill shapes.
- Scroll-triggered reveals and entrance animations via GSAP + Motion.

## Colors

- **Cyan** (`#00e5ff`): the single accent. Fills the logo mark, `::selection`, progress bar, active nav underline, CTA hover bg, counter badge number, skill bar fill, timeline dot, saddle accent word.
- **Ground Dark** (`#0a0a0f`): page field.
- **Panel Dark** (`#0f0f1a`): raised surfaces, cards.
- **Panel Raised** (`#141424`): double-raised panels, terminal card.
- **Signal White** (`#ffffff`): dark-mode display type.
- **Warm Paper** (`#f5f5f5`): light ground.
- **Warm Surface** (`#e8e8f0`): light panels.
- **Ink** (`#0d0d1a`): light-mode body text.
- **Dark Hairline** (`#1e1e2e`): dark borders.

## Typography

**Display Font:** Inter Variable (self-hosted 400–800, `inter-var.woff2`)  
**Label Font:** JetBrains Mono Variable (self-hosted, `jetbrains-mono-var.woff2`)

### Rules

- **The Bold Rule:** Display text is 700–800 weight minimum. Body copy is 400.
- **The Mono Rule:** Every non-prose string is JetBrains Mono, uppercase, tracked ≥ 0.08em.
- **No serif anywhere.**
- **No italic decorating.** Italic exists only in JetBrains Mono for code strings where the language dictates it.

## Logo

The JALGORITHM logo mark: a rounded-square background in cyan, containing a bold white `J` and a small diamond `◆` to its bottom-right, referencing a graph node and an edge. The wordmark beside it: `JALGORITHM` in Inter 700 uppercase, letter-spacing -0.02em, color `var(--text-strong)`. The mark rotates -6° on hover.

## Do's and Don'ts

- **Do** keep cyan as the only saturated hue.
- **Do** set every heading and display string in Inter 700–800; use 400–500 for body.
- **Do** set every label, status, and coordinate in JetBrains Mono uppercase tracked.
- **Don't** use Instrument Serif or any serif anywhere.
- **Don't** use saddle brown, orange, or warm tones as accent.
- **Don't** introduce gradients, glows, or multi-color schemes.
- **Don't** round beyond 2px highlights, 4px controls, 6px panels.
