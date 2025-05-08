//problem 1
// Description: Create a function that takes a string and an optional boolean.

// If the boolean is true or not provided, return the string in uppercase.
// If the boolean is false, return the string in lowercase.

//solution 1
function formatString(input: string, toUpper?: boolean): string {
    return toUpper ? input.toUpperCase() : input.toLowerCase();
}

console.log(formatString("Hello"));
console.log(formatString("Hello", true));
console.log(formatString("Hello", false));

//problem 2

// Description: Create a function that filters an array of objects by the rating property, returning only items with a rating of 4 or more.

//solution 2
function filterByRating(items: { title: string; rating: number }[]): { title: string; rating: number }[] {
    return items.filter(item => item.rating >= 4);
}
const books = [
    { title: "Book A", rating: 4.5 },
    { title: "Book B", rating: 3.2 },
    { title: "Book C", rating: 5.0 }
];

console.log(filterByRating(books));


