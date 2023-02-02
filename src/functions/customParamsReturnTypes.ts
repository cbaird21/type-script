// optional parameters, it has to be the last parameter to be optional in functions
// this is considered a simple function that returns simple types
function intro5(name: string, age: number, country?: string): string {
  if (country) {
    return `My name is ${name} and age is ${age} I live in ${country}`;
  }
  return `My name is ${name} and age is ${age}`;
}

// ageUnit which an enum of years and months
// so now age can be age and months
enum AgeUnit {
  years = "years",
  months = "months",
}

// CUSTOM TYPE
type Person = {
  name: string;
  age: number;
  //   this can be either years or months
  ageUnit: AgeUnit;
  country: string;
};

const person: Person = {
  name: "Chandler",
  age: 28.5,
  // this is saying to give age unit in years
  ageUnit: AgeUnit.years,
  country: "USA",
};

// function to create age to months
// take the person object as an argument and convert their age from years to months
// returning the person type
function convertAgeToMonths(person: Person): Person {
  // grab age of person and multiply by 12
  person.age = person.age * 12;
  //   since it's been converted, we want the ageUnit to display in months on the person object
  person.ageUnit = AgeUnit.months;
  // returning the person object
  return person;
}
// calling the converAgeToMonths function calling in the person object
console.log(convertAgeToMonths(person));
