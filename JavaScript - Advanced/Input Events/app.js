// input events

const filter = document.querySelector("#filter");

// dom-loaded event
document.addEventListener("DOMContentLoaded", load);

function load(e){
    console.log("page loaded");
}

// focus event
filter.addEventListener("focus", run);

// blue event
filter.addEventListener("blur", run);

// paste event
filter.addEventListener("paste", run);

// copy event
filter.addEventListener("copy", run);

// cut event
filter.addEventListener("cut", run);

// select event
filter.addEventListener("select", run);

function run(e){
    console.log(e.type);
}