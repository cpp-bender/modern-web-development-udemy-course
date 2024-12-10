// call, apply
const obj1 = {
  number1: 10,
  number2: 20,
};

function add(number3, number4) {
  console.log(this.number1 + this.number2 + number3 + number4);
}

add.call(obj1, 100, 200);
add.apply(obj1, [1, 2]);

// bind
const obj2 = {
  number1: 30,
  number2: 40,
};

function getNumbersTotal(number3, number4) {
  return this.number1 + this.number2 + number3 + number4;
}

const copyFc = getNumbersTotal.bind(obj2);
console.log(copyFc(100, 200));
