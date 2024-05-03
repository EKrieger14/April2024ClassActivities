const arr = ["a", "a", "b", "a", "c", "b", "a", "b", "b", "c", "c", "c"];
console.log(arr.length);
// find the first index of "a", "b", and "c"
// console.log(arr.lastIndexOf("a"), arr.lastIndexOf("b"), arr.lastIndexOf("c"));
// find the last index of "a", "b", and "c"
// console.log(arr.lastIndexOf("a"), arr.lastIndexOf("b"), arr.lastIndexOf("c"));
// if the first index and last index of "a" is not the same, remove the last instance

function removeStuff(arr) {
  let firstA = arr.indexOf("a");
  let lastA = arr.lastIndexOf("a");
  console.log(firstA, lastA);
  if (firstA !== lastA) {
    console.log(lastA);
    arr.splice(lastA);
  } else {
    console.log("It didn't run");
  }
  return arr;
}

console.log(removeStuff(arr));
console.log(arr.length);
