// declaring call signatures for using as functional related
// air ticket reservation ticket, that reserves round trip ticket for customers

type Reservation = {
  // Date is a type in typeScript
  departureDate: Date;
  returnDate: Date;
  departingFrom: String;
  destination: String;
};
// custom type for the reserving the tickets
// declaring function call signature in {} once in curly brackets you can't use arrow functions, you'll need to use :
type Reserve = {
  (
    // will declare all values for params in our reserve function
    departureDate: Date,
    returnDate: Date,
    departingFrom: String,
    destination: String
    // declaring the return object will return the Reservation
  ): Reservation;
};
