# Ode — Antigravity Build Playbook
### Next.js · Mock Cart/Checkout · JSON Catalog

Paste each block below into Antigravity in order. Stage 0 goes in once, at the top of your session, and stays active as your reference rules for every prompt after it.

---

## STAGE 0 — Rules Block (paste once, first message)

```
You are building "Ode," a premium canine wellness ecommerce site in Next.js (App Router, TypeScript, Tailwind CSS).

BRAND RULES (do not deviate):
- Colors (use as Tailwind theme extensions / CSS variables, never hardcode hex inline):
  --bone: #F4F1EA        (primary background)
  --obsidian: #1A1A1A    (text, borders, logo)
  --oat: #E2D9CE         (secondary surface)
  --sage: #7A8B76        (primary CTA fill)
  --clay: #BC7863        (secondary CTA / warm accent)
  --success: #5A7247
  --warning: #D4A373
  --error: #9B4A46
  --info: #6D8A96
- Typography: Serif display font "Ogg" (fallback: Georgia, 'Times New Roman', serif) for
  all H1/H2/product titles. Sans "Neue Haas Grotesk" (fallback: Inter, system-ui) for body,
  UI, and clinical/data text. Load via next/font with fallback stack; do not block render
  on Ogg — use font-display: swap.
- Buttons: 0px border-radius (sharp corners) always. Primary = solid Sage fill, Bone text.
  Secondary = 1px Obsidian outline, Obsidian text, transparent fill.
- Cards: no drop shadows. Either a 1px solid Obsidian border or a flat Oat background fill.
- Forms: 1px bottom-border only inputs (no full box), floating labels.
- Voice: calm, intelligent, refined. Never "fur-baby," "doggo," "pupper," "pet parent"
  (use "dog parent," "owner," or "you"). Never "holistic," "magic," "miracle."
- ONE primary CTA per screen. Every persuasive claim must be paired with a proof point
  (vet-formulated badge, ingredient dose, review, guarantee) — no unsupported claims.
- Honest persuasion only: no fake urgency, no fake scarcity, no dark-pattern countdowns.
- Mandatory verification: after generating or changing any screen, render it and check
  BOTH 375px and 1440px viewport widths before calling it done. Never assume responsiveness
  — actually resize/screenshot and look.

PROJECT SETUP:
- Framework: Next.js 14+, App Router, TypeScript, Tailwind CSS.
- Cart & Checkout: mock/local state only — no real payment processor. Use React Context
  or Zustand for cart state (items, quantities, subtotal), persisted to memory only
  (no localStorage). Checkout is a UI-only flow ending in a fake order confirmation
  with a generated order number — no real payment fields need to submit anywhere.
- Catalog data: hardcoded JSON file at /data/products.json. No CMS, no database.
- Images: product photos live in /public/products/. Logo in /public/logo.png.

Acknowledge these rules, then wait for the next prompt (project scaffold).
```

---

## STAGE 1 — Project Scaffold

