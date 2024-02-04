/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  testTimeout: 10000,
  globals: {
    'ts-jest': {
      tsconfig: 'tsconfig.json',
    },
  },
};