import { render, screen } from '@testing-library/react';
import App from './App';

test('renders project name', () => {
  render(<App />);
  const linkElement = screen.getByText(/WilWa-X/);
  expect(linkElement).toBeInTheDocument();
});

// test("render project title", () => {
//   render(<App />);
//   const linkElement = screen.getByText(/Blogs/);
//   expect(linkElement).toBeInTheDocument();
// })