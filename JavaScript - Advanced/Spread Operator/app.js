// spread operator

const langs = ["python","java","c++","c#"];

console.log(...langs);

const langs2 = ["f#","delphi",...langs];

console.log(langs2);

const [a,b,...langs3] = langs;

console.log(langs3);

const numbers = [5,4,3,4,5];

const add = (a,b,c) => console.log(a+b+c);

add(...numbers);