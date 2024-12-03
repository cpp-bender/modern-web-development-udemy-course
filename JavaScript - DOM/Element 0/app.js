// choose element by id
let element;

element = document.getElementById("todo-form");
element = document.getElementById("tasks-title");

// choose element by class
element = document.getElementsByClassName("list-group-item");
element = document.getElementsByClassName("card-header");

// choose element by tag
element = document.getElementsByTagName("li");
element = document.getElementsByTagName("div");

// query selector - css selector -> selects the very first one
element = document.querySelector("#todo-form");
element = document.querySelector("#tasks-title");
element = document.querySelector(".list-group-item");
element = document.querySelector("div");

// query selector all -> selects all
element = document.querySelectorAll(".list-group-item");

element.forEach(function(el){
    console.log(el);
});

console.log(element);