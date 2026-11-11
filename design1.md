---
version: alpha
name: Migss
description: |
  This design system embodies a refined, minimalist aesthetic rooted in stark
  contrast and elegant simplicity. The portfolio employs a deliberate interplay
  between pure black (#000000) and a warm, off-white canvas (#F5F3F1), creating
  a gallery-like environment where content stands as the focal point. Typography
  is set in the modern, variable Geist typeface family, with generous use of
  uppercase rendering and tight, negative letter-spacing on large scales that
  conveys sophistication and forward momentum. The system favors flat, geometric
  composition over ornamentation—sharp corners (0px radius) dominate interactive
  elements, while only the most subtle micro-shadows (layered at 10–15px
  distances with 6–10% opacity) provide minimal depth. This is a design language
  built for portfolios and technical showcases: bold, confident, and
  uncompromising.
source:
  url: "https://www.migss.dev/"
  pagesAnalyzed: 1
  extractedAt: 2026-11-11
  tokensMeasured: true
colors:
  primary: "#000000"
  canvas: "#F5F3F1"
  ink: "#000000"
  body: "#626262"
  muted: "#FFFFFF"
typography:
  display:
    fontFamily: "Geist Variable"
    fontSize: 100px
    fontWeight: 400
    lineHeight: 1.05
    letterSpacing: -3px
    textTransform: uppercase
  heading-md:
    fontFamily: "Geist Variable"
    fontSize: 37.9997px
    fontWeight: 400
    lineHeight: 1.5
    letterSpacing: -1.14px
    textTransform: uppercase
  heading-md-tight:
    fontFamily: "Geist Variable"
    fontSize: 37.9997px
    fontWeight: 400
    lineHeight: 1.05
    letterSpacing: -1.14px
    textTransform: uppercase
  body-lg:
    fontFamily: "Geist Variable"
    fontSize: 18px
    fontWeight: 400
    lineHeight: 1.5
    letterSpacing: -0.18px
  body-lg-strong:
    fontFamily: "Geist Variable"
    fontSize: 18px
    fontWeight: 500
    lineHeight: 1
    letterSpacing: -0.18px
  body-md:
    fontFamily: "Geist Variable"
    fontSize: 15.9995px
    fontWeight: 400
    lineHeight: 1.2
    letterSpacing: -0.16px
    textTransform: uppercase
  body-md-loose:
    fontFamily: "Geist Variable"
    fontSize: 15.9995px
    fontWeight: 400
    lineHeight: 1.5
    letterSpacing: -0.16px
    textTransform: uppercase
  body-sm:
    fontFamily: "Geist Variable"
    fontSize: 13.999px
    fontWeight: 400
    lineHeight: 1
    letterSpacing: -0.14px
  button-xl:
    fontFamily: "Geist Variable"
    fontSize: 37.9997px
    fontWeight: 400
    lineHeight: 1.15
    letterSpacing: -0.38px
    textTransform: uppercase
  button-lg:
    fontFamily: "Geist Variable"
    fontSize: 16px
    fontWeight: 400
    lineHeight: 1.5
    letterSpacing: 0px
  button-md:
    fontFamily: "Geist Variable"
    fontSize: 13.999px
    fontWeight: 500
    lineHeight: 1.5
    letterSpacing: 0px
  code-xs:
    fontFamily: "Geist Mono Variable"
    fontSize: 13.999px
    fontWeight: 400
    lineHeight: 1.33
    letterSpacing: 0px
  code-xs-uppercase:
    fontFamily: "Geist Mono Variable"
    fontSize: 13.999px
    fontWeight: 400
    lineHeight: 1.5
    letterSpacing: 1.4px
    textTransform: uppercase
  code-xs-loose:
    fontFamily: "Geist Mono Variable"
    fontSize: 13.999px
    fontWeight: 400
    lineHeight: 1.5
    letterSpacing: 0.7px
    textTransform: uppercase
rounded:
  none: 0px
  full: 9999px
spacing:
  xxs: 4px
  xs: 8px
  sm: 12px
  md: 16px
  lg: 20px
  xl: 24px
  xxl: 32px
  xxxl: 36px
  section: 40px
  band: 48px
shadows:
  sm: "rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.1) 0px 4px 6px -4px"
  md: "rgba(0, 0, 0, 0.1) 0px 4px 6px -1px, rgba(0, 0, 0, 0.1) 0px 2px 4px -2px"
  lg: "rgba(0, 0, 0, 0.05) 0px 1px 2px 0px"
elevationStrategy: layered-micro
themes:
  derived: dark   # the other theme is the site's measured palette
  light:
    bg: "#F5F3F1"
    surface: "#EEECEA"
    surfaceRaised: "#E4E3E1"
    text: "#000000"
    textMuted: "#626262"
    border: "#D8D6D4"
    accent: "#000000"
    accentFg: "#FFFFFF"
    focusRing: "#000000"
    elevation: shadow
  dark:
    bg: "#0F0F10"
    surface: "#1D1D1E"
    surfaceRaised: "#29292A"
    text: "#F5F5F5"
    textMuted: "#9E9E9E"
    border: "#353536"
    accent: "#858585"
    accentFg: "#0B0B0C"
    focusRing: "#666666"
    elevation: "border+surface"
components:
  button-primary:
    typography: "{typography.code-xs-uppercase}"
    textColor: "{colors.muted}"
    height: 52px
    padding: "14px 32px 14px 32px"
    boxShadow: "rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0.1) 0px 4px 6px -1px, rgba(0, 0, 0, 0.1) 0px 2px 4px -2px"
    rounded: "3.35544e+07px"
    backgroundColor: "{colors.primary}"
  button-text:
    typography: "{typography.button-lg}"
    textColor: "oklab(0 0 0 / 0.7)"
    height: 40px
    padding: "8px 0px 8px 0px"
  button-icon:
    typography: "{typography.button-lg}"
    textColor: "{colors.muted}"
    border: "1px solid rgba(255, 255, 255, 0.2)"
    height: 64px
    rounded: 8px
  navigation:
    typography: "{typography.button-lg}"
    textColor: "{colors.ink}"
    height: 52px
    padding: "3px 2px 3px 2px"
  footer:
    typography: "{typography.button-lg}"
    textColor: "{colors.muted}"
  link:
    typography: "{typography.body-md}"
    textColor: "{colors.muted}"
    padding: "8px 0px 8px 0px"
  link-sm:
    textColor: "{colors.muted}"
    padding: "0px 3.2px 4.48px 3.2px"
    fontSize: 34.4px
    fontFamily: "Geist Variable"
    fontWeight: 400
    lineHeight: 1.5
states:
  other-hover:
    target: other
    state: hover
    backgroundColor: "rgba(255, 255, 255, 0.32)"
  card-hover:
    target: card
    state: hover
    boxShadow: "rgba(0, 0, 0, 0.06) 0px 12px 28px -8px, rgba(0, 0, 0, 0.03) 0px 4px 12px -4px"
    borderColor: "rgba(0, 0, 0, 0.14)"
  other-focus-visible:
    target: other
    state: focus-visible
    rounded: 0.25rem
  input-focus:
    target: input
    state: focus
    borderColor: "rgb(154, 154, 154)"
  other-disabled:
    target: other
    state: disabled
    opacity: 0.6
  card-active:
    target: card
    state: active
    transform: "translateY(0px)"
breakpoints:
  - width: 375
    containerWidth: 363
    gridColumns: 4
    navLinksVisible: 6
    menuToggleVisible: true
    headingPx: 27
    bodyPx: 16
    sectionPaddingX: 0
  - width: 768
    containerWidth: 744
    gridColumns: 4
    navLinksVisible: 6
    menuToggleVisible: false
    headingPx: 54
    bodyPx: 16
    sectionPaddingX: 0
  - width: 1024
    containerWidth: 1000
    gridColumns: 4
    navLinksVisible: 6
    menuToggleVisible: false
    headingPx: 200
    bodyPx: 16
    sectionPaddingX: 0
  - width: 1280
    containerWidth: 1256
    gridColumns: 4
    navLinksVisible: 6
    menuToggleVisible: false
    headingPx: 250
    bodyPx: 16
    sectionPaddingX: 0
  - width: 1440
    containerWidth: 1416
    gridColumns: 4
    navLinksVisible: 6
    menuToggleVisible: false
    headingPx: 281
    bodyPx: 16
    sectionPaddingX: 0
coverage:
  statesFound: 61
  gradientsFound: 0
  rolesUnassigned: 0
  archetypesUnnamed: 0
  archetypesDetected: 0
  responsiveMeasured: true
  stylesheetsBlocked: false
  semanticRampDeclared: false
---

# Design System Inspired by Jc Miguel L. Beltran Portfolio

## 1. Visual Theme & Atmosphere

This design system embodies a refined, minimalist aesthetic rooted in stark contrast and elegant simplicity. The portfolio employs a deliberate interplay between pure black (`{colors.primary}` — `#000000`) and a warm, off-white canvas (`{colors.canvas}` — `#F5F3F1`), creating a gallery-like environment where content stands as the focal point. Typography is set in the modern, variable Geist typeface family, with generous use of uppercase rendering and tight, negative letter-spacing on large scales that conveys sophistication and forward momentum. The system favors flat, geometric composition over ornamentation—sharp corners (0px radius) dominate interactive elements, while only the most subtle micro-shadows (layered at 10–15px distances with 6–10% opacity) provide minimal depth. This is a design language built for portfolios and technical showcases: bold, confident, and uncompromising.

**Key Characteristics**

- Sharp, geometric composition with 0px border radius on buttons and cards
- Monochromatic base with pure black text on warm cream backgrounds
- Uppercase text transform on display and body scales for typographic weight
- Negative letter-spacing (−3px to −1.14px) on large headings creates visual tension
- Layered micro-shadows with 6–10% black opacity for subtle depth
- Variable typeface system (Geist and Geist Mono) enabling responsive scaling
- Minimal color palette: four colors total; no semantic status ramp
- Hover states introduce soft overlays and shadow intensification rather than color shifts

## 2. Color Palette & Roles

### Primary
- **Primary / Brand / Ink** (`#000000`): Primary CTA fills, active states, heading text, brand accent; the dominant foreground color and visual anchor of the system.

### Neutral Scale
- **Canvas** (`#F5F3F1`): Default page background; warm off-white that softens the severity of pure black.
- **Body** (`#626262`): Secondary text color for body copy and reduced-emphasis content.
- **Muted** (`#FFFFFF`): Pure white; used for captions, inverse text on dark surfaces, and supporting UI layers.

## 3. Typography Rules

### Font Family

**Primary:** Geist Variable  
Fallback: `-apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif`

**Secondary (Code):** Geist Mono Variable  
Fallback: `"Courier New", monospace`

### Hierarchy

| Role | Font | Size | Weight | Line Height | Letter Spacing | Notes |
|---|---|---|---|---|---|---|
| Display | Geist Variable | 100px | 400 | 1.05 | −3px | UPPERCASE; hero-scale headings |
| Heading Large | Geist Variable | 37.9997px | 400 | 1.5 | −1.14px | UPPERCASE; section titles |
| Heading Medium Tight | Geist Variable | 37.9997px | 400 | 1.05 | −1.14px | UPPERCASE; tight line spacing |
| Body Large | Geist Variable | 18px | 400 | 1.5 | −0.18px | Primary body copy |
| Body Large Strong | Geist Variable | 18px | 500 | 1 | −0.18px | Emphasized body text |
| Body Medium | Geist Variable | 15.9995px | 400 | 1.2 | −0.16px | UPPERCASE; compact text |
| Body Medium Loose | Geist Variable | 15.9995px | 400 | 1.5 | −0.16px | UPPERCASE; spacious variant |
| Body Small | Geist Variable | 13.999px | 400 | 1 | −0.14px | Captions and reduced text |
| Button Large | Geist Variable | 16px | 400 | 1.5 | 0px | CTA button text |
| Button XL | Geist Variable | 37.9997px | 400 | 1.15 | −0.38px | UPPERCASE; large button fills |
| Button Medium | Geist Mono Variable | 13.999px | 500 | 1.5 | 0px | Secondary button text |
| Code XS | Geist Mono Variable | 13.999px | 400 | 1.33 | 0px | Inline code blocks |
| Code XS Uppercase | Geist Mono Variable | 13.999px | 400 | 1.5 | 1.4px | UPPERCASE; spaced code labels |
| Code XS Loose | Geist Mono Variable | 13.999px | 400 | 1.5 | 0.7px | UPPERCASE; loose tracking code |

### Principles

- Uppercase rendering on display and body scales creates a strong typographic rhythm and reinforces brand identity.
- Negative letter-spacing on large scales (−3px on display, −1.14px on headings) tightens composition and conveys refinement.
- Line heights compress (1.05) on tight layouts and expand (1.5) on body copy to optimize readability at scale.
- Geist Mono is reserved for buttons, code, and technical references; Geist Variable governs body and heading hierarchy.
- Weight remains lean (400) for most scales; 500 appears only on strong body emphasis and button labels to avoid visual noise.

## 4. Component Stylings

### Buttons

**Primary Button**
- Background: `#000000`
- Text Color: `#FFFFFF`
- Font: Geist Mono Variable, `{typography.button-md}` (13.999px, weight 500)
- Padding: `{spacing.lg} {spacing.md}` (20px 16px)
- Height: 52px
- Border Radius: `{rounded.none}` (0px)
- Border: none
- Box Shadow: `{colors.muted}` 0px 0px 0px 0px, transparent 0px 0px 0px 0px, transparent 0px 0px 0px 0px, transparent 0px 0px 0px 0px, rgba(0, 0, 0, 0.1) 0px 4px 6px -1px, rgba(0, 0, 0, 0.1) 0px 2px 4px -2px

**Text Button (Secondary)**
- Background: transparent
- Text Color: `rgba(0, 0, 0, 0.7)`
- Font: Geist Variable, 16px, weight 400
- Padding: `{spacing.xs} 0px` (8px 0px)
- Height: 40px
- Border Radius: `{rounded.none}` (0px)
- Border: none
- Box Shadow: none

**Icon Button**
- Background: transparent
- Text Color: `#FFFFFF`
- Font: Geist Variable, 16px, weight 400
- Padding: 0px
- Width / Height: 64px
- Border Radius: 8px
- Border: 1px solid rgba(255, 255, 255, 0.2)
- Box Shadow: none

### Navigation

**Default Navigation Link**
- Background: transparent
- Text Color: `{colors.primary}` (`#000000`)
- Font: Geist Variable, 16px, weight 400
- Padding: `{spacing.xs} {spacing.xs}` (8px 8px)
- Height: 52px
- Border Radius: `{rounded.none}` (0px)
- Border: none
- Box Shadow: none

### Links

**Default Link**
- Background: transparent
- Text Color: `#FFFFFF`
- Font: Geist Variable, `{typography.body-md}` (15.9995px, weight 400)
- Padding: `{spacing.xs} 0px` (8px 0px)
- Height: 44px
- Border Radius: `{rounded.none}` (0px)
- Border: none
- Box Shadow: none

### Footer

**Default Footer**
- Background: transparent
- Text Color: `#FFFFFF`
- Font: Geist Variable, 16px, weight 400
- Padding: 0px
- Height: 44px
- Border Radius: `{rounded.none}` (0px)
- Border: none
- Box Shadow: none

### Card / Container Hover States

Cards respond to interaction with layered shadow intensification and subtle transforms:
- **Hover State:** Box shadow increases to `rgba(0, 0, 0, 0.06) 0px 12px 28px -8px, rgba(0, 0, 0, 0.03) 0px 4px 12px -4px`; border color shifts to `rgba(0, 0, 0, 0.14)`; optional scale transforms (1.06–1.08) and slight upward displacement (−2px Y).
- **Active State:** Transform resets to `translateY(0px)`.
- **Focus Visible:** Outline 2px solid `#FFFFFF` or `#000000` depending on surface context.

## 5. Layout Principles

### Spacing System

The system uses a geometric 4px base unit progressing through meaningful increments:

- `{spacing.xxs}` = 4px — Micro-adjustments, icon spacing
- `{spacing.xs}` = 8px — Tight element grouping, button padding
- `{spacing.sm}` = 12px — Compact component spacing
- `{spacing.md}` = 16px — Default content padding, body margins
- `{spacing.lg}` = 20px — Generous button padding, section offsets
- `{spacing.xl}` = 24px — Container margins, content gaps
- `{spacing.xxl}` = 32px — Section dividers, block spacing
- `{spacing.xxxl}` = 36px — Large section separation
- `{spacing.section}` = 40px — Full-width section padding
- `{spacing.band}` = 48px — Hero band and prominent section spacing

### Grid & Container

- **Content column width:** Scales from 363px (375px viewport) to 1416px (1440px viewport).
- **Grid structure:** 4 columns across all breakpoints; content flows into a single-column layout on mobile with no grid collapse.
- **Container max-width:** Approximately 1256px on desktop (1024px and above).
- **Section padding-x:** 0px (no horizontal padding; full-width content).

### Whitespace Philosophy

Whitespace is architectural rather than decorative. The system employs the warm canvas background (`{colors.canvas}` — `#F5F3F1`) as active breathing room, with generous vertical spacing between sections (40–48px) and minimal horizontal margins. This approach prioritizes reading flow and allows typography and imagery to dominate without visual clutter.

### Border Radius Scale

- `{rounded.none}` = 0px — Buttons, navigation links, cards, containers (sharp, geometric aesthetic)
- `{rounded.full}` = 9999px — Overlays, pill-shaped elements (rare; used only for circular UI)
- **8px** — Icon buttons (measured component exception)

The system defaults to sharp corners, reinforcing the minimal, technical character.

### Border Widths

No explicit border-width scale was extracted from the design tokens. Borders appear only on specific interactive elements (icon buttons: 1px) and are handled as inline CSS values rather than a systematic scale. See Known Gaps.

## 6. Depth & Elevation

| Level | Treatment | Use |
|---|---|---|
| Flat | No shadow | Backgrounds, text layers, uninteractive surfaces |
| Micro (10–15px) | `rgba(0, 0, 0, 0.1) 0px 4px 6px -1px, rgba(0, 0, 0, 0.1) 0px 2px 4px -2px` | Buttons, primary containers |
| Lift (12–28px) | `rgba(0, 0, 0, 0.06) 0px 12px 28px -8px, rgba(0, 0, 0, 0.03) 0px 4px 12px -4px` | Card hover, secondary containers |
| Deep (1–2px) | `rgba(0, 0, 0, 0.05) 0px 1px 2px 0px` | Minimal borders, hairline shadows |

**Shadow Philosophy:** This system employs layered micro-shadows rather than bold, single-layer elevation. Each level stacks multiple transparent black layers (6–10% opacity) at graduated distances (1–28px), creating a barely-perceptible lift. This approach aligns with the minimalist aesthetic: depth exists, but it is whispered, not shouted. The layered strategy preserves the dominance of typography and color blocking while providing tactile feedback on interaction.

### Opacity Levels

- `0.88` (88%) — Reduced-emphasis overlays, faded secondary content
- `0.06` (6%) — Micro-shadow opacity; heavily blurred, near-invisible lift

Additional opacity modulations observed in hover states:
- `0.7` (70%) — Hover text dimming
- `0.78` (78%) — Muted hover text
- `0.85` (85%) — Near-opaque hover backgrounds
- `0.9` (90%) — Strong visibility on hover
- `0.95` (95%) — Near-full opacity on hover

### Z-index / Layering

- **Base:** 1, 2, 3 — Content layers, static elements
- **Dropdown:** 10, 20, 30 — Navigation menus, popovers, overlays (tiered for nesting)
- **Sticky:** 200, 250 — Fixed headers, persistent navigation (reserved for always-visible surfaces)

The stacking order reserves z-index above 250 for the highest-priority surfaces and uses the 10–30 band for contextual overlays, preventing conflicts with fixed backgrounds.

## 7. Do's and Don'ts

### Do

- **Use uppercase text transforms on display and body scales** to reinforce the brand's confident typographic voice.
- **Maintain sharp, 0px border radius on interactive components** (buttons, cards) to preserve geometric purity.
- **Apply negative letter-spacing (−1.14px to −3px) on large headings** to tighten composition and convey sophistication.
- **Layer micro-shadows (6–10% opacity) for subtle depth** rather than applying bold, single-layer drops; this preserves the minimalist aesthetic.
- **Reserve white (`#FFFFFF`) for inverse text and dark-surface overlays** only; do not use it as a primary background.
- **Group interactive elements with consistent padding (`{spacing.lg}` and `{spacing.md}`)** to establish rhythm across the interface.
- **Use the 4-column grid consistently** across all breakpoints; prioritize content flow over grid collapse.
- **Apply hover states through shadow intensification and subtle transforms (scale 1.06–1.08, Y displacement ±2px)** rather than aggressive color shifts.

### Don't

- **Do not introduce rounded corners on buttons or primary containers**; the system commits to sharp geometry.
- **Do not use positive tracking (letter-spacing > 0) on body copy**; reserve positive spacing for code labels and captions only.
- **Do not mix uppercase and lowercase rendering** within the same typographic scale; commit to the transform once applied.
- **Do not apply bold, single-layer shadows**; always stack micro-layers (minimum two shadow declarations) for consistency.
- **Do not introduce a semantic color ramp (error, success, warning)** without explicit extraction data; the system does not declare status colors.
- **Do not add decorative gradients or mesh overlays** without evidence in the design tokens; this system is built on color blocking.
- **Do not exceed the 1256px content column width** on desktop; maintain the constrained container logic across all breakpoints.
- **Do not invent hover states for components not explicitly extracted**; refer to Known Gaps for unobserved interactions.

## 8. Responsive Behavior

### Breakpoints

| Breakpoint | Viewport | Content Width | Grid Cols | Heading Size | Changes |
|---|---|---|---|---|---|
| Mobile | 375px | 363px | 4 | 27px | Menu toggle visible; single-column layout; compact heading scale |
| Tablet | 768px | 744px | 4 | 54px | Menu toggle hidden; heading size doubles; navigation links visible |
| Desktop | 1024px | 1000px | 4 | 200px | Full-width layout; generous column spacing; large heading typography |
| Large | 1280px | 1256px | 4 | 250px | Headings approach display scale; maximum container width locked |
| XL | 1440px | 1416px | 4 | 281px | Near-display heading sizes; content centered with symmetric margins |

**Key transition:** The menu toggle appears at 375px and is hidden starting at 768px. Heading size scales continuously rather than stepping at discrete breakpoints. Content width grows proportionally until it reaches the 1256px max-width constraint at 1024px and above.

### Touch Targets

- **Minimum button height:** 40px (text buttons) to 52px (primary CTA buttons)
- **Minimum icon button:** 64px × 64px
- **Link tap area:** 44px height with `{spacing.xs}` padding
- **Navigation link:** 52px height, allowing comfortable mobile interaction

All interactive elements maintain 40px–64px dimensions to support finger interaction on mobile devices.

### Collapsing Strategy

- **Mobile (375px):** Single-column layout; menu toggle replaces horizontal navigation; heading typography compresses to 27px (`{typography.body-lg}` scale).
- **Tablet (768px):** Content expands to 744px width; horizontal navigation reappears (6 links visible at all breakpoints, no collapse); heading rises to 54px.
- **Desktop (1024px+):** Content column width locks at 1256px; heading typography scales to 200–281px depending on viewport; section spacing increases to `{spacing.band}` (48px).

All breakpoints maintain 4-column grid structure; no multi-column mobile layout. Layout adaptation happens through content width growth and heading scale modulation, not grid restructuring.

## 9. Agent Prompt Guide

### Quick Color Reference

- **Primary CTA & Headings:** `{colors.primary}` (`#000000`)
- **Page Background:** `{colors.canvas}` (`#F5F3F1`)
- **Body Text:** `{colors.body}` (`#626262`)
- **Inverse / Captions:** `{colors.muted}` (`#FFFFFF`)

### Iteration Guide

1. **All buttons default to `#000000` background with `#FFFFFF` text** unless explicitly marked as secondary (transparent background, `rgba(0, 0, 0, 0.7)` text) or icon variant.
2. **Apply uppercase text transform** to all typography scales except body-lg, body-lg-strong, and code variants (unless scale name includes "uppercase").
3. **Headings use negative letter-spacing (`−1.14px` at 37.9997px, `−3px` at 100px)**; tighten manually if letter-spacing appears loose.
4. **Sharp corners (0px radius) on all interactive elements except icon buttons (8px) and overlays (`9999px` for pill shapes).**
5. **Hover states combine shadow intensification (`rgba(0, 0, 0, 0.06) 0px 12px 28px -8px` band) with optional scale (1.06–1.08) and transform (translateY(−2px))**; avoid color-only hover feedback.
6. **Micro-shadow layers always use two-tier opacity: `rgba(0, 0, 0, 0.1) 0px 4px 6px -1px` for primary shadows and `rgba(0, 0, 0, 0.03)–0.06` for secondary layers.**
7. **Content column width grows from 363px (375px viewport) to 1256px (1024px+ viewport)**; do not exceed 1256px.
8. **Spacing follows the geometric scale: 4px base → 8px, 12px, 16px, 20px, 24px, 32px, 36px, 40px, 48px**; use these values exclusively for padding, margins, and gaps.
9. **Navigation and footer inherit heading text color (`#000000`) on light backgrounds; footer text uses `#FFFFFF` for dark overlays.**
10. **No semantic status colors (error, success, warning) are defined; report missing states under Known Gaps if required by the UI.**

## 10. Known Gaps

- **No semantic status color ramp:** The site does not expose error, success, warning, or info colors in its design tokens. If status-specific coloring is required, it must be added as a design extension outside this extraction.
- **No gradients or decorative patterns:** The extracted tokens contain no gradient definitions or mesh overlays. The system operates entirely on solid color blocking.
- **Limited interaction state coverage:** Only specific hover, focus-visible, and active states were observed on extracted components. Disabled states exist (opacity: 0.6) but may not cover all component variants; refer to the component-specific extraction data for precise coverage.
- **Dark mode not measured:** The extraction represents a single light theme with cream background and black text. A derived dark-mode version exists in the token data but was not observed on the live site and is not guaranteed to be used in production.
- **Single-page analysis:** Only the homepage was analyzed. Navigation to authenticated surfaces, additional page templates, or dynamic content was not captured.
- **Border-width scale not extracted:** Borders appear as inline 1px styles on icon buttons and form inputs but are not systematized into a broader scale; custom border logic may exist on other components.
- **Animation timing and easing:** The extracted tokens include transform properties (scale, translate, rotate) but no explicit duration or easing functions (transition-duration, cubic-bezier). Hover animation timings were not measured.
- **Focus-visible outline styles:** Multiple outline colors (`#000000`, `#FFFFFF`, border-radius: 0.25rem, 2px) were observed but may represent component-specific exceptions rather than a unified focus strategy.
- **Typography variants on nested selectors:** Some typography pairs (e.g., body-md vs. body-md-loose) appear to be applied to different DOM contexts rather than separate semantic roles; implementation should verify the exact selector tree.

---

**Document Version:** 1.0  
**Last Updated:** 2025  
**Source:** https://www.migss.dev/ (homepage analysis)