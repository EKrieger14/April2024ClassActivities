// Davids Review

// For Each Example
const thisArr = ["This string", "That string", "Another string"];

for (let i = 0; i < thisArr.length; i++) {
  console.log(
    `This is the ${i} position item and its value says ${thisArr[i]}`
  );
}

thisArr.forEach((theItem, i) =>
  console.log(`This is the ${i} position item and its value says ${theItem}`)
);

//
const baseURL = "http://example.com";
const pathName = "/pizzas";
const options = ":144657838";

const apiURL = `${baseURL}${pathName}${options}`;
