# design.md — "Phoning" Website (NewJeans-inspired)

> A responsive **website** design system and spec. On desktop, the site is a pastel Y2K world with a playable retro handset at its center. On mobile, the same site reshapes into a full-screen, app-like handset experience with a bottom dock.
>
> **Scope note:** Inspired by the *feel* of NewJeans' Phoning concept (retro handset, soft pastels, playful low-fi charm). It does not reuse official logos, photos, audio, or artwork. Replace all placeholders with licensed assets before launch.

---

## 1. Overview

| | |
|---|---|
| **What it is** | A website where fans "receive" calls and texts from idols on a retro handset, collect keepsakes, and customize their device. |
| **Audience** | Fans 13–30, mostly on phones, nostalgic for flip phones and early-2000s web culture. |
| **Primary job** | Make each visitor feel the idol is reaching out to them personally. |
| **Secondary jobs** | Unlock keepsakes, personalize a handset, share it, come back daily. |
| **Design stance** | Desktop = a scrapbook-style room around a handset. Mobile = you *are* holding the handset. |

### Core loop
1. Land on the site, tap to power on the handset.
2. A call or message arrives. Answer it.
3. Unlock a keepsake (wallpaper, ringtone, sticker).
4. Decorate the handset, share it, return tomorrow.

---

## 2. Design Principles

1. **The handset is the hero.** Every page either shows it or serves it. The site is built around one object, not a stack of generic sections.
2. **One loud moment per view.** Usually the ringing handset. Everything else stays soft and quiet.
3. **Low-fi on purpose, never broken.** Pixel type and chunky keys for charm; modern contrast, tap targets, and performance underneath.
4. **Mobile is not a shrunken desktop.** Layout, navigation, and the handset itself change shape per breakpoint.
5. **Invite, never nag.** No fake urgency, no streak guilt.
6. **Everything is tactile.** Buttons press, keys click, with sound and motion always optional.

---

## 3. Voice & Copy

- Short, friendly, sentence case, lightly nostalgic. Era emoticons (`^_^`, `♡`) sparingly.
- Name things by what they do: "Messages", "Call log", "Keepsakes".
- Errors say what happened and what to do; they don't apologize or blame.

| Situation | Do | Don't |
|---|---|---|
| Landing CTA | "Power on" | "Get started now!!" |
| Incoming call | "Incoming call" / "Answer" / "Not now" | "Pick up!!!" |
| Missed call | "Missed call at 9:41. Call back anytime." | "You missed her! 😢" |
| Empty inbox | "No messages yet. Check back later." | "Nothing here." |
| Offline | "No signal. Saved calls still play." | "Oops, something went wrong." |
| Unlock | "Wallpaper saved to Keepsakes." | "You won!" |

---

## 4. Site Map

```
/                 Home (hero handset, today's call, keepsake preview)
/calls            Call log + replay
/messages         Threads
/keepsakes        Gallery: wallpapers, ringtones, stickers, shells
/customize        Handset builder + share card
/about            What Phoning is, FAQ, credits
/settings         Sound, notifications, language, accessibility, account
/legal            Terms, privacy, licensing
```

**Global navigation**
- **Desktop/tablet:** slim top bar (logo, 5 links, sound toggle, account).
- **Mobile:** top bar shrinks to logo + sound; primary navigation moves to a **bottom dock** (Home, Calls, Messages, Keepsakes, Customize).

---

## 5. Visual Language

### 5.1 Mood
Translucent plastic, sticker-sheet pastels, chrome trim, glossy keys, pixel LCD type, blurry digicam photos. A 2004 phone on a pastel desk, not a glossy tech brand.

### 5.2 Color tokens

| Token | Hex | Use |
|---|---|---|
| `--denim-500` | `#5B8DEF` | Primary, links, selection |
| `--denim-700` | `#2F5FC4` | Pressed, strong text on light |
| `--sky-200` | `#CFE3FF` | Handset body, soft surfaces |
| `--sky-50` | `#F2F8FF` | Page background |
| `--milk-100` | `#FFFFFF` | Cards, panels, LCD highlight |
| `--bubblegum-300` | `#FFB8D9` | Accent, hearts, user bubbles |
| `--bubblegum-500` | `#FF7FBA` | Ring pulse, key moments |
| `--lime-300` | `#D7F28B` | Answer, success |
| `--chrome-300` | `#C9D1DC` | Borders, bezels |
| `--chrome-600` | `#6B7685` | Secondary text, icons |
| `--ink-900` | `#1B2230` | Primary text |
| `--alert-500` | `#E5484D` | End call, errors |

