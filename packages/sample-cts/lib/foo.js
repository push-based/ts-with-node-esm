"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.startFlowCustom = exports.getValue = exports.value = void 0;
/**/ const lighthouse_1 = require("lighthouse");
const puppeteer_1 = require("puppeteer");
const yargs = require("yargs");
exports.value = 2;
const getValue = () => exports.value;
exports.getValue = getValue;
async function startFlowCustom() {
    console.log('yargs', yargs.argv);
    const browser = await (0, puppeteer_1.launch)({ headless: false });
    const page = await browser.newPage();
    const flow = await (0, lighthouse_1.startFlow)(page);
    flow.navigate("https://google.com");
}
exports.startFlowCustom = startFlowCustom;
