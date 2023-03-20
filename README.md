# TypeScript with Node.js native ESM

This is the sample project of the series:

- [Migrate a 60k LOC TypeScript (NodeJS) repo to ESM and testing become 4x faster (1/2)](https://dev.to/gaosun/migrate-a-60k-loc-typescript-nodejs-repo-to-esm-and-testing-become-4x-faster-12-5f82)
- [Migrate a 60k LOC TypeScript (NodeJS) repo to ESM and testing become 4x faster (2/2)](https://dev.to/gaosun/migrate-a-60k-loc-typescript-nodejs-repo-to-esm-and-testing-become-4x-faster-22-4a4k)

## Try it

create a `package.json` under `sample/lib`: 


```json
{
  "name": "sample",
  "private": true,
  "version": "1.0.0",
  "description": "The sample project.",
  "main": "_index.js",
  "type": "module",
  "bin": "cli.js"
}
```

### Prerequisites

- Node.js ^16 ^18 ^19
- PNPM ^7

### Run the tests

```bash
pnpm i
pnpm -r build
pnpm -r test
```
