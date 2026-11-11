# design.md — "Phoning" Web Edition (Y2K, based on NewJeans' Phoning app)

> A responsive **website** design system modeled on the structure and mood of NewJeans' official fan app *Phoning* (Weverse Company × ADOR, launched July 25, 2022): a shared "one phone" with a home screen of app icons, calls/LIVEs, messages, photos, calendar, and a playful "Website" folder of interactive toys, all wrapped in a retro scrapbook look.
>
> On desktop it's a Y2K desktop-and-phone world. On mobile it becomes the phone itself.
>
> **What comes from the real app vs. my interpretation**
> - *From public descriptions of the app:* home screen with icons for Calls, Messages, Photos, Calendar, Settings, and Website; group chat plus individual member chats with profile picture and status message; an official news/channel profile for schedules; photo folders (group + per-member); a calendar of schedules; LIVE video-call-style broadcasts; a "Website" folder with ID card creation, character dress-up, a cartoon version doing hook choreography, and album designing; retro scrapbook theme, pixelated font, sharp 90s-style icons, and ever-present gradients.
> - *My interpretation (not official):* exact colors, fonts, spacing, motion, layouts, web adaptation, and all copy. Treat tokens as a close-in-spirit starting point, not a pixel match.
> - **Do not** use official logos, member photos, voices, character art, or app screenshots. Use original placeholders until licensed.

---

## 1. Concept

**"Share one phone with your favorite group."**
The site is a single shared handset. You open icons, not menus. Every feature is a mini-app inside it.

| | |
|---|---|
| **Audience** | Fans 13–30, mostly on phones, nostalgic for the Y2K web (Cyworld, MSN, early blogs, GeoCities) |
| **Primary job** | Make visitors feel they're friends with the group, not customers |
| **Core features** | Calls/LIVE, Messages, Photos, Calendar, Settings, Website (toys) |
| **Emotional target** | Cozy, goofy, intimate, like scribbling in a friend's yearbook |
| **Design stance** | Desktop = Y2K desktop wallpaper with the phone as a window. Mobile = you hold the phone. |

---

## 2. Design Principles

1. **Icons first.** The home screen of app icons is the main navigation. Learn once, use everywhere.
2. **Scrapbook, not template.** Tape, stickers, torn edges, sticky notes, mismatched rotations. Slightly messy on purpose.
3. **Gradients everywhere, gently.** A soft gradient is the default backdrop; flat white is rare.
4. **Pixel for personality, sans for reading.** Pixel type labels things; normal type carries sentences.
5. **Friend voice.** Casual, warm, short. Never salesy.
6. **Mobile is the real thing.** Desktop wraps the phone with decoration; mobile removes the decoration and gives the phone the whole screen.
7. **Messy but usable.** Y2K clutter never beats contrast, tap targets, or performance.

---

## 3. Y2K Visual Language

### 3.1 Motifs (use these, in this order of priority)

| Motif | How it appears |
|---|---|
| **Gradient washes** | Blue → lilac → pink backdrops, sky-to-milk fades, holographic edges |
| **Pixel type & bitmap icons** | Labels, clocks, counters, status bar |
| **Sharp 90s icons** | Hard-edged, 2-tone, slight bevel, like early OS icons |
| **Scrapbook layering** | Photos with tape, paper scraps, sticky notes, doodle arrows, hand-drawn circles |
| **Retro window chrome** | Title bars with min/max/close, beveled buttons, scroll bars |
| **Digicam photos** | Flash-lit, date stamp in orange (`'22 07 25`), soft blur |
| **Sparkles & stars** | 4-point sparkles, star bullets, tiny hearts |
| **Web relics (light touch)** | Visitor counter, marquee ticker, "best viewed on…" badge, guestbook, blinking cursor |
| **Chrome & bubbles** | Silver trim, glossy bubble buttons, translucent plastic |

Rule of thumb: pick **three** motifs per screen, not all of them.

### 3.2 Color tokens

