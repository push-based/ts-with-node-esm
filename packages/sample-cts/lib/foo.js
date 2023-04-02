"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getValue = exports.value = void 0;
/*import {startFlow} from 'lighthouse';
import {Browser, launch, Page} from 'puppeteer';
import * as yargs from 'yargs';
*/
exports.value = 2;
const getValue = () => exports.value;
exports.getValue = getValue;
/*
export default function foo() {
  return 'foo';
}

export async function startFlowCustom() {
  console.log('yargs', yargs.argv);
  const browser: Browser = await launch({headless: false});
  const page: Page = await browser.newPage();
  const flow = await startFlow(page);
  flow.navigate("https://google.com")

}
*/
