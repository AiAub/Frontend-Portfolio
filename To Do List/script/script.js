function addTodo() {
    const todoInput = document.getElementById('ToDo-input');
    const todoList = document.getElementById('ToDo-list');
    const todoText = ToDoInput.value.trim();

    if (todoText === '') {
        alert('Please enter a task.');
        return;
    }

    const li = document.createElement('li');
    li.textContent = todoText;

    const removeBtn = document.createElement('button');
    removeBtn.textContent = 'Remove';
    removeBtn.className = 'remove-btn';
    removeBtn.onclick = function() {
        todoList.removeChild(li);
    };

    li.appendChild(removeBtn);
    todoList.appendChild(li);
    todoInput.value = ''; 
}