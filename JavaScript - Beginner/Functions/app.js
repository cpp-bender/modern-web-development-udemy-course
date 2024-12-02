function sayHello(name = "no info", age = "no info"){
    if(typeof name === "undefined") name = "no info";
    if(typeof age === "undefined") age = "no info";
    console.log(`Name: ${name}, Age: ${age}`);
}

sayHello("ahmet", 25);
sayHello();
sayHello();
sayHello("ahmet");

// return functions
function square(x){
    return x*x;
}
let a = square(10);
console.log(a);

// function expression
const hello = function(name){
    console.log(`Hello ${name}`);
}
hello("ahmet");

// immediately invoked funtion expression (IIFE)
(function(name){
    console.log(`Hello ${name}`);
})("ali");

const database = {
    host:"localhost",
    add: function(){
        console.log("added");
    },
    get: function(){
        console.log("got it");
    },
    update: function(id){
        console.log(`Id: ${id} updated`);
    },
    delete: function(id){
        console.log(`${id} deleted`);
    }
}

console.log(database.host);

database.add();
database.delete(10);