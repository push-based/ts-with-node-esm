# Lighthouse 10 with TypeScript - Native ESM executed in CommonJs

This is a sample project to demonstrate Lighthouse execution in a CommonJs codebase written in typescript. 

## Samples

All samples life in the `packages` folder. 

The interesting folders are:
- sample-cts - compiles to CommonJs
- sample-mts- compiles to ESM

Navigate to one of the folders and use the npm scripts to execute the code base:
- `npm run exec:npx` - Executes with npx (path from `bin` prop in `package.json` in the `lib` folder).
  `npm run exec:node` - Executes with node
- `npm run test` - Execute e2e and unit test

Both commands use typescript to compile the codebase first.


### Resources

- https://github.com/GoogleChrome/lighthouse/issues/14811
- https://github.com/jestjs/jest/issues/11434
