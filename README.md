# Employee Management Application

This project is a web-based Employee Management Application built using [LitElement](https://lit.dev/), a simple and fast library for building web components. The application allows users to manage employee records by adding, editing, and deleting employee entries through a user-friendly interface.

## Table of Contents

- [Project Structure](#project-structure)
- [Features](#features)
- [Installation](#installation)
- [Running the Application](#running-the-application)
- [Localization](#localization)
- [Testing](#testing)

## Project Structure

The project contains the following key files and directories:

- **app.js**: This is the main entry point of the application, responsible for rendering the navigation bar and loading the employee list component.
- **src/components/employeeList.js**: The main component that displays the employee records in a table. This component handles functionalities such as adding, removing, and editing employee data.
- **src/data/mockEmployeeData.js**: Contains mock employee data, which is used to populate the employee table initially.
- **src/localization.js**: Handles localization support for the application, enabling both English and Turkish languages.
- **tests/app.test.js**: Unit tests for the `app.js` file.
- **tests/employeeList.test.js**: Unit tests for the `employeeList.js` file.

## Features

- **Employee List**: Displays a list of employees in a table format, with options to add, edit, or delete records.
- **Mock Data**: The application comes pre-loaded with mock employee data to showcase functionality.
- **Localization**: Supports both English and Turkish languages, allowing users to switch between them.
- **Unit Testing**: Tests are written for the main application and the employee list component.

## Installation

To get started with the project, follow these steps:

1. **Clone the repository** to your local machine:

   ```bash
   git clone https://github.com/your-repo/employee-management-app.git

2. **Navigate into the project directory:**

  ```bash
   cd employee-management-app

3. **Install dependencies:**

  Make sure you have [Node.js]((https://nodejs.org/en)) installed. Then, install the project dependencies by running:

  ```bash
   npm install

## Running the Application

To run the application locally for development:

1. **Start the development server**:

   ```bash
   npm start

This will start a local development server, and the application will be accessible at http://localhost:9000 (or another available port).

The npm start command uses a simple server to serve your application, and any changes you make to the source code will automatically be reflected in the browser.

## Localization

The application includes support for both English and Turkish languages. The src/localization.js file manages this functionality. You can dynamically switch between the two languages within the application interface.

## Testing

Unit tests have been provided for key components of the application. To run the tests:

1. **Run the test suite:**:

   ```bash
   npm test

This will execute all the tests in the project with coverage, using the [web-test-runner](https://modern-web.dev/docs/test-runner/overview/).


## Conclusion

This Employee Management Application provides basic functionality for managing employee records with support for multiple languages. The project is easy to set up and run locally, and it includes unit tests to ensure reliability. The application can be further enhanced by adding more features or improving the user interface as needed.