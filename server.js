const express = require('express');
const app = express();

app.use(express.json());
app.use(express.static('public'));

let todos = [];

app.get('/todos', (req, res) => {
  res.json(todos);
});

// TODO: Implement the POST route to add a new todo
// app.post('/todos', (req, res) => {
//   // Add the todo from req.body to the todos array
//   // Send back the updated todos or a success message
// });

app.listen(3000, () => {
  console.log('Server running on port 3000');
});