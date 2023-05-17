# Task Manager Application

Welcome to the Task Manager Application! This is a simple dummy application that simulates a task manager where users can create, update, and delete tasks. It provides both a UI and API for interacting with the tasks.

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