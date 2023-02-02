// pass two parameters with the types declared, string is the type it must be returned in
// name and age are mandated both params are required
// typeScript makes are parameters and type mandatory
function intro(name: string, age: number): string {
  return `My name is ${name} and age is ${age}`;
}

console.log(intro("John", 32));

// optional parameters, it has to be the last parameter to be optional in functions
function intro5(name: string, age: number, country?: string): string {
  if (country) {
    return `My name is ${name} and age is ${age} I live in ${country}`;
  }
  return `My name is ${name} and age is ${age}`;
}

console.log(intro5("chandler", 28));
// My name is chandler and age is 28.
console.log(intro5("chandler", 28, "America"));
// My name is chandler and age is 28 I live in America