```
Scaffold the Next.js project per the rules above.

1. Initialize Next.js 14 App Router + TypeScript + Tailwind.
2. Extend tailwind.config with the Ode color tokens (bone, obsidian, oat, sage, clay,
   success, warning, error, info) and the two font families (font-display for Ogg/serif,
   font-body for Neue Haas Grotesk/Inter), each with the fallback stacks specified.
3. Create /data/products.json with 6 SKUs, matching this exact data:

   [
     { "id": "joint-support", "name": "Joint Support", "tagline": "Mobility & Comfort",
       "price": 42, "skuColor": "#6D8A96", "ingredients": ["Glucosamine","Chondroitin","MSM"],
       "size": "60 Soft Chews · 8.5 oz (240g)", "image": "/products/joint-support.jpg" },
     { "id": "skin-coat", "name": "Skin & Coat", "tagline": "Radiance & Nourishment",
       "price": 38, "skuColor": "#BC7863", "ingredients": ["Omega-3","Biotin","Zinc"],
       "size": "60 Soft Chews · 8.5 oz (240g)", "image": "/products/skin-coat.jpg" },
     { "id": "gut-health", "name": "Gut Health", "tagline": "Digestive Balance & Immune Support",
       "price": 40, "skuColor": "#7A8B76", "ingredients": ["Probiotics","Prebiotics","Digestive Enzymes"],
       "size": "60 Soft Chews · 8.5 oz (240g)", "image": "/products/gut-health.jpg" },
     { "id": "calming", "name": "Calming", "tagline": "Relaxation & Balance",
       "price": 38, "skuColor": "#E2D9CE", "ingredients": ["L-Theanine","Ashwagandha","Chamomile","Melatonin"],
       "size": "60 Soft Chews · 8.5 oz (240g)", "image": "/products/calming.jpg" },
     { "id": "multivitamin", "name": "Multivitamin", "tagline": "Daily Health & Vitality",
       "price": 36, "skuColor": "#5A7247", "ingredients": ["25+ Essential Vitamins & Minerals","Whole Food Blend","Antioxidants"],
       "size": "60 Soft Chews · 8.5 oz (240g)", "image": "/products/multivitamin.jpg" },
     { "id": "immunity", "name": "Immunity", "tagline": "Protection & Resilience",
       "price": 38, "skuColor": "#D4A373", "ingredients": ["Immune Support Blend","Vitamin C & E","Zinc","Elderberry"],
       "size": "60 Soft Chews · 8.5 oz (240g)", "image": "/products/immunity.jpg" }
   ]

4. Set up a CartContext (React Context + useReducer) with: items[], addItem, removeItem,
   updateQuantity, subtotal. No persistence — memory only.
5. Set up the base layout: header (logo left, Shop/Science/About nav center, cart+account
   icons right — transparent over hero, solid Bone on scroll), footer (Oat background,
   newsletter signup, legal links, social).
6. Place the 6 product images and logo.png into /public/products/ and /public/ respectively
   using these exact filenames: joint-support.jpg, skin-coat.jpg, gut-health.jpg,
   calming.jpg, multivitamin.jpg, immunity.jpg, logo.png.

Output the file tree and confirm scaffold is running before proceeding. Do not build any
page content yet — this cycle is scaffold only.
```

---

## STAGE 2 — Screen Build Loops (one screen per cycle, one change per cycle)

Run each block below as its own cycle. Do not combine screens. After each generation, follow the **Observation Checklist** (bottom of this doc) before moving to the next screen.

### Cycle 2.1 — Landing Page

```
Build the Landing page (app/page.tsx) only. Do not touch other routes.

Sections, top to bottom:
1. Announcement bar: thin Obsidian bar, Bone text, centered: "Free shipping on orders
   over $50 — 30-Day Guarantee"
2. Hero: 60/40 split on desktop (stacks on mobile, image on top). Left: Bone background,
   Ogg display H1 "The science of their best life." + one line of supporting body copy +
   ONE primary CTA button ("Shop the Ritual", Sage fill) linking to /shop. Right: one of
   the product lifestyle images, generously cropped.
3. Trust bar: single row of 3-4 minimal proof points (e.g. "Vet Formulated" · "No
   Proprietary Blends" · "Third-Party Tested" · "Made in USA"), 1px line-art style, no icons
   needed yet — text + thin divider is fine.
4. Value props: 3-column (1-column stacked on mobile) scannable section — each with a
   short Ogg subhead and one sentence of Neue Haas Grotesk body copy, each claim paired
   with a proof point (e.g. "Clinically Dosed — exact milligram amounts, always").
5. Featured products: horizontal scroll row of all 6 products (image, name, tagline,
   price) linking to /shop/[id].
6. Social proof block: 3 short customer quote cards, Oat background, no drop shadow,
   1px Obsidian border, star rating.
7. Closing CTA band: full-width Sage background, Bone text, restated headline + ONE
   CTA button (Obsidian outline on Sage, or Bone fill) to /shop.

Rules check before you finish: exactly one primary CTA in the hero, exactly one in the
closing band (nav/product links don't count). Every claim in the value props has a
paired proof point. Render at 375px and 1440px, confirm no horizontal scroll, confirm
hero image doesn't get cropped awkwardly on mobile. Report what you see at both widths.
```

