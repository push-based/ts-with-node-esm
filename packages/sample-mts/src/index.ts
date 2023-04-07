import {startFlowCustom} from './lh-user-flow.mjs';

export const run = () => {
  return typeof startFlowCustom;
}

console.log('run', run());
/*
startFlowCustom().then(() => {
  console.log('runFoo', runFoo());
});
*/
