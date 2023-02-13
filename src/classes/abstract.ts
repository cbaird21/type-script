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
  //   creating print holidays method
  // check to see if length of holidays is greater than zero
  public printHolidays() {
    if (this.holidays.length === 0) {
      return console.log("There are no holidays");
    }
    console.log("Here is the list of the holidays");
    // grab holiday property to loop
    this.holidays.forEach(
      (holiday: { date: Date; reason: string }, index: number) => {
        // able to access from template literals, this gives some structured response.
        console.log(`${index + 1}. ${holiday.reason}. ${holiday.date}`);
      }
    );
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
// create an array of holidays for IT and admin
const itHolidays: Holidays = [
  {
    date: new Date(2022, 12, 25),
    reason: "Christmas",
  },
  {
    date: new Date(2022, 12, 10),
    reason: "IT Department Day",
  },
];

const adminHolidays: Holidays = [
  {
    date: new Date(2022, 12, 25),
    reason: "Christmas",
  },
  {
    date: new Date(2022, 10, 01),
    reason: "Admin Department Day",
  },
];

const itDepartment: ItDepartment = new ItDepartment();
const adminDepartment: AdminDepartment = new AdminDepartment();
// adding the holidays to the correct class
// method of add holidays
itDepartment.addHolidays(itHolidays);
adminDepartment.addHolidays(adminHolidays);

// shows that the child classes are inheriting the parent class
// method of printHolidays
itDepartment.printHolidays();
adminDepartment.printHolidays();
