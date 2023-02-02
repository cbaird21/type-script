// Can declare them the same as JavaScript the only difference we can assign the type of parameters of the function as well as the return values of the function

// pass two parameters with the types declared, string is the type it must be returned in
function intro(name: string, age: number): string {
  return `My name is ${name} and agae is ${age}`;
}

// function expression
const intro = function intro(name: string, age: number): string {
  return `My name is ${name} and agae is ${age}`;
};

// function with arrow function with the same logic
const intro3 = (name: string, age: number): string => {
  return `My name is ${name} and agae is ${age}`;
};
