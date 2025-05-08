
#  Interview Questions - Blog Task

# Interfaces vs Types in TypeScript: What’s the Difference?
- TypeScript provides developers with two key tools to define the structure of data: interfaces and types. At first, they may seem quite similar and can often be used interchangeably. However, there are some important distinctions that can help you decide which one to use for your specific needs.

# Interfaces
- An interface describes the structure of an object, including its properties and their types.
- example :
- interface User {
  name: string;
  age: number;
}
 
 # Types
- A type alias allows you to create a custom name for any type, including:
- Object types
- Union types
- Primitive types
- Tuples 
- Example 
- type Status = "success" | "error" | "loading";

# What is type inference in TypeScript? Why is it helpful?
- Type inference is a feature in TypeScript where the compiler automatically determines the type of a variable, even if you don’t explicitly specify it.
- Example:
- let message: string = "Hello, Khandaker!";