// a union is combination of two types
// a union can have proterties of both or only one properties

type Dog = {
  name: string;
  barks: boolean;
  wags: boolean;
};

type Cat = {
  name: string;
  purrs: boolean;
};

// union of both these two type
// can get both properties or just all of one of the types
type DogAndCatUnion = Dog | Cat;

let dog: DogAndCatUnion = {
  name: "Harlow",
  barks: true,
  wags: true,
};

let cat: DogAndCatUnion = {
  name: "Reggie",
  purrs: true,
};

let dogAndCat: DogAndCatUnion = {
  name: "Hybrid",
  barks: true,
  wags: true,
  purrs: true,
};
