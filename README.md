# 🏠 Home — Customizable New Tab

> A clean, fully customizable Chrome New Tab start page. No branding, no clutter, everything stays on your machine.

---

## ✨ Features

### Pins & Tabs
- 📌 **Custom pin grid** — adjustable tile width (4–20 columns per row), up to 50 pins per tab, each tile with a name + URL. Bare domains are auto-normalized (`youtube.com` → `https://www.youtube.com/`).
- 🖼️ **Pin icons** — auto-fetch favicon, or upload your own image per pin.
- 📐 **Pin size** — 1×1, 2×1, 1×2, or 2×2 per pin. Larger tiles get a branded gradient background, or a custom background image/video.
- 🖱️ **Right-click to edit** — right-click any pin to edit it (empty grid areas do nothing). `Ctrl+N` adds a pin.
- 📑 **Tabs/categories** — create named tabs (e.g. "Dev", "Anime", "AI"), double-click to rename, drag to reorder, `Ctrl+T` adds a tab.
- 🔖 **Bookmarks import** — bookmarks are imported automatically on first launch (you get a notification), and you can re-import anytime from Settings → Bookmarks (only new pins are added, duplicates skipped).

### Search
- 🔍 **Search engine config** — add/edit/delete engines and set a default from the **Manage page**. Bare domains work too (e.g. type `youtube.com/results?search_query=` — `https://` is added automatically). Defaults include Google, Bing, DuckDuckGo, Brave, Yahoo, Wikipedia, GitHub, Stack Overflow, MDN.
- 🎨 **25 search bar styles** — capsule, minimal, underline, frost, squircle, pill, gradient, neon frame, chrome, paper, glass and more, plus width / transparency / alignment controls, a custom placeholder text, and typed-text alignment (left / center / right).
- 🎯 **Search behavior** — the search box clears after searching, and results open in a **new tab** (default) or the **current tab** (configurable).

### Theming
- 🌌 **32 wallpapers with auto theme** — selecting one auto-applies a matching color scheme. Upload or paste a custom image/video background (the default wallpaper's URL stays hidden until you add your own).
- 🌫️ **Readability overlay** — automatic scrim; control blur, brightness and overlay darken.
- 🔤 **26 UI fonts** — 6 built-in + custom fonts added by name/family or uploaded as `.ttf` / `.otf` / `.woff` / `.woff2` files. The selected font applies across the whole UI — search, todo, pins, clock, buttons. **Apply the selected font to every website in Chrome** (Settings → Font → Apply to all websites) — enabled by default.
- 🌦️ **Weather widget** — powered by weatherapi.com (free plan). Shows current temp, condition, 3-day forecast, and a plain-language **rain/snow alert** ("🌧️ Barish hogi…"). City and °C/°F configurable; data cached 30 min to respect free call limits.
- 💬 **Daily quote widget** — a random quote from a free public API (dummyjson.com), with an offline fallback.
- 🕰️ **25 clock styles** — classic, bold, mono, serif, glow, gradient text, outline, neon, retro 3D, fire, ocean, gold, engraved and more.
- 🕐 **Clock + date formats** — seconds options, 12/24h, multiple date formats (default DD/MM/YYYY).
- ✅ **Todo widget** — notebook-style task list (hand-drawn checkboxes with animated strike-through over the text only); short tasks pair up two-per-row, long ones span the full row; movable anywhere via position sliders; off by default (enable in Settings → Todo list).
- 🎯 **Focus timer** — Focus/Break/Deep durations + browser notification when time's up.
- 🖱️ **Right-click any element** (clock, search, pins, dock, focus, particles) → config menu: show/hide + transparency + reset.
- ⚙️ **Settings panel** — right side, theme-aware, no scrollbars; opens via the gear (hidden until hover), position selectable (Top-Left / Top-Right / Bottom-Left / Bottom-Right) with live preview.

### Configuration
- 🔄 **Import / Export** — download the full config as JSON (pins, tabs, engines, fonts, widgets, all settings) and restore it.
- 💾 **Auto-restore** — state mirrors to `chrome.storage.local`; if local data is cleared or corrupt, it restores automatically.
- ⌨️ **Hotkeys** — `/` focus search · `Ctrl+N` add pin · `Ctrl+T` add tab · `Ctrl+,` open/close settings · `Esc` close panels. Press **↑ / ↓** while focused on any style dropdown (clock, search, font, wallpaper engine, etc.) to instantly switch styles.
- ⚙️ **Toolbar icon** — clicking the extension's toolbar icon opens Home in a new tab and reloads the extension (it never disables itself).

All data stays **local** (`localStorage` / `chrome.storage.local`). The only network requests are favicon images, media you add, and the default wallpaper.

---

## 🚀 Install

1. Chrome → `chrome://extensions`
2. Enable **Developer mode** (top-right)
3. **Load unpacked** → select this folder
4. Open a new tab 🎉

---

## 🗂️ Structure

```
home-extension/
├── manifest.json      # MV3 (storage + bookmarks + tabs)
├── background.js      # single-home-window behavior
├── index.html         # new-tab page
├── styles.css         # themes, grid, panels, 20+ style classes
├── app.js             # all logic (v1.5)
├── icons/
└── README.md
```

---

## 🧰 Extending

- Clock styles, search styles, fonts and wallpapers are arrays at the top of `app.js` — add yours there.
- Pins are stored per-tab in `state.tabs[].pins`.
- Widgets (clock, search, pins, dock, focus, particles, weather, quote, todo) are configurable via right-click; state lives in `state.widgets`.
- The weather widget uses an embedded weatherapi.com key — replace `WEATHER_KEY` at the top of `app.js` with your own key if you prefer.

---

## 👤 Developer

**Made by Malik** 🔥

- Ideas, feedback, or issues? Open a GitHub issue or reach out — contributions welcome.

---

## 📄 License

MIT — use it, tweak it, love it.
