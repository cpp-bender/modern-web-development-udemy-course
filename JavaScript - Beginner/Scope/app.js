// global scope

let value = 10;
function func(){
    let value = 20;
}

console.log(value);



// function scope
function fn(){

}



// block scope
if(10){
    var a = 10;
    let b = 20;
}

console.log(a);
console.log(b);