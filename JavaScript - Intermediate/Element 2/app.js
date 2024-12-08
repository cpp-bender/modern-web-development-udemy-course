let value;

const todoList = document.querySelector(".list-group");
const todo = document.querySelector(".list-group-item:nth-child(2)");
const cardRow = document.querySelector(".card.row");
value = todoList;
value = cardRow;


// child nodes - selects all including text, \n, etc.
value = todoList.childNodes;
value = todoList.childNodes[0];

// children - selects only elements
value = todoList.children;
value = todoList.children[todoList.children.length-1];
value = todoList.children[2].textContent = "changed";

value = cardRow.children;
value = cardRow.children[2].children[1].textContent="Changed here";

value = todoList;
value = todoList.children[0];
value = todoList.firstChild;
value = todoList.lastChild;
value = todoList.children.length;
value = todoList.childElementCount;
value = cardRow.parentElement.parentElement;

// element siblings
value = todo.previousElementSibling;
value = todo.nextElementSibling.nextElementSibling;

console.log(value);