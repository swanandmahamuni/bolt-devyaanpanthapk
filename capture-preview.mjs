import puppeteer from "puppeteer";
import fs from "fs";

const viewports = [
  { name: "pixel5", width: 360, height: 800, label: "Pixel 5 (360x800)" },
  { name: "iphone12", width: 375, height: 812, label: "iPhone 12 Pro (375x812)" },
  { name: "pixel7", width: 412, height: 915, label: "Pixel 7 (412x915)" },
];

(async () => {
  const browser = await puppeteer.launch({
    headless: true,
    args: ["--no-sandbox", "--disable-setuid-sandbox"],
  });

  const page = await browser.newPage();

  for (const vp of viewports) {
    console.log(`Capturing ${vp.label}...`);
    await page.setViewport({ width: vp.width, height: vp.height, deviceScaleFactor: 2 });

    await page.goto("http://localhost:8080/", { waitUntil: "networkidle0", timeout: 15000 });
    // Wait a bit for animations to settle
    await new Promise((r) => setTimeout(r, 1500));

    const homePath = `./preview-home-${vp.name}.png`;
    await page.screenshot({ path: homePath, fullPage: false });
    console.log(`  Home: ${homePath}`);

    // Navigate to Jaap page
    await page.goto("http://localhost:8080/jaap", { waitUntil: "networkidle0", timeout: 15000 });
    await new Promise((r) => setTimeout(r, 1000));

    const jaapPath = `./preview-jaap-${vp.name}.png`;
    await page.screenshot({ path: jaapPath, fullPage: false });
    console.log(`  Jaap: ${jaapPath}`);
  }

  await browser.close();
  console.log("Done! All screenshots captured.");
})();
