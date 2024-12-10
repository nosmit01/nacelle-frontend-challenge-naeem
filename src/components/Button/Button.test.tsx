import { render, screen, fireEvent } from '@testing-library/react';
import Button from './Button';

describe('Button Component', () => {

  test('renders the button with the correct label', () => {
    render(<Button label='Click Me' onClick={() => {}} />);

    const button = screen.getByRole('button', { name: /click me/i });
    expect(button).toBeInTheDocument();
  });

  test('calls onClick when clicked', () => {
    const handleClick = jest.fn();
    render(<Button label='Click Me' onClick={handleClick} />);

    const button = screen.getByRole('button', { name: /click me/i });

    fireEvent.click(button);

    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  test('applies provided inline styles', () => {
    const style = { backgroundColor: 'red', color: 'white' };
    render(<Button label='Styled Button' onClick={() => {}} style={style} />);

    const button = screen.getByRole('button', { name: /styled button/i });

    expect(button).toHaveStyle('background-color: red');
    expect(button).toHaveStyle('color: white');
  });

});
