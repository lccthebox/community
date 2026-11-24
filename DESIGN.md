# THEBOX Community Design System

## 1. Atmosphere & Identity

The international-facing sibling of the main THEBOX website: clear, spacious, photographic, and quietly energetic. The shared brand foundation is white space, black typography, documentary photography, and one purposeful THEBOX red action at a time. Community character appears in candid photo composition and concise English labels—not in a separate visual language.

People and community scenes must use real THEBOX documentary photography. Generated imagery is limited to non-human product or still-life scenes when an authentic source photo is unavailable; it must never substitute for participant portraits, classes, meetups, or events.

## 2. Color

| Role | Token | Value | Usage |
|---|---|---:|---|
| Paper | `--surface-paper` | `#ffffff` | Main canvas |
| Paper strong | `--surface-warm` | `#f7f6f3` | Alternating sections |
| Ink | `--ink` | `#171312` | Primary text and dark surfaces |
| Ink muted | `--ink-muted` | `#6f625b` | Supporting copy |
| Line | `--line` | `#d8c9b8` | Quiet separators |
| Brand | `--brand` | `#ef2f27` | Primary actions only |
| Brand hover | `--brand-hover` | `#d92720` | Primary hover |
| White | `--white` | `#ffffff` | Text on dark surfaces |
| Success | `--success` | `#24784b` | Confirmed status |

Supporting interface tokens: `--brand-light`, `--ink-soft`, `--ink-faint`, `--line-soft`, `--line-dark`, `--shadow-soft`, `--shadow-dialog`, and `--backdrop`. Raw component colors are not introduced outside this token set.

No decorative element uses brand red when a primary action is present nearby.

## 3. Typography

- Display: `Inter`, system sans-serif; fluid `clamp(3rem, 6.5vw, 6.75rem)`, weight 900, line-height `.87–.95`.
- Heading: `Inter`, 700–900; `clamp(2rem, 5.5vw, 5.75rem)`.
- Body large: `1.125rem`, line-height `1.65`.
- Body: `1rem`, line-height `1.65`; never below `0.875rem`.
- Label: `0.75rem`, 800, uppercase, tracked.
- Korean: `Noto Sans KR`, system sans-serif.
- CSS tokens: `--font-sans`, `--text-label`, and `--text-body`; display and heading sizes remain fluid component formulas documented above.

## 4. Spacing & Layout

- Base unit: `4px`.
- Scale: `4, 8, 12, 16, 20, 24, 32, 40, 48, 64, 80, 96px`.
- CSS spacing tokens use the matching `--space-*` names, with `--space-section` for the desktop section rhythm.
- Content width: `1440px`; reading width: `680px`.
- Gutters: `20px` mobile, `32px` tablet, `48px` desktop.
- Breakpoints: `640px`, `900px`, `1200px`.
- Document scroll is the only page scroll owner. Horizontal media rails own only their own axis.

## 5. Components

### Site Header
- Structure: brand, section navigation, one primary join action; mobile keeps the brand and join action visible while condensing section navigation.
- States: sticky, hover, pressed, focus-visible.
- Accessibility: real buttons/links, `aria-expanded`, Escape close, 44px targets.

### Action
- Variants: primary red, secondary ink-outline, quiet text.
- States: default, hover lift, pressed reset, focus ring, disabled opacity.
- Motion: transform and shadow only; reduced motion becomes color-only.

### Program Card
- Structure: label, title, fit statement, benefit list, schedule and apply actions.
- Variants: Korean class, language exchange.
- Accessibility: descriptive actions and semantic lists.

### Hero Media
- Structure: one documentary photograph and one compact factual note; no decorative photo pile.
- Alignment: follows the main THEBOX split hero and THEBOX GO text-plus-feature-card composition.
- Responsive: desktop uses the split copy/photo composition. Below `900px`, the photograph becomes a full-bleed hero background with a dark directional overlay; copy, actions, stats, and the factual note stay readable above it.

### Modal Form
- Structure: labelled dialog, concise grouped fields, local error and success states.
- Accessibility: focus containment, Escape close, focus restoration, labelled controls.

## 6. Motion & Interaction

- Micro: `140ms ease-out`; standard: `240ms ease-in-out`; emphasis: `480ms cubic-bezier(.16,1,.3,1)`.
- Only `transform`, `opacity`, and `filter` animate.
- Scroll reveal uses IntersectionObserver.
- Reduced motion removes travel and autoplay while preserving state feedback.

## 7. Depth & Surface

Main-site-aligned mixed strategy: quiet dividers and tonal surface shifts structure the page. A restrained soft shadow may lift photo cards; hard offset shadows and heavy black frames are not used. Radius scale: `4px`, `8px`, `16px`, pill.

## 8. Accessibility Constraints & Accepted Debt

- Target WCAG 2.2 AA, visible focus, 4.5:1 body contrast, 44px touch targets, keyboard-reachable dialogs, reduced-motion support.
- Accepted debt: form submission uses `no-cors`, so the browser cannot verify the server response body. The UI reports successful handoff after the request is sent; production monitoring should verify Apps Script receipt.
