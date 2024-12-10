import React, { useEffect, useRef } from 'react';
import styles from './Modal.module.css';

const KEY = {
  ESCAPE: 'Escape',
  TAB: 'Tab',
}

interface IModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  children: React.ReactNode;
}

const Modal: React.FC<IModalProps> = ({
  isOpen,
  onClose,
  title,
  children,
  ...props
}) => {
  const modalRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    // Focus the modal when opened
    if (isOpen && modalRef.current) {
      modalRef.current.focus();
    }

    // Close modal on ESC key press
    const handleKeydown = (e: KeyboardEvent) => {
      if (e.key === KEY.ESCAPE) {
        onClose();
      }
    };

    // Prevent tabbing outside the modal
    const handleTab = (e: KeyboardEvent) => {
      if (e.key === KEY.TAB && modalRef.current) {
        const focusableElements = modalRef.current.querySelectorAll(
          'button, a, input, select, textarea, [tabindex]:not([tabindex="-1"])'
        );
        const firstElement = focusableElements[0] as HTMLElement;
        const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;

        if (e.shiftKey) {
          if (document.activeElement === firstElement) {
            e.preventDefault();
            lastElement.focus();
          }
        } else {
          if (document.activeElement === lastElement) {
            e.preventDefault();
            firstElement.focus();
          }
        }
      }
    };

    if (isOpen) {
      window.addEventListener('keydown', handleKeydown);
      window.addEventListener('keydown', handleTab);
      return () => {
        window.removeEventListener('keydown', handleKeydown);
        window.removeEventListener('keydown', handleTab);
      };
    }
  }, [isOpen, onClose]);

  // Close modal on backdrop click
  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === modalRef.current) {
      onClose();
    }
  };

  if (!isOpen) {
    return null;
  }

  return (
    <div
      ref={modalRef}
      data-testid="modal-backdrop"
      className={styles.backdrop}
      onClick={handleBackdropClick}
      tabIndex={-1}
    >
      <div
        className={styles.content}
        role="dialog"
        aria-labelledby="modal-title"
        aria-describedby="modal-content"
        aria-modal="true"
        {...props}
      >
        <h2>{title}</h2>
        <button
          data-testid="modal-close-button"
          className={styles.closeBtn}
          onClick={onClose}
          aria-label="Close modal"
        >
          ×
        </button>
        <div>{children}</div>
      </div>
    </div>
  );
};

export default Modal;
