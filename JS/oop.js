class Animal {
  name;
  constructor(name) {
    this.name = name;
    console.log('Born!!', this.name);
  }

  bark() {
    console.log('bark!!!');
  }
}

const ani = new Animal('Ani');
ani.bark();

class Dog extends Animal {
  bark() {
    console.log('Bow wow!!!');
  }
}
const lucy = new Dog('Lucy');
lucy.bark();
