import { render, screen } from '@testing-library/react'
import App from './App';


describe('App', () => {
  test('Initial test', () => {
    render(<App />);

    const text = screen.getByText('BV-UI')
    expect(text).toBeInTheDocument();
  });
});