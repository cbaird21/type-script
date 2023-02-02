// do not have concrete input types and return types

// here's why we need this
// using javaScript filter function

// js First
// take in 2 args
// 1st parram an array, then a predicate that is a function that returns only true or false
// filter will take in an array and execute the predicate function on each value of the array and return a new array based on whether the value return true or false in the predicate function

// declaring function overload for filter function
type Filter = {
  <T>(array: T[], predicate: (item: T) => boolean): T[];

  // <> is the syntax Generic, type T, is what's common
  // the common is start at T so another generic would be a U etc
  // whenever I pass in type T is passed then the predicate gets an item of type T
  //   <T>(array: T[], predicate: (item: T) => boolean): T[];
};
// assign any type to array and function type
const filter: Filter = (array, predicate) => {
  let result = [];
  // go through each item in the array and everytime we're in the looop and i + 1
  for (let i = 0; i < array.length; i++) {
    let item = array[i];
    // passing to the predicate function if true add to the array
    if (predicate(item)) {
      result.push(item);
    }
  }
  return result;
};

let numbers = [1, 2, 5, 7, 9, 10, 12];

function greaterThanSeven(item: number) {
  return item > 7;
}
console.log(filter(numbers, greaterThanSeven));
// prints 9,10,12

let lizards = ["cat", "dog", "rat", "lion"];

function filterCats(item: string) {
  return item === "cat";
}

console.log(filter(lizards, filterCats));
// prints cat

