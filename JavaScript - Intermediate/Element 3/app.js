// create element dynamically
const newLink = document.createElement("a");
const cardBody = document.getElementsByClassName("card-body")[1];

newLink.id = "clear-todos";
newLink.className = "btn btn-danger";
newLink.href = "https://www.google.com";
newLink.target = "_blank";
newLink.appendChild(document.createTextNode("go another page"));
cardBody.appendChild(newLink);

// delete element dynamically
const todoList = document.querySelector("ul.list-group");
const todos = document.querySelectorAll("li.list-group-item");
todos[1].remove();
todoList.removeChild(todoList.lastElementChild);
todoList.removeChild(todos[0]);

// replace element dynamically
const newElement = document.createElement("h3");
newElement.className = "card-title";
newElement.id = "tasks-title";
newElement.textContent = "New Todos";

const oldElement = document.querySelector("#tasks-title");

cardBody.replaceChild(newElement, oldElement);


// add, replace, delete attribute
let element;
const todoInput = document.getElementById("todo");
todoInput.classList.add("newClass");
todoInput.classList.add("newClass2");
todoInput.classList.remove("form-control");

element = todoInput;
element = todoInput.placeholder;
element = todoInput.getAttribute("placeholder");
todoInput.setAttribute("placeholder","Aye!");
todoInput.setAttribute("title","Input");
todoInput.removeAttribute("name");
element = todoInput.hasAttribute("name");

console.log(element);