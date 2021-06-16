import { render, screen } from '@testing-library/react';
import Home from './Home';


  test('renders Active link of Navbar', () => {
    render(<Home/>);
    const linkElement = screen.getByText('postdata');
    expect(linkElement).toBeInTheDocument();
  });