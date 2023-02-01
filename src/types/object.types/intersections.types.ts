// union types are sum of two types a and b (more common)
// intersection types are common properties along with the unique properties of each of them

type Cats = {
  name: string;
  purrs: boolean;
  color: string;
};

type Dogs = {
  name: string;
  barks: boolean;
  color: string;
};

// & creates intersection of two types
// apart from common properties it'll pick up unique too
// unique from dog is barks, cat is purrs
type HybridAnimal = Dogs & Cats;

// in case of intersection it all unique + common types are required
const hybridAnimal: HybridAnimal = {
  name: "max",
  color: "white",
  barks: true,
  purrs: false,
};
