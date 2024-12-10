import { render, screen, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import { store } from '../../redux/store';
import { resetStore } from '../../redux/notificationSlice';
import NotificationList from './NotificationList';

describe('NotificationList', () => {
  beforeEach(() => {
    store.dispatch(resetStore());
  });

  test('renders notification list and add button', () => {
    render(
      <Provider store={store}>
        <NotificationList />
      </Provider>
    );

    const addButton = screen.getByTestId('notification-add-button');
    expect(addButton).toBeInTheDocument();
  });

  test('adds notification when the button is clicked', () => {
    render(
      <Provider store={store}>
        <NotificationList />
      </Provider>
    );

    const addButton = screen.getByTestId('notification-add-button');
    fireEvent.click(addButton);

    const notifications = screen.queryAllByTestId('notification-item');
    expect(notifications.length).toBe(1);
  });

  test('removes notification when clicked', () => {
    render(
      <Provider store={store}>
        <NotificationList />
      </Provider>
    );

    const addButton = screen.getByTestId('notification-add-button');
    fireEvent.click(addButton);

    let notifications = screen.queryAllByTestId('notification-item');
    fireEvent.click(notifications[0]);

    notifications = screen.queryAllByTestId('notification-item');
    expect(notifications.length).toBe(0);
  });
});
