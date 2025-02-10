import { render, screen } from '@testing-library/react';
import { act } from 'react';  // Ensure act is imported from react
import App from './App';

test('renders learn react link', async () => {
  await act(async () => {
    render(<App />);
  });

  const linkElement = await screen.findByRole('link', { name: /learn react/i });
  expect(linkElement).toBeInTheDocument();
});

test('renders learn react link hura', async () => {
  await act(async () => {
    render(<App />);
  });

  const linkElement = await screen.findByRole('link', { name: /learn react/i });
  expect(linkElement).toBeInTheDocument();
});