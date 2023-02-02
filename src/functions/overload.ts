// declaring call signatures for using as functional related
// air ticket reservation ticket, that reserves round trip ticket for customers

type Reservation = {
  // Date is a type in typeScript
  departureDate: Date;
  //   making this return date optional allows to book one way
  returnDate?: Date;
  departingFrom: String;
  destination: String;
};
// custom type for the reserving the tickets
// declaring with multiple call signature in {} once in curly brackets you can't use arrow functions, you'll need to use :
// you can have multiple call signatures
type Reserve = {
  (
    // will declare all values for params in our reserve function
    departureDate: Date,
    returnDate: Date,
    departingFrom: string,
    destination: string
    // declaring the return object will return the Reservation
    // never, throws an error when declared values aren't provided
  ): Reservation | never;
  // by adding this second signature call type it tells typeScript that it could be returned either way to be accurate
  (
    // will declare all values for params in our reserve function
    departureDate: Date,
    departingFrom: string,
    destination: string
    // declaring the return object will return the Reservation
    // never, throws an error when declared values aren't provided
  ): Reservation | never;
};

// declaring our function
// typeScript will take common on both call signatures
// Typescript looks at the first call signature and compares line by line to see what matches ie, first param for each then 2nd etc, that's why there are unions between the different call signatures
// you do not have to redeclare the type, this is for the example
const reserve: Reserve = (
  departureDate: Date,
  // create a union of date and string
  returnDateOrDepartingFrom: Date | string,
  // create a union of departingFrom or destination
  departingFromOrDestination: string,
  // destination will be our final with optional param which makes it a roundtrip
  destination?: string
) => {
  // conditional statement to check if the user is looking for roundtrip or one way. all 4 params are required for roundtrip
  // we look at first call signature and match it values on line 41,43,45,47
  if (returnDateOrDepartingFrom instanceof Date && destination) {
    return {
      departureDate: departureDate,
      returnDate: returnDateOrDepartingFrom,
      departingFrom: departingFromOrDestination,
      destination: destination,
    };
  } else if (typeof returnDateOrDepartingFrom === "string") {
    return {
      departureDate: departureDate,
      departingFrom: returnDateOrDepartingFrom,
      destination: departingFromOrDestination,
    };
  }
  throw new Error("Please provide valid details for your trip");
};

console.log(reserve(new Date(), new Date(), "New York", "Washington"));
// returns {departing from: "New York", departureDate:Thurs Jan 2, destination: "Washington", returnDate: Thurs Jan 2 2022}
console.log(reserve(new Date(), "New York", "Washington"));
// returns {departing from: "New York", departureDate:Thurs Jan 2, destination: "Washington"}
