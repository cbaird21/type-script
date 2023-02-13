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
  protected constructor(protected name: string) {}
}

// create child classes of the Department class from inheritance
// child class must implement abstract holidays
class ItDepartment extends Department {
  protected holidays: Holidays = [];
}

class AdminDepartment extends Department {
  protected holidays: Holidays = [];
}
