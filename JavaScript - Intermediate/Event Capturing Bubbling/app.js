// event bubbling
document.querySelector(".container").addEventListener("click", function (e) {
  console.log("Div.container");
});

document.querySelector(".card.row").addEventListener("click", function (e) {
  console.log("Card.row");
});

document.querySelectorAll(".card-body")[1].addEventListener("click", function (e) {
  console.log("Card.body");
});

// event capturing/delegation
const cardBody = document.querySelectorAll(".card-body")[1];

cardBody.addEventListener("click", run);

// example
function run(e){
    if(e.target.className === "fa fa-remove"){
        console.log("delete");
    }
    if (e.target.id === "filter"){
        console.log("filter");
    }
    if(e.target.id === "clear-todos"){
        console.log("delete all tasks");
    }
}