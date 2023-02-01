// union types are more natural
// function that add numbers as well as a string
type stringOrNumber = number | string;

function addNumberOrString(a: stringOrNumber, b: stringOrNumber) {
  // create condition in the function to determine if they're both numbers
  if (typeof a === "number" && typeof b === "number") {
    return a + b;
  } else {
    // concatting the strings if not numbers
    return a.toString() + b.toString();
  }
}

console.log(addNumberOrString(5, 10));
// returns 15

console.log(addNumberOrString("Mark", 10));
// returns Mark10

// throw error null isn't assignable to parameter of type 'stringOrNumber'
console.log(addNumberOrString("Mark", null));