**Dark ("night handset")**: background `#0F1626`, surface `#182238`, raised `#22304D`, text `#EAF1FF`, secondary `#9AA9C4`, primary `#7FA8FF`, accent `#FF8EC4`.

**Gradients (max one per view):**
- `--grad-handset`: `linear-gradient(160deg,#EAF3FF 0%,#BBD6FF 55%,#9CC0FF 100%)`
- `--grad-ring`: `radial-gradient(circle,#FFB8D9 0%,#FF7FBA 70%,transparent 100%)`
- `--grad-gloss`: `linear-gradient(180deg,rgba(255,255,255,.75),rgba(255,255,255,0) 55%)`

Contrast rule: text meets WCAG AA. Pastel never sits on pastel with text; use `--ink-900` or `--denim-700`.

### 5.3 Typography

| Role | Typeface | Fallback | Use |
|---|---|---|---|
| LCD / display | DotGothic16 or Silkscreen | `monospace` | Inside the handset screen, clock, call labels, big page titles |
| UI / body | Pretendard | Inter, system-ui | Navigation, paragraphs, forms |
| Sticker / note | Gaegu or Jua | cursive | Stickers and handwritten notes only |

**Responsive type scale (desktop → mobile)**

| Token | Desktop | Mobile | LH | Use |
|---|---|---|---|---|
| `display-xl` | 72 | 44 | 1.0 | Hero headline (pixel) |
| `display-lg` | 40 | 30 | 1.1 | Caller name, page titles |
| `title` | 24 | 20 | 1.25 | Section titles |
| `body` | 17 | 16 | 1.55 | Paragraphs |
| `body-sm` | 14 | 14 | 1.45 | Meta |
| `caption` | 12 | 12 | 1.4 | Soft-key labels, badges |

Rules: pixel font never sets paragraphs; body line length under 65 characters; sentence case throughout; no all-caps labels. Use `clamp()` for fluid headings, e.g. `font-size: clamp(2.75rem, 6vw + 1rem, 4.5rem)`.

### 5.4 Spacing, radius, elevation
- **Spacing (4pt):** 4, 8, 12, 16, 24, 32, 48, 64, 96. Section padding: 96 desktop, 64 tablet, 40 mobile.
- **Radius:** xs 6, sm 10, md 16, lg 28 (LCD), xl 48 (handset), pill 999.
- **Elevation:** `e1` soft card, `e2` keys (`0 4px 0 #9CB4DE` lower edge + glow), `e3` handset (`0 24px 48px rgba(47,95,196,.28)`).
- Pressed keys move down 3px and collapse their lower edge.

### 5.5 Iconography & imagery
- 24px grid, 2px rounded stroke, chunky. Pixel glyphs for LCD only (signal, battery, envelope, heart).
- Photos: slightly overexposed, soft flash, 16px corners, optional pixel frame. No heavy filters.
- Stickers: die-cut with 4px white outline.
- Use illustrated avatars as placeholders until licensed photos exist.

---

## 6. Responsive Framework

### 6.1 Breakpoints

| Name | Width | Layout summary |
|---|---|---|
| `xs` | ≤ 480 | App-like: full-screen handset, bottom dock, single column |
| `sm` | 481–767 | Large phone / small tablet: same as xs, handset capped at 420px, centered |
| `md` | 768–1023 | Tablet: handset centered with content stacked below, top nav appears |
| `lg` | 1024–1439 | Desktop: two columns, handset left/center, content right |
| `xl` | ≥ 1440 | Wide: three zones with floating stickers and a keepsake rail |

Build **mobile-first** in CSS (`min-width` queries). Container max-width: 1200px (`lg`), 1360px (`xl`). Gutters: 16 (xs), 24 (md), 40 (lg+).

### 6.2 What changes per breakpoint

| Element | Mobile (xs/sm) | Tablet (md) | Desktop (lg/xl) |
|---|---|---|---|
| Navigation | Bottom dock (5 icons + labels) | Top bar, links collapse to icons | Full top bar with text links |
| Handset | Fills viewport, number pad hidden, D-pad + call/end keys only | 380px centered, compact pad | 380–420px, full pad, floats with parallax stickers |
| Content | One column below/inside screens | One column below handset | Side panel beside handset |
| Keepsakes grid | 2 columns | 3 columns | 4–5 columns |
| Modals | Bottom sheet | Centered dialog | Centered dialog |
| Hover effects | None (tap states only) | Light | Key glow, sticker wiggle |
| Background stickers | Hidden | 3 faint | 8–12, parallax |

