// classes will always be capitalized
// any varaibles in the class with variable you desire to be declared
// constructor function files whenever the class is extanseated

class Employee {
  name = "John";
  email = "John@email.com";
  // declare the constructor function.
  // benifit is it'll fire when new instance is created from this class
  // this will allow more params
  constructor(name: string, email: string) {
    console.log("name: " + name);
    console.log("email: " + email);
  }
  // function in a class is a method
  // You don't use the function keyword in class to create the methods
  greet() {
    return `Hello John`;
  }
}

// creating an instance of Employee
// use the `new` keyword
// we want this declared employee variable to hold an object, a new object that is created from the Employee class
// employee object is a instance of Employee class
const employee = new Employee("Andy", "andy@gmail.com");
const employee2 = new Employee("Jenn", "jenn@gmail.com");
console.log(employee);
//  returns Employee{name:'John', email:'john@email.com'}
// greet will show in Protoype for inheritence
console.log(employee2);
// generate the same as employee, we want it to more flexible with this, constructors are neccesarry.
console.log(person.greet());
// reutrns Hello John
