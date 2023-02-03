// class helps us create these objects and lets us know what every person will contain.

// has 2 properties, name and email which have any primitive or reference types.
// Also has a method, methods are nothing but functions inside of an object
let person = {
  name: "John",
  email: "john@doe.com",
//   greet method
  greet: () => console.log(`Hello ${person.name}`),
};
