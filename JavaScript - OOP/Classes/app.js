// syntactic sugar

class Employee{
  constructor(name, age, salary){
    this.name = name;
    this.age = age;
    this.salary = salary;
  }
  showInfos(){
    console.log(this.name, this.age, this.salary);
  }
}

const e = new Employee("ahmet", 25, 400);
e.showInfos();