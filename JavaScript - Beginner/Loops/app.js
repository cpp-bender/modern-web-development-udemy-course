// while loop
let i = 0;

while (i < 10) {
  console.log(i);
    if(i==5){
        break;
    }
  i++;
}

// do-while loop
let a = 0;
do{
    console.log(a);
    a++;
}while(a<10);

// example
const langs = ["Python", "Javascript","Java"];

let index =0;

while(index<langs.length){
    console.log(langs[index]);
    index++;
}

// for-loop 
for(let r = 0; r<langs.length; r++){
    console.log(langs[index]);
}

// foreach-loop
langs.forEach(function(lang, index){
    console.log(lang, index);
});


// map loop
const users = [
    {name: "Ahmet", age:25},
    {name:"Zeynep", age:40},
    {name:"Ali", age: 11},
];

const names = users.map(function(user){
    return user.name;
});

const ages = users.map(function(user){
    return user.age;
});

console.log(names,ages);



// for-in loop
const res = {
    name: "Ahmet",
    age:25,
};

for(let key in res){
    console.log(key, res[key]);
}