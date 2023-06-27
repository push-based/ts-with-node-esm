/** @type {import('jest').Config} */
const config = {
  roots: ['./lib'],
  testMatch: ['**.test.js'],
  transform: {
    '^.+\\.?[tj]sx?$': [
      'ts-jest',
      {
        useESM: true,
      },
    ],
  },
  extensionsToTreatAsEsm: ['.ts'],
  transformIgnorePatterns: [
      'node_modules/'
  ]
};

export default config;
