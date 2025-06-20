import '@testing-library/jest-dom';
import React from 'react';

// Mock React Query
jest.mock('@tanstack/react-query', () => {
  const original = jest.requireActual('@tanstack/react-query');
  return {
    ...original,
    QueryClient: jest.fn().mockImplementation(() => ({
      ...original.QueryClient.prototype,
      setDefaultOptions: jest.fn(),
      mount: jest.fn(),
      unmount: jest.fn(),
      clear: jest.fn(),
    })),
    QueryClientProvider: ({ children }: { children: React.ReactNode }) => children,
  };
});

// Configure React 18's act environment
// Add the property to the global object
declare global {
  var IS_REACT_ACT_ENVIRONMENT: boolean;
}

global.IS_REACT_ACT_ENVIRONMENT = true;
