# Graph Report - Home Extension  (2026-11-10)

## Corpus Check
- Corpus is ~13,896 words - fits in a single context window. You may not need a graph.

## Summary
- 178 nodes · 375 edges · 22 communities (11 shown, 11 thin omitted)
- Extraction: 91% EXTRACTED · 9% INFERRED · 0% AMBIGUOUS · INFERRED: 35 edges (avg confidence: 0.83)
- Token cost: 0 input · 0 output

## Community Hubs (Navigation)
- Dashboard HTML Layout
- Manifest & Toolbar
- Core Helpers & Dialogs
- Widgets & Search
- Settings Panel & Positioning
- Font System
- Styling & Clock
- Focus Timer
- Pin Management
- Quotes
- Icon 16px
- Wallpaper & Visuals
- Icon 32px
- Icon 48px
- Icon 128px
- Dialog Component
- Dock Widget
- Particles Widget
- Widget Config Menu
- Author (Malik)

## God Nodes (most connected - your core abstractions)
1. `init()` - 61 edges
2. `Home (Customizable New Tab)` - 23 edges
3. `saveState()` - 19 edges
4. `renderPins()` - 16 edges
5. `renderSettings()` - 15 edges
6. `esc()` - 13 edges
7. `renderDock()` - 11 edges
8. `renderPinsManage()` - 11 edges
9. `renderFontList()` - 10 edges
10. `renderTabManage()` - 10 edges

## Surprising Connections (you probably didn't know these)
- `Pin Editor Modal` --conceptually_related_to--> `Custom Pin Grid`  [INFERRED]
  index.html → README.md
- `Custom Pin Grid` --conceptually_related_to--> `Pins Grid (DOM)`  [INFERRED]
  README.md → index.html
- `Management Page (engines / fonts / tabs)` --conceptually_related_to--> `Search Engine Configuration`  [INFERRED]
  index.html → README.md
- `Search Engine Configuration` --conceptually_related_to--> `Search Bar (DOM)`  [INFERRED]
  README.md → index.html
- `Weather Widget (weatherapi.com)` --conceptually_related_to--> `Weather Widget (DOM)`  [INFERRED]
  README.md → index.html

## Import Cycles
- None detected.

## Hyperedges (group relationships)
- **Dashboard Widget Set** — index_particles_widget, index_weather_widget, index_clock_widget, index_search_widget, index_pins_widget, index_dock_widget, index_focus_widget, index_todo_widget, index_quote_widget, readme_state_widgets [EXTRACTED 1.00]
- **Modal UI Surfaces** — index_settings_panel, index_pin_modal, index_dialog, index_saved_quotes_modal, index_manage_page [INFERRED 0.85]

## Communities (22 total, 11 thin omitted)

### Community 0 - "Dashboard HTML Layout"
Cohesion: 0.05
Nodes (41): Background Layers (backdrop, video, scrim, noise), Clock Widget (DOM), Focus Timer Widget (DOM), Settings Gear Button, Hand-Drawn Noise SVG Filter, Management Page (engines / fonts / tabs), Home New Tab Page, Pin Editor Modal (+33 more)

### Community 1 - "Manifest & Toolbar"
Cohesion: 0.08
Nodes (23): action, default_icon, default_title, background, service_worker, chrome_url_overrides, newtab, content_scripts (+15 more)

### Community 2 - "Core Helpers & Dialogs"
Cohesion: 0.18
Nodes (22): addTab(), addTodo(), brandGradient(), clearDragOver(), collectBookmarkUrls(), dialog(), esc(), faviconFor() (+14 more)

### Community 3 - "Widgets & Search"
Cohesion: 0.23
Nodes (15): applyWeatherPos(), applyWidgets(), closeWidgetMenu(), currentWidget(), doSearch(), enhanceSelect(), fmtClock(), fmtDate() (+7 more)

### Community 4 - "Settings Panel & Positioning"
Cohesion: 0.17
Nodes (15): applyGearPos(), applyPinCols(), applyTodoPos(), buildSettingsSections(), clamp(), closeManagePage(), closeSavedQuotes(), closeSettings() (+7 more)

### Community 5 - "Font System"
Cohesion: 0.23
Nodes (13): allFonts(), applyFont(), currentFontFamilySelected(), customFacesCSS(), fillSelect(), fontFamilyOf(), fontKeyClean(), injectCustomFonts() (+5 more)

### Community 6 - "Styling & Clock"
Cohesion: 0.33
Nodes (7): applyClockStyle(), applyCompact(), applyPanelPlacement(), applySearchStyle(), decorateHeaderIcons(), openSettings(), renderSettings()

### Community 7 - "Focus Timer"
Cohesion: 0.33
Nodes (7): applyFocusVisibility(), fmt(), renderTimer(), renderTimerModes(), setTimerMin(), stopTimerInterval(), toggleTimer()

### Community 8 - "Pin Management"
Cohesion: 0.29
Nodes (7): closePinModal(), currentPins(), currentTab(), normalizePinUrl(), openPinModal(), renderPinSegs(), savePin()

### Community 9 - "Quotes"
Cohesion: 0.40
Nodes (5): copyCurrentQuote(), currentQuoteAuthor(), currentQuoteText(), saveCurrentQuote(), updateSavedCountUI()

### Community 11 - "Icon 16px"
Cohesion: 1.00
Nodes (3): Home icon (16x16 px), Symbolic reading: doorway/home motif consistent with the 'Home' browser-extension (customizable new-tab start page) branding, Visual composition: transparent background, rounded-square tile filled with a blue gradient (indigo #637efb to cyan #36b9f2), with a near-white/light arch-shaped glyph centered near the lower-middle

## Knowledge Gaps
- **28 isolated node(s):** `Readability Overlay`, `Bookmarks Import`, `Import / Export Config`, `Hotkeys`, `Toolbar Icon` (+23 more)
  These have ≤1 connection - possible missing edges or undocumented components. (Counts symbols only; 51 node(s) total have ≤1 connection when file, concept and rationale nodes are included.)
- **11 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `Home (Customizable New Tab)` connect `Dashboard HTML Layout` to `Widgets & Search`?**
  _High betweenness centrality (0.222) - this node is a cross-community bridge._
- **Are the 10 inferred relationships involving `init()` (e.g. with `app.js` and `closeManagePage()`) actually correct?**
  _`init()` has 10 INFERRED edges - model-reasoned connections that need verification._
- **What connects `Readability Overlay`, `Bookmarks Import`, `Import / Export Config` to the rest of the system?**
  _28 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `Dashboard HTML Layout` be split into smaller, more focused modules?**
  _Cohesion score 0.054878048780487805 - nodes in this community are weakly interconnected._
- **Why does `init()` connect `Settings Panel & Positioning` to `Core Helpers & Dialogs`, `Widgets & Search`, `Font System`, `Styling & Clock`, `Focus Timer`, `Pin Management`, `Quotes`, `Wallpaper & Visuals`?**
  _High betweenness centrality (0.052) - this node is a cross-community bridge._
- **Should `Manifest & Toolbar` be split into smaller, more focused modules?**
  _Cohesion score 0.08333333333333333 - nodes in this community are weakly interconnected._