/** @type {import('jest').Config} */
const config = {
  roots: ['./lib'],
  testMatch: ['**.test.mjs'],
  moduleNameMapper: {'^(\\.{1,2}/.*)\\.js$': '$1'},
  transform: {
    '^.+\\.m?[tj]sx?$': [
      'ts-jest',
      {
        useESM: true,
      },
    ],
  },
};

export default config;
