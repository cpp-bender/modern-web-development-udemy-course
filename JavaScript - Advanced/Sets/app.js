// sets

const mySet = new Set();

mySet.add(100);
mySet.add("ahmet");
mySet.add(3.14);

const size = mySet.size;

mySet.delete("ahmet");
console.log(mySet.has(3.14));

mySet.forEach(function(v){
    console.log(v);
})

const arr = Array.from(mySet);

console.log(arr);