// map function in TypeScript
// 1st param array 2nd function
const map = <T, U>(array: T[], func: (item: T) => U) => {
  // check if array is empty
  if (array.length === 0) {
    return array;
  }
  // create a new array of new values
  let result = [];
  // loop through each item and call the function
  for (let i = 0; i < array.length; i++) {
    result[i] = func(array[i]);
  }
  // return a new array
  return result;
};

let numbers = [4, 5, 6, 7, 8];

// write function to convert number to strings
const converted = map(numbers, (num: number) => num.toString());

console.log(converted);
