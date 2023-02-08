//  shorthand syntax for
class Human {
  private testUsersAge(age: number) {
    if (age > 200 || age < 0) {
      throw new Error("The age must be within range of 0-200");
    }
    return age;
  }
  // dont want age to be less than 0 or greater than 200
  constructor(private _name: string, private _age: number) {
    this.testUsersAge(_age);
    this._age = _age;
  }

  public set name(name: string) {
    this._name = name;
  }
  public get name() {
    return this._name;
  }

  public set age(age: number) {
    this.testUsersAge(age);
    this._age = age;
  }
  public get age() {
    return this._age;
  }
}

const bob: Human = new Human("Cali", 25);
bob.age = 25;

// accesses the property on the method
console.log(bob.age);
// invoking the getname method on the bob object
console.log(bob.name);
