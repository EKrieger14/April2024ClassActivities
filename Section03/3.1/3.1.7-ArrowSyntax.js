// refactor the functions below into arrow syntax
//Function declaration
// function myNumberFunction() {
//   return ((2 ** 2 + 3) % 4) * 14;
// }

//Arrow Syntax
const myNumberFunction = () => ((2 ** 2 + 3) % 4) * 14;

//Function Declaration
// function greet(name) {
//   return `Hello, ${name}`;
// }

//Arrow Syntax
const greet = () => `Hello, ${name}`;

//Function Expression
// const timeOfDayGreet = function(name, timeOfDay) {
//   return `Hello, ${name}, good ${timeOfDay}`;
// };

//Arrow Syntax

const timeOfDayGreet = (name, timeOfDay) => `Hello, ${name}, good ${timeOfDay}`;

//Function declaration
// function tripleAndHalf(num) {
//   let triple = num * 3;
//   return triple / 2;
// }

//Arrow Syntax
const tripleAndHalf = num => {
  let triple = num * 3;
  return triple / 2;
};

//Function declaration
// function sumTwoNumbers(num1, num2) {
//   let sum = num1 + num2;
//   console.log(`The sum of your numbers is ${sum}.`);
//   return sum;
// }

//Arrow Syntax
const sumTwoNumbers = (num1, num2) => {
  let sum = num1 + num2;
  console.log(`The sum of your numbers is ${sum}.`);
  return sum;
};
