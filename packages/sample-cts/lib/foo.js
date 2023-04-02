import { startFlow } from 'lighthouse';
import { launch } from 'puppeteer';
import getYargs from 'yargs';
const yargs = getYargs();
export const value = 2;
export const getValue = () => value;
export default function foo() {
    return 'foo';
}
export async function startFlowCustom() {
    console.log('yargs', yargs.argv);
    const browser = await launch({ headless: false });
    const page = await browser.newPage();
    const flow = await startFlow(page);
    flow.navigate("https://google.com");
}
