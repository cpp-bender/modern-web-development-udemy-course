// window object

let value;

value = document;
value = document.querySelectorAll("*");
value = document.querySelectorAll("*").length;
value = document.querySelectorAll("*")[2];
value = document.body;
value = document.head;
value = document.URL;
value = document.characterSet;


// const elements = document.querySelectorAll("*");
// for (let index = 0; index < elements.length; index++) {
//    console.log(elements[index]); 
// }


// const collections = Array.from(document.querySelectorAll("*"));

// collections.forEach(function(collection){
//     console.log(collection);
// });

console.log(value);