import { render, fireEvent, screen } from '@testing-library/react';
import ModalDisplay from './ModalDisplay';

describe('ModalDisplay Component', () => {
  it('renders and shows the modal when "Open Modal" button is clicked', () => {
    render(<ModalDisplay />);

    expect(screen.queryByTestId('modal')).toBeNull();

    fireEvent.click(screen.getByTestId('modal-open-button'));

    expect(screen.getByTestId('modal')).toBeInTheDocument();
  });

  it('closes the modal when the close button is clicked', () => {
    render(<ModalDisplay />);

    fireEvent.click(screen.getByTestId('modal-open-button'));
    expect(screen.getByTestId('modal')).toBeInTheDocument();
    fireEvent.click(screen.getByTestId('modal-close-button'));

    expect(screen.queryByTestId('modal')).toBeNull();
  });

  it('closes the modal when clicking the backdrop', () => {
    render(<ModalDisplay />);

    fireEvent.click(screen.getByTestId('modal-open-button'));
    expect(screen.getByTestId('modal')).toBeInTheDocument();
    fireEvent.click(screen.getByTestId('modal-backdrop'));

    expect(screen.queryByTestId('modal')).toBeNull();
  });

  it('closes the modal when ESC key is pressed', () => {
    render(<ModalDisplay />);

    fireEvent.click(screen.getByTestId('modal-open-button'));
    expect(screen.getByTestId('modal')).toBeInTheDocument();
    fireEvent.keyDown(document, { key: 'Escape', code: 'Escape' });

    expect(screen.queryByTestId('modal')).toBeNull();
  });
});