### 6.3 Mobile specifics
- Use `100dvh` for the handset container to avoid browser-bar jumps; respect `env(safe-area-inset-*)`.
- Bottom dock: 64px tall + safe area; tap targets 48×48 min; active item uses a filled icon and `--denim-500` pill.
- Thumb zone: primary actions (Answer, End, Reply) sit in the lower third.
- Swipe: horizontally between tabs inside Keepsakes; vertically to scroll threads. No hidden swipe-only actions.
- Orientation: landscape on phones shows the handset as a flip-open pose; if height < 420px, show the screen only with on-screen soft keys.
- Add to home screen supported (PWA manifest) for an app-like launch.

---

## 7. Page Layouts

### 7.1 Home

**Desktop (lg+)**
```
┌────────────────────────────────────────────────────────────┐
│ Phoning        Calls  Messages  Keepsakes  Customize   ♪ ☺ │
├────────────────────────────────────────────────────────────┤
│                                                            │
│  ✿ sticker           ┌───────────┐       Today             │
│                      │ ┌───────┐ │   ┌─────────────────┐   │
│  Pick up.            │ │LCD    │ │   │ Next call 9:00  │   │
│  Someone's calling.  │ │ 09:41 │ │   └─────────────────┘   │
│                      │ └───────┘ │   ┌─────────────────┐   │
│  [ Power on ]        │ ◀ ◉ ▶     │   │ New keepsake    │   │
│                      │ 1 2 3 ... │   └─────────────────┘   │
│       ♡ sticker      └───────────┘   ┌─────────────────┐   │
│                                      │ Recent messages │   │
│                                      └─────────────────┘   │
├────────────────────────────────────────────────────────────┤
│  Keepsake rail  [▢][▢][▢][▢][▢] →                          │
└────────────────────────────────────────────────────────────┘
```

**Mobile (xs)**
```
┌───────────────┐
│ Phoning    ♪  │
│ ┌───────────┐ │
│ │  09:41    │ │   ← handset fills screen
│ │ Wed Nov 11│ │
│ │ [wallpaper]│ │
│ │ Menu Calls│ │
│ └───────────┘ │
│   ◀  ◉  ▶    │
│  [Call] [End] │
├───────────────┤
│ ⌂  ☎  ✉  ▣  ✎ │   ← bottom dock
└───────────────┘
```
Scrolling past the handset reveals "Today" cards (next call, new keepsake, recent messages) as a single column.

**Hero rules**
- The hero **is** the handset. The headline is short and sits beside it on desktop, above it on mobile.
- "Power on" is the only primary CTA; it unlocks audio (browser autoplay policy) and boots the handset.

### 7.2 Incoming call (overlay on the handset)
- Handset gently shakes, ring pulse in `--grad-ring`, caller name in `display-lg`.
- **Desktop:** the rest of the page dims slightly and a "ringing" toast appears in the nav.
- **Mobile:** call takes over the full screen with big Answer (lime) and Decline (red) keys in the thumb zone.
- Unanswered after 30s → becomes "Missed call" with a Call back action.

### 7.3 Active call
- Full-bleed video/still inside the LCD (desktop) or edge to edge (mobile).
- Controls: mute, speaker, captions, reactions, end. Captions on by default.
- Reactions float up and fade; max 3 in flight.

### 7.4 Calls (log)
- **Desktop:** two panes. Left list grouped by day, right detail/replay.
- **Mobile:** list only; tapping opens a full-screen detail with back arrow.
- Icons plus text labels for incoming, outgoing, missed (never color alone).

### 7.5 Messages
- **Desktop:** thread list (320px) + conversation pane.
- **Mobile:** thread list → conversation as a pushed screen.
- Bubbles: idol `--sky-200` left, user `--bubblegum-300` right, max 78% width.
- Reply: 3–5 quick replies + emoji row; sticky composer above the dock (mobile).

### 7.6 Keepsakes
- Filter chips: All, Wallpapers, Ringtones, Stickers, Shells.
- Grid: 2 / 3 / 4–5 columns. Locked items show a padlock and an unlock hint.
- Detail: **desktop** side drawer; **mobile** bottom sheet with Set as wallpaper, Save, Share.

