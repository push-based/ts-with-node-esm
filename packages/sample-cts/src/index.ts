import {value, getValue} from './foo';

export const run = () => {
  return value + getValue();
}

console.log('run', run());
/*
startFlowCustom().then(() => {
  console.log('runFoo', runFoo());
});
*/
