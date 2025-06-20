import React from 'react';
import { render, screen } from '@testing-library/react-native';
import Index from '../app/index';

describe('Index component', () => {
  it('renders the welcome message', () => {
    render(<Index />);

    const welcomeMessage = screen.getByText('Edit app/index.tsx to edit this screen.');

    expect(welcomeMessage).toBeTruthy();
  });

  it('has the correct structure', () => {
    const { getByText } = render(<Index />);

    const textElement = getByText('Edit app/index.tsx to edit this screen.');

    // Verify the text element exists
    expect(textElement).toBeTruthy();
  });
});
