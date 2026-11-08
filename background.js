// Home — service worker.

chrome.runtime.onInstalled.addListener(() => {});

// Clicking the toolbar icon reloads the extension.
chrome.action.onClicked.addListener(() => {
  chrome.runtime.reload();
});

// Single-home-window behavior: if a new tab opens while a Home tab already
// exists, focus the existing one and close the duplicate (unless disabled).
async function enforceSingleHome() {
  const { singleHome } = await chrome.storage.local.get({ singleHome: true });
  if (!singleHome) return;
  try {
    const tabs = await chrome.tabs.query({});
    const homes = tabs.filter((t) => t.url && (t.url.startsWith("chrome://newtab") || t.url.includes("index.html")));
    if (homes.length <= 1) return;
    homes.sort((a, b) => a.id - b.id);
    const existing = homes[0];
    for (const t of homes.slice(1)) {
      if (!t.pinned) { try { await chrome.tabs.remove(t.id); } catch (e) {} }
    }
    if (existing) {
      try { await chrome.tabs.update(existing.id, { active: true }); } catch (e) {}
      try { await chrome.windows.update(existing.windowId, { focused: true }); } catch (e) {}
    }
  } catch (e) {}
}

chrome.tabs.onCreated.addListener((tab) => {
  setTimeout(() => enforceSingleHome(), 450);
});
