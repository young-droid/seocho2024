interface Animal {
  move(): void;
}

class Pet implements Animal {
  move(): void {
    console.log('Pet is moving!');
  }
  name; // string = '';
  // private name   // 만약 이렇게 적으면, 부모만 가지고 있고 자식한텐 주지 못한다

  constructor(name: string) {
    this.name = name;

    // getter
    // getname() {
    //     console.log(this.name)
    // }
  }
}

class Dog extends Pet {
  bark() {
    console.log('멍 멍!', this.name);
  }
  howling() {
    console.log('아우~~~', this.name);
  }
  move() {
    console.log('어슬렁 어슬렁', this.name);
  }
}
class Cat extends Pet {
  kukuki() {
    console.log('꾹! 꾹!', this.name);
  }
  bark() {
    console.log('야옹!', this.name);
  }
}

const lucy = new Dog('Lucy');
lucy.bark();

const happy = new Cat('Happy');
happy.kukuki();

const maxx = new Dog('Maxx');
maxx.howling();
