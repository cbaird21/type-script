// takes in two numbers and add the sum as JS
// const sum = (a, b) => {
//   return a + b;
// };
// refactor to typescript
// sum function accepts two arguments that will both be numbers, that will :return the number value
const sum = (a: number, b: number): number => {
  return a + b;
};
console.log(sum(2, 3));
