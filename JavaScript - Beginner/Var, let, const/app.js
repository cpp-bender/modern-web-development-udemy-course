// var - exists in function scope
var name = "ahmet";
console.log(name);

// let - exists in block scope
//let name = "murat";
//let name = "ali"; error
console.log(name);

let a, b;

(a = 10), (b = 20);

console.log(a, b);

// const - exists in block scope
const c = 100;
//c = 100;
const PI = 3.14;

function execute() {
  var res = 10;

  for (let i = 0; i < 4; i++) {
    console.log(i);
  }
  console.log(res, i);
}

execute();