| Token | Hex | Use |
|---|---|---|
| `--denim-500` | `#4F86F7` | Primary, links, selection |
| `--denim-700` | `#2A55C0` | Pressed, text on light |
| `--sky-100` | `#E4F0FF` | Page base |
| `--sky-300` | `#B9D6FF` | Phone body, panels |
| `--lilac-300` | `#D3C6FF` | Gradient mid-tone |
| `--bubblegum-300` | `#FFC1DD` | Accent, hearts, user bubbles |
| `--bubblegum-500` | `#FF7EBB` | Ring, notifications |
| `--lime-300` | `#D9F58C` | Answer, success, highlighter |
| `--butter-300` | `#FFF0A8` | Sticky notes |
| `--chrome-200` | `#E6EAF0` | Window bars |
| `--chrome-400` | `#B5BECC` | Bevels, borders |
| `--chrome-600` | `#6A7586` | Secondary text |
| `--ink-900` | `#1A2030` | Primary text |
| `--alert-500` | `#E5484D` | End call, errors |
| `--stamp-orange` | `#FF8A3D` | Digicam date stamp |

**Signature gradients**
- `--grad-page`: `linear-gradient(170deg,#E4F0FF 0%,#D3C6FF 55%,#FFC1DD 100%)`
- `--grad-phone`: `linear-gradient(160deg,#F2F8FF 0%,#B9D6FF 60%,#9DBFFF 100%)`
- `--grad-holo`: `linear-gradient(120deg,#B9D6FF,#D3C6FF,#FFC1DD,#D9F58C,#B9D6FF)`
- `--grad-gloss`: `linear-gradient(180deg,rgba(255,255,255,.8),rgba(255,255,255,0) 55%)`

**Dark ("night mode")**: page `#0E1424 → #1E1A3A`, surface `#182238`, text `#EAF1FF`, primary `#7FA8FF`, accent `#FF8EC4`. Keep gradients, just deepen them.

Contrast: all text AA or better. Pastel never carries text on pastel; use `--ink-900` or `--denim-700`.

### 3.3 Typography

| Role | Typeface | Fallback | Use |
|---|---|---|---|
| Pixel display | DotGothic16 / Silkscreen / VT323 | `monospace` | Titles, labels, clock, counters, window title bars |
| UI & body | Pretendard (KR/EN) | Inter, system-ui | Messages, paragraphs, forms |
| Handwriting | Gaegu / Jua | cursive | Sticky notes, doodle captions, stickers |

**Responsive scale (desktop → mobile)**

| Token | Desktop | Mobile | Use |
|---|---|---|---|
| `display-xl` | 72 | 44 | Hero (pixel) |
| `display-lg` | 40 | 30 | Page titles, caller name |
| `title` | 24 | 20 | Window titles, section heads |
| `body` | 17 | 16 | Paragraphs, chat text |
| `body-sm` | 14 | 14 | Meta |
| `caption` | 12 | 12 | Icon labels, badges |

Rules: pixel font never sets paragraphs; sentence case; line length under 65 characters; use `clamp()` for fluid headings; optional "Readable text" toggle swaps pixel → Pretendard.

### 3.4 Shape, bevel, elevation
- **Radius:** `xs 4`, `sm 8`, `md 16`, `lg 28` (screen), `xl 48` (phone), `pill 999`. Windows use **square or 4px** corners for authentic chrome.
- **Bevel (retro buttons):** `box-shadow: inset 1px 1px 0 #fff, inset -1px -1px 0 #8A94A6, 2px 2px 0 rgba(26,32,48,.25)`.
- **Key/bubble button:** gloss overlay + `0 4px 0 #8FAEE6` lower edge.
- **Sticker:** 4px white outline + `0 2px 4px rgba(26,32,48,.2)`.
- **Scrap paper:** slight random rotation (−3° to +3°), torn-edge mask, tape strip at top.
- Pressed state: translate 2–3px down, lower edge collapses.

### 3.5 Iconography
- **App icons (home screen):** 64px, chunky 2-tone with a hard 1px dark outline and a small bevel, each on a rounded-square tile. One distinct color per icon.
- **UI icons:** 24px, 2px stroke, slightly square-ended.
- **Pixel glyphs:** signal bars, battery, envelope, heart, star, cursor.

| App | Icon idea | Tile color |
|---|---|---|
| Calls | Handset | `--lime-300` |
| Messages | Speech bubble | `--bubblegum-300` |
| Photos | Polaroid / camera | `--sky-300` |
| Calendar | Date page with star | `--butter-300` |
| Settings | Gear | `--chrome-200` |
| Website (Toys) | Globe / browser window | `--lilac-300` |

---

## 4. Information Architecture

Mirrors the app's home screen.

```
/                   Home (phone home screen with 6 icons)
/calls              Calls + LIVE (video-call style)
/messages           Channel (news), group chat, member chats
/photos             Group folder + per-member folders
/calendar           Schedule
/toys               "Website" folder: mini-apps
   /toys/id-card        Make your ID card
   /toys/dress-up       Dress-up with character versions
   /toys/dance          Cartoon hook-choreography viewer
   /toys/album          Design your album
   /toys/moving-photos  Animated photos (can be "coming soon")
/settings           Sound, notifications, language, accessibility, account
/about              What this is, FAQ, credits & licensing
```

