// constructor
function Employee(name, age, salary){
    this.name=name;
    this.age = age;
    this.salary = salary;
    this.showInfos = ()=> console.log(this.name,this.age,this.salary);
}

const a = new Employee("ahmet", 25, 40000);
const b = new Employee("ali", 20, 20000);
const c = new Employee("mehmet", 30, 3000);

console.log(a,b,c);