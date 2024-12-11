# React Modal Component and Notification System

This is a simple React application built by Naeem Smith (naeem.smith@gmail.com) for Nacelle. The app demonstrates a modal component and notification system and was created with **TypeScript**, **Redux Toolkit**, and **React Testing Library**.

## Notification System Features

- **Add Notifications**: Users can add a notification to the list.
- **Remove Notifications**: Notifications can be removed by clicking on them or pressing the "Enter" key.
- **Accessibility**: The app is accessible with ARIA roles, screen reader support, and interactive elements that can be accessed and triggered using the keyboard.
- **Redux State Management**: Notifications are managed in a Redux store with the help of Redux Toolkit.

## Modal Component Features

- **Modal with Focus Management**: Focus is trapped inside the modal when it is open, ensuring that keyboard users stay within the modal.
- **Accessibility Support**: The modal is accessible with ARIA roles and attributes (`role="dialog"`, `aria-modal="true"`, `aria-labelledby`, etc.).
- **Keyboard Navigation**: Supports `Tab`, `Shift+Tab` for cycling through modal elements and the `Escape` key to close the modal.
- **Backdrop Click**: Clicking on the backdrop closes the modal.

## Directory structure
- **components**: shareable components
- **modules**: unique, larger components, or page subsections that hold many components
- **redux**: global state management.

## Installation

Follow these steps to set up the application locally.

### 1. Clone the Repository

```bash
git clone git@github.com:nosmit01/nacelle-frontend-challenge-naeem.git
```
### 2. Install dependencies

In the project directory, you can run:

```bash
yarn install
```

If you run into a node version issue, then run:
```bash
nvm use
```

which will pick up the version in the .nvmrc file. Then run `yarn install` again:
```bash
yarn install
```

### 3. Run tests
```bash
yarn test
```

### 4. Start app
```bash
yarn start
```