import { startFlow } from 'lighthouse';
import { launch } from 'puppeteer';
export const value = 2;
export const getValue = () => value;
export async function startFlowCustom() {
    const browser = await launch({ headless: false });
    const page = await browser.newPage();
    const flow = await startFlow(page);
    flow.navigate("https://google.com");
}
