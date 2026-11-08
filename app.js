/* ============================================================
   Home — app logic (v1.3)
   ============================================================ */
(() => {
  "use strict";

  /* ---------- Defaults ---------- */
  const DEFAULT_ENGINES = [
    { id: "google", name: "Google", url: "https://www.google.com/search?q=" },
    { id: "bing", name: "Bing", url: "https://www.bing.com/search?q=" },
    { id: "duck", name: "DuckDuckGo", url: "https://duckduckgo.com/?q=" },
    { id: "brave", name: "Brave", url: "https://search.brave.com/search?q=" },
    { id: "yahoo", name: "Yahoo", url: "https://search.yahoo.com/search?p=" },
    { id: "wikipedia", name: "Wikipedia", url: "https://en.wikipedia.org/w/index.php?search=" },
    { id: "github", name: "GitHub", url: "https://github.com/search?q=" },
    { id: "stack", name: "Stack Overflow", url: "https://stackoverflow.com/search?q=" },
    { id: "mdn", name: "MDN", url: "https://developer.mozilla.org/en-US/search?q=" },
  ];

  const DEFAULT_WALL_IMAGE = "https://mcdn.wallpapersafari.com/medium/84/32/UvDeM2.jpg";

  const WALLPAPERS = [
    { id: "midnight", name: "Midnight", dark: true, bg1: "#0b0e1a", bg2: "#131a2f", accent: "#7c5cff", accent2: "#22d3ee", accent3: "#f43f5e", glow: "rgba(124,92,255,.45)", css: "linear-gradient(160deg, #0b0e1a, #131a2f)" },
    { id: "sakura", name: "Sakura", dark: true, bg1: "#2a0f22", bg2: "#4a1f3d", accent: "#ff7ab8", accent2: "#ffd166", accent3: "#ff5d8f", glow: "rgba(255,122,184,.4)", css: "linear-gradient(160deg, #2a0f22, #4a1f3d)" },
    { id: "synthwave", name: "Synthwave", dark: true, bg1: "#0b0720", bg2: "#2a0a4a", accent: "#ff2d95", accent2: "#00f0ff", accent3: "#ffe45e", glow: "rgba(255,45,149,.45)", css: "linear-gradient(160deg, #0b0720, #2a0a4a)" },
    { id: "forest", name: "Forest", dark: true, bg1: "#07120f", bg2: "#10281f", accent: "#34d399", accent2: "#a3e635", accent3: "#2dd4bf", glow: "rgba(52,211,153,.4)", css: "linear-gradient(160deg, #07120f, #10281f)" },
    { id: "ocean", name: "Ocean", dark: true, bg1: "#071a2e", bg2: "#0d3a5c", accent: "#38bdf8", accent2: "#a5f3fc", accent3: "#60a5fa", glow: "rgba(56,189,248,.4)", css: "linear-gradient(160deg, #071a2e, #0d3a5c)" },
    { id: "sunset", name: "Sunset", dark: true, bg1: "#2b0e18", bg2: "#57223a", accent: "#f97316", accent2: "#fbbf24", accent3: "#fb7185", glow: "rgba(249,115,22,.45)", css: "linear-gradient(160deg, #2b0e18, #57223a)" },
    { id: "ghibli", name: "Ghibli", dark: true, bg1: "#0c2433", bg2: "#1d4a5c", accent: "#6ee7b7", accent2: "#fcd34d", accent3: "#93c5fd", glow: "rgba(110,231,183,.4)", css: "linear-gradient(160deg, #0c2433, #1d4a5c)" },
    { id: "neon", name: "Neon", dark: true, bg1: "#12081f", bg2: "#241040", accent: "#c026d3", accent2: "#f472b6", accent3: "#a78bfa", glow: "rgba(192,38,211,.45)", css: "linear-gradient(160deg, #12081f, #241040)" },
    { id: "paper", name: "Paper", dark: false, bg1: "#e9e4d8", bg2: "#d8d0c0", accent: "#8a6d3b", accent2: "#a84040", accent3: "#3b6d8a", glow: "rgba(138,109,59,.25)", css: "linear-gradient(160deg, #e9e4d8, #d8d0c0)" },
    { id: "mono", name: "Mono", dark: true, bg1: "#151515", bg2: "#2b2b2b", accent: "#ffffff", accent2: "#aaaaaa", accent3: "#666666", glow: "rgba(255,255,255,.25)", css: "linear-gradient(160deg, #151515, #2b2b2b)" },
    { id: "lavender", name: "Lavender", dark: true, bg1: "#1b1429", bg2: "#3b2a55", accent: "#b39ddb", accent2: "#f48fb1", accent3: "#81d4fa", glow: "rgba(179,157,219,.4)", css: "linear-gradient(160deg, #1b1429, #3b2a55)" },
    { id: "candy", name: "Candy", dark: false, bg1: "#ffe8ec", bg2: "#ffd3e0", accent: "#d81b60", accent2: "#7b1fa2", accent3: "#0288d1", glow: "rgba(216,27,96,.22)", css: "linear-gradient(160deg, #ffe8ec, #ffd3e0)" },
    { id: "aurora", name: "Aurora", dark: true, bg1: "#062c1c", bg2: "#0b4f3a", accent: "#34d399", accent2: "#a7f3d0", accent3: "#5eead4", glow: "rgba(52,211,153,.4)", css: "linear-gradient(160deg, #062c1c, #0b4f3a)" },
    { id: "ember", name: "Ember", dark: true, bg1: "#1c0a05", bg2: "#4a1508", accent: "#fb923c", accent2: "#fde68a", accent3: "#ef4444", glow: "rgba(251,146,60,.4)", css: "linear-gradient(160deg, #1c0a05, #4a1508)" },
    { id: "deepsea", name: "Deep Sea", dark: true, bg1: "#03121f", bg2: "#074a5e", accent: "#2dd4bf", accent2: "#67e8f9", accent3: "#0891b2", glow: "rgba(45,212,191,.4)", css: "linear-gradient(160deg, #03121f, #074a5e)" },
    { id: "nightcity", name: "Night City", dark: true, bg1: "#0a0a14", bg2: "#1c1440", accent: "#f0abfc", accent2: "#67e8f9", accent3: "#f472b6", glow: "rgba(240,171,252,.4)", css: "linear-gradient(160deg, #0a0a14, #1c1440)" },
    { id: "candyland", name: "Candyland", dark: false, bg1: "#fdf2f8", bg2: "#fbcfe8", accent: "#ec4899", accent2: "#8b5cf6", accent3: "#f59e0b", glow: "rgba(236,72,153,.22)", css: "linear-gradient(160deg, #fdf2f8, #fbcfe8)" },
    { id: "grape", name: "Grape", dark: true, bg1: "#170b2e", bg2: "#3b1570", accent: "#c084fc", accent2: "#a78bfa", accent3: "#f0abfc", glow: "rgba(192,132,252,.42)", css: "linear-gradient(160deg, #170b2e, #3b1570)" },
    { id: "goldhour", name: "Golden Hour", dark: true, bg1: "#241404", bg2: "#5c3208", accent: "#fbbf24", accent2: "#fde68a", accent3: "#f97316", glow: "rgba(251,191,36,.45)", css: "linear-gradient(160deg, #241404, #5c3208)" },
    { id: "teal", name: "Teal", dark: true, bg1: "#04211d", bg2: "#0f5549", accent: "#2dd4bf", accent2: "#99f6e4", accent3: "#14b8a6", glow: "rgba(45,212,191,.4)", css: "linear-gradient(160deg, #04211d, #0f5549)" },
    { id: "crimson", name: "Crimson", dark: true, bg1: "#20060c", bg2: "#5a1026", accent: "#f43f5e", accent2: "#fda4af", accent3: "#e11d48", glow: "rgba(244,63,94,.42)", css: "linear-gradient(160deg, #20060c, #5a1026)" },
    { id: "slate", name: "Slate", dark: true, bg1: "#0f172a", bg2: "#1e293b", accent: "#93c5fd", accent2: "#cbd5e1", accent3: "#64748b", glow: "rgba(147,197,253,.35)", css: "linear-gradient(160deg, #0f172a, #1e293b)" },
    { id: "plum", name: "Plum", dark: true, bg1: "#2a0e1f", bg2: "#5a1e45", accent: "#f472b6", accent2: "#fbcfe8", accent3: "#a21caf", glow: "rgba(244,114,182,.4)", css: "linear-gradient(160deg, #2a0e1f, #5a1e45)" },
    { id: "peach", name: "Peach", dark: false, bg1: "#fff7ed", bg2: "#fed7aa", accent: "#ea580c", accent2: "#f97316", accent3: "#f59e0b", glow: "rgba(234,88,12,.22)", css: "linear-gradient(160deg, #fff7ed, #fed7aa)" },
    { id: "arctic", name: "Arctic", dark: true, bg1: "#0b1d2e", bg2: "#17405f", accent: "#7dd3fc", accent2: "#e0f2fe", accent3: "#38bdf8", glow: "rgba(125,211,252,.4)", css: "linear-gradient(160deg, #0b1d2e, #17405f)" },
    { id: "rainforest", name: "Rainforest", dark: true, bg1: "#06180f", bg2: "#124229", accent: "#4ade80", accent2: "#bbf7d0", accent3: "#22c55e", glow: "rgba(74,222,128,.4)", css: "linear-gradient(160deg, #06180f, #124229)" },
    { id: "sunset2", name: "Sunset II", dark: true, bg1: "#2b0a1a", bg2: "#6a1b3d", accent: "#fb7185", accent2: "#fbbf24", accent3: "#f97316", glow: "rgba(251,113,133,.42)", css: "linear-gradient(160deg, #2b0a1a, #6a1b3d)" },
    { id: "cyber", name: "Cyberpunk", dark: true, bg1: "#0d0a1e", bg2: "#2a0a54", accent: "#22d3ee", accent2: "#f0abfc", accent3: "#a3e635", glow: "rgba(34,211,238,.45)", css: "linear-gradient(160deg, #0d0a1e, #2a0a54)" },
    { id: "biscuit", name: "Biscuit", dark: false, bg1: "#f5efe6", bg2: "#e7d8c3", accent: "#9a6b3f", accent2: "#b08968", accent3: "#6b4f2f", glow: "rgba(154,107,63,.25)", css: "linear-gradient(160deg, #f5efe6, #e7d8c3)" },
    { id: "wine", name: "Wine", dark: true, bg1: "#1c0a10", bg2: "#4a1227", accent: "#fda4af", accent2: "#e11d48", accent3: "#be123c", glow: "rgba(253,164,175,.38)", css: "linear-gradient(160deg, #1c0a10, #4a1227)" },
    { id: "lagoon", name: "Lagoon", dark: true, bg1: "#052e36", bg2: "#0e5f6b", accent: "#5eead4", accent2: "#a5f3fc", accent3: "#2dd4bf", glow: "rgba(94,234,212,.4)", css: "linear-gradient(160deg, #052e36, #0e5f6b)" },
    { id: "rose", name: "Rose", dark: false, bg1: "#fff1f2", bg2: "#fecdd3", accent: "#f43f5e", accent2: "#fb7185", accent3: "#9f1239", glow: "rgba(244,63,94,.22)", css: "linear-gradient(160deg, #fff1f2, #fecdd3)" },
  ];

  const CLOCK_STYLES = [
    { id: "classic", label: "Classic" },
    { id: "bold", label: "Bold" },
    { id: "mono", label: "Mono" },
    { id: "serif", label: "Serif" },
    { id: "glow", label: "Glow" },
    { id: "grad", label: "Gradient", css: "background:linear-gradient(90deg,var(--accent),var(--accent2));-webkit-background-clip:text;background-clip:text;color:transparent;" },
    { id: "outline", label: "Outline", css: "-webkit-text-stroke:1.2px var(--accent2);color:transparent;" },
    { id: "neon", label: "Neon", css: "text-shadow:0 0 8px var(--accent2),0 0 28px var(--glow),0 0 60px var(--glow);" },
    { id: "shadow", label: "Soft shadow", css: "text-shadow:0 6px 30px rgba(0,0,0,.55);" },
    { id: "wide", label: "Uppercase", css: "text-transform:uppercase;letter-spacing:8px;font-weight:700;" },
    { id: "thin", label: "Thin", css: "font-weight:100;letter-spacing:2px;" },
    { id: "serifit", label: "Serif italic", css: "font-family:Georgia,'Times New Roman',serif;font-style:italic;font-weight:500;" },
    { id: "type", label: "Typewriter", css: "font-family:'Courier New',monospace;letter-spacing:0;font-weight:600;" },
    { id: "retro", label: "Retro 3D", css: "color:#fff;text-shadow:0 1px 0 #b3a6ff,0 2px 0 #a294ff,0 3px 0 #9181ff,0 4px 0 #7f6dff,0 5px 14px rgba(0,0,0,.4);" },
    { id: "fire", label: "Fire", css: "background:linear-gradient(180deg,#ffe29f,#ffa751,#ff5252);-webkit-background-clip:text;background-clip:text;color:transparent;" },
    { id: "ocean", label: "Ocean", css: "background:linear-gradient(180deg,#a5f3fc,#38bdf8,#2563eb);-webkit-background-clip:text;background-clip:text;color:transparent;" },
    { id: "bloom", label: "Bloom", css: "background:linear-gradient(180deg,#f0abfc,#c084fc,#7c3aed);-webkit-background-clip:text;background-clip:text;color:transparent;" },
    { id: "gold", label: "Gold", css: "background:linear-gradient(180deg,#fde68a,#f59e0b,#b45309);-webkit-background-clip:text;background-clip:text;color:transparent;" },
    { id: "ice", label: "Ice", css: "background:linear-gradient(180deg,#e0f2fe,#bae6fd,#7dd3fc);-webkit-background-clip:text;background-clip:text;color:transparent;" },
    { id: "mint", label: "Mint", css: "background:linear-gradient(180deg,#d1fae5,#6ee7b7,#059669);-webkit-background-clip:text;background-clip:text;color:transparent;" },
    { id: "punch", label: "Chunky", css: "font-weight:900;letter-spacing:-1.5px;text-shadow:0 4px 0 rgba(0,0,0,.35);" },
    { id: "track", label: "Tracking", css: "letter-spacing:12px;font-weight:300;" },
    { id: "glowring", label: "Glow ring", css: "text-shadow:0 0 6px var(--accent),0 0 18px var(--accent);" },
    { id: "engrave", label: "Engraved", css: "color:#0b0e1a;text-shadow:0 1px 0 rgba(255,255,255,.18),0 -1px 0 rgba(0,0,0,.9);" },
    { id: "pop", label: "Duo", css: "background:linear-gradient(90deg,var(--accent3) 45%,var(--accent2) 55%);-webkit-background-clip:text;background-clip:text;color:transparent;" },
  ];

  const FONTS = [
    { id: "system", label: "System", family: '"Segoe UI", system-ui, sans-serif' },
    { id: "mono", label: "Code", family: '"Cascadia Code", Consolas, monospace' },
    { id: "serif", label: "Serif", family: 'Georgia, "Times New Roman", serif' },
    { id: "round", label: "Rounded", family: '"Trebuchet MS", Verdana, sans-serif' },
    { id: "play", label: "Playful", family: '"Comic Sans MS", cursive, sans-serif' },
    { id: "elegant", label: "Elegant", family: '"Palatino Linotype", "Book Antiqua", serif' },
    { id: "futura", label: "Futura", family: 'Futura, "Century Gothic", sans-serif' },
    { id: "helv", label: "Helvetica", family: '"Helvetica Neue", Helvetica, Arial, sans-serif' },
    { id: "avenir", label: "Avenir", family: '"Avenir Next", Avenir, "Segoe UI", sans-serif' },
    { id: "print", label: "Print", family: '"Segoe Print", "Comic Sans MS", cursive' },
    { id: "brush", label: "Brush", family: '"Brush Script MT", cursive' },
    { id: "copper", label: "Copperplate", family: 'Copperplate, "Copperplate Gothic Light", fantasy' },
    { id: "lucida", label: "Lucida", family: '"Lucida Console", Monaco, monospace' },
    { id: "courier", label: "Courier", family: '"Courier New", Courier, monospace' },
    { id: "bookman", label: "Bookman", family: '"Bookman Old Style", "Book Antiqua", serif' },
    { id: "century", label: "Century", family: '"Century Gothic", Futura, sans-serif' },
    { id: "garamond", label: "Garamond", family: 'Garamond, "EB Garamond", "Times New Roman", serif' },
    { id: "tahoma", label: "Tahoma", family: 'Tahoma, Verdana, sans-serif' },
    { id: "franklin", label: "Franklin", family: '"Franklin Gothic Medium", "Arial Narrow", sans-serif' },
    { id: "impact", label: "Impact", family: 'Impact, Haettenschweiler, "Arial Narrow Bold", sans-serif' },
    { id: "gill", label: "Gill Sans", family: '"Gill Sans", "Gill Sans MT", Calibri, sans-serif' },
    { id: "optima", label: "Optima", family: 'Optima, Candara, "Segoe UI", sans-serif' },
    { id: "monaco", label: "Monaco", family: 'Monaco, Consolas, "Lucida Console", monospace' },
    { id: "bauhaus", label: "Bauhaus", family: '"Bauhaus 93", "Century Gothic", fantasy' },
    { id: "papyrus", label: "Papyrus", family: 'Papyrus, fantasy' },
    { id: "rockwell", label: "Rockwell", family: 'Rockwell, "Courier New", serif' },
  ];

  const CLOCK_FORMATS = [
    { id: "HHmm", label: "14:05", fn: (d) => `${pad(d.getHours())}:${pad(d.getMinutes())}` },
    { id: "HHmmss", label: "14:05:09", fn: (d) => `${pad(d.getHours())}:${pad(d.getMinutes())}:${pad(d.getSeconds())}` },
    { id: "hmmA", label: "2:05 PM", fn: (d) => { let h = d.getHours(); const a = h >= 12 ? " PM" : " AM"; h = h % 12 || 12; return `${h}:${pad(d.getMinutes())}${a}`; } },
    { id: "hmmssA", label: "2:05:09 PM", fn: (d) => { let h = d.getHours(); const a = h >= 12 ? " PM" : " AM"; h = h % 12 || 12; return `${h}:${pad(d.getMinutes())}:${pad(d.getSeconds())}${a}`; } },
  ];

  const DATE_FORMATS = [
    { id: "DMY", label: "09/11/2026 (DD/MM)", fn: (d) => `${pad(d.getDate())}/${pad(d.getMonth() + 1)}/${d.getFullYear()}` },
    { id: "MDY", label: "11/09/2026 (MM/DD)", fn: (d) => `${pad(d.getMonth() + 1)}/${pad(d.getDate())}/${d.getFullYear()}` },
    { id: "D_My", label: "9 Nov 2026", fn: (d) => `${d.getDate()} ${MONTHS_S[d.getMonth()]} ${d.getFullYear()}` },
    { id: "DMY_w", label: "Mon, 09/11/2026", fn: (d) => `${DAYS_S[d.getDay()]}, ${pad(d.getDate())}/${pad(d.getMonth() + 1)}/${d.getFullYear()}` },
    { id: "Name_D", label: "Monday, Nov 9, 2026", fn: (d) => `${DAYS[d.getDay()]}, ${MONTHS_S[d.getMonth()]} ${d.getDate()}, ${d.getFullYear()}` },
    { id: "D_MyName", label: "Monday, 9 November 2026", fn: (d) => `${DAYS[d.getDay()]}, ${d.getDate()} ${MONTHS[d.getMonth()]} ${d.getFullYear()}` },
  ];

  const SEARCH_STYLES = [
    { id: "capsule", label: "Capsule" },
    { id: "minimal", label: "Minimal" },
    { id: "underline", label: "Underline" },
    { id: "frost", label: "Frost" },
    { id: "squircle", label: "Squircle", css: "display:flex;align-items:center;gap:12px;padding:10px 16px;border-radius:22px;background:rgba(12,16,30,.5);border:1px solid var(--stroke);backdrop-filter:blur(16px);" },
    { id: "sharp", label: "Sharp edge", css: "display:flex;align-items:center;gap:12px;padding:10px 16px;border-radius:0;background:rgba(12,16,30,.7);border-bottom:2px solid var(--accent);" },
    { id: "pill", label: "Pill", css: "display:flex;align-items:center;gap:12px;padding:12px 22px;border-radius:999px;background:rgba(255,255,255,.08);border:1px solid rgba(255,255,255,.12);" },
    { id: "translucent", label: "Translucent", css: "display:flex;align-items:center;gap:12px;padding:10px 16px;border-radius:18px;background:rgba(255,255,255,.12);border:none;" },
    { id: "glassedge", label: "Glass edge", css: "display:flex;align-items:center;gap:12px;padding:10px 16px;border-radius:18px;background:rgba(12,16,30,.35);border:1px solid rgba(255,255,255,.25);box-shadow:0 8px 32px rgba(0,0,0,.35);" },
    { id: "gradient", label: "Gradient", css: "display:flex;align-items:center;gap:12px;padding:10px 16px;border-radius:18px;background:linear-gradient(90deg,rgba(124,92,255,.3),rgba(34,211,238,.25));border:none;" },
    { id: "minline", label: "Minimal line", css: "display:flex;align-items:center;gap:12px;padding:10px 4px;border-radius:0;background:transparent;border-bottom:1px solid var(--stroke);" },
    { id: "solid", label: "Solid", css: "display:flex;align-items:center;gap:12px;padding:10px 16px;border-radius:12px;background:#0d1222;border:1px solid var(--stroke);" },
    { id: "soft", label: "Soft", css: "display:flex;align-items:center;gap:12px;padding:10px 16px;border-radius:14px;background:rgba(255,255,255,.07);border:none;" },
    { id: "future", label: "Future", css: "display:flex;align-items:center;gap:12px;padding:10px 16px;border-radius:8px;background:rgba(0,0,0,.35);border:1px solid var(--accent);box-shadow:inset 0 0 0 1px rgba(124,92,255,.25);" },
    { id: "mist", label: "Mist", css: "display:flex;align-items:center;gap:12px;padding:10px 16px;border-radius:16px;background:rgba(148,163,184,.18);border:none;" },
    { id: "sunken", label: "Sunken", css: "display:flex;align-items:center;gap:12px;padding:10px 16px;border-radius:14px;background:rgba(0,0,0,.28);border:none;box-shadow:inset 0 2px 8px rgba(0,0,0,.4);" },
    { id: "chrome", label: "Chrome", css: "display:flex;align-items:center;gap:12px;padding:10px 16px;border-radius:12px;background:linear-gradient(180deg,rgba(255,255,255,.16),rgba(255,255,255,.06));border:1px solid rgba(255,255,255,.25);" },
    { id: "neonframe", label: "Neon frame", css: "display:flex;align-items:center;gap:12px;padding:10px 16px;border-radius:16px;background:rgba(12,16,30,.5);border:1px solid var(--accent2);box-shadow:0 0 12px rgba(34,211,238,.35);" },
    { id: "paper", label: "Paper", css: "display:flex;align-items:center;gap:12px;padding:10px 16px;border-radius:10px;background:rgba(233,228,216,.75);border:none;color:#2a2a2a;" },
    { id: "darkglass", label: "Dark glass", css: "display:flex;align-items:center;gap:12px;padding:12px 20px;border-radius:100px;background:rgba(0,0,0,.5);border:1px solid rgba(255,255,255,.08);" },
    { id: "bubble", label: "Bubble", css: "display:flex;align-items:center;gap:12px;padding:12px 20px;border-radius:20px;background:rgba(255,255,255,.1);border:1px solid rgba(255,255,255,.14);" },
    { id: "honey", label: "Honey", css: "display:flex;align-items:center;gap:12px;padding:10px 16px;border-radius:14px;background:linear-gradient(135deg,rgba(251,191,36,.28),rgba(249,115,22,.22));border:none;" },
    { id: "violet", label: "Violet", css: "display:flex;align-items:center;gap:12px;padding:10px 16px;border-radius:14px;background:linear-gradient(135deg,rgba(124,58,237,.32),rgba(236,72,153,.22));border:none;" },
    { id: "sleek", label: "Sleek", css: "display:flex;align-items:center;gap:12px;padding:10px 16px;border-radius:10px;background:rgba(12,16,30,.6);border:none;border-bottom:2px solid rgba(255,255,255,.08);" },
    { id: "blue", label: "Blue haze", css: "display:flex;align-items:center;gap:12px;padding:10px 16px;border-radius:16px;background:linear-gradient(135deg,rgba(37,99,235,.3),rgba(14,165,233,.2));border:none;" },
  ];

  const DAYS = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
  const DAYS_S = ["Sun","Mon","Tue","Wed","Thu","Fri","Sat"];
  const MONTHS = ["January","February","March","April","May","June","July","August","September","October","November","December"];
  const MONTHS_S = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];

  /* ---------- State ---------- */
  const state = {
    clockFormat: "HHmmss",
    dateFormat: "DMY",
    clockStyle: "glow",
    font: "round",
    customFonts: [],
    wallpaperId: "midnight",
    customBg: { image: null, url: DEFAULT_WALL_IMAGE, video: null, type: "static" },
    sliders: { blur: 0, bright: 100, tint: 30 },
    particles: false,
    engines: DEFAULT_ENGINES.map((e) => ({ ...e })),
    defaultEngine: "google",
    singleHome: true,
    focusEnabled: false,
    focusTimes: { focus: 25, br: 5, deep: 50 },
    tabs: [{ id: "main", name: "Home", pins: [] }],
    activeTab: 0,
    panelPos: "right",
    gearX: 100,
    gearY: 0,
    widgets: {
      clock: { visible: true, opacity: 100 },
      search: { visible: true, opacity: 100 },
      pins: { visible: true, opacity: 100 },
      dock: { visible: true, opacity: 100 },
      focus: { visible: true, opacity: 100 },
      particles: { visible: false, opacity: 100 },
    },
    searchStyle: "capsule",
    searchWidth: 70,
    searchAlign: "center",
    searchTrans: 55,
    bmCleanup: "none",
    onboarded: false,
  };

  const timer = { min: 25, running: false, remaining: 25 * 60, interval: null };
  let settingsOpenedAt = 0;

  const $ = (s) => document.querySelector(s);
  const $$ = (s) => document.querySelectorAll(s);
  const pad = (n) => String(n).padStart(2, "0");

  /* ---------- Persistence ---------- */
  let storageWarned = false;
  function saveState() {
    try {
      const json = JSON.stringify(state);
      try {
        localStorage.setItem("home", json);
      } catch (e) {
        if (!storageWarned) {
          storageWarned = true;
          setTimeout(() => dialog({ title: "Storage full", msg: "Changes couldn't be saved — browser storage is full. Try using image/video URLs instead of large uploaded files, or delete a few pins." }), 50);
        }
      }
      if (chrome.storage && chrome.storage.local) {
        try { chrome.storage.local.set({ home_state: json }).catch(() => {}); } catch (e) {}
      }
    } catch (e) {}
  }
  function loadFromObj(saved) {
    if (!saved) return;
    Object.assign(state, saved);
    if (!Array.isArray(state.engines) || state.engines.length === 0) state.engines = DEFAULT_ENGINES.map((e) => ({ ...e }));
    if (!state.engines.some((e) => e.id === state.defaultEngine)) state.defaultEngine = state.engines[0].id;
    if (!state.mergedDefaults) {
      for (const d of DEFAULT_ENGINES) if (!state.engines.some((e) => e.id === d.id)) state.engines.push({ ...d });
      state.mergedDefaults = true;
    }
    if (!Array.isArray(state.tabs) || state.tabs.length === 0) {
      const oldPins = Array.isArray(saved.pins) ? saved.pins : [];
      state.tabs = [{ id: "main", name: "Home", pins: oldPins }];
    }
    if (typeof state.activeTab !== "number" || !state.tabs[state.activeTab]) state.activeTab = 0;
    state.tabs.forEach((t) => { if (!Array.isArray(t.pins)) t.pins = []; });
    if (!state.sliders) state.sliders = { blur: 0, bright: 100, tint: 30 };
    if (!Array.isArray(state.customFonts)) state.customFonts = [];
    const DEFAULT_WIDGETS = {
      clock: { visible: true, opacity: 100 }, search: { visible: true, opacity: 100 },
      pins: { visible: true, opacity: 100 }, dock: { visible: true, opacity: 100 },
      focus: { visible: true, opacity: 100 }, particles: { visible: false, opacity: 100 },
    };
    if (!state.widgets || typeof state.widgets !== "object") state.widgets = {};
    for (const k in DEFAULT_WIDGETS) {
      if (!state.widgets[k]) state.widgets[k] = { ...DEFAULT_WIDGETS[k] };
      else {
        if (typeof state.widgets[k].visible !== "boolean") state.widgets[k].visible = DEFAULT_WIDGETS[k].visible;
        if (typeof state.widgets[k].opacity !== "number") state.widgets[k].opacity = DEFAULT_WIDGETS[k].opacity;
      }
    }
    if (!state.panelPos) state.panelPos = "right";
    if (typeof state.gearX !== "number" || typeof state.gearY !== "number") {
      const g = state.gearPos || "tr";
      state.gearX = g.includes("l") ? 0 : 100;
      state.gearY = g.endsWith("t") ? 0 : 100;
    }
    state.gearX = clamp(0, 100, +state.gearX || 0);
    state.gearY = clamp(0, 100, +state.gearY || 0);
    if (!state.searchStyle) state.searchStyle = "capsule";
    if (!state.bmCleanup) state.bmCleanup = "none";
    if (typeof state.onboarded !== "boolean") state.onboarded = false;
  }

  function loadStateSync() {
    try {
      const raw = localStorage.getItem("home");
      if (raw) {
        try { loadFromObj(JSON.parse(raw)); }
        catch (e) { localStorage.removeItem("home"); } // corrupt local data → fall back to chrome.storage mirror
      }
    } catch (e) {}
  }

  /* ---------- Dialog (own, not browser) ---------- */
  function dialog({ title, msg, input, value, buttons }) {
    return new Promise((resolve) => {
      const box = $("#dialogBox");
      $("#dialogTitle").textContent = title || "";
      $("#dialogMsg").textContent = msg || "";
      $("#dialogMsg").style.display = msg ? "" : "none";
      const inp = $("#dialogInput");
      inp.hidden = !input;
      if (input) { inp.value = value || ""; }
      const acts = $("#dialogActions");
      acts.innerHTML = "";
      let cancelled = false;
      (buttons || [{ label: "OK", value: true, primary: true }]).forEach((b) => {
        const el = document.createElement("button");
        el.className = "pill-btn" + (b.primary ? "" : " ghost");
        el.textContent = b.label;
        el.addEventListener("click", () => {
          closeDialog();
          if (b.cancel) cancelled = true;
          resolve(cancelled ? null : (input ? inp.value : b.value));
        });
        acts.appendChild(el);
      });
      $("#dialogBackdrop").classList.add("open");
      box.classList.add("open");
      if (input) setTimeout(() => inp.focus(), 100);
      function closeDialog() {
        $("#dialogBackdrop").classList.remove("open");
        box.classList.remove("open");
      }
      $("#dialogBackdrop").onclick = () => {
        closeDialog();
        const cancel = (buttons || []).find((b) => b.cancel);
        cancelled = true;
        resolve(cancel ? cancel.value : null);
      };
    });
  }
  const alert = async (m) => dialog({ title: "Home", msg: m });
  const confirm = (m, title) => dialog({ title: title || "Confirm", msg: m, buttons: [
    { label: "Cancel", value: false, cancel: true },
    { label: "OK", value: true, primary: true },
  ]});
  const prompt = (m, val, title) => dialog({ title: title || "Input", msg: m, input: true, value: val, buttons: [
    { label: "Cancel", value: null, cancel: true },
    { label: "OK", value: "ok", primary: true },
  ]});

  /* ---------- Clock & date ---------- */
  function fmtClock(d) { return (CLOCK_FORMATS.find((x) => x.id === state.clockFormat) || CLOCK_FORMATS[0]).fn(d); }
  function fmtDate(d) { return (DATE_FORMATS.find((x) => x.id === state.dateFormat) || DATE_FORMATS[0]).fn(d); }
  function tickClock() {
    const now = new Date();
    $("#time").textContent = fmtClock(now);
    $("#dateLine").textContent = fmtDate(now);
    const hr = now.getHours();
    let greet;
    if (hr < 5) greet = "Burning the midnight oil?";
    else if (hr < 12) greet = "Good morning.";
    else if (hr < 17) greet = "Good afternoon.";
    else if (hr < 21) greet = "Good evening.";
    else greet = "Ready to ship something cool?";
    $("#greeting").textContent = greet;
  }

  /* ---------- Visuals ---------- */
  function applyVisuals() {
    const wp = WALLPAPERS.find((x) => x.id === state.wallpaperId) || WALLPAPERS[0];
    const r = document.documentElement.style;
    r.setProperty("--text", wp.dark ? "#eef2ff" : "#2a2a2a");
    r.setProperty("--text-dim", wp.dark ? "#aab3d0" : "#6a6460");
    r.setProperty("--accent", wp.accent);
    r.setProperty("--accent2", wp.accent2);
    r.setProperty("--accent3", wp.accent3);
    r.setProperty("--glow", wp.glow);
    r.setProperty("--scrim", wp.dark ? "linear-gradient(to bottom, rgba(5,7,15,.40), rgba(5,7,15,.62))" : "linear-gradient(to bottom, rgba(255,255,255,.18), rgba(255,255,255,.34))");

    const blur = state.sliders.blur || 0;
    const bright = state.sliders.bright || 100;
    let filter = `brightness(${bright}%)`;
    if (blur > 0) filter += ` blur(${blur}px)`;

    const bd = $("#backdrop");
    const vid = $("#bgVideo");
    const type = state.customBg.type || "static";
    const isLive = type === "live";
    const hasVideo = isLive && !!state.customBg.video;
    const hasCustom = !isLive && (state.customBg.image || state.customBg.url);

    if (hasVideo) {
      bd.style.backgroundImage = "none";
      if (vid.dataset.src !== state.customBg.video) {
        vid.src = state.customBg.video;
        vid.dataset.src = state.customBg.video;
        vid.play().catch(() => {});
      }
      vid.style.display = "block";
      vid.style.filter = filter;
    } else {
      vid.pause();
      vid.removeAttribute("src");
      vid.load();
      vid.style.display = "none";
      if (hasCustom) {
        // Layer the custom image on top of the theme gradient: if the image
        // fails to load, the built-in default wallpaper still shows.
        bd.style.backgroundImage = `url('${state.customBg.image || state.customBg.url}'), ${wp.css}`;
      } else {
        bd.style.backgroundImage = wp.css;
      }
      bd.style.filter = filter;
    }
  }

  function renderWallpaperGrid() {
    const grid = $("#wallpaperGrid");
    grid.innerHTML = "";
    for (const w of WALLPAPERS) {
      const el = document.createElement("button");
      el.className = "theme-swatch" + (w.id === state.wallpaperId ? " active" : "");
      el.title = w.name;
      el.style.background = w.css;
      el.dataset.id = w.id;
      el.addEventListener("click", () => { state.wallpaperId = w.id; saveState(); renderWallpaperGrid(); applyVisuals(); });
      grid.appendChild(el);
    }
  }

  /* ---------- Selects / grids ---------- */
  function fillSelect(sel, list, valueKey, labelFn) {
    const selEl = $(sel);
    selEl.innerHTML = "";
    list.forEach((item) => {
      const o = document.createElement("option");
      o.value = item[valueKey];
      o.textContent = labelFn(item);
      selEl.appendChild(o);
    });
    selEl.value = state[valueKey];
  }

  function allFonts() { return [...FONTS, ...state.customFonts]; }

  function renderSelects() {
    fillSelect("#clockFormatSelect", CLOCK_FORMATS, "id", (f) => f.label);
    fillSelect("#dateFormatSelect", DATE_FORMATS, "id", (f) => f.label);
    fillSelect("#clockStyleSelect", CLOCK_STYLES, "id", (f) => f.label);
    fillSelect("#fontSelect", allFonts(), "id", (f) => f.label);
    fillSelect("#searchStyleSelect", SEARCH_STYLES, "id", (f) => f.label);
    fillSelect("#engineSelect", state.engines, "id", (e) => `${e.name} — ${e.url}`);
    $("#clockFormatSelect").value = state.clockFormat;
    $("#dateFormatSelect").value = state.dateFormat;
    $("#clockStyleSelect").value = state.clockStyle;
    $("#fontSelect").value = state.font;
    $("#searchStyleSelect").value = state.searchStyle;
    $("#engineSelect").value = state.defaultEngine;
  }

  function applyClockStyle() {
    const el = $("#time");
    const st = CLOCK_STYLES.find((x) => x.id === state.clockStyle) || CLOCK_STYLES[0];
    if (st.css) {
      el.className = "time";
      el.style.cssText = st.css;
    } else {
      el.className = "time style-" + state.clockStyle;
      el.style.cssText = "";
    }
  }
  function injectCustomFonts() {
    let st = document.getElementById("customFontStyle");
    if (!st) { st = document.createElement("style"); st.id = "customFontStyle"; document.head.appendChild(st); }
    let css = "";
    state.customFonts.forEach((f) => {
      if (f.src) {
        const fmt = f.format || "woff2";
        const name = String(f.label).replace(/["\\]/g, "");
        css += `@font-face{font-family:"${name}";src:url(${f.src}) format("${fmt}");font-display:swap;}`;
      }
    });
    st.textContent = css;
  }
  function applyFont() {
    injectCustomFonts();
    const f = allFonts().find((x) => x.id === state.font) || FONTS[0];
    document.documentElement.style.setProperty("--font", fontFamilyOf(f));
  }
  function applySearchStyle() {
    const box = $("#searchBox");
    const st = SEARCH_STYLES.find((x) => x.id === state.searchStyle) || SEARCH_STYLES[0];
    if (st.css) {
      box.className = "search-box";
      box.style.cssText = st.css;
    } else {
      box.className = "search-box style-" + state.searchStyle;
      box.style.cssText = "";
      box.style.background = `rgba(12,16,30,${(100 - state.searchTrans) / 100})`;
    }
    const bar = $("#searchForm");
    bar.classList.remove("align-left", "align-center", "align-right");
    bar.classList.add("align-" + state.searchAlign);
    bar.style.width = state.searchWidth + "%";
  }

  /* ---------- Particles ---------- */
  function spawnParticles() {
    const wrap = $("#particles");
    wrap.innerHTML = "";
    if (!state.particles) return;
    for (let i = 0; i < 34; i++) {
      const s = document.createElement("span");
      const size = 2 + Math.random() * 4;
      s.style.width = size + "px"; s.style.height = size + "px";
      s.style.left = Math.random() * 100 + "%";
      s.style.animationDuration = (6 + Math.random() * 9) + "s";
      s.style.animationDelay = (Math.random() * 8) + "s";
      s.style.background = `radial-gradient(circle, ${Math.random() > .5 ? "var(--accent2)" : "var(--accent)"}, transparent 65%)`;
      wrap.appendChild(s);
    }
  }

  /* ---------- Search ---------- */
  function doSearch(q) {
    q = (q || "").trim();
    if (!q) return;
    const engine = state.engines.find((e) => e.id === state.defaultEngine) || state.engines[0];
    window.open(engine.url + encodeURIComponent(q), "_blank", "noopener");
  }
  const MAX_ENGINES = 30;
  function engineId() { return "eng" + Date.now() + Math.floor(Math.random() * 1000); }
  function validEngineUrl(u) {
    try { const p = new URL(u); return p.protocol === "http:" || p.protocol === "https:"; }
    catch (e) { return false; }
  }
  function renderEngineManager() {
    const wrap = $("#engineList");
    if (!wrap) return;
    wrap.innerHTML = "";
    state.engines.forEach((e, idx) => {
      const row = document.createElement("div");
      row.className = "tab-manage-row engine-row";
      row.innerHTML = `
        <button class="btn-link eng-default" title="Make this the default engine">${e.id === state.defaultEngine ? "★ Default" : "☆ Set default"}</button>
        <input type="text" class="tm-name" value="${esc(e.name)}" placeholder="Name" title="Engine name" />
        <input type="text" class="tm-url" value="${esc(e.url)}" placeholder="https://…/?q=" title="Search URL" />
        <button class="tab-close eng-del" title="Delete engine">✕</button>`;
      row.querySelector(".tm-name").addEventListener("click", (ev) => ev.stopPropagation());
      row.querySelector(".tm-name").addEventListener("change", () => {
        const v = row.querySelector(".tm-name").value.trim();
        if (v) { e.name = v; saveState(); renderSelects(); renderEngineManager(); }
        else row.querySelector(".tm-name").value = e.name;
      });
      row.querySelector(".tm-url").addEventListener("click", (ev) => ev.stopPropagation());
      row.querySelector(".tm-url").addEventListener("change", () => {
        const v = row.querySelector(".tm-url").value.trim();
        if (validEngineUrl(v)) { e.url = v; saveState(); renderSelects(); renderEngineManager(); }
        else { alert("That doesn't look like a valid http(s) URL."); row.querySelector(".tm-url").value = e.url; }
      });
      row.querySelector(".eng-default").addEventListener("click", (ev) => {
        ev.stopPropagation();
        state.defaultEngine = e.id; saveState(); renderSelects(); renderEngineManager();
      });
      row.querySelector(".eng-del").addEventListener("click", async (ev) => {
        ev.stopPropagation();
        if (state.engines.length <= 1) { await alert("At least one search engine is required."); return; }
        const ok = await confirm(`Delete engine “${e.name}”?`, "Delete engine");
        if (!ok) return;
        state.engines.splice(idx, 1);
        if (state.defaultEngine === e.id) state.defaultEngine = state.engines[0].id;
        saveState(); renderSelects(); renderEngineManager();
      });
      wrap.appendChild(row);
    });
  }

  function renderFontList() {
    const wrap = $("#fontList");
    if (!wrap) return;
    wrap.innerHTML = "";
    if (!state.customFonts.length) {
      const empty = document.createElement("div");
      empty.className = "setting-hint";
      empty.textContent = "No custom fonts yet — upload a font file or add one below.";
      wrap.appendChild(empty);
      return;
    }
    state.customFonts.forEach((f, idx) => {
      const row = document.createElement("div");
      row.className = "tab-manage-row font-row";
      const sample = f.src ? f.label : f.family;
      row.innerHTML = `
        <span class="font-sample" style="font-family:${esc(sample)}">Aa</span>
        <span class="tm-count font-label">${esc(f.label)}</span>
        <button class="tab-close font-del" title="Delete font">✕</button>`;
      row.querySelector(".font-del").addEventListener("click", async (ev) => {
        ev.stopPropagation();
        const ok = await confirm(`Delete font “${f.label}”?`, "Delete font");
        if (!ok) return;
        state.customFonts.splice(idx, 1);
        if (state.font === f.id) state.font = "system";
        saveState(); injectCustomFonts(); renderFontList(); renderSelects(); applyFont();
      });
      wrap.appendChild(row);
    });
  }

  function fontFamilyOf(f) { return f.src ? f.label : f.family; }

  /* ---------- Pins & tabs ---------- */
  function currentTab() { return state.tabs[state.activeTab]; }
  function currentPins() { return currentTab().pins; }
  function faviconFor(url) {
    try { const u = new URL(url); return `https://www.google.com/s2/favicons?domain=${encodeURIComponent(u.hostname)}&sz=64`; }
    catch (e) { return ""; }
  }
  function brandGradient(url) {
    try {
      const u = new URL(url);
      let h = 0;
      for (const ch of u.hostname) h = (h * 31 + ch.charCodeAt(0)) % 360;
      return `linear-gradient(135deg, hsl(${h},45%,26%), hsl(${(h + 40) % 360},45%,18%))`;
    } catch (e) { return ""; }
  }

  // Drag state
  let dragPin = null; // { fromTab, fromIdx }
  let dragTab = null; // index

  function renderDock() {
    const dock = $("#dock");
    dock.innerHTML = "";
    state.tabs.forEach((t, idx) => {
      const el = document.createElement("div");
      el.className = "tab" + (idx === state.activeTab ? " active" : "");
      el.dataset.idx = idx;
      el.draggable = true;
      el.innerHTML = `<span class="tab-name">${esc(t.name)}</span>`;
      el.addEventListener("click", () => {
        state.activeTab = idx; saveState(); renderDock(); renderPins();
      });
      el.addEventListener("dblclick", async (e) => {
        e.stopPropagation();
        const v = await prompt("Tab name", t.name, "Rename tab");
        if (v != null && v.trim()) { t.name = v.trim(); saveState(); renderDock(); renderTabManage(); }
      });
      // drag tab
      el.addEventListener("dragstart", () => { dragTab = idx; el.classList.add("dragging"); });
      el.addEventListener("dragend", () => { el.classList.remove("dragging"); dragTab = null; clearDragOver(); });
      el.addEventListener("dragover", (e) => { e.preventDefault(); clearDragOver(); el.classList.add("drag-over"); });
      el.addEventListener("dragleave", () => el.classList.remove("drag-over"));
      el.addEventListener("drop", (e) => {
        e.preventDefault();
        clearDragOver();
        if (dragTab !== null && dragTab !== idx) {
          const [moved] = state.tabs.splice(dragTab, 1);
          state.tabs.splice(idx, 0, moved);
          state.activeTab = state.tabs.indexOf(currentTab());
          saveState(); renderDock(); renderPins(); renderTabManage();
        } else if (dragPin) {
          const from = state.tabs[dragPin.fromTab];
          const [pin] = from.pins.splice(dragPin.fromIdx, 1);
          state.tabs[idx].pins.push(pin);
          state.activeTab = idx;
          dragPin = null;
          saveState(); renderDock(); renderPins(); renderTabManage();
        }
      });
      dock.appendChild(el);
    });
  }

  function renderTabManage() {
    const wrap = $("#tabList");
    if (!wrap) return;
    wrap.innerHTML = "";
    state.tabs.forEach((t, idx) => {
      const row = document.createElement("div");
      row.className = "tab-manage-row";
      row.innerHTML = `<input type="text" class="tm-name" value="${esc(t.name)}" data-idx="${idx}" /><span class="tm-count">${t.pins.length} pins</span><button class="tab-close" data-idx="${idx}">✕</button>`;
      const nameInp = row.querySelector(".tm-name");
      nameInp.addEventListener("click", (e) => e.stopPropagation());
      nameInp.addEventListener("change", () => {
        const v = nameInp.value.trim();
        if (v) { t.name = v; saveState(); renderDock(); }
        else nameInp.value = t.name;
      });
      row.addEventListener("click", (e) => {
        if (e.target.classList.contains("tab-close") || e.target.classList.contains("tm-name")) return;
        state.activeTab = idx; saveState(); renderDock(); renderPins(); renderTabManage();
      });
      row.querySelector(".tab-close").addEventListener("click", async (e) => {
        e.stopPropagation();
        if (state.tabs.length === 1) { await alert("At least one tab is required."); return; }
        const ok = await confirm(`Delete tab "${t.name}" and its ${t.pins.length} pins?`, "Delete tab");
        if (!ok) return;
        state.tabs.splice(idx, 1);
        if (state.activeTab >= state.tabs.length) state.activeTab = state.tabs.length - 1;
        saveState(); renderDock(); renderPins(); renderTabManage(); renderPinsManage();
      });
      wrap.appendChild(row);
    });
  }

  function addTab(name) {
    const n = (name || "").trim() || "New tab";
    state.tabs.push({ id: "tab" + Date.now(), name: n, pins: [] });
    state.activeTab = state.tabs.length - 1;
    saveState(); renderDock(); renderPins(); renderTabManage(); renderPinsManage();
  }

  let pinsManageTab = 0;
  function renderPinsManage() {
    const sel = $("#pinsTabSel");
    if (!sel) return;
    sel.innerHTML = "";
    state.tabs.forEach((t, i) => {
      const o = document.createElement("option");
      o.value = i;
      o.textContent = `${t.name} (${t.pins.length})`;
      sel.appendChild(o);
    });
    if (pinsManageTab >= state.tabs.length) pinsManageTab = Math.max(0, state.tabs.length - 1);
    sel.value = pinsManageTab;
    sel.addEventListener("change", () => { pinsManageTab = +sel.value; renderPinsManage(); });

    const list = $("#pinsList");
    list.innerHTML = "";
    const pins = state.tabs[pinsManageTab].pins;
    if (!pins.length) {
      const empty = document.createElement("div");
      empty.className = "setting-hint";
      empty.textContent = "No pins in this tab yet — add some on the dashboard.";
      list.appendChild(empty);
      return;
    }
    pins.forEach((p, idx) => {
      const row = document.createElement("div");
      row.className = "tab-manage-row pin-m-row";
      const icon = p.icon || faviconFor(p.url);
      row.innerHTML = `
        ${icon ? `<img class="pin-m-icon" src="${esc(icon)}" alt="" />` : "<span class='pin-m-icon'>🔗</span>"}
        <span class="tm-count pin-m-name">${esc(p.name || p.url)}</span>
        <button class="btn-link pin-m-edit">Edit</button>
        <button class="tab-close pin-m-del" title="Delete pin">✕</button>`;
      row.querySelector(".pin-m-edit").addEventListener("click", (ev) => {
        ev.stopPropagation();
        state.activeTab = pinsManageTab;
        openPinModal(idx);
      });
      row.querySelector(".pin-m-del").addEventListener("click", async (ev) => {
        ev.stopPropagation();
        const ok = await confirm(`Delete pin “${p.name || p.url}”?`, "Delete pin");
        if (!ok) return;
        pins.splice(idx, 1);
        saveState(); renderPins(); renderPinsManage(); renderTabManage();
      });
      list.appendChild(row);
    });
  }

  function clearDragOver() { $$(".tab.drag-over, .pin-cell.drag-over").forEach((el) => el.classList.remove("drag-over")); }

  function renderPins() {
    const grid = $("#pinGrid");
    grid.innerHTML = "";
    const pins = currentPins();

    pins.forEach((pin, idx) => {
      const a = document.createElement("a");
      a.className = "pin-cell";
      const sizeClass = pin.size === "w" ? " sp-w" : pin.size === "h" ? " sp-h" : pin.size === "b" ? " sp-b" : "";
      a.className += sizeClass;
      a.href = pin.url;
      a.target = "_blank";
      a.rel = "noopener";
      a.draggable = true;

      let iconHtml = "";
      if (pin.icon) iconHtml = `<img src="${pin.icon}" alt="" />`;
      else { const fc = faviconFor(pin.url); if (fc) iconHtml = `<img src="${fc}" alt="" />`; }

      const name = pin.name || pin.url;
      const isVideoBg = pin.bgType === "video";
      let inner = `<span class="pin-icon">${iconHtml || "<span style='font-size:18px'>🔗</span>"}</span><span class="pin-name">${esc(name)}</span>`;
      if (isVideoBg && pin.bg) {
        inner = `<video class="pin-bg-video" src="${pin.bg}" muted loop autoplay playsinline></video>` + inner;
      } else if (pin.bg && !isVideoBg) {
        a.style.backgroundImage = `url('${pin.bg}')`;
      } else if (sizeClass) {
        a.style.backgroundImage = brandGradient(pin.url);
      }
      a.innerHTML = inner;
      if (isVideoBg && pin.bg) {
        const v = a.querySelector("video");
        v.play().catch(() => {});
      }

      // drag pin
      a.addEventListener("dragstart", (e) => { dragPin = { fromTab: state.activeTab, fromIdx: idx }; a.classList.add("dragging"); e.dataTransfer.effectAllowed = "move"; });
      a.addEventListener("dragend", () => { a.classList.remove("dragging"); dragPin = null; clearDragOver(); });
      a.addEventListener("dragover", (e) => { e.preventDefault(); clearDragOver(); a.classList.add("drag-over"); });
      a.addEventListener("dragleave", () => a.classList.remove("drag-over"));
      a.addEventListener("drop", (e) => {
        e.preventDefault(); e.stopPropagation();
        clearDragOver();
        if (dragPin) {
          const from = state.tabs[dragPin.fromTab];
          const fromIdx = dragPin.fromIdx;
          const [pin] = from.pins.splice(fromIdx, 1);
          const targetPins = currentPins();
          let targetIdx = idx;
          if (from.pins === targetPins && fromIdx < targetIdx) targetIdx--;
          targetPins.splice(targetIdx, 0, pin);
          dragPin = null;
          saveState(); renderPins();
        }
      });
      grid.appendChild(a);
    });
  }

  /* ---------- Pin modal ---------- */
  let editingPinIdx = null;
  let pinIconMode = "auto";
  let pinIconData = null;
  let pinSize = "1";
  let pinBgMode = "url";
  let pinBgData = null;

  function openPinModal(idx) {
    editingPinIdx = typeof idx === "number" ? idx : null;
    pinIconMode = "auto"; pinIconData = null;
    pinSize = "1"; pinBgMode = "url"; pinBgData = null;
    const pin = editingPinIdx !== null ? currentPins()[editingPinIdx] : null;
    $("#pinModalTitle").textContent = pin ? "Edit pin" : "Add pin";
    $("#pinName").value = pin ? pin.name : "";
    $("#pinUrl").value = pin ? pin.url : "";
    $("#pinDelete").hidden = !pin;
    $("#pinBgUrl").value = "";
    if (pin) {
      pinSize = pin.size || "1";
      if (pin.bg) {
        if (pin.bgType === "video") { pinBgMode = "video"; $("#pinBgUrl").value = pin.bg; }
        else { pinBgMode = pin.bg.startsWith("data:") ? "upload" : "url"; pinBgData = pin.bg; $("#pinBgUrl").value = pinBgMode === "url" ? pin.bg : ""; }
      }
    }
    renderPinSegs();
    $("#pinBackdrop").classList.add("open");
    $("#pinModal").classList.add("open");
  }
  function closePinModal() {
    $("#pinBackdrop").classList.remove("open");
    $("#pinModal").classList.remove("open");
  }
  function renderPinSegs() {
    $$("#pinIconSeg button").forEach((b) => b.classList.toggle("active", b.dataset.icon === pinIconMode));
    $$("#pinSizeSeg button").forEach((b) => b.classList.toggle("active", b.dataset.size === pinSize));
    $$("#pinBgSeg button").forEach((b) => b.classList.toggle("active", b.dataset.bg === pinBgMode));
  }
  async function savePin() {
    const url = $("#pinUrl").value.trim();
    if (!url) { alert("Please enter a URL."); return; }
    const name = $("#pinName").value.trim() || url;
    let icon = null;
    if (pinIconMode === "upload" && pinIconData) icon = pinIconData;
    let bg = null;
    let bgType = null;
    if (pinBgMode === "upload" && pinBgData) { bg = pinBgData; bgType = "upload"; }
    else if (pinBgMode === "url") { const u = $("#pinBgUrl").value.trim(); if (u) { bg = u; bgType = "url"; } }
    else if (pinBgMode === "video") { const u = $("#pinBgUrl").value.trim(); if (u) { bg = u; bgType = "video"; } }
    const pin = { name, url, icon, size: pinSize === "1" ? null : pinSize, bg, bgType };

    const pins = currentPins();
    if (editingPinIdx !== null) pins[editingPinIdx] = pin;
    else {
      if (pins.length >= 50) { await alert("Max 50 pins per tab."); return; }
      pins.push(pin);
    }
    saveState(); renderPins(); closePinModal();
  }

  /* ---------- Bookmarks import ---------- */
  async function importBookmarks() {
    if (!chrome.bookmarks) { await alert("Bookmarks permission not available."); return; }
    chrome.bookmarks.getTree((tree) => {
      const urls = [];
      const walk = (nodes) => { for (const n of nodes) { if (n.url) urls.push(n); if (n.children) walk(n.children); } };
      walk(tree);
      const pins = currentPins();
      const existing = new Set(pins.map((p) => p.url));
      let added = 0;
      for (const b of urls) {
        if (pins.length >= 50) break;
        if (existing.has(b.url)) continue;
        pins.push({ name: b.title || b.url, url: b.url, icon: null, size: null, bg: null });
        existing.add(b.url); added++;
      }
      saveState(); renderPins();
      alert(`Imported ${added} bookmark(s) into "${currentTab().name}".`);
    });
  }

  function downloadJson(name, data) {
    const blob = new Blob([JSON.stringify(data, null, 2)], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url; a.download = name;
    document.body.appendChild(a); a.click(); a.remove();
    setTimeout(() => URL.revokeObjectURL(url), 500);
  }
  function bookmarksTree() {
    return new Promise((resolve) => chrome.bookmarks.getTree(resolve));
  }
  function countUrls(nodes) {
    let c = 0;
    for (const n of nodes) { if (n.url) c++; if (n.children) c += countUrls(n.children); }
    return c;
  }
  function deleteAllBookmarks() {
    return new Promise((resolve) => {
      chrome.bookmarks.getTree((tree) => {
        const kids = ((tree[0] && tree[0].children) || []).slice();
        let i = 0;
        const next = () => { if (i >= kids.length) return resolve(); chrome.bookmarks.removeTree(kids[i++].id, next); };
        next();
      });
    });
  }
  function moveAllBookmarksToFolder() {
    return new Promise((resolve) => {
      chrome.bookmarks.getTree((tree) => {
        const root = tree[0];
        const kids = ((root && root.children) || []).slice();
        const title = "Home Backup " + new Date().toISOString().slice(0, 10);
        chrome.bookmarks.create({ parentId: root.id, title }, (folder) => {
          let i = 0;
          const next = () => {
            while (i < kids.length && kids[i].id === folder.id) i++;
            if (i >= kids.length) return resolve();
            chrome.bookmarks.move(kids[i++].id, { parentId: folder.id }, next);
          };
          next();
        });
      });
    });
  }
  async function importAllBookmarksBackup() {
    if (!chrome.bookmarks) { await alert("Bookmarks permission not available."); return; }
    try {
      const tree = await bookmarksTree();
      downloadJson("home-bookmarks-backup-" + new Date().toISOString().replace(/[:.]/g, "-") + ".json", tree);
    } catch (e) { /* backup is best-effort */ }
    let total = 0;
    try { total = countUrls(await bookmarksTree()); } catch (e) {}
    const act = state.bmCleanup;
    const actText = act === "delete"
      ? "DELETE ALL bookmarks"
      : act === "move"
        ? "move all bookmarks into a backup folder"
        : "keep your bookmarks unchanged";
    const ok = await confirm(`Import ${total} bookmark(s) into the current tab, then ${actText}? A backup file has been downloaded first.`, "Import all bookmarks");
    if (!ok) return;
    await importBookmarks();
    if (act === "delete") { try { await deleteAllBookmarks(); } catch (e) {} }
    else if (act === "move") { try { await moveAllBookmarksToFolder(); } catch (e) {} }
  }

  /* ---------- Focus timer ---------- */
  function fmt(sec) { const m = Math.floor(sec / 60); const s = sec % 60; return `${String(m).padStart(2, "0")}:${String(s).padStart(2, "0")}`; }
  function renderTimer() {
    $("#timerDisplay").textContent = fmt(timer.remaining);
    $("#timerToggle").textContent = timer.running ? "Pause" : "Start";
    $$(".mode").forEach((m) => m.classList.toggle("active", Number(m.dataset.min) === timer.min));
  }
  function stopTimerInterval() { if (timer.interval) { clearInterval(timer.interval); timer.interval = null; } }
  function setTimerMin(min) { timer.min = min; timer.remaining = min * 60; timer.running = false; stopTimerInterval(); renderTimer(); }
  function toggleTimer() {
    if (timer.running) { timer.running = false; stopTimerInterval(); }
    else {
      if (timer.remaining <= 0) timer.remaining = timer.min * 60;
      if (typeof Notification !== "undefined" && Notification.requestPermission) Notification.requestPermission().catch(() => {});
      timer.running = true;
      timer.interval = setInterval(() => {
        timer.remaining--;
        if (timer.remaining <= 0) {
          timer.remaining = 0; stopTimerInterval(); timer.running = false;
          try { new Notification("Focus", { body: "Time's up — take a break." }); } catch (e) {}
        }
        renderTimer();
      }, 1000);
    }
    renderTimer();
  }
  function renderTimerModes() {
    const wrap = $("#timerModes");
    wrap.innerHTML = "";
    const modes = [
      { label: "Focus", min: state.focusTimes.focus },
      { label: "Break", min: state.focusTimes.br },
      { label: "Deep", min: state.focusTimes.deep },
    ];
    modes.forEach((m) => {
      const b = document.createElement("button");
      b.className = "mode" + (m.min === timer.min ? " active" : "");
      b.textContent = `${m.label} ${m.min}m`;
      b.dataset.min = m.min;
      b.addEventListener("click", () => setTimerMin(m.min));
      wrap.appendChild(b);
    });
  }
  function applyFocusVisibility() {
    const w = $("#focusWidget");
    w.style.display = state.focusEnabled ? "" : "none";
    if (!state.focusEnabled) { timer.running = false; stopTimerInterval(); }
  }

  /* ---------- Settings panel preview ---------- */
  function applyPanelPlacement() {
    const panel = $("#settingsPanel");
    const wasOpen = panel.classList.contains("open");
    panel.className = "settings-panel no-scrollbar pos-right";
    // panel is fixed to the right and opened via the gear button — no hover strips
    $$(".strip").forEach((s) => s.remove());
    if (wasOpen) panel.classList.add("open");
  }

  function applyGearPos() {
    const w = $("#gearWrap");
    if (!w) return;
    const bw = w.offsetWidth || 64;
    const bh = w.offsetHeight || 48;
    const x = Math.round((state.gearX / 100) * Math.max(0, window.innerWidth - bw));
    const y = Math.round((state.gearY / 100) * Math.max(0, window.innerHeight - bh));
    w.style.left = x + "px";
    w.style.top = y + "px";
    w.style.right = "auto";
    w.style.bottom = "auto";
  }
  function renderGearPos() {
    const x = clamp(0, 100, state.gearX);
    const y = clamp(0, 100, state.gearY);
    const sel = $("#gearPosSelect");
    if (sel) {
      const corner = (x <= 50 ? "l" : "r") + (y <= 50 ? "t" : "b");
      sel.value = corner;
    }
    const pv = $("#gearPreview");
    if (pv) pv.innerHTML = `<div class="gp-box"><i class="gp-dot" style="left:${x}%;top:${y}%"></i></div>`;
    applyGearPos();
  }

  /* ---------- Management page (engines / fonts) ---------- */
  let manageSection = "engines";
  function openManagePage(section) {
    manageSection = section || "engines";
    renderManagePage();
    $("#manageBackdrop").classList.add("open");
    $("#managePage").classList.add("open");
  }
  function closeManagePage() {
    $("#manageBackdrop").classList.remove("open");
    $("#managePage").classList.remove("open");
  }
  function renderManagePage() {
    $$("#manageTabs button").forEach((b) => b.classList.toggle("active", b.dataset.sec === manageSection));
    $("#secEngines").hidden = manageSection !== "engines";
    $("#secFonts").hidden = manageSection !== "fonts";
    $("#secTabs").hidden = manageSection !== "tabs";
    renderEngineManager();
    renderFontList();
    renderTabManage();
    renderPinsManage();
  }

  /* ---------- Widget config (right-click) ---------- */
  const WIDGET_META = {
    clock: { label: "Clock" },
    search: { label: "Search bar" },
    pins: { label: "Pins grid" },
    dock: { label: "Tab dock" },
    focus: { label: "Focus timer" },
    particles: { label: "Particles" },
  };
  function currentWidget(id) {
    if (!state.widgets[id]) state.widgets[id] = { visible: true, opacity: 100 };
    return state.widgets[id];
  }
  function applyWidgets() {
    $$("[data-widget]").forEach((el) => {
      const id = el.dataset.widget;
      const w = currentWidget(id);
      el.style.display = w.visible ? "" : "none";
      el.style.opacity = w.opacity / 100;
    });
    const pw = state.widgets.particles;
    if (pw.visible !== state.particles) {
      state.particles = pw.visible;
      spawnParticles();
    }
    syncParticlesUI();
  }
  function syncParticlesUI() {
    if (!$("#particlesSeg")) return;
    $$("#particlesSeg button").forEach((b) => b.classList.toggle("active", (b.dataset.particles === "on") === state.particles));
  }
  function openWidgetMenu(id, x, y) {
    const meta = WIDGET_META[id];
    if (!meta) return;
    const w = currentWidget(id);
    const menu = $("#widgetMenu");
    menu.innerHTML = "";
    menu.hidden = false;

    const title = document.createElement("div");
    title.className = "wm-title";
    title.textContent = meta.label;

    const visRow = document.createElement("label");
    visRow.className = "wm-row";
    visRow.innerHTML = `<span>Show</span><input type="checkbox" ${w.visible ? "checked" : ""} />`;
    const cb = visRow.querySelector("input");
    cb.addEventListener("change", () => {
      w.visible = cb.checked;
      saveState(); applyWidgets();
    });

    const opRow = document.createElement("label");
    opRow.className = "wm-row";
    opRow.innerHTML = `<span>Opacity</span><input type="range" min="20" max="100" step="5" value="${w.opacity}" />`;
    const range = opRow.querySelector("input");
    range.addEventListener("input", () => {
      w.opacity = +range.value;
      saveState(); applyWidgets();
    });

    const reset = document.createElement("button");
    reset.className = "pill-btn ghost full";
    reset.textContent = "Reset";
    reset.style.marginTop = "10px";
    reset.addEventListener("click", () => {
      state.widgets[id] = { visible: true, opacity: 100 };
      saveState(); applyWidgets(); closeWidgetMenu();
    });

    menu.append(title, visRow, opRow, reset);

    const mw = 230, mh = menu.offsetHeight || 190;
    const left = Math.min(Math.max(8, x), window.innerWidth - mw - 8);
    const top = Math.min(Math.max(8, y), window.innerHeight - mh - 8);
    menu.style.left = left + "px";
    menu.style.top = top + "px";
  }
  function closeWidgetMenu() { $("#widgetMenu").hidden = true; }

  /* ---------- Settings ---------- */
  function renderSettings() {
    decorateHeaderIcons();
    renderWallpaperGrid();
    renderSelects();
    renderTimerModes();
    applyFocusVisibility();

    $$("#particlesSeg button").forEach((b) => b.classList.toggle("active", (b.dataset.particles === "on") === state.particles));
    $$("#focusSeg button").forEach((b) => b.classList.toggle("active", (b.dataset.focus === "on") === state.focusEnabled));
    $("#bgTypeSelect").value = state.customBg.type || "static";
    $$("#searchAlign button").forEach((b) => b.classList.toggle("active", b.dataset.align === state.searchAlign));
    $$("#singleHomeSeg button").forEach((b) => b.classList.toggle("active", (b.dataset.sh === "on") === state.singleHome));
    $("#bmCleanupSel").value = state.bmCleanup;

    $("#focusDur").value = state.focusTimes.focus;
    $("#breakDur").value = state.focusTimes.br;
    $("#deepDur").value = state.focusTimes.deep;
    $("#bgUrl").value = (state.customBg.type === "live"
      ? (state.customBg.video || "")
      : (state.customBg.url !== DEFAULT_WALL_IMAGE ? state.customBg.url : "")) || "";
    $("#bgBlur").value = state.sliders.blur;
    $("#bgBright").value = state.sliders.bright;
    $("#bgTint").value = state.sliders.tint;
    $("#searchWidth").value = state.searchWidth;
    $("#searchTrans").value = state.searchTrans;

    applyClockStyle();
    applyFont();
    applySearchStyle();
    renderGearPos();
    applyPanelPlacement();
  }

  function openSettings() { renderSettings(); applyPanelPlacement(); settingsOpenedAt = Date.now(); $("#settingsPanel").classList.add("open"); $("#settingsBackdrop").classList.add("open"); }
  function closeSettings() { $("#settingsPanel").classList.remove("open"); $("#settingsBackdrop").classList.remove("open"); }

  /* ---------- Helpers ---------- */
  function esc(str) { return String(str).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c])); }
  function clamp(min, max, v) { return Math.max(min, Math.min(max, v)); }

  const HEADER_ICON = '<svg class="sh-icon" viewBox="0 0 24 24"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.7 1.7 0 0 0 .3 1.9l.1.1a2 2 0 0 1-2.8 2.8l-.1-.1a1.7 1.7 0 0 0-1.9-.3 1.7 1.7 0 0 0-1 1.6V21a2 2 0 0 1-4 0v-.1a1.7 1.7 0 0 0-1-1.6 1.7 1.7 0 0 0-1.9.3l-.1.1a2 2 0 0 1-2.8-2.8l.1-.1a1.7 1.7 0 0 0 .3-1.9 1.7 1.7 0 0 0-1.6-1H3a2 2 0 0 1 0-4h.1a1.7 1.7 0 0 0 1.6-1 1.7 1.7 0 0 0-.3-1.9l-.1-.1a2 2 0 0 1 2.8-2.8l.1.1a1.7 1.7 0 0 0 1.9.3h.1a1.7 1.7 0 0 0 1-1.6V3a2 2 0 0 1 4 0v.1a1.7 1.7 0 0 0 1 1.6h.1a1.7 1.7 0 0 0 1.9-.3l.1-.1a2 2 0 0 1 2.8 2.8l-.1.1a1.7 1.7 0 0 0-.3 1.9v.1a1.7 1.7 0 0 0 1.6 1h.1a2 2 0 0 1 0 4h-.1a1.7 1.7 0 0 0-1.6 1z"/></svg>';
  function decorateHeaderIcons() {
    $$("#settingsPanel .setting-label, #settingsPanel .small-head").forEach((el) => {
      if (el.dataset.iconized) return;
      el.dataset.iconized = "1";
      el.classList.add("has-icon");
      const txt = el.textContent.trim();
      el.innerHTML = HEADER_ICON + "<span>" + esc(txt) + "</span>";
    });
  }

  /* ---------- Init ---------- */
  function init() {
    loadStateSync();
    const apply = () => {
      if (chrome.storage && chrome.storage.local) {
        chrome.storage.local.get({ singleHome: true, home_state: null }, (r) => {
          state.singleHome = !!r.singleHome;
          if (r.home_state && !localStorage.getItem("home")) loadFromObj(JSON.parse(r.home_state));
          renderSettings();
        });
      } else {
        renderSettings();
      }
    };
    apply();
    setTimerMin(state.focusTimes.focus);

    applyVisuals();
    renderWallpaperGrid();
    renderSelects();
    renderDock();
    renderPins();
    renderTimerModes();
    applyFocusVisibility();
    applyClockStyle();
    applyFont();
    applySearchStyle();
    applyPanelPlacement();
    spawnParticles();
    applyWidgets();

    setInterval(tickClock, 1000);
    tickClock();

    // right-click: pins open the pin editor; any other component opens its config menu
    document.addEventListener("contextmenu", (e) => {
      e.preventDefault();
      const pin = e.target.closest(".pin-cell");
      if (pin) {
        const idx = Array.prototype.indexOf.call($("#pinGrid").children, pin);
        if (idx >= 0) openPinModal(idx);
        return;
      }
      if (e.target.closest(".pin-zone")) return; // empty pin-grid area: no context action
      const host = e.target.closest("[data-widget]");
      if (host) openWidgetMenu(host.dataset.widget, e.clientX, e.clientY);
    });
    document.addEventListener("click", (e) => {
      const menu = $("#widgetMenu");
      if (!menu.hidden && !menu.contains(e.target)) closeWidgetMenu();
    });

    // search
    $("#searchForm").addEventListener("submit", (e) => { e.preventDefault(); doSearch($("#searchInput").value); });
    $("#searchInput").addEventListener("keydown", (e) => { if (e.key === "Enter") { e.preventDefault(); doSearch(e.target.value); } });

    // settings open/close
    $("#btnSettings").addEventListener("click", () => {
      const panel = $("#settingsPanel");
      if (panel.classList.contains("open")) closeSettings();
      else openSettings();
    });
    $("#settingsClose").addEventListener("click", closeSettings);
    $("#settingsBackdrop").addEventListener("click", () => {
      // Small grace window so a fast click right after opening isn't mistaken for
      // an outside click; otherwise clicking outside closes the panel.
      if (Date.now() - settingsOpenedAt < 250) return;
      closeSettings();
    });

    // config add pin / manage tabs & pins
    $("#cfgAddPin").addEventListener("click", () => openPinModal());
    $("#btnManageTabs").addEventListener("click", () => openManagePage("tabs"));
    $("#mtAddTab").addEventListener("click", () => {
      addTab($("#mtTabName").value);
      $("#mtTabName").value = "";
    });
    $("#mtTabName").addEventListener("keydown", (e) => { if (e.key === "Enter") $("#mtAddTab").click(); });

    // select listeners
    $("#engineSelect").addEventListener("change", (e) => { state.defaultEngine = e.target.value; saveState(); renderSelects(); renderEngineManager(); });

    // engine manager — add
    $("#engAdd").addEventListener("click", () => {
      const name = $("#engNewName").value.trim();
      const url = $("#engNewUrl").value.trim();
      if (!name || !url) { alert("Enter both a name and a search URL."); return; }
      if (!validEngineUrl(url)) { alert("That doesn't look like a valid http(s) URL."); return; }
      if (state.engines.length >= MAX_ENGINES) { alert(`You can have at most ${MAX_ENGINES} engines.`); return; }
      if (state.engines.some((e) => e.url.toLowerCase() === url.toLowerCase())) { alert("That engine already exists."); return; }
      state.engines.push({ id: engineId(), name, url });
      state.defaultEngine = state.engines[state.engines.length - 1].id;
      $("#engNewName").value = ""; $("#engNewUrl").value = "";
      saveState(); renderSelects(); renderEngineManager();
    });
    $("#engNewName").addEventListener("keydown", (e) => { if (e.key === "Enter") { e.preventDefault(); $("#engAdd").click(); } });
    $("#engNewUrl").addEventListener("keydown", (e) => { if (e.key === "Enter") { e.preventDefault(); $("#engAdd").click(); } });

    // management page
    $("#btnManageEngines").addEventListener("click", () => openManagePage("engines"));
    $("#btnManageFonts").addEventListener("click", () => openManagePage("fonts"));
    $("#manageClose").addEventListener("click", closeManagePage);
    $("#manageBackdrop").addEventListener("click", closeManagePage);
    $$("#manageTabs button").forEach((b) => b.addEventListener("click", () => openManagePage(b.dataset.sec)));
    $("#engReset").addEventListener("click", () => {
      state.engines = DEFAULT_ENGINES.map((e) => ({ ...e }));
      if (!state.engines.some((e) => e.id === state.defaultEngine)) state.defaultEngine = state.engines[0].id;
      saveState(); renderSelects(); renderEngineManager();
    });

    // gear button position — corner dropdown (top/left/right/bottom)
    $("#gearPosSelect").addEventListener("change", () => {
      const v = $("#gearPosSelect").value;
      state.gearX = v[0] === "l" ? 0 : 100;
      state.gearY = v[1] === "t" ? 0 : 100;
      saveState(); renderGearPos();
    });
    window.addEventListener("resize", applyGearPos);

    // config import / export
    $("#exportCfg").addEventListener("click", () => {
      const blob = new Blob([JSON.stringify(state, null, 2)], { type: "application/json" });
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url; a.download = "home-config.json";
      document.body.appendChild(a); a.click(); a.remove();
      setTimeout(() => URL.revokeObjectURL(url), 500);
    });
    $("#importCfg").addEventListener("click", () => $("#importCfgFile").click());
    $("#importCfgFile").addEventListener("change", (e) => {
      const f = e.target.files[0];
      if (!f) return;
      const reader = new FileReader();
      reader.onload = async () => {
        try {
          const parsed = JSON.parse(reader.result);
          if (!parsed || typeof parsed !== "object") throw new Error("bad");
          // normalize so all data (pins, tabs, engines, fonts, widgets, settings) restores fully
          if (!Array.isArray(parsed.tabs) || !parsed.tabs.length) parsed.tabs = [{ id: "main", name: "Home", pins: [] }];
          parsed.tabs.forEach((t) => { if (!Array.isArray(t.pins)) t.pins = []; });
          if (!Array.isArray(parsed.engines) || !parsed.engines.length) parsed.engines = DEFAULT_ENGINES.map((e) => ({ ...e }));
          if (!Array.isArray(parsed.customFonts)) parsed.customFonts = [];
          if (!parsed.widgets || typeof parsed.widgets !== "object") parsed.widgets = {};
          parsed.mergedDefaults = true; // keep the imported engine set exactly as-is
          if (typeof parsed.defaultEngine !== "string" || !parsed.engines.some((e) => e.id === parsed.defaultEngine)) parsed.defaultEngine = parsed.engines[0].id;

          const ok = await confirm("Replace your current configuration with the imported one? All pins, tabs, engines, fonts and settings will be restored.", "Import config");
          if (!ok) return;
          localStorage.setItem("home", JSON.stringify(parsed));
          if (chrome.storage && chrome.storage.local) chrome.storage.local.set({ home_state: JSON.stringify(parsed) }).catch(() => {});
          location.reload();
        } catch (err) { alert("That doesn't look like a valid config file."); }
      };
      reader.readAsText(f);
    });
    $("#clockFormatSelect").addEventListener("change", (e) => { state.clockFormat = e.target.value; saveState(); tickClock(); });
    $("#dateFormatSelect").addEventListener("change", (e) => { state.dateFormat = e.target.value; saveState(); tickClock(); });
    $("#clockStyleSelect").addEventListener("change", (e) => { state.clockStyle = e.target.value; saveState(); renderSettings(); });
    $("#fontSelect").addEventListener("change", (e) => { state.font = e.target.value; saveState(); renderSettings(); });
    $("#searchStyleSelect").addEventListener("change", (e) => { state.searchStyle = e.target.value; saveState(); renderSettings(); });

    // custom font manage (management page: add by name or upload a font file)
    $("#fontCustomSave").addEventListener("click", () => {
      const name = $("#fontCustomName").value.trim();
      const family = $("#fontCustomFamily").value.trim();
      if (!name || !family) { alert("Both name and font-family are required."); return; }
      const id = "cf" + Date.now();
      state.customFonts.push({ id, label: name, family });
      state.font = id;
      $("#fontCustomName").value = ""; $("#fontCustomFamily").value = "";
      saveState(); injectCustomFonts(); renderFontList(); renderSelects(); applyFont();
    });
    $("#fontUploadBtn").addEventListener("click", () => $("#fontUploadFile").click());
    $("#fontUploadFile").addEventListener("change", (e) => {
      const f = e.target.files[0];
      if (!f) return;
      const ext = (f.name.match(/\.([a-z0-9]+)$/i) || [])[1].toLowerCase();
      const fmtMap = { ttf: "truetype", otf: "opentype", woff: "woff", woff2: "woff2" };
      const fmt = fmtMap[ext];
      if (!fmt) { alert("Please choose a .ttf, .otf, .woff, or .woff2 file."); return; }
      const reader = new FileReader();
      reader.onload = () => {
        const label = f.name.replace(/\.[^.]+$/, "");
        const id = "cf" + Date.now();
        state.customFonts.push({ id, label, family: label, src: reader.result, format: fmt });
        state.font = id;
        saveState(); injectCustomFonts(); renderFontList(); renderSelects(); applyFont();
      };
      reader.readAsDataURL(f);
    });

    // toggles
    $$("#particlesSeg button").forEach((b) => b.addEventListener("click", () => { state.particles = b.dataset.particles === "on"; saveState(); renderSettings(); spawnParticles(); }));
    $$("#focusSeg button").forEach((b) => b.addEventListener("click", () => { state.focusEnabled = b.dataset.focus === "on"; saveState(); renderSettings(); applyFocusVisibility(); }));
    $$("#searchAlign button").forEach((b) => b.addEventListener("click", () => { state.searchAlign = b.dataset.align; saveState(); renderSettings(); }));
    $$("#singleHomeSeg button").forEach((b) => b.addEventListener("click", () => {
      state.singleHome = b.dataset.sh === "on";
      chrome.storage.local.set({ singleHome: state.singleHome });
      saveState(); renderSettings();
    }));

    // focus durations
    $("#focusDur").addEventListener("change", (e) => { state.focusTimes.focus = clamp(1, 180, +e.target.value || 25); saveState(); renderSettings(); });
    $("#breakDur").addEventListener("change", (e) => { state.focusTimes.br = clamp(1, 60, +e.target.value || 5); saveState(); renderSettings(); });
    $("#deepDur").addEventListener("change", (e) => { state.focusTimes.deep = clamp(1, 240, +e.target.value || 50); saveState(); renderSettings(); });

    // timer
    $("#timerToggle").addEventListener("click", toggleTimer);
    $("#timerReset").addEventListener("click", () => setTimerMin(timer.min));

    // background
    $("#bgTypeSelect").addEventListener("change", (e) => {
      state.customBg.type = e.target.value;
      if (state.customBg.type === "live" && state.customBg.video) { /* keep */ }
      else if (state.customBg.type === "static" && !state.customBg.image && state.customBg.url === DEFAULT_WALL_IMAGE) { /* ok */ }
      saveState(); renderSettings(); applyVisuals();
    });
    $("#bgUpload").addEventListener("click", () => $("#bgFile").click());
    $("#bgFile").addEventListener("change", (e) => {
      const f = e.target.files[0];
      if (!f) return;
      const isVideo = f.type.startsWith("video/") || /\.(mp4|webm|ogg|mov)$/i.test(f.name);
      const reader = new FileReader();
      reader.onload = () => {
        if (isVideo) { state.customBg.video = reader.result; state.customBg.type = "live"; }
        else { state.customBg.image = reader.result; state.customBg.type = "static"; }
        state.customBg.url = "";
        saveState(); applyVisuals(); renderSettings();
      };
      reader.readAsDataURL(f);
    });
    $("#bgApplyUrl").addEventListener("click", () => {
      const v = $("#bgUrl").value.trim();
      if (!v) return;
      const isVideo = /\.(mp4|webm|ogg|mov)(\?|$)/i.test(v);
      if (isVideo) { state.customBg.video = v; state.customBg.type = "live"; state.customBg.url = ""; state.customBg.image = null; }
      else { state.customBg.url = v; state.customBg.type = "static"; state.customBg.video = null; state.customBg.image = null; }
      saveState(); applyVisuals(); renderSettings();
    });
    $("#bgUrl").addEventListener("keydown", (e) => { if (e.key === "Enter") $("#bgApplyUrl").click(); });
    $("#bgBlur").addEventListener("input", (e) => { state.sliders.blur = +e.target.value; applyVisuals(); saveState(); });
    $("#bgBright").addEventListener("input", (e) => { state.sliders.bright = +e.target.value; applyVisuals(); saveState(); });
    $("#bgTint").addEventListener("input", (e) => { state.sliders.tint = +e.target.value; applyVisuals(); saveState(); });
    $("#bgReset").addEventListener("click", () => {
      state.customBg.image = null; state.customBg.url = DEFAULT_WALL_IMAGE;
      state.customBg.video = null; state.customBg.type = "static";
      state.sliders = { blur: 0, bright: 100, tint: 30 };
      saveState(); applyVisuals(); renderSettings();
    });
    $("#searchWidth").addEventListener("input", (e) => { state.searchWidth = +e.target.value; applySearchStyle(); saveState(); });
    $("#searchTrans").addEventListener("input", (e) => { state.searchTrans = +e.target.value; applySearchStyle(); saveState(); });

    // bookmarks
    $("#importBm").addEventListener("click", importBookmarks);
    $("#bmCleanupSel").addEventListener("change", (e) => { state.bmCleanup = e.target.value; saveState(); });
    $("#importAllBm").addEventListener("click", importAllBookmarksBackup);

    // pin modal
    $("#pinClose").addEventListener("click", closePinModal);
    $("#pinBackdrop").addEventListener("click", closePinModal);
    $("#pinSave").addEventListener("click", savePin);
    $("#pinDelete").addEventListener("click", () => {
      if (editingPinIdx !== null) {
        currentPins().splice(editingPinIdx, 1);
        saveState(); renderPins(); closePinModal();
      }
    });
    $$("#pinIconSeg button").forEach((b) => b.addEventListener("click", () => {
      pinIconMode = b.dataset.icon; renderPinSegs();
      if (pinIconMode === "upload") $("#pinIconFile").click();
    }));
    $$("#pinSizeSeg button").forEach((b) => b.addEventListener("click", () => { pinSize = b.dataset.size; renderPinSegs(); }));
    $$("#pinBgSeg button").forEach((b) => b.addEventListener("click", () => { pinBgMode = b.dataset.bg; renderPinSegs(); if (pinBgMode === "upload") $("#pinBgFile").click(); }));
    $("#pinIconFile").addEventListener("change", (e) => {
      const f = e.target.files[0]; if (!f) return;
      const reader = new FileReader();
      reader.onload = () => { pinIconData = reader.result; };
      reader.readAsDataURL(f);
    });
    $("#pinBgFile").addEventListener("change", (e) => {
      const f = e.target.files[0]; if (!f) return;
      const reader = new FileReader();
      reader.onload = () => { pinBgData = reader.result; };
      reader.readAsDataURL(f);
    });

    // keyboard
    document.addEventListener("keydown", (e) => {
      if (e.key === "/" && document.activeElement !== $("#searchInput")) { e.preventDefault(); $("#searchInput").focus(); }
      if (e.key === "Escape") { closeSettings(); closePinModal(); closeManagePage(); closeWidgetMenu(); }
      if (e.ctrlKey && e.key === "n") { e.preventDefault(); openPinModal(); }
      if (e.ctrlKey && e.key === "t") { e.preventDefault(); addTab("New tab"); }
      if (e.ctrlKey && e.key === ",") { e.preventDefault(); const p = $("#settingsPanel"); if (p.classList.contains("open")) closeSettings(); else openSettings(); }
    });

    // one-time onboarding: offer to import all bookmarks + backup
    if (!state.onboarded) {
      setTimeout(async () => {
        const choice = await dialog({
          title: "Welcome to Home",
          msg: "Would you like to import all your browser bookmarks now (with an automatic backup file) and clean them up? You can also do this later from Settings → Bookmarks.",
          buttons: [
            { label: "Import all + backup", value: "import", primary: true },
            { label: "Skip", value: "skip", cancel: true },
          ],
        });
        if (choice === "import") importAllBookmarksBackup();
        state.onboarded = true;
        saveState();
      }, 600);
    }
  }

  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", init);
  else init();
})();