### Cycle 2.2 — Product Listing Page (PLP)

```
Build the PLP (app/shop/page.tsx) only.

1. Collection banner: Oat background, Ogg headline "Targeted Support."
2. Filters: horizontal pill-shaped filter buttons (Joints, Skin, Gut, Calming, Vitality,
   Immunity — map to product ids) + a sort dropdown (Price: Low-High, High-Low, Alphabetical).
   Filters are client-side state, no page reload.
3. Product grid: 3-column desktop, 1-column (or 2-column staggered) mobile. Cards:
   product image centered on Bone, product name (Ogg), tagline (Neue Haas Grotesk italic),
   a static 5-star rating row, and a "Quick Add +" text link (not a heavy button) that adds
   to cart via CartContext and opens a lightweight cart drawer/toast confirmation — no
   full page navigation on quick add.
4. Clicking the product image or name navigates to /shop/[id].

Rules check: this is the multi-product screen — verify all 6 SKUs render correctly with
their real skuColor accents, filters actually narrow the grid, Quick Add updates the cart
count in the header without a page reload. Render at 375px and 1440px — confirm grid
reflows from 3-col to 1/2-col cleanly and pill filters wrap sensibly on mobile. Report both.
```

### Cycle 2.3 — Product Detail Page (PDP)

```
Build the PDP (app/shop/[id]/page.tsx) only, using the product JSON as the data source.

Left (sticky on desktop, stacks first on mobile): image gallery — use the single product
lifestyle photo as the hero image; duplicate/crop it into 2-3 additional gallery
thumbnails (macro crop, alternate crop) since we only have one photo per SKU.

Right (scrolls):
- Breadcrumb: Shop / [Product Name]
- Product title (Ogg, large) + link down to reviews
- Tagline / benefit summary sentence
- Price + a subscribe-and-save toggle (mock: "Subscribe & Save 15%" vs "One-Time Purchase" —
  just changes displayed price, no real subscription logic)
- ONE primary CTA: "Add to Ritual" (Sage fill) — adds to cart via context
- Three accordions: "Ingredients" (list from JSON + one sentence per ingredient),
  "How to Use" (weight-based dosing table, can be reasonable placeholder text),
  "The Science" (short paragraph, calm/authoritative tone, no unsupported claims)
- Trust badges row: "Vet Formulated," "Made in USA," "No Proprietary Blends"
- Reviews section below the fold: 3-5 static review cards with star ratings
- Related products: 3 other SKUs as small cards, linking to their own PDPs

Mobile-specific: once the user scrolls past the initial buy box, a fixed bottom bar
appears with product name, price, and the "Add to Ritual" CTA.

Rules check: exactly one primary CTA (the sticky/fixed one on mobile is the same action,
not a second CTA). Ingredients/dosing claims are paired with the vet-formulated proof
badge nearby. Render at 375px and 1440px — confirm the sticky bottom bar appears only
after scroll on mobile, and the gallery/accordion layout doesn't break at either width.
Report both.
```

### Cycle 2.4 — Cart

```
Build the Cart as a slide-out drawer (component, triggered from header cart icon) — not
a full page route.

- Header: "Your Ritual" + item count, close button
- Line items: thumbnail, name, editable quantity (+/- stepper), price, remove (x)
- Free shipping progress bar: "You're $X away from free shipping" based on current subtotal
  vs $50 threshold (calculate live from CartContext)
- Upsell row: "Complete the routine" — suggest one product NOT already in the cart, with
  a 1-click add
- Footer: subtotal, ONE primary CTA "Checkout" (Sage fill) linking to /checkout, and one
  line of reassurance text ("30-Day Money-Back Guarantee · Free Returns")
- Empty state: "Your cart is currently empty. Let's start building your dog's wellness
  ritual." + a CTA back to /shop

Rules check: quantity changes and removal update the subtotal and free-shipping bar live.
One primary CTA (Checkout) — the upsell add and the empty-state CTA are not competing
primary actions since they only show in mutually exclusive states. Render the drawer at
375px (should take full/near-full width) and 1440px (should be a fixed-width side panel).
Report both.
```

