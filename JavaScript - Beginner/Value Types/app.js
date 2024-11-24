// create a variable
var res = 10;
var a = 20;
var c = 30;

console.log(res);
console.log(a);
console.log(c);

// value types - primitives

// numbers
var a = 10;
var b = 3.14;
console.log(a + " is: " + typeof a);
console.log(b + " is: " + typeof b);

// strings
var name = "Mustafa";
console.log(name + " is: " + typeof(name));

// boolean
var a = false;
console.log(a + " is: "+typeof(a));

// null
var a = null;
console.log(a + " is: " + typeof(a));

// undefined
var k;
console.log(k + " is: " + typeof(k));

// value types - references

// arrays
var numbers = [1,2,3,4,5];
console.log(numbers);
console.log(numbers+ " is: " + typeof numbers);
console.log(numbers[0]);

// objects
var person ={
    name:"Ahmet Alti",
    age: "25",
};

console.log(person);
console.log(typeof person);

var date = new Date();
console.log(date);
console.log(typeof date);

var hello = function(){
    console.log("hello");
}

console.log(typeof hello);
