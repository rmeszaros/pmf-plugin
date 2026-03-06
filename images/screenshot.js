const { chromium } = require('playwright');
const path = require('path');

const SCENES = [
  { id: 'scene-1', file: '01-skill-trigger.png' },
  { id: 'scene-2', file: '02-problem-dimension.png' },
  { id: 'scene-3', file: '03-confidence-scores.png' },
  { id: 'scene-4', file: '04-v1-complete.png' },
  { id: 'scene-5', file: '05-market-research.png' },
];

const HTML_PATH = path.resolve(__dirname, 'mockup.html');
const OUT_DIR   = __dirname;

(async () => {
  const browser = await chromium.launch();
  const page    = await browser.newPage();

  await page.setViewportSize({ width: 1440, height: 900 });
  await page.goto(`file://${HTML_PATH}`);
  await page.waitForLoadState('networkidle');

  for (const { id, file } of SCENES) {
    const locator = page.locator(`#${id}`);
    await locator.scrollIntoViewIfNeeded();

    const outPath = path.join(OUT_DIR, file);
    await locator.screenshot({ path: outPath, type: 'png' });
    console.log(`✓ ${file}`);
  }

  await browser.close();
  console.log('\nAll 5 screenshots saved to:', OUT_DIR);
})();
