# TypeScript Array to String Type Error

This example demonstrates a common type error in TypeScript when an array is passed to a function expecting a string. The error occurs because the function's parameter is explicitly typed as a string, and the array cannot be implicitly converted.

## Bug

The `greeter` function is defined to accept a string, but an array is passed to it. TypeScript will throw an error because of this type mismatch.

## Solution

The solution involves either modifying the function's parameter type to accept an array or iterating through the array and passing each element to the function.  The solution provided below iterates through the array and logs the greeting for each element.