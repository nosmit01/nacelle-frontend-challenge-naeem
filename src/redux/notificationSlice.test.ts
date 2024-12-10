import { configureStore } from '@reduxjs/toolkit';
import notificationReducer, { addNotification, removeNotification, resetStore } from './notificationSlice';
import { RootState } from './store';

describe('notificationSlice', () => {
  let store: ReturnType<typeof configureStore<RootState>>;

  beforeEach(() => {
    store = configureStore({
      reducer: {
        notifications: notificationReducer,
      },
    });
  });

  test('should return the initial state when no action is provided', () => {
    const state: RootState = store.getState();
    expect(state.notifications.notifications).toEqual([]);
  });

  test('should add a notification', () => {
    const notification = { id: '1', message: 'Test notification' };

    store.dispatch(addNotification(notification));

    const state: RootState = store.getState();
    expect(state.notifications.notifications).toHaveLength(1);
    expect(state.notifications.notifications[0]).toEqual(notification);
  });

  test('should remove a notification', () => {
    const notification = { id: '1', message: 'Test notification' };

    store.dispatch(addNotification(notification));
    store.dispatch(removeNotification('1'));

    const state: RootState = store.getState();
    expect(state.notifications.notifications).toHaveLength(0);
  });

  test('should reset notifications with resetStore', () => {
    store.dispatch(addNotification({ id: '1', message: 'Test notification' }));
    store.dispatch(resetStore());

    const state: RootState = store.getState();
    expect(state.notifications.notifications).toEqual([]);
  });

});
