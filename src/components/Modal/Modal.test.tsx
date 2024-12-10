import { render, fireEvent, screen } from '@testing-library/react';
import Modal from './Modal';

describe('Modal Component', () => {
  it('renders the modal when open', () => {
    render(
      <Modal isOpen={true} onClose={jest.fn()} title="Test Modal">
        Modal content
      </Modal>
    );

    expect(screen.getByText('Test Modal')).toBeInTheDocument();
    expect(screen.getByText('Modal content')).toBeInTheDocument();
  });

  it('does not render the modal when closed', () => {
    render(
      <Modal isOpen={false} onClose={jest.fn()} title="Test Modal">
        Modal content
      </Modal>);

    expect(screen.queryByText('Test Modal')).toBeNull();
    expect(screen.queryByText('Modal content')).toBeNull();
  });

  it('calls onClose when clicking the close button', () => {
    const onClose = jest.fn();
    render(
      <Modal isOpen={true} onClose={onClose} title="Test Modal">
        Modal content
      </Modal>);

    fireEvent.click(screen.getByRole('button'));

    expect(onClose).toHaveBeenCalledTimes(1);
  });

  it('calls onClose when clicking the backdrop', () => {
    const onClose = jest.fn();
    render(
      <Modal isOpen={true} onClose={onClose} title="Test Modal">
        Modal content
      </Modal>
    );

    fireEvent.click(screen.getByTestId('modal-backdrop'));

    expect(onClose).toHaveBeenCalledTimes(1);
  });

  it('closes the modal when ESC key is pressed', () => {
    const onClose = jest.fn();
    render(
      <Modal isOpen={true} onClose={onClose} title="Test Modal">
        Modal content
      </Modal>
    );

    fireEvent.keyDown(document, { key: 'Escape', code: 'Escape' });

    expect(onClose).toHaveBeenCalledTimes(1);
  });
});