### Cycle 2.5 — Checkout

```
Build the Checkout page (app/checkout/page.tsx) — single-flow, minimal friction, mock only.

- Bone background, logo centered at top, no header nav (reduce exit paths)
- Order summary (collapsed/expandable on mobile, visible side column on desktop): line
  items, subtotal, shipping, total — pulled from CartContext
- Express payment row (visual only, non-functional): Apple Pay / Google Pay / Shop Pay
  style buttons at the top
- Form fields, only what earns its place: email, shipping address (name, address, city,
  state/zip, country), shipping method (radio, 1-2 options). NO payment field needed to
  actually process — on submit, generate a fake order number and route to
  /order-confirmation with that number.
- Floating labels, 1px bottom-border inputs, inline validation (a green checkmark once a
  field is validly filled)
- Trust messaging near the submit button: "Secure checkout" + "30-Day Money-Back Guarantee"
- ONE primary CTA: "Place Order" (Sage fill), full-width on mobile

Rules check: exactly one primary CTA. No unnecessary fields (no company name, no phone
unless needed for shipping, no account-creation forced). Render at 375px (single column,
summary collapses above or below form) and 1440px (two-column: form left, summary right,
sticky). Report both.
```

### Cycle 2.6 — Order Confirmation

```
Build the Order Confirmation page (app/order-confirmation/page.tsx), reading the fake
order number passed from checkout (query param or router state — mock only, no real
order storage needed beyond this).

- Headline: "Welcome to the Ode family." (Ogg)
- Order number + order summary (items, total) recap
- Emotional lifestyle image (reuse one of the product lifestyle photos)
- "What happens next" — simple 3-step timeline (Processing → Shipped → Delivered) with
  estimated dates (mock, e.g. "Arrives in 3-5 business days")
- ONE retention hook: honest, not manipulative — e.g. a link to "How to introduce a new
  supplement to your dog's routine" (can be a simple placeholder /blog page or just a
  styled link, doesn't need real content behind it yet)
- No primary CTA competing with the retention link — the page's job is reassurance, not
  a hard sell

Rules check: nothing manipulative in the retention hook (no fake countdown, no guilt
language). Render at 375px and 1440px — confirm timeline and image layout hold at both.
Report both.
```

---

## Observation Checklist (run after every cycle, before approving)

- [ ] Rendered and visually checked at **375px** — no horizontal scroll, no overlapping text, touch targets feel tappable
- [ ] Rendered and visually checked at **1440px** — content doesn't stretch edge-to-edge awkwardly, generous margins held
- [ ] Exactly **one primary CTA** visible per screen (secondary/tertiary links are fine, but only one visually dominant action)
- [ ] Every persuasive claim on the screen has a **paired proof point** nearby (badge, review, ingredient dose, guarantee)
- [ ] No banned words used (fur-baby, doggo, pupper, pet parent, holistic, magic, miracle)
- [ ] No fake urgency/scarcity patterns
- [ ] Buttons are 0px radius, cards have no drop shadow
- [ ] This cycle changed **one thing** — if the AI touched unrelated files/screens, reject and re-scope before accepting

If any box fails: send a **critique + refine** prompt back before moving to the next screen — e.g. *"At 375px the hero CTA button text wraps to two lines — fix by reducing padding or font-size at the sm breakpoint only. Don't touch anything else."*

---

## After All 6 Screens Are Built

Run one final cross-screen consistency pass:

```
Do a full site consistency pass across all 6 screens. Check: header/footer render
identically on every route, cart state persists correctly when navigating between
screens (PLP add → Cart drawer → Checkout → Confirmation), color tokens are applied
via the Tailwind theme (not hardcoded hex) everywhere, and Ogg/Neue Haas Grotesk load
correctly with fallback on all pages. Render the full user journey at 375px and 1440px
end to end and report any inconsistency found.
```
