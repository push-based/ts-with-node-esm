#! /usr/bin/env node

import {getValue} from "./foo";
import {execute} from "./exec-esm";

console.log('getValue: ', getValue());

execute({
    argv: ['lighthouse', '--help'],
}).then(v => console.log('startFlowCustom done!'));

