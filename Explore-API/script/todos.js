function loadTodos() {
    fetch('https://jsonplaceholder.typicode.com/todos')
    .then(res => res.json())
    .then(data => displayTodos(data))
}
function displayTodos(todos) {
    // console.log(todos);
    // get the container
    const todoContainer = document.getElementById('todo-container')
    for(const todo of todos){
        console.log(todo);
        // create the child element 
        const todoDiv = document.createElement('div')
        // set the innerText or innerHTML   
        todoDiv.innerHTML =`
        <h3>Title : ${todo.title}</h3>
        <p>User Id : ${todo.id} </p>
        <p>Is Completed : ${todo.completed} </p>
        `
        // <p>Is Completed : ${todo.completed === true ? ' complete': 'not complete'} </p>

        // appned the child
        todoContainer.appendChild(todoDiv)
    }
}
loadTodos()