let a = 1;            
let b = 2;            
// let c = (a++, b++);
// a = a + 1; let c = b; b = b + 1;

// let c = (a++, ++b);
a = a + 1; b = b + 1; let c = b;

console.log('c = ', c , a, b);
// let a = 1;            
// let b = 2;            
// let c = ((a = a + 1), b = b + 1);
// console.log('c = ', c , a, b);


const g = 0; 
if (null) {
    const g = 2;
}

console.log(g);