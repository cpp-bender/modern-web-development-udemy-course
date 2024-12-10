// static methods
class Maths {
  sqrt(x) {
    console.log(Math.sqrt(x));
  }
  static cube(x) {
    console.log(x * x * x);
  }
}

const m = new Maths();

m.sqrt(4);

Maths.cube(3);
