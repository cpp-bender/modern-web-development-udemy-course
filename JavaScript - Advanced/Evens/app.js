let value;
const filterInput = document.getElementById("filter");
const todoForm = document.getElementById("todo-form");

value = filterInput;

filterInput.addEventListener("focus",function(e){
    console.log(e.target);
    console.log(e.target.className);
    console.log(e.type);
    console.log(e.target.placeholder);
    // console.log("hello");
});

todoForm.addEventListener("submit", submitForm);


function submitForm(e){
    console.log(e);
    e.preventDefault();
};

filterInput.onfocus = () => console.log("hello");

console.log(value);