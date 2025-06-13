import {createDefaultPreset} from 'ts-jest'

const tsJestTransformCfg = createDefaultPreset().transform
/** @type {import("jest").Config} **/

export default {
  preset: 'ts-jest',
  verbose: true,
  testEnvironment: "jsdom",
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1',
    '^@store/(.*)$': '<rootDir>/src/store/$1',
    '^@common-types/(.*)$': '<rootDir>/src/common-types/$1',
    '^@components/(.*)$': '<rootDir>/src/components/$1',
    '^@pages/(.*)$': '<rootDir>/src/pages/$1',
  },
  transform: {
    ...tsJestTransformCfg,
  },
};