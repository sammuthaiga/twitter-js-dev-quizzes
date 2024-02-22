let c = {greeting: 'Hey'}
let d;

d = c; // d now has a reference to the same object as c

c.greeting = 'Hello'; // mutate the object

console.log(d.greeting); // 'Hello'

console.log(1<2<3); // true
console.log(3<2<1); // true