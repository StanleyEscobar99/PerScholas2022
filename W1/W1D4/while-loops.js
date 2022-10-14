//While Loops

// a = a + 2 or  a+=2  -how to add any number

// let age = 1

// while (age < 18) {
//     console.log("I'm a kid")
//     console.log("It's my birthday! Im " + age + " years old.")
//     age++
// }


// let a = 1

// while (a < 7) {
//     if ( a % 2 === 0) {
//         console.log(a + " is even")
//     } else {
//         console.log(a + " is odd")
//     }
//     a++
// }

// Exercise:

// let num = 10

// while (num >= 0) {
//     console.log(num + " is greater than or equal to 0 ")
//     num--
// }

//2.

// let c = 3

// while (c < 35) {
//     if (c % 3 === 0) {
//         console.log(c+ " is a multiple of 3")
//     }
//     c++
// }

//3.

// let d = 1

// while ( d < 100) {
//     if(d % 5 === 0){
//         console.log(d + "is a multiple of 5")
//     }
//     d++
// }

//4.

// let e = 1

// while (e < 20) {
//     if (e % 2 === 0) {
//         console.log(e * 3)
//     }
//     e++
// }

//W1D4 LAB:

// Write an if/else statement for the following requirements:
// If student gets 80 or higher: console log You did a good job
// If students get 70 or above: console log Keep trying
// If students get 60 or above: console log ehhhh
// If students get 55 or above: console log Not to good
// Any grade lower than 55 is Bad Grade But You’ll Get Em Next Time
// 2. Write a for loop for the given output: 10, 30, 50, 70, 90 20, 40, 60, 80, 100
// This could be acheived a few ways, be creative.
// 3. Write a while loop for the given output: 10, 30, 50, 70, 90 20, 40, 60, 80, 100
// This could be acheived a few ways, be creative.
// 4. Write a while loop that prints all numbers from 500 - 800 only if they are divisible by 4.

//1.
// let grade = 90

// if (grade >= 80){
//     console.log("You did a good job")
// } else if (grade >= 70 && grade <= 79) {
//     console.log("Keep trying")
// } else if (grade >= 60 && grade <= 69) {
//     console.log("log ehhhh")
// } else if (grade >= 55 && grade <= 59) {
//     console.log("Not to good")
// } else {
//     console.log("Bad Grade But You’ll Get Em Next Time")
// }

//2a.

// let a = 10

// for (let a = 10; a <= 90; a += 20) {
//     console.log(a)
// }

//2b.
// let b = 20

// for (let b =20; b <= 100; b += 20) {
//     console.log(b)
// }

//2 combined
// for  (let i = 10; i<= 100; i += 20) {
//     console.log(i)
//     if ( i === 90) {
//         i = 20;
//         console.log(i)
//     }
// }

//3.

// let c = 10

// while (c <= 90) {
//     console.log(c)
//     c += 20
// }

// let d = 20

// while (d <= 100) {
//     console.log(d)
//     d += 20
// }

//4.
// let i = 500;

// while (i <= 800) {
//     if (i%4===0) {
//         console.log(i);
//     }
//     i++
// }

// MORNING EXERCISE

// 1. Get the sum of two arrays…actually the sum of all their elements.P.S. Each array includes only integer numbers. Output is a number too.
// let arr_1 = [3, 5, 22, 5,  7,  2,  45, 75, 89, 21, 2]; // --> 276
// let arr_2 = [9, 2, 42, 55, 71, 22, 4,  5,  90, 25, 26]; // --> 351
// Example output:
// 276 + 351 = 627

// let arr_1 = [3, 5, 22, 5, 7, 2, 45, 75, 89, 21, 2];
// let arr_2 = [9, 2, 42, 55, 71, 22, 4, 5, 90, 25, 26];

//How we solved in Breakroom
// function sum(arr, arr2){
//     let i = 0
//     let j = 0
//     arr.forEach ((num) => {
//         i = i+num
//     })
//     arr2.forEach ((num2) => {
//         j = j+num2
//     })

//     return i+j;
// }

// console.log(sum(arr_1, arr_2))

//How Josh solved

// let sum1 = 0;
// let sum2 = 0;

// for (let i =0; i < arr_1.length; i++) {
//     sum1 += arr_1[i]
//     sum2 += arr_2[i]

// }

// const result = sum1 + sum2
// console.log(result)

