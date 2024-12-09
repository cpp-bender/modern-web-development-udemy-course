// maps
let myMap = new Map();

const key1 = "ahmet";

const key2 = {
    a:10,
    b:20,
};

const key3 = ()=>2;

// set
myMap.set(key1, "String");
myMap.set(key2, "Object literal");
myMap.set(key3, "Function");

// get
const a = myMap.get(key1);
const b = myMap.get(key2);
const c = myMap.get(key3);

console.log(myMap);
console.log(myMap.size);

const cities = new Map();
cities.set("Ankara",5);
cities.set("İzmir",4);
cities.set("İstanbul",15);

// maps with for-each loop
cities.forEach(function(k,v){
    console.log(v,k);
})

// maps with for-of loop
for(let [k,v] of cities){  // -> destructing
    console.log(k,v);
}

for(let v of cities.values()){
    console.log(v);
}

const arr = [["key1","value1"],["key2","value2"]];
const m = new Map(arr);
console.log(m);

const array = Array.from(cities);

console.log(array);