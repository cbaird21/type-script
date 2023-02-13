// static members are those members of a class which can be accessed without instantiating
// methods can be static as well. We will create a static method to calulate mileage


// when to use static methods or properties, can be used wherever you don't need to instantiate a new class before accessing its properties and methods. It usually if these methods are not interlinked to each other a helper class that holds all helper methods is a great example

class Automobile {
    // public is the access modifier of the color
    // static makes it able to be accessed without instantiating a "new" automobile
    public static color: string = "red";
    public static calulateMileage(miles: number, litres: number) {
        return miles / litres;
    }
}

// how we access a static member
console.log(Automobile.color);
// returns red

// how we access a static method
console.log(Automobile.calulateMileage(50,10));
// returns 5

// comparison of another example of static methods
// math object in javaScript, the math object doesn't require you to instatiate it first, it can be accessed statically
const pi = Math.PI;