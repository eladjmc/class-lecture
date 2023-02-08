let x = 5;
let y = 5;

class Foo {
  constructor(a, b, t) {
    this.a = a;
    this.b = b;
    this.t = t;
  }

  tfunction(a, b) {
    const myvar = (this.a * this.b) / 2;
    if (!this.foo2()) {
      return;
    }
    return myvar;
  }

  rfunction(a, b) {
    const myvar = this.a * this.b;
    if (!this.foo1()) {
      return;
    }
    return myvar;
  }
  foo1() {
    return this.t === 4;
  }

  foo2() {
    return this.t === 3;
  }


}

const variable = new Foo(x,y,4);

console.log(variable.tfunction());

console.log(variable.rfunction()); 

// console.log(variable.foo1());