**Navigation**
- **Home icons** are the main way in (any breakpoint).
- **Desktop/tablet:** a retro taskbar along the bottom (start-style "Phoning" button, open-window tabs, clock, volume).
- **Mobile:** system-style bottom bar with Back, Home, and Recents-like "Windows" button; in-app screens use a top title bar with a back arrow.

---

## 5. Responsive Framework

### 5.1 Breakpoints

| Name | Width | Layout |
|---|---|---|
| `xs` | ≤ 480 | **The phone is the screen.** Full-bleed, no decoration, bottom bar |
| `sm` | 481–767 | Phone capped at 440px, centered over gradient |
| `md` | 768–1023 | Phone centered + 2–3 floating windows/stickers around it |
| `lg` | 1024–1439 | Y2K desktop: phone center, widgets left/right, taskbar |
| `xl` | ≥ 1440 | Wider desktop: more scrapbook layers, side rails |

Build mobile-first (`min-width` queries). Container: 1200px (`lg`), 1360px (`xl`). Gutters 16 / 24 / 40.

### 5.2 What changes per breakpoint

| Element | Mobile | Tablet | Desktop |
|---|---|---|---|
| Frame | No phone bezel; screen fills viewport | Phone bezel visible, 440px | Phone bezel, 420px, with glossy shadow |
| Decoration | Hidden (gradient background only) | 3–4 stickers | 10–14 scrapbook elements, parallax |
| Navigation | Bottom bar (Back / Home / Windows) | Taskbar bottom | Taskbar bottom + start menu |
| Apps | Full-screen pages | Full-screen inside phone | Open as **draggable windows** beside the phone, or inside the phone (user setting) |
| Toys | Full-screen sheets | Phone + side panel | Side window with larger canvas |
| Modals | Bottom sheets | Dialog windows | Dialog windows with title bar |
| Hover | None | Light | Bevel glow, sticker wiggle |

### 5.3 Mobile specifics
- `100dvh` containers; honor `env(safe-area-inset-*)`.
- Primary actions in the lower third (Answer, Send, Save).
- Min tap target 48×48.
- Landscape on phones: toys switch to a wide canvas; chat and calls stay portrait-first.
- PWA manifest so it can live on the home screen as an icon.

---

## 6. Screens

### 6.1 Boot / Landing
- Black screen → pixel "Phoning" logotype types in with a blinking cursor → gradient wash → home screen. ≤ 1.5s, skippable.
- A **"Tap to power on"** gate unlocks audio (autoplay policy).

### 6.2 Home (the icon grid)

**Desktop**
```
┌──────────────────────────────────────────────────────────────┐
│  ✦ sticky note       ┌─────────────┐        ┌─ Notice.txt ─┐ │
│  "welcome ^_^"       │ ▂▄▆   09:41 │        │ New photos!  │ │
│                      │             │        └──────────────┘ │
│   [guestbook]        │ ☎  ✉  ◧    │        ┌─ Counter ────┐ │
│                      │ Calls Msgs  │        │ 000,512 visits│ │
│   ✿                  │ Photos      │        └──────────────┘ │
│                      │ ▦  ⚙  ◍    │                  ♡      │
│                      │ Cal Set Web │                          │
│                      └─────────────┘                          │
│ [▶ Phoning]  [Messages] [Photos]            🔊  09:41 PM     │
└──────────────────────────────────────────────────────────────┘
```

**Mobile**
```
┌───────────────┐
│▂▄▆  PHONING 🔋│
│               │
│   09:41       │
│               │
│ ☎   ✉   ◧    │
│Calls Msgs Photos
│ ▦   ⚙   ◍    │
│Cal  Set  Web  │
│               │
│  [wallpaper]  │
│───────────────│
│  ◀    ⌂    ▢  │
└───────────────┘
```
- Icon labels in pixel caption font. Notification badges on icons (pixel numeral, `--bubblegum-500`).
- Wallpaper is a gradient or user-picked image.

