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
