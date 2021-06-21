import { render, screen } from '@testing-library/react';
import Etch from './Etch';

test('renders learn react link', () => {
  render(<Etch />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
