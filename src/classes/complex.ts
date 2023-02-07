//  shorthand syntax for
class Human {
  constructor(protected name: string, private age: number) {}
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