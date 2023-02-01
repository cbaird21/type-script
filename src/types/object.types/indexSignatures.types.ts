// the exact keys and values are not known to us
// ticketing system for airline and need to keep track of seat numbers and passengers
type Airplane = {
  flightNumber: string;
  airplaneModel: string;
  dateOfDeparture: string;
  timeofDeparture: string;
  from: string;
  to: string;
  //   index signatures can be defined,seats will always have a key, seats object can have a number of properties as long as the name of the property is a string and a value assigned to the properties is a string. You can only have one index signature per object
  //   index signatures can coexist with other values as well
  // the values have to match the value of the index signature
  seats: {
    // orderProperty: string;
    [key: string]: string;
  };
};

const airplane: Airplane = {
  flightNumber: "A223",
  airplaneModel: "A320",
  dateOfDeparture: "01/31/2022",
  timeofDeparture: "23:10",
  from: "JFK",
  to: "DCA",
  seats: {
    "10A": "Betty White",
    "10B": "Elvis Presely",
  },
};
