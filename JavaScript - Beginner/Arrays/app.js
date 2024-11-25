let value;

const arr = [1,2,3,4,5,"a"];
const arr2 = new Array(1,2,3,4,5,"a");

value = arr[0];
value = arr[2];
value = arr[arr.length-1];

arr[2] = 10;

value = arr.indexOf("a");  // -> returns 5
arr.push(5);      // -> inserts element at the end of the array
arr.unshift(3000);  // -> inserts element at the beginning of the array
arr.pop();          // -> remove element from the tail of the array
arr.shift();        // -> remove element from the head of the array
arr.splice(0,3);   // -> remove elements from the head as [0..3)th 
arr.reverse();     // - > turns array upside down

arr3 = [22,33,5,44];

// sorting ascending order  
value = arr3.sort(function(x,y){
    return x - y;
});

console.log(value);