// 2. Given two arrays of integers. Add up each element in the same position and create a new array containing the sum of each pair. Assume both arrays are of the same length.
// let arr_3   = [4, 6, 7];
// let arr_4    = [8, 1, 9];
// // Example output:
// // [12, 7, 16]

// let arr_5 = []
// let arr_3   = [4, 6, 7];
// let arr_4    = [8, 1, 9];

// for (let a = 0; a < arr_3.length; a++){
//     arr_5.push(arr_3[a]+arr_4[a])
// }

// console.log(arr_5)

// 3.  Write a function called addList that accepts any quantity of numbers as arguments, adds them together and returns the resulting sum.
// - Assume all parameters will be numbers. <=========
// - If called with no arguments, return 0 (zero).

// Examples:

// addList(1) //=> 1
// addList(1,50,1.23) //=> 52.23
// addList(7,-12) //=> -5

//How we solved it

// function addList(...args) {
//     let sum = 0
//     args.forEach((num) =>{
//         sum += num
//     })
//     return sum
// }

// console.log(addList())

//How Josh solved it

// let addList = (...args) => {
//     if (!args.lenght){
//         return "No arguments"
//     }
//     const sum = 0
//     for (let i = 0; i < args.length; i++){
//         sum += args[i]
//     }
//     return sum
// }

// console.log(addList(20,65,83,1,5,9,4))

//Write a JavaScript function that checks whether a passed string is palindrome or not?

// function palindrome(str) {
//     let reg= /[\W_]

//     let reversed = str.split("").reverse().join("")
//     if (reversed === str) return true;

//     return false;
// }

// palindrome("eye")

// 0 == falsey
// "" == falsey

// 1 == true

// function checkPalindrome (str) {
//     const trimmed = str.trim().replace(/\s/g, '');

//     console.log(trimmed)
//     const flippedStr = trimmed
//                        .split("")
//                        .reverse()
//                        .join("")
//     return flippedStr.toLowerCase() === trimmed.toLowerCase()
//  }

//function greaterNum

// console.log(greaterNum(332, 2))

// function helloWorld (lang) {
//     if (lang == "fr") {
//         return('Bonjour tout le monde')
//     } else if (lang == "es") {
//         return("Hola, Mundo")
//     } else{
//         return("Hello, World")
//     }
// }

// console.log(helloWorld('en'))

// grade = 60

// if (testScore >= 90){
//     grade
// }

// Practice coding here
// hackerrank
// v Code
// code Wars
// solo learn

// function greaterNum(num1, num2) {
//   if (num1 > num2) {
//     return num1;
//   } else {
//     return num2;
//   }
// }

// console.log(greaterNum(23, 5));

// let customerBanned = 0;
// let soup = "chicken noodle soup";
// let crackers = 0;
// let reply;

// if (customerBanned) {
//   reply = "No soup for you";
// } else if (soup && crackers) {
//   reply = `Yes you can have ${soup} and crackers`;
// } else if (soup) {
//   reply = `Yes you can have ${soup}`;
// } else {
//   reply = "No more soup";
// }

// console.log(reply);


//          HW

// //Use a while loop to increment count by 2 on each repetition of the block of code. Run the code block of your while loop until count is 8.
// let count = 2;
// // ADD CODE HERE
// while (count < 8){
//     console.log(count)
//     count++
// }
// // Uncomment these to check your work!
// console.log(count);



//FizzBuzz

//Challange 2 

// //Use a loop to iterate through the numbers 1 through 16. Push each number into fb, but push the string "fizz" in place of numbers divisible by 3, "buzz" in place of numbers divisible by 5, and "fizzbuzz" in place of numbers divisible by both 3 and 5.

// Log fb to the console to see the output.

// Hint: Check out the remainder/modulo operator: %.

// let fb = []

// for (let i = 1; i < 17; i++){
//     if (i % 3 === 0 && i % 5 === 0){
//         fb.push('fizzbuzz')
//     } else if (i % 3 === 0) {
//         fb.push("fizz")
//     } else if (i % 5 === 0) {
//         fb.push("buzz")
//     } else {
//         fb.push(i)
//     }

// }

// console.log(fb)


//CHALLENGE 3
// //Initialize a variable addThis to 0 and a variable sum to 0. Use a while loop to repeat a code block as long as addThis is less than 10. In the code block, add the value of addThis to sum, then increment addThis by 1. After the while loop runs, the value of sum should be the sum of the numbers 0 through 9.

// let addThis = 0;
// let sum = 0;
// while (addThis < 10) { 
//   addThis += sum;      
//   addThis++
// }

// console.log(sum)
