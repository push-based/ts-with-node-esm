/** @type {import('jest').Config} */
const config = {
  roots: ['./lib'],
  testMatch: ['**.test.js'],
  moduleNameMapper: {'^(\\.{1,2}/.*)\\.js$': '$1'},
  transform: {
    '^.+\\.?[tj]sx?$': [
      'ts-jest',
      {
        useESM: true,
      },
    ],
  },
};

export default config;