### 6.3 Calls & LIVE
- Looks like a **video-call screen**: full-bleed video, small self-view tile, pixel timer, caption bar.
- Calls list shows scheduled/past LIVEs with an "Empty for now" state that is cute, not blank (e.g., a sleeping phone doodle: "No calls yet. Check back soon.").
- Incoming LIVE: ring pulse in `--grad-ring`, caller name in pixel, big Answer (lime) / Not now (grey).
- Reactions: hearts and stickers float up; max 3 in flight.
- Captions on by default.

### 6.4 Messages
Structure follows the app: **Channel** (official news), **Group chat**, **Member chats**.

- **List view:** each row has avatar, name, status message, time, unread dot. Official channel row is pinned and tagged `OFFICIAL`.
- **Profiles:** show avatar + status message (short, editable by the group in the real product); no extra bio required.
- **Thread:** bubbles, idol side `--sky-300`, user side `--bubblegum-300`, 78% max width, pixel timestamps.
- **Channel posts:** card-style announcements with schedule links, event apply buttons, and "Open calendar" shortcuts.
- **Composer:** text, emoji, sticker tray, photo attach; sticky above the bottom bar on mobile.
- **Desktop:** two panes (list 320px + thread). **Mobile:** list → pushed thread.

### 6.5 Photos
- **Folders:** Group, plus one per member. Folder icons look like old OS folders with a tab and a sticker.
- **Grid:** 2 columns (mobile) / 3 (tablet) / 4–5 (desktop), photos get digicam date stamps and tape.
- **Viewer:** swipe/arrow navigation, pinch to zoom, save (with permission note), share.
- Group photos hide download if licensing requires.

### 6.6 Calendar
- A paper-calendar look: grid with star-marked event days, sticker per event type (LIVE, release, event).
- Tapping a day opens a sticky-note sheet with times shown in the viewer's time zone.
- "Add to my calendar" exports an `.ics`.

### 6.7 Toys (the "Website" folder)
A folder window containing mini-apps, shown as chunky tiles:

| Toy | What it does | Responsive notes |
|---|---|---|
| **ID card** | Pick a photo/avatar, name, fun fields (nickname, "fan since", favorite song) → generates a laminated ID with holographic strip and a barcode | Mobile: step-by-step form, card preview on top. Desktop: form left, live card right |
| **Dress-up** | Drag outfits, hair, accessories onto an illustrated character; save and share | Mobile: bottom drawer of items, tap to equip. Desktop: side wardrobe panel with drag and drop |
| **Dance** | A looping cartoon character performing hook choreography with a play/pause, speed, and mirror toggle | Autoplays muted; audio on tap |
| **Album designer** | Choose cover, color, stickers, track list order, text; export as image | Canvas scales to width; 1:1 export |
| **Moving photos** | Short looping photo clips; may show "Coming soon" state | Lazy-loaded, reduced-motion shows stills |

All exports include a small watermark/credit line and never embed personal data beyond the display name the user typed.

### 6.8 Settings
Grouped as a retro control panel: Sound & vibration, Notifications (quiet hours), Language, Display (light/night, readable text, reduced motion), Window mode (desktop: floating windows vs. inside phone), Account, Privacy, Help.

### 6.9 About & credits
- Plain, readable layout in a "Readme.txt" window: what this is, how it works, FAQ, licensing credits, and a clear **"fan-made concept"** notice if not official.

### 6.10 Empty / offline / error
- **Empty:** a doodle + one line + one action.
- **Offline:** "No signal" with zero bars; cached photos and last calls remain viewable.
- **Error:** a retro alert dialog with a bevel and an icon: states what failed and what to do. Never blames the user.

---

## 7. Components

| Component | Spec |
|---|---|
| **Phone shell** | SVG/CSS bezel with `--grad-phone`, speaker slit, inner screen radius 28, optional soft keys. Scales from a 380px base with `transform: scale()`. |
| **Status bar** | Pixel signal bars, "PHONING" carrier label, clock, battery. 24px tall. |
| **App icon tile** | 64px (mobile 56px), 2-tone icon on colored rounded tile, 1px dark outline, bevel. Label under in pixel caption. |
| **Retro window** | Title bar `--chrome-200` with pixel title and min/max/close squares, beveled body, optional scroll bar. Draggable on desktop. |
| **Taskbar (desktop)** | 44px, `--chrome-200`, "▶ Phoning" button, open windows as tabs, tray with volume, clock, language. |
| **Bottom bar (mobile)** | Back / Home / Windows, 56px + safe area, large targets. |
| **Bubble button** | Pill, gloss overlay, lower-edge shadow. Primary denim, answer lime, end red. 48px min height. |
| **Bevel button** | Square-ish retro button for secondary actions inside windows. |
| **Sticky note** | `--butter-300`, handwriting font, slight rotation, folded corner. |
| **Tape** | Semi-transparent strip, 2 per scrapbook photo. |
| **Sticker** | Die-cut, white outline, draggable in toys. |
| **Message bubble** | Radius 16, tail corner, pixel timestamp. |
| **Chip** | Pill, 1px `--chrome-400` border; selected = `--bubblegum-300`. |
| **Toast** | Retro "balloon" with pixel arrow, 2.5s, one line. |
| **Dialog / sheet** | Window-style dialog on md+, bottom sheet with drag handle on xs/sm. |
| **Marquee ticker** | Optional, single line, pauses on hover/focus and under reduced motion. |
| **Visit counter / guestbook** | Optional decorative widgets, desktop only; guestbook entries are preset stickers, no free text unless moderated. |
| **Badge** | 16px circle, `--bubblegum-500`, pixel digits, caps at "9+". |

