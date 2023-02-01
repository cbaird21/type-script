// arrays are mutable, once you declare an array you can change it, you can add or remove values from an array
// typeScript has readOnly values that are not mutable
// read from it or copy it is when to use the readonly
let numbers: readonly number[] = [1, 2, 3];

// this creates an error that say you can't push to readonly
numbers.push(1);

// here's a tuple with readOnly
// the way to do so is by placing readOnly before the type declaration like below
type readOnlyPerson = readonly [string, string, number];

const person: readOnlyPerson = ["John", "Smith", 32];

// readonly array of strings
// this is a long form syntax to compare to line 11
type a = Readonly<string[]>;
// this is tuples long syntax compared to line 11
type c = Readonly<[string, string, number]>;
