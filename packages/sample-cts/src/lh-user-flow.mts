import {startFlow} from 'lighthouse';
import {Browser, launch, Page} from 'puppeteer';

export async function startFlowCustom() {
  const browser: Browser = await launch({headless: false});
  const page: Page = await browser.newPage();
  const flow = await startFlow(page);
  flow.navigate("https://google.com")
}
