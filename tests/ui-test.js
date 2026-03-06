const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  page.on('console', msg => console.log('PAGE LOG>', msg.text()));
  page.on('pageerror', err => console.log('PAGE ERROR>', err.toString()));
  await page.goto('http://localhost:5173/');
  await page.waitForTimeout(500);

  const getCounter = async () => {
    const el = await page.$('nav span');
    return el ? (await el.innerText()).trim() : null;
  }

  console.log('Initial URL', page.url());
  console.log('Initial counter', await getCounter());
  // Dump HTML for debugging when elements are missing
  const html = await page.content();
  console.log('Page HTML snapshot (truncated 1000 chars):', html.slice(0,1000));

  // Click next
  await page.click('button[aria-label="next"]');
  await page.waitForTimeout(300);
  console.log('After next URL', page.url());
  console.log('After next counter', await getCounter());

  // Click prev
  await page.click('button[aria-label="previous"]');
  await page.waitForTimeout(300);
  console.log('After prev URL', page.url());
  console.log('After prev counter', await getCounter());

  // Toggle thumbnails
  await page.click('button[title="Toggle thumbnails"]');
  await page.waitForTimeout(300);
  const thumbVisible = await page.$('aside') ? true : false;
  console.log('Thumbnails visible:', thumbVisible);

  // Toggle presenter notes
  await page.click('button[title="Presenter notes"]');
  await page.waitForTimeout(300);
  const presenterVisible = await page.$('//div[contains(text(), "Presenter Notes")]') ? true : false;
  console.log('Presenter notes visible:', presenterVisible);

  // Set a short interval for test: open presenter notes, set slider, then play
  await page.click('button[title="Presenter notes"]');
  await page.waitForTimeout(200);
  // set interval to 1000ms via the range input inside presenter panel
  const range = await page.$('input[type="range"]')
  if(range) await range.evaluate((r) => { r.value = 1000; r.dispatchEvent(new Event('input')) })
  await page.click('button[title="Auto advance"]');
  console.log('Toggled auto advance');
  // wait for two intervals to allow slide advance
  await page.waitForTimeout(2200);
  const urlAfterAuto = page.url();
  console.log('URL after auto-advance wait', urlAfterAuto);
  const advanced = /\/slide\/2/.test(urlAfterAuto) || /\/slide\/[3-9]/.test(urlAfterAuto)
  console.log('Auto-advance moved slide:', advanced)

  // Check theme change by reading computed background of #app-shell
  const bgBefore = await page.evaluate(() => getComputedStyle(document.querySelector('#app-shell')).backgroundImage)
  await page.click('button[aria-label="Toggle theme"]');
  await page.waitForTimeout(400);
  const bgAfter = await page.evaluate(() => getComputedStyle(document.querySelector('#app-shell')).backgroundImage)
  console.log('App shell background before:', bgBefore)
  console.log('App shell background after:', bgAfter)

  // Theme toggle
  await page.click('button[aria-label="Toggle theme"]');
  await page.waitForTimeout(300);
  console.log('Theme toggled');

  await browser.close();
})();