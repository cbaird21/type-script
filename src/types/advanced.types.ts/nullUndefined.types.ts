// two primitive types
// null, undefined
// the difference is underfined be something that has not been defined yet, where null is something javaScript hasn't been able to compute and runs into an error

let user: string;
// error thrown, Variable 'user' is used before being assigned.
// this would return undefined if noEmitOnErrors is set to false in ts.config file
console.log(user);

let saveButton = document.getElementById("save");
// this returns null because
console.log(saveButton);

let loggedInUsername: string;
const users = [
  { name: "Andy", age: "29" },
  { name: "Chandler", age: "28" },
];
// if function return true, it'll return the user if it returns false nothing will happen
const loggedInUser = users.find(
  (user: { name: string; age: number }) => user.name === loggedInUsername
);
// errors as undefined
console.log(loggedInUser.age);
// errors that it might be null, this is an instance where you wouldn't want it to be left to be inferred.
// ! says we know this element will have the element.
let saveButtons: HTMLElement | null = document.getElementById("save")!;

// pass condition to use saveButtons
if (saveButtons == null) {
  // do something/perform something
}
