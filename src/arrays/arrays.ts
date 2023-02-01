// typeScript will infer array type

// infers an array of numbers
let a = [1, 2, 3];

// syntax of delcaring array of numbers
let a: number[] = [1, 2, 3];

// infers it's a string array
let b = ["a", "b", "c"];

// syntax of declaring array of strings this is another synax
let b = (Array<string> = ["a", "b", "c"]);

// infers is's a unionType
let c = ["a", "b", 1, 2];

// declaring a uniontype array
// always would have to check before we called any method, you should ideally stick with one type such as string or number
let c: (string | number)[] = ["a", "b", 1, 2];

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

// type Airplanes is = an array of Airplane
// an array of that SINGLE type
type Airplanes = Airplane[];


const airplanes: Airplanes = [
  {
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
  },
  {
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
  },
];