### 7.7 Customize
```
Desktop                            Mobile
┌───────────┬─────────────┐        ┌───────────────┐
│ Live      │ Shell       │        │ Live handset  │
│ handset   │ Keys        │        │ (top 45%)     │
│ preview   │ Charm       │        ├───────────────┤
│           │ Wallpaper   │        │ Tabs: Shell   │
│           │ LCD theme   │        │ Keys Charm …  │
│           │ [Share]     │        │ [swatches]    │
└───────────┴─────────────┘        │ [Share]       │
                                   └───────────────┘
```
- Preview updates instantly. Share generates a 1080×1350 card with the chosen display name only.

### 7.8 About
- Plain editorial layout: what Phoning is, how calls work, FAQ accordion, licensing credits. Handset shrinks to a small decorative element.

### 7.9 Settings
- Grouped list: Sound & vibration, Notifications (quiet hours), Language, Accessibility (captions, readable text, reduced motion), Account, Privacy.

### 7.10 Empty / offline / error
- Empty: pixel icon + one line + one action.
- Offline: "No signal" with zero-bar icon; cached calls still play.
- Error: says what failed and how to retry.

---

## 8. Components

| Component | Spec |
|---|---|
| **Top bar** | 64px, `--milk-100` at 85% with blur, logo in pixel font, text links, sound toggle, avatar. Hides on scroll down, returns on scroll up (mobile only). |
| **Bottom dock (mobile)** | 5 items, icon + 12px label, active = filled icon + pill. Hidden when keyboard is open. |
| **Handset** | SVG/CSS shell with `--grad-handset`, inner LCD radius 28, D-pad, soft-key labels, optional number pad. Scales with `transform: scale()` from a 380px base. |
| **Key button** | Pill, gloss overlay, `e2`. Primary denim, answer lime, end red. 48px min height. |
| **Soft key** | Text on LCD corners, verb labels ("Answer", "Back"). |
| **D-pad** | 4 zones + OK, 48px hit areas, haptic tick on supported devices. |
| **LCD list item** | 48px row; focus = filled denim bar with white text and pixel caret. |
| **Card** | `--milk-100`, radius 16, `e1`. Used only where grouping is needed, not on every block. |
| **Message bubble** | Radius 16, 4px tail corner, timestamp under last bubble in a group. |
| **Chip / quick reply** | Pill, 1px `--chrome-300` border; selected = `--bubblegum-300`. |
| **Sticker** | Die-cut, 4px white outline, `e1`. Draggable in Customize. |
| **Toast** | Pill, 2.5s, one line, verb matches the action ("Saved"). |
| **Dialog / sheet** | Dialog on md+, bottom sheet on xs/sm with drag handle. |
| **Badge** | 16px, `--bubblegum-500`, pixel numerals, caps at "9+". |
| **Footer (desktop/tablet)** | Links, language switcher, licensing credit. Hidden on mobile (links live in Settings and About). |

---

## 9. Motion & Sound

Motion answers input or announces the call. Nothing animates only to decorate.

| Moment | Motion | Timing |
|---|---|---|
| Power on | CRT flicker + handset rises | 600ms, `cubic-bezier(.2,.8,.2,1)` |
| Incoming call | Ring ripples + shake ±2° | Loop 1.2s |
| Key press | Depress 3px, overshoot release | 90ms / 140ms |
| LCD screen change | Pixel-stepped wipe | 180ms, `steps(6)` |
| Page route change | Handset stays; side content crossfades | 200ms |
| Reaction hearts | Rise and fade | 1.4s |
| Unlock | Sticker pop with slight bounce | 350ms |
| Desktop parallax | Background stickers drift on pointer move | Subtle, ≤ 12px |

- **Reduced motion:** no shake or parallax; ripples static; wipes instant.
- **Sound:** key tick, ringtone loop, pickup click, hang-up beep. Master mute plus per-category toggles. Audio starts only after "Power on".
- **Haptics (mobile):** light tick on keys, double pulse on incoming call.

---

## 10. Interaction & Behavior Rules

- Calls arrive in set windows (1–3 per day), respecting local time zone and quiet hours.
- One notification per call, plain copy; no repeat nudges within 6 hours.
- Each answered call unlocks at most one keepsake. No paid randomization.
- Missed calls can be called back within 24 hours.
- Reactions and presets only; no free-form messaging to idols. Block and report available for share cards.
- Keyboard map: arrows = D-pad, Enter = OK, Esc = Back, `C` = Call, `E` = End.

---

## 11. Accessibility

