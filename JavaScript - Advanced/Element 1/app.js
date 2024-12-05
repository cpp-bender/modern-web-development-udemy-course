const element = document.querySelector("#clear-todos");

console.log(element.id);
console.log(element.className);
console.log(element.classList);
console.log(element.textContent);
console.log(element.innerHTML);
console.log(element.href);
console.log(element.style);
element.className = "btn btn-success";
element.style.marginLeft = "50px";
element.style.color = "#fff";
element.href = "https://www.google.com";
element.target = "_blank";
element.textContent = "Delete";
element.innerHTML = "<span style= 'color:red'>Delete</span>";

const elements = document.querySelectorAll(".list-group-item");
elements.forEach(function(el){
    el.style.color = "red";
    el.style.background = "#eee";
});

let element2;
element2 = document.querySelector("li:last-child");
element2 = document.querySelector("li:nth-child(2)");
element2 = document.querySelectorAll("li:nth-child(odd)");
element2.forEach(function(el){
    el.style.background = "#ccc";
    el.style.color = "#fff";
})

console.log(element2);