
# Divya Path — Devotional Companion App

A serene, modern devotional app featuring stotras, aartis, and prarthanas with a built-in jaap counter, bilingual script toggle (Devanagari ↔ English), and an animated divine background. Packaged for Android via Capacitor so you can build a real APK.

---

## 1. Visual Design & Feel

**Mood:** Calm, sacred, modern — like a temple at dawn. Subtle 3D depth, no clutter.

- **Palette:** Warm saffron (#FF9933 family), deep maroon, soft gold, cream/ivory background, with a midnight-indigo dark mode for evening paath.
- **Typography:**
  - Devanagari: *Tiro Devanagari Hindi* / *Noto Serif Devanagari* — beautiful, readable, traditional.
  - English: *Cormorant Garamond* (headings) + *Inter* (UI).
  - Adjustable font size slider (small / medium / large / xl) for elders.
- **Animated divine background (always present, subtle):**
  - Soft animated rays of light radiating from top-center (slow rotation, ~60s loop).
  - Floating golden particles / diya glow drifting upward.
  - Faint Om / mandala watermark with gentle parallax on scroll.
  - GPU-accelerated CSS animations — battery-friendly, pauses when tab hidden.
- **3D feel:** Layered cards with soft shadows + subtle tilt-on-scroll, glassmorphism on the jaap counter banner, depth via blurred radial gradients (no heavy WebGL).
- **Readability guard:** Text always sits on a softly blurred ivory/indigo "scroll" panel so the animated background never competes with the words.

---

## 2. App Structure (Screens)

```text
┌─────────────────────────────────────────┐
│  HOME                                   │
│  ┌───────────────────────────────────┐  │
│  │  JAAP COUNTER BANNER (sticky)     │  │
│  │  ☀ rays bg · count · +1 tap · 🔄  │  │
│  └───────────────────────────────────┘  │
│  Greeting · Today's mantra              │
│  Categories: Stotra · Aarti · Prarthana │
│  Recently read · Favorites              │
└─────────────────────────────────────────┘
   ↓
┌─────────────────────────────────────────┐
│  LIBRARY (filter + search)              │
│  Cards grouped by deity / category      │
└─────────────────────────────────────────┘
   ↓
┌─────────────────────────────────────────┐
│  READER                                 │
│  Title · Deity · Toggle [देव / EN]      │
│  Font size · ♥ favorite · 🔊 (later)    │
│  Verse-by-verse text on parchment panel │
└─────────────────────────────────────────┘

JAAP (full page) · SETTINGS
```

**Screens:**
1. **Home** — sticky jaap banner, daily mantra, category tiles, continue-reading.
2. **Library** — searchable, filterable list (by deity, by type).
3. **Reader** — the stotra itself, with script toggle, font controls, favorite, share.
4. **Jaap (full)** — pick mantra, set target (108 / 1008 / custom), large tap zone, vibration + soft chime at every 108, daily streak, history.
5. **Settings** — theme (light/dark/auto), default script, font, haptics on/off.

---

## 3. Content Strategy

**Starter content (bundled, ready on day 1) — 6 classics with both scripts:**
- Hanuman Chalisa
- Shree Ganesh Aarti (Sukhakarta Dukhaharta)
- Shiva Tandava Stotram
- Gayatri Mantra
- Mahamrityunjaya Mantra
- Om Jai Jagdish Hare

**Adding more later (you can do this anytime):**
Each stotra is a simple JSON file in `src/content/stotras/`:
```json
{
  "id": "hanuman-chalisa",
  "title_dev": "श्री हनुमान चालीसा",
  "title_en": "Shri Hanuman Chalisa",
  "deity": "Hanuman",
  "category": "stotra",
  "verses": [
    { "dev": "...", "en": "..." }
  ]
}
```
Just drop a new JSON file in and it appears in the Library — no code changes.

**Adding from your PDF books — honest guidance:**
- **Digital (typed) PDFs:** Text extracts cleanly with `pdftotext`. Devanagari usually preserves perfectly, but spacing/line breaks need a quick visual proofread. Recommended.
- **Scanned/image PDFs:** Need OCR (Tesseract with Hindi/Sanskrit). Output is ~95% accurate — **matras and conjuncts can shift**, so for sacred texts you must proofread every verse. Not safe to publish unread.
- **Recommended workflow:** You share a PDF → I extract → you (or a knowledgeable family member) verify against the original book → I add it to the app. This guarantees not a single word or meaning is altered.

---

## 4. Jaap Counter (both modes)

**Banner (always visible on Home):**
- Big tappable count, current mantra name, +1 on tap, long-press to reset.
- Soft chime + vibration every 108 (mala complete).

**Full Jaap page:**
- Choose mantra from list.
- Set target (54 / 108 / 1008 / custom).
- Progress ring around the count.
- Daily streak, total japs, per-mantra history (stored on device).

---

## 5. Step-by-Step: Get the APK on Your Phone

Lovable can prepare everything but **cannot build the .apk file itself** — Android requires Android Studio on your computer. Here's the exact path:

**Inside Lovable (I do this):**
1. Build the full app (UI, content, jaap counter, animated background).
2. Add Capacitor + configure `capacitor.config.ts` with appId `com.divyapath.app`.
3. Add Android-friendly meta tags, splash screen, and app icon.

**On your computer (you do this — one-time setup):**
1. In Lovable, click **GitHub → Connect** and create a repo.
2. Install: [Node.js](https://nodejs.org), [Android Studio](https://developer.android.com/studio), and Java JDK 17.
3. `git clone <your-repo-url>` and `cd` into it.
4. `npm install`
5. `npx cap add android`
6. `npm run build`
7. `npx cap sync android`
8. `npx cap open android` → Android Studio opens.
9. In Android Studio: **Build → Build Bundle(s)/APK(s) → Build APK(s)**.
10. APK appears at `android/app/build/outputs/apk/debug/app-debug.apk`.
11. Transfer to your phone (USB / WhatsApp to yourself / Google Drive), enable "Install unknown apps" for your file manager, tap the APK, install. Done.

**Updating the app later:** repeat steps 4 → 9 after pulling new code.

I'll include a `BUILD_APK.md` file in the project with these exact commands so you don't have to remember them.

---

## 6. Technical Notes

- React + Vite + Tailwind + shadcn/ui, all client-side (no backend needed for v1).
- Content stored as JSON in repo → instant load, works fully offline.
- Jaap state, favorites, settings → `localStorage` (survives app restarts).
- Animated background: pure CSS (`@keyframes` + `radial-gradient` + SVG rays), `prefers-reduced-motion` respected.
- Capacitor for Android packaging; PWA manifest also added so it's installable from browser too.
- Devanagari fonts loaded from Google Fonts with `font-display: swap`.
- Dark / light theme via CSS variables.

---

## 7. What I'll Deliver in the First Build

1. Full app shell with home / library / reader / jaap / settings.
2. Animated divine background + design system (saffron/gold/ivory + dark mode).
3. 6 starter stotras, both scripts, fully proofread from public sources.
4. Working jaap counter (banner + full page) with mala milestones, streaks, history.
5. Script toggle, font size, favorites, search.
6. Capacitor configured for Android + `BUILD_APK.md` with the step-by-step.

After this, anytime you want to add a new stotra, just send me the verified text (or PDF + your OK on the extracted text) and I'll add it.
