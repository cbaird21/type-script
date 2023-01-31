// Constructor method for bigInt
let bigInt1 = BigInt(945845);

let biIng2 = 12345678n;

console.log(bigInt1);

// returns maxium safe integer that javaScript allows
const safeInt = Number.MAX_SAFE_INTEGER;

console.log(safeInt);

// it won't allow any higher than this number. this won't compute/change the safeInt number
const safeIntPlusOne = safeInt + 1;
const safeIntPlusTwo = safeInt + 2;

console.log(safeIntPlusOne);
console.log(safeIntPlusTwo);

let a: bigint = BigInt(123458);
let b: bigint = 23456465n;

// because typeScript knows A is bigint and B is bigint, and c is bigint it'll allow this.
let c: bigint = a -b;

// bigint can't have decimal values
let e:bigint = 24551.2n

//bigint wont work with Math methods
let f = Math.log(a)