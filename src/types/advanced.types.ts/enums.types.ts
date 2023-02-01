// types used to enumerate the value of the type
// SQL

// enums defines value as a typeScript operator
import { Roles } from "../../roles";
// we get the value of author in the console
console.log(Roles.author);

type Teacher = {
  name: string;
  email: string;
  password: string;
  roles: string;
  role: Roles;
};

const teacher: Teacher = {
  name: "Ben",
  email: "ben@gmail.com",
  password: "superSecret",
  role: Roles.admin,
};
// creates the object with all given data
console.log(teacher);
