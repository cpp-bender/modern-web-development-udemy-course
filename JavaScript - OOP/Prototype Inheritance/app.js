// inheritance

function Person(name, age) {
  this.name = name;
  this.age = age;
}

Person.prototype.showInfos = function () {
  console.log(this.name, this.age);
};

const p = new Person("ahmet", 25);

function Employee(name, age, salary) {
  Person.call(this, name, age);
  this.salary = salary;
}

Employee.prototype = Object.create(Person.prototype);

// overriding
Employee.prototype.toString = function () {
  console.log("employee", this.name);
};

Employee.prototype.showInfos = function () {
  console.log(this.name, this.age, this.salary);
};

const e = new Employee("murat", 30, 40000);

e.showInfos();
p.showInfos();
e.toString();
