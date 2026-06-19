import { spawn } from "node:child_process";
import { writeFileSync } from "node:fs";
import { setTimeout as sleep } from "node:timers/promises";
import puppeteer from "puppeteer";

const PORT = 4173;
const PREVIEW_URL = `http://localhost:${PORT}/`;
const DIST_INDEX = new URL("../dist/index.html", import.meta.url);

async function waitForServer(url, timeoutMs = 20000) {
  const start = Date.now();
  while (Date.now() - start < timeoutMs) {
    try {
      const res = await fetch(url);
      if (res.ok) return;
    } catch {
      // server not ready yet
    }
    await sleep(200);
  }
  throw new Error(`Server at ${url} did not start in time`);
}

async function main() {
  const preview = spawn(
    "npx",
    ["vite", "preview", "--port", String(PORT), "--strictPort"],
    { stdio: "pipe" },
  );

  try {
    await waitForServer(PREVIEW_URL);

    const browser = await puppeteer.launch();
    try {
      const page = await browser.newPage();
      await page.goto(PREVIEW_URL, { waitUntil: "networkidle0" });
      await page.waitForSelector("h1");

      const html = await page.content();
      writeFileSync(DIST_INDEX, `<!doctype html>\n${html}`);
      console.log("Prerendered dist/index.html");
    } finally {
      await browser.close();
    }
  } finally {
    preview.kill();
  }
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
