/** @type {import('jest').Config} */
module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  projects: [
    {
      displayName: '@shared/configs',
      testMatch: ['<rootDir>/packages/@configs/src/**/*.test.ts'],
      transform: {
        '^.+\\.tsx?$': [
          'ts-jest',
          {
            tsconfig: '<rootDir>/packages/@configs/tsconfig.json',
          },
        ],
      },
    },
    {
      displayName: '@shared/schemas',
      testMatch: ['<rootDir>/packages/@schemas/src/**/*.test.ts'],
      transform: {
        '^.+\\.tsx?$': [
          'ts-jest',
          {
            tsconfig: '<rootDir>/packages/@schemas/tsconfig.json',
          },
        ],
      },
    },
    {
      displayName: '@shared/stores',
      testMatch: ['<rootDir>/packages/@stores/src/**/*.test.ts'],
      testEnvironment: 'jsdom',
      setupFilesAfterEnv: ['<rootDir>/packages/@stores/src/test/jest-setup.ts'],
      transform: {
        '^.+\\.tsx?$': [
          'ts-jest',
          {
            tsconfig: '<rootDir>/packages/@stores/tsconfig.json',
          },
        ],
      },
    },
    {
      displayName: 'services',
      testMatch: ['<rootDir>/packages/services/src/**/*.test.ts'],
      transform: {
        '^.+\\.tsx?$': [
          'ts-jest',
          {
            tsconfig: '<rootDir>/packages/services/tsconfig.json',
          },
        ],
      },
    },
    {
      displayName: 'nextjs-web-app',
      testMatch: ['<rootDir>/apps/nextjs-web-app/src/**/*.test.{ts,tsx}'],
      testEnvironment: 'jsdom',
      transform: {
        '^.+\\.(ts|tsx)$': 'babel-jest',
      },
      setupFilesAfterEnv: ['<rootDir>/apps/nextjs-web-app/src/test/jest-setup.ts'],
      rootDir: '<rootDir>',
    },
    {
      displayName: 'expo-mobile-app',
      rootDir: '<rootDir>/apps/expo-mobile-app',
      // We're not using the react-native preset directly to avoid window property conflicts
      // Instead, we're configuring the necessary parts manually
      testEnvironment: 'jsdom',
      setupFilesAfterEnv: ['<rootDir>/test/jest-setup.ts'],
      testMatch: ['<rootDir>/**/*.test.{ts,tsx}'],
      transformIgnorePatterns: [
        'node_modules/(?!(react-native|@react-native|react-native-reanimated|@testing-library/react-native|expo|@expo|@unimodules|@react-navigation|@react-native-community)/)',
      ],
      transform: {
        '^.+\\.(js|jsx|ts|tsx)$': ['babel-jest', { configFile: './babel.config.js' }],
      },
      moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
      moduleNameMapper: {
        '^@/(.*)$': '<rootDir>/$1',
      },
      // Mock modules that cause issues
      modulePathIgnorePatterns: ['<rootDir>/node_modules/react-native/Libraries/react-native/'],
    },
  ],
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  coverageDirectory: '<rootDir>/coverage',
  collectCoverageFrom: ['<rootDir>/packages/*/src/**/*.{ts,tsx}', '!<rootDir>/packages/*/src/**/*.d.ts'],
  verbose: true,
};
