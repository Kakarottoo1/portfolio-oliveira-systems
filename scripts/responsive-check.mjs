import { spawn } from "node:child_process";
import { mkdir, writeFile } from "node:fs/promises";
import path from "node:path";
import { WebSocket } from "ws";

const root = process.cwd();
const outDir = path.join(root, "responsive-check");
const chromePath = "C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe";
const remotePort = 9224;
const baseUrl = "http://127.0.0.1:5174/portfolio-oliveira-systems/";
const storageKey = "oliveira-systems-language-v2";

const viewports = [
  { name: "mobile-pt", width: 390, height: 844, language: "pt-BR", mobile: true },
  { name: "mobile-en", width: 390, height: 844, language: "en", mobile: true },
  { name: "mobile-wide-pt", width: 430, height: 932, language: "pt-BR", mobile: true },
  { name: "desktop-pt", width: 1440, height: 900, language: "pt-BR", mobile: false },
];

function wait(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function waitForJson(url, attempts = 30) {
  for (let i = 0; i < attempts; i += 1) {
    try {
      const response = await fetch(url);
      if (response.ok) return response.json();
    } catch {
      // Chrome is still starting.
    }
    await wait(250);
  }
  throw new Error(`Could not connect to ${url}`);
}

function createCdp(wsUrl) {
  let id = 0;
  const pending = new Map();
  const events = new Map();
  const socket = new WebSocket(wsUrl);

  socket.on("message", (raw) => {
    const message = JSON.parse(raw.toString());
    if (message.id && pending.has(message.id)) {
      const { resolve, reject } = pending.get(message.id);
      pending.delete(message.id);
      if (message.error) reject(new Error(message.error.message));
      else resolve(message.result);
      return;
    }
    if (message.method && events.has(message.method)) {
      for (const listener of events.get(message.method)) listener(message.params);
    }
  });

  return {
    ready: new Promise((resolve, reject) => {
      socket.once("open", resolve);
      socket.once("error", reject);
    }),
    send(method, params = {}) {
      id += 1;
      socket.send(JSON.stringify({ id, method, params }));
      return new Promise((resolve, reject) => {
        pending.set(id, { resolve, reject });
      });
    },
    once(method) {
      return new Promise((resolve) => {
        const listener = (params) => {
          events.set(
            method,
            (events.get(method) ?? []).filter((item) => item !== listener),
          );
          resolve(params);
        };
        events.set(method, [...(events.get(method) ?? []), listener]);
      });
    },
    close() {
      socket.close();
    },
  };
}

async function navigateAndWait(cdp, url) {
  const loaded = cdp.once("Page.loadEventFired");
  await cdp.send("Page.navigate", { url });
  await loaded;
  await wait(700);
}

async function runViewport(cdp, viewport) {
  await cdp.send("Emulation.setDeviceMetricsOverride", {
    width: viewport.width,
    height: viewport.height,
    deviceScaleFactor: viewport.mobile ? 3 : 1,
    mobile: viewport.mobile,
  });
  await navigateAndWait(cdp, baseUrl);
  await cdp.send("Runtime.evaluate", {
    expression: `localStorage.setItem(${JSON.stringify(storageKey)}, ${JSON.stringify(viewport.language)});`,
  });
  await navigateAndWait(cdp, baseUrl);

  const metricsResult = await cdp.send("Runtime.evaluate", {
    returnByValue: true,
    expression: `(() => {
      const wide = [];
      for (const el of document.querySelectorAll('*')) {
        const rect = el.getBoundingClientRect();
        if (rect.width > 0 && (rect.right > window.innerWidth + 1 || rect.left < -1)) {
          wide.push({
            tag: el.tagName.toLowerCase(),
            className: String(el.className || '').slice(0, 80),
            text: String(el.textContent || '').replace(/\\s+/g, ' ').trim().slice(0, 80),
            left: Math.round(rect.left),
            right: Math.round(rect.right),
            width: Math.round(rect.width)
          });
        }
      }
      return {
        language: document.documentElement.lang,
        title: document.title,
        viewport: { width: window.innerWidth, height: window.innerHeight },
        documentWidth: document.documentElement.scrollWidth,
        bodyWidth: document.body.scrollWidth,
        hasHorizontalOverflow: document.documentElement.scrollWidth > window.innerWidth + 1,
        h1: document.querySelector('h1')?.textContent,
        plans: Array.from(document.querySelectorAll('.price-card h3')).map((el) => el.textContent),
        wide: wide.slice(0, 20)
      };
    })()`,
  });

  const screenshot = await cdp.send("Page.captureScreenshot", {
    format: "png",
    captureBeyondViewport: false,
  });
  await writeFile(path.join(outDir, `${viewport.name}.png`), Buffer.from(screenshot.data, "base64"));

  if (viewport.name === "mobile-pt") {
    for (const section of ["engine", "plans", "contact"]) {
      await cdp.send("Runtime.evaluate", {
        expression: `document.querySelector('#${section}')?.scrollIntoView({ block: 'start' });`,
      });
      await wait(700);
      const sectionShot = await cdp.send("Page.captureScreenshot", {
        format: "png",
        captureBeyondViewport: false,
      });
      await writeFile(
        path.join(outDir, `${viewport.name}-${section}.png`),
        Buffer.from(sectionShot.data, "base64"),
      );
    }
  }

  return { name: viewport.name, ...metricsResult.result.value };
}

async function main() {
  await mkdir(outDir, { recursive: true });
  const chrome = spawn(chromePath, [
    "--headless=new",
    "--disable-gpu",
    `--remote-debugging-port=${remotePort}`,
    `--user-data-dir=${path.join(outDir, "cdp-profile")}`,
    "about:blank",
  ]);

  try {
    const tabs = await waitForJson(`http://127.0.0.1:${remotePort}/json/list`);
    const page = tabs.find((tab) => tab.type === "page") ?? tabs[0];
    const cdp = createCdp(page.webSocketDebuggerUrl);
    await cdp.ready;
    await cdp.send("Page.enable");
    await cdp.send("Runtime.enable");

    const results = [];
    for (const viewport of viewports) {
      results.push(await runViewport(cdp, viewport));
    }
    await writeFile(path.join(outDir, "responsive-report.json"), JSON.stringify(results, null, 2));
    cdp.close();
    console.log(JSON.stringify(results, null, 2));
  } finally {
    chrome.kill();
  }
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
