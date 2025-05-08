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