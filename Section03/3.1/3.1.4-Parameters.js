// Named Parameters
// write a function that takes two named parameters:
// print each named parameter,
// then return the parameters added together
function functionWithTwoParams(x, y) {
  console.log("x = ", x);
  console.log("y = ", y);
  return x + y;
}

// invoke the function and pass in two numbers
functionWithTwoParams(3, 4);
// invoke the function and pass in more than two numbers
functionWithTwoParams(3, 4, 5, 6);
// invoke the function and pass in only one number
console.log(functionWithTwoParams(3));
// change the function to set default values for the parameters
function functionWithDefaultParams(x = 2, y = 4) {
  console.log("x = ", x);
  console.log("y = ", y);
  return x + y;
}

// again, invoke the function and pass in only one number
functionWithDefaultParams(9);

//invoke the function inside of console.log
//console.log(functionWithDefaultParams(5));

// Rest Operator
// add a rest operator to the function's parameters
// add a line to the function's body to print the value of the rest operator
function functionWithRestParams(x, y, ...z) {
  console.log("x = ", x);
  console.log("y = ", y);
  console.log("Rest Params: ", z);
  return x + y;
}

// again, invoke the function and pass in more than two numbers
console.log(functionWithRestParams(5, 6, 7, 8));

//Create Function with one rest parameter
function functionWithOneRestParam(...x) {
  console.log("x = ", x);
  return x;
}

functionWithOneRestParam(1, 2, 3, 4, 5);
