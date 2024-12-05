// mouse events
let value;

const cardBody = document.querySelectorAll(".card-body")[1];
const title = document.querySelector("#tasks-title");

// click event
title.addEventListener("click", run);

// double-click event
title.addEventListener("dblclick", run);

// mouse-down event
title.addEventListener("mousedown", run);

// mouse-up event
title.addEventListener("mouseup", run);

// mouse-over event
title.addEventListener("mouseover", run);

// mouse-out event
title.addEventListener("mouseout", run);

cardBody.addEventListener("mouseover", run);

// mouse-enter event
cardBody.addEventListener("mouseenter", run);

// mouse-leave event
cardBody.addEventListener("mouseleave", run);

function run(e){
    console.log(e.type);
}

console.log(value);