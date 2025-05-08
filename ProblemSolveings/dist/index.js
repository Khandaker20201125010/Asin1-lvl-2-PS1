"use strict";
//problem 1
// Description: Create a function that takes a string and an optional boolean.
// If the boolean is true or not provided, return the string in uppercase.
// If the boolean is false, return the string in lowercase.
//solution 1
function formatString(input, toUpper) {
    return toUpper ? input.toUpperCase() : input.toLowerCase();
}
console.log(formatString("Hello"));
console.log(formatString("Hello", true));
console.log(formatString("Hello", false));
//problem 2
// Description: Create a function that filters an array of objects by the rating property, returning only items with a rating of 4 or more.
//solution 2
function filterByRating(items) {
    return items.filter(item => item.rating >= 4);
}
const books = [
    { title: "Book A", rating: 4.5 },
    { title: "Book B", rating: 3.2 },
    { title: "Book C", rating: 5.0 }
];
console.log(filterByRating(books));
//problem 3
//Description: Create a generic function that concatenates multiple arrays of the same type using rest parameters.
//solution 3
function concatenateArrays(...arrays) {
    return [].concat(...arrays);
}
console.log(concatenateArrays(["a", "b"], ["c"]));
console.log(concatenateArrays([1, 2], [3, 4], [5]));
//problem 4
// Create a Vehicle class with private make and year properties and a getInfo() method.
// Create a Car class extending Vehicle, adding a private model property and a getModel() method.
//solution 4
class Vehicle {
    constructor(make, year) {
        this.make = make;
        this.year = year;
    }
    getInfo() {
        return `This vehicle is a ${this.make} from ${this.year}.`;
    }
}
class Car extends Vehicle {
    constructor(make, year, model) {
        super(make, year);
        this.model = model;
    }
    getModel() {
        return `The model is ${this.model}.`;
    }
}
const myCar = new Car("Toyota", 2020, "Corolla");
console.log(myCar.getInfo());
console.log(myCar.getModel());
//problem 5
// Description: Write a function that takes a string | number and returns:
// The length if it's a string
// The number multiplied by 2 if it's a number
//solution 5
function processValue(value) {
    if (typeof value === "string") {
        return value.length;
    }
    else {
        return value * 2;
    }
}
console.log(processValue("hello"));
console.log(processValue(10));
function getMostExpensiveProduct(products) {
    if (products.length === 0)
        return null;
    const highestPrice = Math.max(...products.map((product) => product.price));
    return products.find((product) => product.price === highestPrice) || null;
}
const products = [
    { name: "Pen", price: 10 },
    { name: "Notebook", price: 25 },
    { name: "Bag", price: 50 }
];
const mostExpensiveProduct = getMostExpensiveProduct(products);
console.log(mostExpensiveProduct);
//problem 7
// Define an enum Day for the days of the week.
// Create a function that returns "Weekday" or "Weekend" based on the input day.
//solution 7
var Day;
(function (Day) {
    Day[Day["Monday"] = 0] = "Monday";
    Day[Day["Tuesday"] = 1] = "Tuesday";
    Day[Day["Wednesday"] = 2] = "Wednesday";
    Day[Day["Thursday"] = 3] = "Thursday";
    Day[Day["Friday"] = 4] = "Friday";
    Day[Day["Saturday"] = 5] = "Saturday";
    Day[Day["Sunday"] = 6] = "Sunday";
})(Day || (Day = {}));
function isWeekend(day) {
    if (day === Day.Saturday || day === Day.Sunday) {
        return "Weekend";
    }
    else {
        return "Weekday";
    }
}
console.log(isWeekend(Day.Monday));
console.log(isWeekend(Day.Saturday));
