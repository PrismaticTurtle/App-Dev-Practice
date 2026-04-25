# App Dev Practice

This is a simple fullstack todo app to practice fullstack development.

## Setup

1. Install dependencies: `npm install`
2. Start the server: `npm start`
3. Open your browser to `http://localhost:3000`

## What to Complete

The app currently displays a list of todos (initially empty) and has a form to add new todos, but the functionality is incomplete.

### Backend (server.js)
- Implement the POST route `/todos` to add a new todo to the `todos` array. (done)
- The route should accept JSON with a `todo` field, add it to the array, and return the updated array or a success response. (done)

### Frontend (public/app.js)
- Implement the form submission event listener. (done)
- On submit, prevent default, get the input value, send a POST request to `/todos` with the todo, then reload the todos list. (done)

Once completed, you should be able to add todos and see them displayed.

## Technologies Used
- Backend: Node.js with Express
- Frontend: Vanilla JavaScript with Fetch API

