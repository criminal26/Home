# 🏠 Home — Customizable New Tab

> A clean, fully customizable Chrome New Tab start page. No branding, no clutter, everything stays on your machine.

---

## ✨ Features

### Pins & Tabs
- 📌 **Custom pin grid** — 10 columns, up to 50 pins per tab, each tile with a name + URL.
- 🖼️ **Pin icons** — auto-fetch favicon, or upload your own image per pin.
- 📐 **Pin size** — 1×1, 2×1, 1×2, or 2×2 per pin. Larger tiles get a branded gradient background, or a custom background image/video.
- 🖱️ **Right-click to edit** — right-click any pin to edit it (empty grid areas do nothing). `Ctrl+N` adds a pin.
- 📑 **Tabs/categories** — create named tabs (e.g. "Dev", "Anime", "AI"), double-click to rename, drag to reorder, `Ctrl+T` adds a tab.
- 🔖 **Bookmarks import** — import bookmarks into the active tab; **"Import ALL bookmarks + backup…"** imports everything, downloads a JSON backup first, then can **move all bookmarks into a "Home Backup" folder** or **delete them all** (choose in Settings → Bookmarks).

### Search
- 🔍 **Search engine config** — add/edit/delete engines and set a default from the **Manage page**. Defaults include Google, Bing, DuckDuckGo, Brave, Yahoo, Wikipedia, GitHub, Stack Overflow, MDN.
- 🎨 **25 search bar styles** — capsule, minimal, underline, frost, squircle, pill, gradient, neon frame, chrome, paper, glass and more, plus width / transparency / alignment controls.

### Theming
- 🌌 **32 wallpapers with auto theme** — selecting one auto-applies a matching color scheme. Upload or paste a custom image/video background (the default wallpaper's URL stays hidden until you add your own).
- 🌫️ **Readability overlay** — automatic scrim; control blur, brightness and overlay darken.
- 🔤 **26 UI fonts** — 6 built-in + custom fonts added by name/family or uploaded as `.ttf` / `.otf` / `.woff` / `.woff2` files.
- 🕰️ **25 clock styles** — classic, bold, mono, serif, glow, gradient text, outline, neon, retro 3D, fire, ocean, gold, engraved and more.
- 🕐 **Clock + date formats** — seconds options, 12/24h, multiple date formats (default DD/MM/YYYY).
- 🫧 **Particles** — on/off.
- 🎯 **Focus timer** — Focus/Break/Deep durations + browser notification when time's up.
- 🖱️ **Right-click any element** (clock, search, pins, dock, focus, particles) → config menu: show/hide + transparency + reset.
- ⚙️ **Settings panel** — right side, theme-aware, no scrollbars; opens via the gear (hidden until hover), position selectable (Top-Left / Top-Right / Bottom-Left / Bottom-Right) with live preview.

### Configuration
- 🔄 **Import / Export** — download the full config as JSON (pins, tabs, engines, fonts, widgets, all settings) and restore it.
- 💾 **Auto-restore** — state mirrors to `chrome.storage.local`; if local data is cleared or corrupt, it restores automatically.
- ⌨️ **Hotkeys** — `/` focus search · `Ctrl+N` add pin · `Ctrl+T` add tab · `Ctrl+,` open/close settings · `Esc` close panels.

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
- Widgets (clock, search, pins, dock, focus, particles) are configurable via right-click; state lives in `state.widgets`.

---

## 👤 Developer

**Made by Malik** 🔥

- Ideas, feedback, or issues? Open a GitHub issue or reach out — contributions welcome.

---

## 📄 License

MIT — use it, tweak it, love it.
