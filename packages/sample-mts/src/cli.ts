#! /usr/bin/env node

import {getValue, startFlowCustom} from "./foo.js";


console.log('getValue: ', getValue());
startFlowCustom().then(v => console.log('startFlowCustom done!'));

