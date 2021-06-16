import { render, screen } from '@testing-library/react';
import App from './App';
import Home from './Components/Home';

describe('testing App Component',()=>
{
  test('renders Active link of Navbar', () => {
    render(<App />);
    const linkElement = screen.getByText('Home');
    expect(linkElement).toBeInTheDocument();
  });
 
  test('renders post Data Navbar', () => {
    render(<Home />);
    const linkElement = screen.getByText('PostData');
    expect(linkElement).toBeInTheDocument();
  });
 
  
}
)