---

## 8. Motion & Sound

| Moment | Motion | Timing |
|---|---|---|
| Power on | CRT flicker, then gradient wash | 600ms |
| Icon open | Icon scales up into a window/screen | 220ms, `cubic-bezier(.2,.8,.2,1)` |
| Window open/close (desktop) | Pop with slight overshoot / shrink to taskbar | 180ms |
| Screen transition (phone) | Pixel-stepped horizontal wipe | 180ms, `steps(6)` |
| Incoming LIVE | Ring ripples + shake ±2° | Loop 1.2s |
| Button press | Depress 3px, overshoot release | 90 / 140ms |
| Sparkles | Twinkle on stickers/hover | 1.5s loop, max 6 on screen |
| Desktop parallax | Stickers drift with pointer | ≤ 12px |
| Unlock / save | Sticker pop | 350ms |

- **Reduced motion:** no shake, parallax, or sparkle loops; wipes become cuts; marquee static.
- **Sound:** key tick, soft ringtone, pickup click, notification "ding". Master mute plus per-category toggles. Audio starts only after "Tap to power on".
- **Haptics (mobile):** light tick on icon open, double pulse on incoming LIVE.

---

## 9. Content & Voice

- Casual, warm, short. Light era emoticons (`^_^`, `♡`).
- Name things by what they do. Sentence case.

| Situation | Do | Don't |
|---|---|---|
| Power on | "Tap to power on" | "Click here to start!!!" |
| New LIVE | "Incoming call" | "OMG she's calling!!!" |
| Empty calls | "No calls yet. Check back soon." | "Nothing here." |
| Saved | "Saved to your photos." | "Success!" |
| Offline | "No signal. Saved photos still work." | "Oops, something went wrong." |
| ID card done | "Your ID card is ready." | "You're officially a fan now!" |

---

## 10. Interaction Rules

- LIVEs and notices follow a schedule; times are shown in the viewer's local time zone with quiet hours respected.
- One notification per event; no repeat nudges within 6 hours.
- Interactions are presets and stickers; no open chat with members. Any user-generated export (ID card, album, dress-up) uses a display name only and offers a report option.
- No paid randomization, countdown pressure, or streak shaming. If monetization exists (the original has in-app purchases), keep prices explicit and upfront.
- Keyboard: arrows move focus between icons/items, Enter opens, Esc goes back, `H` goes home.

---

## 11. Accessibility

- WCAG 2.2 AA. Focus ring: 3px `--denim-700` with 2px white offset, visible on all interactive elements, including icons and window controls.
- Captions for all video/audio; transcripts for voice notes.
- "Readable text" toggle replaces pixel fonts with Pretendard.
- Y2K decoration never blocks content: decorative layers are `aria-hidden` and `pointer-events: none`.
- No color-only meaning; use icon plus label.
- Honor `prefers-reduced-motion`, `prefers-color-scheme`, and 200% text zoom with no horizontal scroll.
- No flashing faster than 3 times per second (sparkles, holographic effects).
- Drag-and-drop toys always have a tap/keyboard alternative.
- Landmarks (`header`, `nav`, `main`) and a skip link on every page.

---

## 12. Performance & Tech

