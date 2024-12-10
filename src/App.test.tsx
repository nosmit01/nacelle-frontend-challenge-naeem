import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import App from './App';

describe('App Component', () => {
  test('renders the NotificationList component', () => {
    render(
      <Provider store={store}>
        <App />
      </Provider>
    );

    const notificationList = screen.getByTestId('notification-list');
    expect(notificationList).toBeInTheDocument();
  });
});
