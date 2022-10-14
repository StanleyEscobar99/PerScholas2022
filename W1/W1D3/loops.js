// // Looops and arrays


// //String Concatinatioon
// // console.log("The movie " + movies[0] + " is awesome!")


//====================LOOPS===================

//======For Loop Structure

// //Statement 1 is executed before the loop (the code block) starts
// //Statement 2 defines the condition for running the loop (the code block)
// //Statement 3 is executed each time after the loop (the code block) has been executed.
// //This for loop iterates from 0 to 9


// for (let i = 0; i < 10; i++) {
//   console.log(i)
// }


// //Replace let with const
// //This will throw error

// // for (const i = 0; i < 10; i++) {
// //   console.log(i)
// // }



//========================Exercise For Loops================
//==========Exercise 1

//1. Write a for loop that counts down from 10 to 1.

// for (let i = 10; i > 0; i--){
//   console.log(i)
// }


//==========Exercise 2

//2a. Write a for loop for the given output: 1, 3, 5, 7, 9

// for (let i = 1; i <= 10; i+=2) {
//   console.log(i)
// }


//2b. Write a for loop for the given output: 2, 4, 6, 8, 10

// for (let i = 2; i <= 10; i+=2) {
//   console.log(i)
// }


//===========Exercise 3

//3.create a loop that outputs multiples of 3 starting at 6 ending at 60.

// for (let i = 6; i <= 60; i = i + 3) {
//   console.log(i)
// }


//===========Exercise 4
//4. Write a for loop for the given output:

// let str = ""

// for (let i = 0; i < 7; i++){
//   // str = str + "#"
//   str += "#"
//   console.log(str)
// }




//==========================Remainder Operator-%============

//The remainder operator (also known as modulo) returns the remainder 
//left over when one operand is divided by a second operand. 
//It always takes the sign of the dividend.

// 4 % 3
// returns 1
// 20 % 2
// returns 0
// 20 % 9
// returns 2

//===========Exercise 5

// Print even numbers
// Using the remainder % operator, write a for loop that iterates between 0 and 10 
//and prints all even numbers.

// 5.
// for (let i = 0; i <= 10; i++) {
//   if(i % 2 === 0) {
//     console.log(i)
//   } else {
//     console.log("odd")
//   }
// }

//=============Exercise 6

//Write a for loop that iterates from 1 - 20. Prints “prime” for all prime numbers, “even” for all even numbers, and “odd” for all odd numbers.

//Treat 2 as an even number and 1 & 3 as odd

//6.
// for (let i = 0; i <= 20; i++) {
//     if(i % 2 === 0) {
//       console.log("even" + i)
//     } else {
//       console.log("odd" + i)
//     }
//   }





//===========================Arrays============================

// There are two ways to create an array

//using a Class/Constructor Function (less common syntax)
//let nums = new Array(2, 4, 18);

// using Array Literal syntax (recommended best practice)
//let nums = [2, 4, 18];

//The best practice is to use the Array Literal syntax


//=======================Exercise Arrays===================

//============Exercise 7

//Create an array consisting of three of your favorite movies (strings) and 
//assign it to a variable named movies

//7
// let nums = [2 , 4, 18, 90, 45]

// let movies = ["50 First Dates", "Interstellar", "El Camino"]

//Accessing Elements in an Array

// // let firstMovie = movies[0]

//=======================

//==============Array functions

//We can add elements to the end of an array using the push method:

// // movies.push("Shawshank", "Toy Story")


//We can also add to the front of an array with unshift:

// // // Adds to beginning of array
// // movies.unshift("Star Wars")


//We can remove a single element from the end of an array using the pop method:
// // movies.pop()

//We can also remove from the front of an array with shift:
// // movies.shift()

//pop and shift only remove one element at a time and don't take any arguments

/*
The "longer" named methods do the same thing (add to an array)
unshift -> [...] <- push

The "shorter" named ones remove
shift <- [...] -> pop

*/

// // array.splice(start, deleteCount, newItem1, newItem2...)
// // movies.splice(1, 0, "Toy Story", "Lord Of Rings")

// // let removedMovies = movies.splice(0, 3)

// // console.log(movies)

//===========================



// // Iterate Over an Array w/ a For Loop

// for (let i = 0; i < movies.length; i++) {
//   console.log(movies[i])
// }


// // forEach Method
// // movies.forEach((movie, idx) => {
//     // console.log(movie + " is a great movie" + " and is at index " + idx)
// //     console.log(idx)
// // })


// // for (let movie of movies) {
// //     console.log(movie)
// // }

// // Spread Operator will take the element of the given array and spread them out.
// const movieCopy = [...movies]
// // console.log(movieCopy)

// let moreMovies = ["Spaceballs", "Alien", ...movies, "Armagedon"]
// // console.log(moreMovies)


// const movieStr = moreMovies.join()

// // console.log(movieStr)

// // SPLIT IS A STRING METHOD
// const anotherArray = movieStr.split(",")
// console.log(movieStr)
// console.log(anotherArray)