- **Stack suggestion:** Next.js or SvelteKit, CSS variables for tokens, canvas/SVG for toys, Web Audio for UI sound.
- **Budgets:** LCP < 2.5s on mid-tier mobile over 4G; initial JS < 170KB gzipped.
- **Assets:** phone shell and icons as inline SVG; pixel fonts subsetted; stickers as WebP/SVG; lazy-load photos and toy assets; preload only the next scheduled LIVE.
- **Decoration budget:** desktop scrapbook layers are CSS/SVG and count toward the JS-free paint; disable on `xs` and when `prefers-reduced-motion`.
- **PWA:** manifest, offline cache for last photos and messages, `theme-color` matches `--sky-100`.
- **Storage:** toy creations and settings stored per account; exports generated client-side.
- **Analytics:** minimal, anonymous, consent-based.

### CSS starter

```css
:root {
  --denim-500:#4F86F7; --denim-700:#2A55C0;
  --sky-100:#E4F0FF; --sky-300:#B9D6FF; --lilac-300:#D3C6FF;
  --bubblegum-300:#FFC1DD; --bubblegum-500:#FF7EBB;
  --lime-300:#D9F58C; --butter-300:#FFF0A8;
  --chrome-200:#E6EAF0; --chrome-400:#B5BECC; --chrome-600:#6A7586;
  --ink-900:#1A2030; --alert-500:#E5484D; --stamp-orange:#FF8A3D;

  --grad-page:linear-gradient(170deg,#E4F0FF 0%,#D3C6FF 55%,#FFC1DD 100%);
  --grad-phone:linear-gradient(160deg,#F2F8FF 0%,#B9D6FF 60%,#9DBFFF 100%);

  --font-pixel:'DotGothic16','Silkscreen','VT323',monospace;
  --font-ui:'Pretendard','Inter',system-ui,sans-serif;
  --font-hand:'Gaegu','Jua',cursive;

  --bevel:inset 1px 1px 0 #fff, inset -1px -1px 0 #8A94A6, 2px 2px 0 rgba(26,32,48,.25);
  --gutter:0px;
}

body { background:var(--grad-page); color:var(--ink-900); font:400 1rem/1.55 var(--font-ui); }
.phone { width:100%; min-height:100dvh; background:var(--grad-phone); }
.deco { display:none; }                     /* decoration off on mobile */
.apps { display:grid; grid-template-columns:repeat(3,1fr); gap:24px 12px; padding:24px 16px; }
.app-icon { min-width:48px; min-height:48px; font:400 12px var(--font-pixel); text-align:center; }
.bottom-bar { position:fixed; inset:auto 0 0; height:calc(56px + env(safe-area-inset-bottom)); }
.taskbar { display:none; }

@media (min-width:481px){ .phone{ width:440px; margin-inline:auto; border-radius:48px; min-height:auto; aspect-ratio:9/16; } }
@media (min-width:768px){
  .deco{ display:block; pointer-events:none; }
  .bottom-bar{ display:none; } .taskbar{ display:flex; }
}
@media (min-width:1024px){
  .stage{ display:grid; grid-template-columns:1fr 420px 1fr; gap:40px; align-items:center; padding:0 40px 44px; }
}
@media (prefers-color-scheme:dark){
  :root{ --grad-page:linear-gradient(170deg,#0E1424,#1E1A3A); --ink-900:#EAF1FF; --denim-500:#7FA8FF; }
}
@media (prefers-reduced-motion:reduce){ *{ animation:none!important; transition:none!important; } }
```

---

## 13. Do / Don't

**Do**
- Build the home screen of icons first; everything else hangs off it.
- Layer scrapbook details (tape, stickers, notes) on desktop; strip them on mobile.
- Use pixel type for labels, normal type for sentences.
- Keep gradients soft and consistent.
- Make the empty states charming.

**Don't**
- Don't copy official logos, photos, character art, voices, or screenshots.
- Don't use all Y2K motifs at once; pick three per screen.
- Don't use pixel fonts for paragraphs.
- Don't let decoration cover content or block taps.
- Don't use fake urgency, streak shaming, or paid random rewards.

---

## 14. QA Checklist

- [ ] Tested at 360, 390, 768, 1024, 1440 widths
- [ ] Decoration fully hidden on mobile; no horizontal scroll
- [ ] Bottom bar clears iOS home indicator; composer not overlapped
- [ ] `100dvh` phone doesn't jump when browser bars collapse
- [ ] Audio starts only after "Tap to power on"
- [ ] Contrast checked in light and night themes
- [ ] Captions on all LIVEs; reduced-motion and mute paths work
- [ ] Every drag-and-drop toy has a keyboard/tap alternative
- [ ] Offline and error states reviewed
- [ ] Exports contain no personal data beyond display name
- [ ] All media licensed or original placeholders; "fan-made" notice shown if unofficial

---

