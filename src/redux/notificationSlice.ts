import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { INotification } from '../modules/NotificationList/NotificationList';

/** NOTE: I recognize that the reducer and action creators could be split
 * into separate files, but for the sake of simplicity, I have included them
 * in the same file. */

interface INotificationState {
  notifications: INotification[];
}

const initialState: INotificationState = {
  notifications: [],
};

const notificationSlice = createSlice({
  name: 'notifications',
  initialState,
  reducers: {
    addNotification: (state, action: PayloadAction<INotification>) => {
      state.notifications.push(action.payload);
    },
    removeNotification: (state, action: PayloadAction<string>) => {
      state.notifications = state.notifications.filter(
        (notification) => notification.id !== action.payload
      );
    },
    resetStore: () => initialState,
  },
});

export const { addNotification, removeNotification, resetStore } = notificationSlice.actions;

export default notificationSlice.reducer;
