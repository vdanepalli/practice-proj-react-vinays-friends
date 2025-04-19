# [Project: Vinay's Friends](https://vdanepalli.github.io/proj_friends/)

## [Live Demo](https://vdanepalli.github.io/proj_friends/)

This is a simple project to demonstrate the power of React. While this project was developed using Create-React-App, you can also use the Vite framework for faster builds and better performance. Switching between these frameworks is straightforward.

---

## Project Structure

- **[Components](src/components):** Pure functions that are deterministic and reusable.
- **[Containers](src/containers):** Components with state that wrap other components.
- **[ErrorBoundary](src/components/ErrorBoundary.js):** Gracefully handles runtime errors to ensure a seamless user experience.
- **[Scroll](src/components/Scroll.js):** Wraps the [CardList](src/components/CardList.js), which renders a list of [Cards](src/components/Card.js).

---

## Running the Project Locally

Follow these steps to set up and run the project on your local machine:

1. Clone the repository:
   ```bash
   git clone https://github.com/vdanepalli/proj_friends.git
   ```
2. Navigate to the project directory:
   ```bash
   cd proj_friends
   ```
3. Install the dependencies:
   ```bash
   npm install
   ```
4. Start the development server:
   ```bash
   npm start
   ```

----

## Updating the List of Friends

To add or modify the list of friends displayed in the app, update the file:
friends.js

