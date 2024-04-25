const { title } = require("process");

// bracket and dot notation
const key = "1";
const obj = {
  key: "the key is 'key'",
  1: "the key is 1"
};

// what will the following lines print?
// console.log(obj[key]);
// console.log(obj.key);
// console.log(obj["key"]);

// Create an object with at least four properties, each with a different data type.

const car = {
  color: ["red", "black"],
  make: "GMC",
  yukon: true,
  year: 2010
};

// Name one of the four properties "collection" and set its value to an Array or Object.
car.collection = [1998, 2005, 2010, 2021];
// Access a value in the "collection" property
//console.log(car.collection[1]);

// Practice with nested Arrays and Objects
const keys = ["key", "1", "method", "favorites", "list"];

// Add a method to an Object
obj.method = function() {
  return "the key is 'method' and it calls refers to a function";
};

// Fill in your favorite movie, number and color below
obj["favorites"] = {
  movie: "The Matrix",
  number: 16,
  color: "blue"
};

// Add a list (a.k.a array) to an Object
obj.list = ["a", "b", 3, "d", ["e", 4, 5], { f: 6 }];

// Using the 'for...in' loop to iterate over 'obj' object ...
// how many lines will the following statement print?
// what do you expect to see on each line?
for (let key in obj) {
  console.log(`Key is: ${key} and value is: ${obj[key]}`);
}

// Use a template literal to print a sentence about your favorite things
console.log(
  `My favorite movie is $(obj.favorites.movie) and I've watched it $(obj.favorites.movie) wearing a $(obj.favorites.movie) shirt`
);

// Access the values "b", 4, and 6 from obj.list
console.log(obj.list[1]);
console.log(obj.list[4][1]);
console.log(obj.list[5].f);
