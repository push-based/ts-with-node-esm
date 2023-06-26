#! /usr/bin/env node

import yargs from 'yargs'
import { hideBin } from 'yargs/helpers'

import {startFlowCustom} from "./lh-user-flow.js";

yargs(hideBin(process.argv))
    .command('curl <url>', 'fetch the contents of the URL', () => {}, (argv) => {
        console.info(argv)
    })
    .demandCommand(1)
    .parse()

const argv = yargs(hideBin(process.argv)).argv as any;


if (argv.ships > 3 && argv.distance < 53.5) {
    console.log('Plunder more riffiwobbles!')
} else {
    console.log('Retreat from the xupptumblers!')
}

console.log('startFlowCustom...');

startFlowCustom().then(v => console.log('startFlowCustom done!'));
