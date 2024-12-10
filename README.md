# React Modal Component and Notification System

This is a simple React application built with **TypeScript**, **Redux Toolkit**, and **React Testing Library** that demonstrates a modal component and notification system.

## Notification System Features

- **Add Notifications**: Users can add a notification to the list.
- **Remove Notifications**: Notifications can be removed by clicking on them or pressing the "Enter" key.
- **Accessibility**: The app accessible with ARIA roles, screen reader support, and interactive elements can be accessed and triggered using the keyboard.
- **Redux State Management**: Notifications are managed in a Redux store with the help of Redux Toolkit.

## Modal Component Features

- **Modal with Focus Management**: Focus is trapped inside the modal when it is open, ensuring that keyboard users stay within the modal.
- **Accessibility Support**: The modal is accessible with ARIA roles and attributes (`role="dialog"`, `aria-modal="true"`, `aria-labelledby`, etc.).
- **Keyboard Navigation**: Supports `Tab`, `Shift+Tab` for cycling through modal elements and the `Escape` key to close the modal.
- **Backdrop Click**: Clicking on the backdrop closes the modal.

## Installation

Follow these steps to set up the application locally.

### 1. Clone the Repository

```bash
git clone git@github.com:nosmit01/nacelle-frontend-challenge-naeem.git

In the project directory, you can run:
### `yarn install`

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
