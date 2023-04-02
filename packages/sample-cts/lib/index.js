"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.run = void 0;
const foo_1 = require("./foo");
const run = () => {
    return foo_1.value + (0, foo_1.getValue)();
};
exports.run = run;
console.log('run', (0, exports.run)());
/*
startFlowCustom().then(() => {
  console.log('runFoo', runFoo());
});
*/
