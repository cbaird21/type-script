// abstract members need to be implemented in child class,

// abstract classes can't be instantiated
// different from normal classes, can't use new keyword in abstract classes

type Holidays = {
  date: Date;
  reason: string;
}[];

abstract class Department {
  // brings in the abstract type of holidays, of type Holidays
  protected abstract holidays: Holidays;
  //   constructor can only be accessed by the child classes
  protected constructor(protected name: string) {}
  //   implement a public method so all the child classes inherit this method vs creating seperate methods within the child class
  public addHolidays(holidays: Holidays) {
    // checks if holidays is an array or not
    // abstract declaration of holidays, typescript knows it will be required for the child class
    if (Array.isArray(holidays)) {
      for (const holiday of holidays) {
        this.holidays.push(holiday);
      }
    }
  }
}

// create child classes of the Department class from inheritance
// child class must implement abstract holidays
class ItDepartment extends Department {
  protected holidays: Holidays = [];
  // the super method allows us to access the protected constructor from the parent class
  constructor() {
    super("IT Department");
  }
}

class AdminDepartment extends Department {
  protected holidays: Holidays = [];

  constructor() {
    super("Admin Department");
  }
}
