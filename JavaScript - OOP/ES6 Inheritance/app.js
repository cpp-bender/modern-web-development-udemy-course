class Person {
  // Superclass, Baseclass
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  showInfos() {
    console.log(this.name, this.age);
  }
}

class Employee extends Person {
  // Derivedclass, Subclass, Childclass
  constructor(name, age, salary) {
    super(name, age);
    this.salary = salary;
  }
  showInfos() {
    console.log(this.name, this.age, this.salary);
  }
  toString() {
    console.log("employee");
  }
  addSalary(amount) {
    this.salary += amount;
  }
}

const e = new Employee("ahmet", 25, 400);
e.addSalary(100);
e.showInfos();
