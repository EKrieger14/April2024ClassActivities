const arrOne = ["a", [0], "b"];
const arrTwo = [1, 2, "c", ["d", 3]];

// concatenate arrTwo, 4, and "e" to arrOne and save the resulting array to a variable
const arrThree = arrOne.concat(arrTwo, 4, "e");

// print the new, merged array
console.log(arrThree);

// join the merged array and print the result
let newString = arrThree.join(", and the next value is ");

console.log(typeof newString);

//
function palindromeTest(word) {
  let revWord = word
    .split(" ")
    .reverse()
    .join("");
  if (word === revWord) {
    console.log("equal");
  } else {
    console.log("nope");
  }
}

palindromeTest("Boring");
