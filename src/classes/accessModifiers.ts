// Access modifiers are used to encapsulate class and it's member variables, default value is PUBLIC
// Public: Public member variables are accessible anywhere in a class or a program. By default, Typescript member variables are public so declaring public member variables using keyword public is optional. For example, in an astronomical calculation the speed of light value 186000 (miles per second) can be set as public.
// Protected: Protected member variables defined in a class can be accessible only within its class or its derived class. For example, a joint bank account number can be defined as protected.
// Private: Private member variables scope is limited only within its class. Private member variables are not accessible in derived class. A personal diary of a person can be defined as a private member variable.
// Read-Only: Read-Only member variables do not allow changes to the value of variable once they are initialized.

class Human {
    // declaring property names
  protected name: string;
  public age: number;
    // assigning name and age value to the declared property names
  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
  // adding getName method
  public getName() {
    return this.name;
  }
}

class Admin extends Human {
  public returnName() {
    return this.name;
  }
}

const admin: Admin = new Admin("mark", 42);

let human: Human = new Human("Edyta", 30);
console.log(human.getName());
// returns Edyta
console.log(admin.returnName());
