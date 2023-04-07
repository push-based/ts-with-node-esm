#! /usr/bin/env node

import {execute} from "./exec-esm";

console.log('getValue: ');

execute({
    argv: ['lib/lh-user-flow.mjs', '--help'],
}).then(v => console.log('startFlowCustom done!'));
