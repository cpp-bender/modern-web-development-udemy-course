// local storage - set, remove, clear
localStorage.setItem("bjj1", "rnc");
localStorage.setItem("bjj2", "triangle");

const value = localStorage.getItem("bjj1");

console.log(value);

console.log(localStorage.getItem("sport"));


if(localStorage.getItem("sport") === null){
    console.log("not found");
}
else{
    console.log("found");
}

localStorage.clear();


// local storage - array 
const todos = ["todo1","todo2","todo3"];

localStorage.setItem("todos",JSON.stringify(todos));

console.log(JSON.parse(localStorage.getItem("todos")));

// // example
const form = document.getElementById("todo-form");
const todoInput = document.getElementById("todo");

form.addEventListener("submit", addTodo);

function addTodo(e){
    const value = todoInput.value;
    let todos;
    if(localStorage.getItem("todos")===null){
        todos =[];
    }
    else{
        todos = JSON.parse(localStorage.getItem("todos"));
    }
    todos.push(value);
    localStorage.setItem("todos",JSON.stringify(todos));
    e.preventDefault();
}
