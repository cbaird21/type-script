// void and never types are not in JavaScript but are in typeScript
// the subtle differences

// void is assigned to a function that doesn't return any value
// type script infers it's a void funtion
const addnumbers = () => {
  console.log(2 + 4);
};
// 6 is printed to the console that is all
addnumbers();

// never is assigned to a function that never completes
// typeScript infers never type
const throwNewError = () => {
  throw new Error("Your program terminated because of error");
};
// throws the error we declare
throwNewError();
