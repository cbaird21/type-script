function multiByTwo(number: unknown) {
    // this if statement will allow it to check to ensure it's a number value otherwise it'll return please provide a valid number
     if (typeof number === "number"){
    return number * 2;
     }
     return "Please provide a valid number";
}

console.log(multiByTwo(number:4));
// results 8
console.log(multiByTwo(number:"John"));
// results Please provide a valid number