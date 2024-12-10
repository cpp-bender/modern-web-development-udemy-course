// every object in js inherits from object class called as Prototype
const object = new Object();
object.name = "ahmet";
console.log(object);

function Employee(name, age) {
  this.name = name;
  this.age = age;
  this.toString = () => console.log("emplooye object");
}

Employee.prototype.showInfos = function(){
  console.log(this.name, this.age);
};

const emp1 = new Employee("ahmet", 25);
emp1.showInfos();