- WCAG 2.2 AA. Focus ring: 3px `--denim-700` with 2px white offset, visible on every interactive element.
- Captions on all media; transcripts for voice notes.
- "Readable text" toggle swaps pixel fonts for Pretendard.
- No color-only meaning (missed calls have icon + label).
- Screen reader labels are specific: "Answer call from [name]".
- Respect `prefers-reduced-motion`, `prefers-color-scheme`, and text zoom to 200% without horizontal scroll.
- No flashing faster than 3 times per second.
- Touch targets ≥ 48×48 on mobile; ≥ 44×44 on desktop.
- Skip link to main content; landmarks (`header`, `nav`, `main`) on every page.

---

## 12. Performance & Tech

- **Stack suggestion:** Next.js or SvelteKit, CSS variables for tokens, Web Audio for UI sounds, `<video playsinline>` for calls.
- **Budgets:** LCP < 2.5s on mid-tier mobile over 4G; initial JS < 170KB gzipped; handset shell is inline SVG/CSS (no raster).
- **Media:** lazy-load call video, preload only the next scheduled call, serve WebP/AVIF, adaptive video bitrate.
- **PWA:** manifest, offline cache for last 3 calls and keepsake thumbnails, theme-color matches `--sky-50`.
- **SEO/share:** server-rendered Home and About, Open Graph card showing the default handset, `lang` attribute per locale.
- **Storage:** handset config in account + local storage; no media blobs stored beyond the cache.
- **Analytics:** minimal, anonymous, consent-based.

### CSS starter

```css
:root {
  --denim-500:#5B8DEF; --denim-700:#2F5FC4;
  --sky-200:#CFE3FF;  --sky-50:#F2F8FF; --milk-100:#fff;
  --bubblegum-300:#FFB8D9; --bubblegum-500:#FF7FBA;
  --lime-300:#D7F28B; --chrome-300:#C9D1DC; --chrome-600:#6B7685;
  --ink-900:#1B2230; --alert-500:#E5484D;

  --font-lcd:'DotGothic16','Silkscreen',monospace;
  --font-ui:'Pretendard','Inter',system-ui,sans-serif;

  --r-md:16px; --r-lg:28px; --r-xl:48px; --r-pill:999px;
  --e-key:0 1px 0 rgba(255,255,255,.9) inset,0 4px 0 #9CB4DE,0 8px 12px rgba(47,95,196,.2);

  --gutter:16px; --section-y:40px;
  --fs-display-xl:clamp(2.75rem, 6vw + 1rem, 4.5rem);
}

body { background:var(--sky-50); color:var(--ink-900); font:400 1rem/1.55 var(--font-ui); }
.stage { min-height:100dvh; padding:env(safe-area-inset-top) var(--gutter) calc(64px + env(safe-area-inset-bottom)); }
.dock { position:fixed; inset:auto 0 0 0; height:calc(64px + env(safe-area-inset-bottom)); }
.handset { width:min(100%, 420px); margin-inline:auto; }

@media (min-width:768px){
  :root{ --gutter:24px; --section-y:64px; }
  .dock{ display:none; }
  .stage{ padding-bottom:var(--section-y); }
}
@media (min-width:1024px){
  :root{ --gutter:40px; --section-y:96px; }
  .home{ display:grid; grid-template-columns:1fr 420px 1fr; align-items:center; gap:48px; }
}
@media (prefers-color-scheme:dark){
  :root{ --sky-50:#0F1626; --milk-100:#182238; --sky-200:#22304D; --ink-900:#EAF1FF; --denim-500:#7FA8FF; }
}
@media (prefers-reduced-motion:reduce){ *{ animation:none!important; transition:none!important; } }
```

---

## 13. Do / Don't

**Do**
- Keep the handset believable and central.
- Switch to the bottom dock and full-screen handset on mobile.
- Keep one loud element per view.
- Write like a friend, in sentence case.

**Don't**
- Don't use official logos, photos, or audio without licensing.
- Don't shrink the desktop layout and call it mobile.
- Don't use pixel fonts for paragraphs.
- Don't use countdown pressure, streak shaming, or paid random rewards.
- Don't stack gradients, glows, and shadows on one element.

---

## 14. QA Checklist

- [ ] Tested at 360, 390, 768, 1024, 1440 widths
- [ ] Bottom dock clears the iOS home indicator; no overlap with composer
- [ ] `100dvh` handset doesn't jump when browser bars collapse
- [ ] Audio only starts after "Power on"
- [ ] Contrast checked in light, dark, and LCD themes
- [ ] Captions on every call; reduced-motion and mute paths work
- [ ] Keyboard-only navigation works across all pages
- [ ] Offline and error states reviewed
- [ ] Share card contains no personal data
- [ ] All media licensed or original placeholders

---

