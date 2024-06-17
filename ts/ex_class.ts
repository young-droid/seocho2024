class Student {
  name;
  constructor(name: string) {
    this.name = name;
  }
  cleaning() {
    console.log('청소합시다');
  }
  catering() {
    console.log('급식먹자');
  }
}

class Tranfer extends Student {
  
  cleaning() {
    throw new Error('전학생은 청소에서 제외됩니다');
  }
}

const s = new Student('학생');
const t = new Tranfer('전학생');

s.catering();
s.cleaning();

t.catering();
t.cleaning();

console.log('------');

function ocleaning(stu: Student) {
  console.log('급식', stu.name);
}
