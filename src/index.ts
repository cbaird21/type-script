function multiByTwo(number: unknown) {
     if (typeof number === "number"){
    return number * 2;
     }
     return "Please provide a valid number";
}

console.log(multiByTwo(number:4));
// results 8
console.log(multiByTwo(number:"John"));
// results Please provide a valid number