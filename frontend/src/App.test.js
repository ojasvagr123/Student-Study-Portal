import { render, screen } from '@testing-library/react';
import React from 'react';
import App from './App';

test('renders the Studify landing page', () => {
  render(React.createElement(App));
  expect(screen.getByRole('heading', { name: /Your Complete Academic Companion/i })).toBeInTheDocument();
});
