import React from 'react';
import styles from './Notification.module.css';

interface INotificationProps {
  id: string;
  message: string;
  onClick: (id: string) => void;
}

const Notification: React.FC<INotificationProps> = ({ id, message, onClick, ...props }) => {
  // Handle 'Enter' keyboard event
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      onClick(id);
    }
  };

  return (
    <div
      className={styles.notification}
      onClick={() => onClick(id)}
      role="alert"
      aria-live="assertive"
      tabIndex={0}
      onKeyDown={handleKeyDown}
      {...props}
    >
      <span>{message}</span>
    </div>
  );
};

export default Notification;
