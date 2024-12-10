import { render, screen, fireEvent } from '@testing-library/react';
import Notification from './Notification';

describe('Notification Component', () => {

  test('renders with the correct message', () => {
    const message = 'This is a test notification';
    const id = '1';
    render(<Notification id={id} message={message} onClick={() => {}} />);

    const notificationMessage = screen.getByText(message);
    expect(notificationMessage).toBeInTheDocument();
  });

  test('calls onClick with the correct id when clicked', () => {
    const handleClick = jest.fn();
    const message = 'Click me to remove';
    const id = '1';
    render(<Notification id={id} message={message} onClick={handleClick} />);

    const notification = screen.getByText(message);

    fireEvent.click(notification);

    expect(handleClick).toHaveBeenCalledTimes(1);
    expect(handleClick).toHaveBeenCalledWith(id);
  });

  test('calls onClick when "Enter" key is pressed', () => {
    const handleClick = jest.fn();
    const message = 'Click or press Enter to remove';
    const id = '1';
    render(<Notification id={id} message={message} onClick={handleClick} />);

    const notification = screen.getByText(message);

    notification.focus();

    fireEvent.keyDown(notification, { key: 'Enter', code: 'Enter', charCode: 13 });

    expect(handleClick).toHaveBeenCalledTimes(1);
    expect(handleClick).toHaveBeenCalledWith(id);
  });
});
