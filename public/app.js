document.addEventListener('DOMContentLoaded', () => {
  const todoList = document.getElementById('todo-list');
  const addForm = document.getElementById('add-todo-form');
  const input = document.getElementById('todo-input');

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
  // addForm.addEventListener('submit', (e) => {
  //   e.preventDefault();
  //   const newTodo = input.value.trim();
  //   if (newTodo) {
  //     // Send POST request to /todos with the new todo
  //     // Then reload the todos
  //     input.value = '';
  //   }
  // });
});