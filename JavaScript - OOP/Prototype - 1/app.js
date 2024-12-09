// every object in js inherits from object class called as Prototype
const object = new Object();
object.name = "ahmet";
console.log(object);

function Employee(name, age) {
  this.name = name;
  this.age = age;
  this.showInfos = () => console.log("showing infos");
  this.toString = () => console.log("emplooye object");
}

const emp1 = new Employee("ahmet", 25);
console.log(emp1.toString());
