async function getStats(tabId) {
  try {
    const res = await chrome.scripting.executeScript({
      target: { tabId },
      func: () => {
        return {
          memory: performance.memory ? performance.memory.usedJSHeapSize : 0,
          domNodes: document.getElementsByTagName('*').length,
          visibility: document.visibilityState
        };
      }
    });
    return res[0].result;
  } catch {
    return { memory: 0, domNodes: 0, visibility: "hidden" };
  }
}

function calculateScore(stats, tab) {
  let score = 0;

  score += stats.memory / 1e6;
  score += stats.domNodes / 1000;

  if (!tab.active) score += 20;
  if (stats.visibility === "hidden") score += 30;

  return score;
}

function getClass(score) {
  if (score > 80) return "high";
  if (score > 40) return "medium";
  return "low";
}

async function loadTabs() {
  const container = document.getElementById("tabs");
  const summary = document.getElementById("summary");

  container.innerHTML = "Loading...";

  const tabs = await chrome.tabs.query({});

  const results = await Promise.all(
    tabs.map(async (tab) => {
      const stats = await getStats(tab.id);
      const score = calculateScore(stats, tab);
      return { tab, score };
    })
  );

  results.sort((a, b) => b.score - a.score);

  // Summary
  summary.innerHTML = `
    Total Tabs: ${results.length} <br>
    🔴 Heavy: ${results.filter(t => t.score > 80).length}
  `;

  container.innerHTML = "";

  results.forEach(({ tab, score }) => {
    const div = document.createElement("div");
    div.className = `tab ${getClass(score)}`;

    const title = document.createElement("div");
    title.className = "tab-title";
    title.textContent = tab.title;

    const scoreEl = document.createElement("div");
    scoreEl.className = "score";
    scoreEl.textContent = `Score: ${score.toFixed(2)}`;

    const actions = document.createElement("div");
    actions.className = "actions";

    const closeBtn = document.createElement("button");
    closeBtn.textContent = "Close";
    closeBtn.onclick = () => chrome.tabs.remove(tab.id);

    const sleepBtn = document.createElement("button");
    sleepBtn.textContent = "Sleep";
    sleepBtn.onclick = () => chrome.tabs.discard(tab.id);

    actions.appendChild(closeBtn);
    actions.appendChild(sleepBtn);

    div.appendChild(title);
    div.appendChild(scoreEl);
    div.appendChild(actions);

    container.appendChild(div);
  });
}

document.getElementById("refresh").addEventListener("click", loadTabs);

loadTabs();