// tuples are special types of array which the length and type of values are predefined.
// helps strictly type arrays, you should use tuples as often as possible

// three values in the array
// firstname, lastname, age
// firstname-string, lastname-string, age-number

// array with fixed values, always three values in the exact same order represented in this array.
// duples can have optional properties, it's the same syntax with the ? after the declared type
let persons: [string, string, number?];

persons = ["John", "Doe", 18];

// can do lists
// [NumberOfStudents:Number, passing:boolean,'John','Stella']
// we use the javaScript spread operator on the array of data within the array to see the list of students

type listOfStudents = [number, boolean, ...string[]];

// has the type of listOfStudents, 3, true and the string of people passing
const passingStudents: listOfStudents = [3, true, "John", "Stella", "Chandler"];

const failingStudents: listOfStudents = [1, false, "Scott"];
