let booleanValue: boolean = true;

// Literal Values
booleanValue = false;

// expression of true or false
booleanValue = typeof "abc" === "string";
// this will always be true, so typescript will allow it.
booleanValue = 1 > 0;

// This isn't a booleanValue so it wouldn't be accepted
booleanValue = {};
booleanValue = "New York";
// undefined and null are two seperate types
booleanValue = null;
booleanValue = undefined;
