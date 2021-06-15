import { render, screen } from '@testing-library/react';
import Grid from './Grid';

test('renders learn react link', () => {
  render(<Etch />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
