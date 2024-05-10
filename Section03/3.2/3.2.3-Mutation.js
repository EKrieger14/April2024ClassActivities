let x = 5;
let y = [1, 2, 30];
let z = {
  id: 100,
  name: "myName",
  loggedIn: false
};
// reassign x, y, and z to FALSY values
x = 0;
y = "";
z = false;
// print x, y, and z
// console.log(x, y, z);

const a = "name";
const b = [];
const c = {};
// try to reassign a, b, and c to FALSY values
// a = "";
// b = 0;
// c = NaN;

console.log(a, b, c);
// using BRACKET NOTATION, assign a value to b
b[0] = "bob";
// using DOT NOTATION, assign a PROPERTY to c
c.name = "Bob";
// using DOT NOTATION, assign a METHOD to c
c.printStuff = function() {
  console.log("This is our statement");
};
// using BRACKET NOTATION, call the method in c
c["printStuff"]();
// print a, b, and c
console.log(a);
console.log(b);
console.log(c);
