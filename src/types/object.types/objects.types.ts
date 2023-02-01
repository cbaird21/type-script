// typeScript is able to infer that it's an object with two properties
// name will be a string
// age will be a number
let person = {
  name: "mark",
  age: 24,
};

// declare an object using a literal syntax first
// this tells typeScript that car will be an object
// in the Object Definition {assign properties and their types}
// you have to also give values to those properties

// While defining property name and it's value is followed by the syntax of ; 
// however when declaring we use comma after each property.


let car: {
    color: string;
    brand: string;
} = {
    color: "red",
    brand: "bmw",
};

// blogging platform with article object that will always need something with it. so we assign from the beginning that value.

// declared the structure of our article object
// how to define optional image property in our article, the ? on image makes it optional

let article:{
    author: string;
    content: string;
    title: string;
    image?: string;
};

// typeScript will prompt us to provide all these in the article object
// created the article myself
article ={
    author: "Chandler",
    content: "I love typeScript!",
    title: "My first Article",
};
