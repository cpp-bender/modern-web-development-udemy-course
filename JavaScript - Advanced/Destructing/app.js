// destructing
let number1, number2;

const arr = [100,200,300,400];

[number1, number2] = arr;

console.log(number1, number2);

let [a,b] = arr;

console.log(a,b);

// object destructing
const numbers ={
  a:10,
  b:20,
  c:30,
  d:40,
  f:50,
};

const {d:number4,c:number5,f:number6} = numbers;

console.log(number4,number5,number6);

// function destructing
const getLangs = () => ["Python","Java","C++"];

const [lang1,lang2,lang3] = getLangs();

console.log(lang1,lang2,lang3);


const person = {
  name:"ahmet",
  year:"1998",
  salary:"50.000",
  showInfos:() => console.log("showing infos")
};

const {name:isim, year:yil, salary: maas, showInfos:göster} = person;

console.log(isim, yil, maas);
göster();

