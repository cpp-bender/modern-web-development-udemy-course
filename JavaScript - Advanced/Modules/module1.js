// Common JS Modules
// module.exports.test1  = function test1(){
//     console.log("TEST1");
// }

// module.exports.test2 = function test2(){
//     console.log("TEST2");
// }

// module.exports = {
//     name:"Ahmet",
//     test1: function(){
//         console.log("test1");
//     },
//     person:{
//         name:"Ahmet",
//         mail:"ahmetaltioglu@gmail.com"
//     }
// }

// ES6 Modules

export const name = "ahmet";
export function test() {
  console.log("test1");
}

export class Person {
  static Test() {
    console.log("hi");
  }
}

export const Employee = {
  salary: 40000,
};
