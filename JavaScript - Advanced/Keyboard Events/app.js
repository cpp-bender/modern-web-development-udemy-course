// keyboard events
let value;

// keypress
document.addEventListener("keypress", press);

function press(e){
    console.log(e.key);
    console.log("hello");
}

// keydown
document.addEventListener("keydown", down);

function down(e){
    console.log(e.key);
}

// keyup
document.addEventListener("keyup", up);

function up(e){
    console.log(e.key);
}

// example
const cardHeader = document.getElementsByClassName("card-header")[0];
const todo = document.getElementById("todo");

document.addEventListener("keyup", changeText);

function changeText(e){
    cardHeader.textContent = e.target.value;
}


console.log(value);