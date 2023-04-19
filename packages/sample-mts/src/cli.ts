#! /usr/bin/env node

import {startFlowCustom} from "./lh-user-flow.js";


console.log('startFlowCustom...');
startFlowCustom().then(v => console.log('startFlowCustom done!'));

