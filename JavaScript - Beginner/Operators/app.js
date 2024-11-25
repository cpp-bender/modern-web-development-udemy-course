let value;
const var1 = 10;
const var2 = 20;

// basic operators
value = var1 + var2;
value = var1 - var2;
value = var1 * var2;
value =var1 % var2;


// math lib
value = Math.PI;
value = Math.E;

value = Math.round(3.6); // -> 4
value = Math.round(3.2); // -> 3
value = Math.ceil(3.2); // -> 4
value = Math.ceil(3.7); // -> 4
value = Math.floor(3.7); // -> 3
value = Math.floor(3.2); // -> 3

value = Math.sqrt(16);  // -> 4
value = Math.sqrt(31);  // -> 5.56

value = Math.abs(-10);  // -> 10
value = Math.pow(5,3);  // -> 125
value = Math.pow(4,2);  // -> 16
value = Math.max(10,-1,100,150); // -> 150
value = Math.min(10, -10, 200);  // -> -10

value = Math.random();   // -> generates a random number in range of [0 to 1)

value = Math.random() * 21 +1; // -> generates a random number in a range of [1, 21)
 

console.log(value);
