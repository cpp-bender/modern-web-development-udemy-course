let value;

const programmer = {
    name:"Ahmet",
    age:25,
    speak: function(){
        console.log("programmer talks");
    },
    email:"ahmetaltioglu@gmail.com",
    langs: ["pyhton","c#","java"],
    address:{
        city:"İzmir",
        street:"Bornova",
    }
};

value = programmer;

programmer.speak();

const programmers = [
    {name:"Ahmet", age:"25"},
    {name:"Ali", age:20},
];

value = programmers[0];

console.log(value);