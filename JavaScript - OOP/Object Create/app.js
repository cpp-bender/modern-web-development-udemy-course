// create object
const obj = {
  test1: ()=> console.log("test1"),
  test2: ()=> console.log("test2"),
};

console.log(obj);

const emp = Object.create(obj);
emp.name = "ahmet";
emp.age = 25;

console.log(emp);

console.log("-----------");


function Person(){
}

Person.prototype.test1 = ()=> console.log("test1");
Person.prototype.test2 = ()=> console.log("test2");


function Employee(name, age){
  this.name = name;
  this.age = age;
}

const person = new Person();
Employee.prototype = Object.create(Person.prototype);
const a = new Employee("ahmet",25);
console.log(a);