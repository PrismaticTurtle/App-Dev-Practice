document.addEventListener('DOMContentLoaded', () => {
  const todoList = document.getElementById('todo-list');
  const addForm = document.getElementById('add-todo-form');
  const input = document.getElementById('todo-input');

  // This sends a Post request
  async function sendPost(data) {
    const url = '/todos'; // The endpoint to send the POST request to

    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json' // Tell the server we are sending JSON
        },
        body: JSON.stringify(data) // Convert the JS object to a JSON string
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const result = await response.json(); // Parse response as JSON
      console.log('Success:', result);
    } catch (error) {
      console.error('Error:', error);
    }
  }

  // Function to fetch and display todos
  function loadTodos() {
    fetch('/todos')
      .then(res => res.json())
      .then(todos => {
        todoList.innerHTML = '';
        todos.forEach(todo => {
          const li = document.createElement('li');
          li.textContent = todo;
          todoList.appendChild(li);
        });
      })
      .catch(err => console.error('Error loading todos:', err));
  }

  // Load todos on page load
  loadTodos();

  // TODO: Implement the form submission to add a new todo
  addForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const newTodo = input.value.trim();
    if (newTodo) {
      // Send POST request to /todos with the new todo
      sendPost({ text: newTodo });
      // Then reload the todos
      input.value = '';
   }
 });
});