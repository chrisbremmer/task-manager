# Task Manager Application

Welcome to the Task Manager Application! This is a simple dummy application that simulates a task manager where users can create, update, and delete tasks. It provides both a UI and API for interacting with the tasks.

This dummy application showcases UI testing using [Cypress](https://github.com/cypress-io/cypress) and API testing using Postman + [Newman](https://github.com/postmanlabs/newman)

## Features

- User authentication: Users can sign up, log in, and log out.
- Task management: Users can create tasks, update task details, mark tasks as completed, and delete tasks.
- API endpoints: The application exposes API endpoints to perform CRUD operations on tasks.

## UI Screens

1. Home/Login Page: Users can log in or navigate to the sign-up page.
2. Sign-Up Page: New users can create an account.
3. Dashboard/Task List Page: Users can view their tasks, create new tasks, update task details, mark tasks as completed, and delete tasks.

## API Endpoints

- `POST /api/auth/signup`: Create a new user account.
- `POST /api/auth/login`: Authenticate and generate a session token.
- `POST /api/auth/logout`: Invalidate the session token and log out.
- `GET /api/tasks`: Get a list of all tasks for the authenticated user.
- `POST /api/tasks`: Create a new task.
- `GET /api/tasks/:id`: Get details of a specific task.
- `PUT /api/tasks/:id`: Update details of a specific task.
- `DELETE /api/tasks/:id`: Delete a specific task.

## Testing

### UI Testing

- Logging in: Test login functionality with valid credentials.
- Creating tasks: Test creating new tasks and verifying their display in the task list.
- Updating task details: Test updating task information and verifying UI updates.
- Verify task list: Test the task list to ensure it displays correct tasks.
- Logging out: Test the logout functionality.
- Error handling: Test error scenarios like invalid credentials or empty form submissions.
- Task completion: Test marking tasks as completed.
- Task deletion confirmation: Test deleting tasks with confirmation prompt.

### API Testing

- User authentication: Test user account creation, login, and session token retrieval.
- Task creation: Test creating tasks and verifying their addition to the database.
- Updating task details: Test updating task information through API.
- Deleting tasks: Test deleting tasks from the database.
- Error handling: Test error scenarios with appropriate error responses.
- Pagination: Test retrieving tasks with different page numbers.
- Input validation: Test input validation for creating and updating tasks.
- Security: Test API authentication and authorization.

## TODO

- [ ] Backend Development with Node.js and Express:
  - [ ] Set up a new Node.js project.
  - [ ] Install Express.js as the web application framework.
  - [ ] Set up the SQLite database connection.
  - [ ] Implement the RESTful API endpoints for user authentication and task management using Express.js.
  - [ ] Integrate JWT for user authentication and authorization.

- [ ] Database Setup with SQLite:
  - [ ] Create a new SQLite database file.
  - [ ] Define the necessary tables and relationships to support user authentication and task management.

- [ ] Frontend Development with Vue.js:
  - [ ] Set up a new Vue.js project using the Vue CLI.
  - [ ] Create the necessary components for the user interface, such as login, signup, task list, task creation, task update, and task deletion.
  - [ ] Implement the user interface logic to interact with the backend API endpoints.

- [ ] API Testing with Postman/Newman:
  - [ ] Set up a Postman collection with the API endpoints and request examples.
  - [ ] Write test scripts in Postman to cover various scenarios, including user authentication, task creation, updating task details, and deleting tasks.
  - [ ] Use Newman, the command-line runner for Postman, to execute the API tests.

- [ ] UI Testing with Cypress:
  - [ ] Set up Cypress for end-to-end UI testing.
  - [ ] Write UI test scripts to cover scenarios such as user authentication, task creation, updating task details, and task deletion.
  - [ ] Execute the Cypress tests to ensure the UI functionality is working as expected.

- [ ] Documentation and README Updates:
  - [ ] Update the README file with instructions for installation, running the application, and executing the tests.
  - [ ] Include any necessary environment variables, configuration details, or additional instructions for other developers who want to run or contribute to the project.

