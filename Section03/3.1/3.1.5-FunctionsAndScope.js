// wrap the code below in a function called "addNumbersFrom1To100" and return the total
// ! do not use console.log inside your function
let total = 0;

function addNumbersFrom1To100() {
  for (let i = 1; i <= 100; i++) {
    total += i;
  }
  return total;
}

addNumbersFrom1To100();
// invoke the function and console.log its value
console.log(total);

// try to print the variable "total" outside the function
// ? what do you expect ?

// examine the code below,
// ? which console.log statement will not print when you invoke the parentAndChildScope function ?
const childVariable = "I am in the child's scope";

function childScope(param) {
  console.log("Child Scope, Parent Variable:", param);
  console.log("Child Scope, Child Variable:", childVariable);
}

function parentAndChildScope() {
  const parentVariable = "I am in the parent's scope";
  childScope(parentVariable);
  console.log("Parent Scope, Parent Variable:", parentVariable);
  console.log("Parent Scope, Child Variable:", childVariable);
}
