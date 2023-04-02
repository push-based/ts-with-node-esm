/**/import {startFlow} from 'lighthouse';
import {Browser, launch, Page} from 'puppeteer';
import * as yargs from 'yargs';

export const value = 2;

export const getValue = () => value;
export async function startFlowCustom() {
  console.log('yargs', yargs.argv);
  const browser: Browser = await launch({headless: false});
  const page: Page = await browser.newPage();
  const flow = await startFlow(page);
  flow.navigate("https://google.com")
}
