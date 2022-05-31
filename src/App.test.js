import { render, screen } from '@testing-library/react';
import App from './vv';

test('renders slogan link', () => {
  render(<App />);
  const linkElement = screen.getByText(/I'm lovin' it/i);
  expect(linkElement).toBeInTheDocument();
});
