import '@testing-library/jest-dom';

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
    })),
    QueryClientProvider: ({ children }) => children,
  };
});

// Add any global test setup here