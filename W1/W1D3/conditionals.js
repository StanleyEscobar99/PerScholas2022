// Conditionals and IF statements

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

let x = "10";

if (x == 10) {
  console.log("That is True!!");
} else {
  console.log("That is false");
}

//Example of strictly equals ===

let y = 10;

if (y === 10) {
  console.log("That is true!!");
} else {
  console.log("It was false");
}

// Exercises of IF statements

let num = 0;

if (num > 0) {
  console.log("It's positive");
} else if (num < 0) {
  console.log("It's negative");
} else {
  console.log("I'm zero");
}

let age = 17;

if (age >= 18) {
  console.log("Acces Granted");
} else {
  console.log("Access denied");
}

// Nested if Statements

if (true) {
  if (true) {
    console.log("nested if it is running");
  } else {
    console.log("second experssion if false");
  }
} else {
  console.log("first experssion is false");
}

// Exercise:

const integer = 100

if (integer > 0) {
    if (integer > 100) {
        console.log("Integer is greater than 100")
    } else if (integer === 100){
        console.log("It's 100")
    }else {
        console.log("Integer is less than 100")
    }
} else console.log("Integer is negative")

// Chained else/if statements
// const integer = 21

// if (integer > 100) {
//     console.log("Greater than 100 and positive!")
// } else if (integer > 0 && integer < 100) {
//     console.log("Less than 100 and positive!")
// } else if (integer === 100) {
//     console.log("It is exactly 100!")
// } else {
//     console.log("It is negative...")
// }