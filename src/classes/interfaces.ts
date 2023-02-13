// Interfaces are neccessary for OOP
// Nothing else but contracts
// contracts that define in adavance on how an object or class structure is going to look once the object or class is created by the user

// when should you use a type vs an interface, be consistent in which one you chose in an application

// create a fish object and define the object structure in advance
interface Fish {
  name: string;
  email: string;
  age: number;
  phone?: number;
  greet?: () => void;
}

const fish: Fish = {
  name: "Nemo",
  email: "Nemo@stayingalive.com",
  age: 4,
};

interface User {
  name: string;
  email: string;
  phone: number;
  gender: string;
}

// need seperate interface for users with address
// you can extend User like you can extend types
interface UserWithAddress extends User {
  address: string;
}

const user: User = {
  name: "Chandler",
  email: "chan@fake.com",
  phone: 8745694857,
  gender: "male",
};

const userWithAddress: UserWithAddress = {
  name: "apple",
  email: "app@fake.com",
  phone: 8745694857,
  gender: "male",
  address: "this is an address",
};
