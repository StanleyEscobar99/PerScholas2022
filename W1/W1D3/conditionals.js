//============================Conditionals and IF statements=========================

//Operators
// ==== -stricly equals, compares, value, and datatype
// ==   -loose equals, only compares valueno
// !=	-not equal
// !==	-not equal value or not equal type
// >    -Greater than
// <    -Less than
// =    -Equal
// >=   -Equal to or Greater than
// <=   -Equal to or Less than
// &&   -AND
// ||   -OR

// Exercises

// Examples of loose equals ==

// let x = "10";

// if (x == 10) {
//   console.log("That is True!!");
// } else {
//   console.log("That is false");
// }

//Example of strictly equals ===

// let y = 10;

// if (y === 10) {
//   console.log("That is true!!");
// } else {
//   console.log("It was false");
// }


//======================IF Statements======================

//========Example of IF statement

// If (x = 10){
//     //do this
//     }
//     else{
//     //do this
//     }


//=======Exercises of IF statements

//==========Exercise 1

//1. Declare a variable ‘num’
//2. Write a statement that checks if an ‘num’ is positive or negative
//3. change the value of the variable save & open it again

//let num = 0;

//let num = 3


// if (num > 0) {
//   console.log("It's positive");
// } else if (num < 0) {
//   console.log("It's negative");
// } else {
//   console.log("I'm zero");
// }


//==================

//==============Exercise 2 

//1. You are tasked with setting up the security for a web site that only grants users 
//over the age of 18+ access to the site. Write a conditional that gives users who are 
//18+ access and logs access denied for users who do not meet the given condition.


// let age = 17;

// if (age >= 18) {
//   console.log("Acces Granted");
// } else {
//   console.log("Access denied");
// }

//=================





//====================Nested if Statements====================

//Example of Nested IF statement

// If (true){
//     if(true){
//     //Do this
// } else{
// //do this
// }
// } else{
// //do this
// }

// if (true) {
//   if (true) {
//     console.log("nested if it is running");
//   } else {
//     console.log("second experssion if false");
//   }
// } else {
//   console.log("first experssion is false");
// }



//=================Exercise Nested IF statement

//===========Exercise 1

//1. Write a nested if/else statement
//2. Declare a variable ‘num’
//3. Add an if/else statement that checks if ‘num’ is positive & greater than 100
//4. Add another statement that checks if ‘num’ is positive but less than 100
//5. Add an the final statement to check if ‘num’ is negative

// const integer = 12

// if (integer > 100) {
//     console.log("Greater than 100 and positive!")
// } else if (integer > 0 && integer < 100) {
//     console.log("Less than 100 and positive!")
// } else if (integer === 100) {
//     console.log("It is exactly 100!")
// } else {
//     console.log("It is negative...")
// }




//===========Exercise 2



// What is your letter grade?

// Write an if/else statement for the following requirements:

// If student gets 90 or higher: console log A
// If students get 80 or above: console log B
// If students get 70 or above: console log C
// If students get 55 or above: console log D
// Any grade lower than 55 is F


// let testScore = 32;
// let grade;
// let collegeStudent = false

// if (testScore >= 90) {
//     grade = "A"
// } else if (testScore >= 80) {
//     grade = "B"
// } else if (testScore >= 70) {
//     grade = "C"
// } else if (testScore >= 65) {
//     grade = "D"
// } else {
//     //If statement inside of if statement (nested if statement)
//     if (collegeStudent){
//         grade = "U"
//     } else {
//         grade ="F"
//     }
// }
