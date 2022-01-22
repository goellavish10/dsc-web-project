const item = document.getElementById("itemTitle");

function addTodo() {
    console.log(item.value);

    let existingTodos = JSON.parse(localStorage.getItem("todos"));

    const obj = {
        content: item.value,
        id: Math.floor(100000 + Math.random() * 900000).toString(),
    }

    console.log(obj);
    if (existingTodos === undefined) {
        existingTodos = [];
        existingTodos.push(obj);
    } else {
        existingTodos.push(obj);
    }

    localStorage.setItem("todos", JSON.stringify(existingTodos));

    updateTodoList(existingTodos);

    item.value = "";
}

function updateTodoList(todos) {
    const list = document.getElementById('myList');

    list.innerHTML = "";

    for (let i = 0; i < todos.length; i++) {
        list.innerHTML += `
            <li>${todos[i].content} <i class="fas fa-trash-alt" onclick="deleteTodo('${todos[i].id}')"></i></li>
        `
    }

}

console.log(JSON.parse(localStorage.getItem("todos")));

updateTodoList(JSON.parse(localStorage.getItem("todos")));

function deleteTodo(id) {
    console.log(id);
    const todos = JSON.parse(localStorage.getItem("todos"));
    let changedTodos = [];

    for (let i = 0; i < todos.length; i++) {
        if (id !== todos[i].id) {
            changedTodos.push(todos[i]);
        }
    }

    localStorage.setItem("todos", JSON.stringify(changedTodos));

    updateTodoList(changedTodos);
}