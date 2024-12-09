const person = {
    name:"ahmet",
    age:25,
    salary:50.000,
};

const langs = ["Python","C#","F#"];

const nick = "ahmet";

// for-in loop
for(let prop in person){
    console.log(prop, person[prop]);
}

for(let index in langs){
    console.log(index, langs[index]);
}

for(let i in nick){
    console.log(i, nick[i]);
}

// for-of loop -> can not iterate over an object
for(let value of langs){
    console.log(value);
}

for(let char of nick){
    console.log(char);
}

