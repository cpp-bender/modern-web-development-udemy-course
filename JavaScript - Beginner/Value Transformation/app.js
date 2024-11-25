// transform to string
let value;
value = String(123);
value = String(3.14);
value = String(true);
value = String(function(){console.log()});
value = String([1,2,3,4]);

value = (123).toString();

console.log(value, typeof value);


// transform to number
value = Number("123");
value = Number(null); // not valid   
value = Number(undefined); // not valid
value = Number("hello");
value = Number(function(){console.log()}); // not valid
value = Number([1,2,3,4]); // not valid
value = Number("3.14");

value = parseFloat("3.14");
value = parseInt("2");

console.log(value, typeof value);

const res = Number("54") + 37;

console.log(res);



