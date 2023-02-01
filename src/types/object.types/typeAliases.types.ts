// declared the structure of our article object
// how to define optional image property in our article, the ? on image makes it optional

// use key word of type

type Articles = {
  author: string;
  content: string;
  title: string;
  image?: string;
};

let articles: Articles = {
  author: "John",
  content: "Content",
  title: "John's Article",
};

// declare new object and assign mandate properties
let post: Articles = {
  author: "Sam",
  content: "Content",
  title: "Sam's Content",
};
