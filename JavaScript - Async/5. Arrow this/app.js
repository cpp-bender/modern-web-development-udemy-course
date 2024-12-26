const person = {
  age: 25,
  name: "Max",
  tellAge: function () {
    console.log(this.age);
  },

  tellName:() => {
    console.log(this.name);
}


};

person.tellAge();

person.tellName();
