// Student Information Variables
let studentName; // String
let studentAge;  // Number
let studentGrade; // String (e.g., "A", "B")
let isPresent;   // Boolean

studentName = "Joe Smith";
studentAge = 15;
studentGrade = "B";
isPresent = true;

console.log("Student Name:", studentName);
console.log("Student Age:", studentAge);
console.log("Student Grade:", studentGrade);
console.log("Attendance Status:", isPresent);

// Numeric Variables for Calculator
let num1;
let num2;

num1 = 12;
num2 = 7;

console.log("Sum:", num1 + num2);
console.log("Difference:", num1 - num2);
console.log("Product:", num1 * num2);
console.log("Quotient:", num1 / num2);

// Assignment Operators
num1 += 4; // Adds 4 to num1
num2 *= 3; // Multiplies num2 by 3

console.log("Updated num1:", num1);
console.log("Updated num2:", num2);

let isPositive = num1 > 0 && num2 > 0; // Check if both are positive
let isEven = num1 % 2 === 0 || num2 % 2 === 0; // Check if at least one is even

console.log("Are both numbers positive?", isPositive);
console.log("Is at least one number even?", isEven);
