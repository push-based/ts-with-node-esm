import foo, { value, getValue, startFlowCustom } from './foo.js';
export const run = () => {
    return value + getValue();
};
export const runFoo = () => foo();
console.log('run', run());
startFlowCustom().then(() => {
    console.log('runFoo', runFoo());
});
