import React from 'react';
import styles from './App.module.css';
import NotificationList from './modules/NotificationList/NotificationList';
import ModalDisplay from './modules/ModalDisplay/ModalDisplay';

const App: React.FC = () => {
  return (
    <div className={styles.app}>
      <ModalDisplay />
      <NotificationList />
    </div>
  );
};

export default App;
