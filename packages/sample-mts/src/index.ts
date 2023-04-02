import {value, getValue} from './foo.js';

export const run = () => {
  return value + getValue();
}

console.log('run', run());
/*
startFlowCustom().then(() => {
  console.log('runFoo', runFoo());
});
*/
