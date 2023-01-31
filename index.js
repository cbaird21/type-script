// typescript is a transpiler
// strict typing is a feature that that JS doesn't offer but typescript does
// typescript is translated to JS on the tsc -p ./tsconfig.json command
"use strict";
// takes in two numbers and add the sum as JS
// const sum = (a, b) => {
//   return a + b;
// };
// refactor to typescript
// sum function accepts two arguments that will both be numbers, that will :return the number value
const sum = (a, b) => {
    return a + b;
};
console.log(sum(2, 3));
