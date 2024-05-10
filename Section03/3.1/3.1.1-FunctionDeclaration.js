// TODO: using the function expressions below, refactor them into function declarations
//greet function expression
const greet = function() {
  console.log("Hello!");
};
//greet function declaration
function greet() {
  console.log("Hello!");
}
//threeModTwo function expression
const threeModTwo = function() {
  console.log(3 % 2);
};
//threeModTwo function declaration
function threeModTwo() {
  console.log(3 % 2);
}
//checkDrivingAge function expression
let age = 18;
const checkDrivingAge = function() {
  if (age >= 16) {
    console.log(true);
  } else {
    console.log(false);
  }
};
//checkDrivingAge function declaration
function checkDrivingAge() {
  if (age >= 16) {
    console.log(true);
  } else {
    console.log(false);
  }
}
