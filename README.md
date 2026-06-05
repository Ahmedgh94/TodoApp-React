# Todo App

A React task management application for creating, updating, completing, filtering, and deleting tasks through a clean Material UI interface.

> Note: the repository name mentions local storage, but the current implementation uses a REST API through Axios for data persistence.

## Features

- Fetches tasks from a backend API on page load.
- Adds new tasks from the input field.
- Updates task title and details using an edit dialog.
- Deletes tasks with a confirmation dialog.
- Marks tasks as completed or in progress.
- Filters tasks by All, Done, and In Progress.
- Uses React Context API to share todo state and actions across components.
- Styled with Material UI components and custom CSS hover effects.

## Tech Stack

- React
- JavaScript
- Material UI
- Axios
- React Context API
- CSS

## Project Structure

```text
src/
+-- App.js
+-- App.css
+-- Contexts/
|   +-- todosContext.js
+-- components/
    +-- TodoList.js
    +-- ToDo.js
```

## API Endpoints

The app expects a backend API running locally at:

```text
http://127.0.0.1:8000/api/posts
```

Used endpoints:

- `GET /api/posts` - fetch all tasks
- `POST /api/posts` - create a new task
- `PATCH /api/posts/:id` - update a task
- `PATCH /api/posts/:id/status` - update completion status
- `DELETE /api/posts/:id` - delete a task

Expected task fields include:

```json
{
  "id": 1,
  "title": "Example task",
  "body": "Task details",
  "isCompleted": false
}
```

## Getting Started

### Prerequisites

- Node.js
- npm
- A compatible backend API running on `http://127.0.0.1:8000`

### Installation

```bash
git clone https://github.com/Ahmedgh94/TodoApp-localstorage.git
cd TodoApp-localstorage
npm install
```

### Run the App

```bash
npm start
```

Open the app in your browser:

```text
http://localhost:3000
```

### Build for Production

```bash
npm run build
```

## What I Learned

- Building reusable React components for a task management workflow.
- Managing shared application state with Context API.
- Connecting a React frontend to a REST API with Axios.
- Implementing CRUD operations from the UI.
- Using Material UI dialogs, buttons, cards, inputs, and icons.
- Creating task filters based on completion status.

## Future Improvements

- Move the API base URL into an environment variable.
- Add form validation for edit dialogs.
- Add loading and error UI states.
- Replace the default CRA test with tests for task rendering and actions.
- Add a localStorage fallback or rename the repository to match the API-based implementation.
