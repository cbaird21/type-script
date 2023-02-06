// Inheritance is when one class inherits properties and methods of another class

class User {
  name: string;
  email: string;
  age: number;

  constructor(name: string, email: string, age: number) {
    this.name = name;
    this.email = email;
    this.age = age;
  }
}

// extends is how you inherit from parent class
// automatically inherites the User class
class AdminUser extends User {
  isAdmin: boolean = true;
}

// create a User
const user: User = new User("Chandler", "chandler@gmail.com", 28);
console.log(user);
// returns the 3 properties
// Name:Chandler, email:chandler@gmail.com, age:28

// create AdminUser
const admin: AdminUser = new AdminUser("Jenn", "jenn@gmail.com", 29);
console.log(admin);
// the difference here is having 4 properties vs user only having 3, the 4th is adding it's own property of isAdmin: true 