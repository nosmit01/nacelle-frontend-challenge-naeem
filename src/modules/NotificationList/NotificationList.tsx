import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState, AppDispatch } from '../../redux/store';
import { addNotification, removeNotification } from '../../redux/notificationSlice';
import Button from '../../components/Button/Button';
import Notification from '../../components/Notification/Notification';
import styles from './NotificationList.module.css';

interface INotification {
  id: string;
  message: string;
}

const NotificationList: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const notifications = useSelector((state: RootState) => state.notifications.notifications);

  const handleAddNotification = () => {
    const notificationId = notifications.length + 1
    const newNotification: INotification = {
      id: notificationId.toString(),
      message: `Happy little notification ${notificationId}`,
    };
    dispatch(addNotification(newNotification));
  };

  const handleRemoveNotification = (id: string) => {
    dispatch(removeNotification(id));
  };

  return (
    <div
      data-testid="notification-list"
      className={styles.notificationList}
      role="region"
      aria-labelledby="notification-list"
      tabIndex={0}
    >
      <Button
        data-testid="notification-add-button"
        label="Add Notification"
        onClick={handleAddNotification}
      />
      <div className={styles.notificationListItems}>
        {notifications.map((notification) => (
          <Notification
            data-testid="notification-item"
            key={notification.id}
            id={notification.id}
            message={notification.message}
            onClick={handleRemoveNotification}
          />
        ))}
      </div>
    </div>
  );
};

export default NotificationList;
