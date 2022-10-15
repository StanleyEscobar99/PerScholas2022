//======================Functions================

//A block of code enclosed in braces {} Is ised when lines of code are being used 
//multiple times throughout the program That block is declared as function using the 
//the right keyword

//If your goal was to add different combinations of two outputs of four variables 
//x, y, z, w and add 3. one way is to add variables and add 3 every time it’s required.

//function add

// function add(x,y,z,w){
//     return (x+y+z+w)+3;
//     }
    
// console.log(add(4,5,6,7))

//Making a function for adding 2 numbers

// function addition (x, y) {
//     let sum = x + y
//     console.log(sum)
// }

// addition(5, 10)


//==============Function Parameters:

// When a function is written, variables used in the definitions are the parameters. 
//x and y are the parameters in the following example
// //function (x,y){
//     console.log(x)
// }


//===============Function Arguments
// when a function is called, data that is passed to the function is the argument or 
// arguments if I call the addition function for 6 and 8 like this addition 
// (6, 8) 6 and 8 are the arguments.


//=================Exercise:

//1.
//Write a function that adds three numbers in

// function addThreeNums (x, y, z) {
//     return x + y + z
// }



//2.
//Write a function that adds three number and divide the result by 3

// const addAndDivide = (x, y, z) => {
//   return (x + y + z) / 3;
// };

// console.log(addAndDivide(3, 6, 9));


//=====================================

//=================SCOPE=================

//Scope Global

// Global scope of a variable, or Global variables are the variables declared in the 
// program so that they can be accessed any time in any function.

//Example Variable named global can be used inside the function

// let global = 10

// function fun() {
//     let global = 3
//
// }

//Scope Local

//Local variables can not be accessed outside of the function they are declared in.
// Example Variable named local cannot be accessed outside the function
// function fun() {
//     let local = 3
//
// }


//=================================




// Many Arguments

// const spreadArgs = (...args) => {
//     console.log(args)
// }

// spreadArgs(1,2,3,4,"cheese", 79)


// const addSumOfArgs = (...args) => {
//     let base = 0
//     args.forEach((num) => {
//         base += num
//     })
//     return base / args.length
// }

// console.log(addSumOfArgs(2,23,31,32,23))



// //function definition
// const sum = (num1, num2) =>{
//     return (num1 + num2)
// }

// const difference = (num1, num2) => {
//     return (num1 - num2)
// }

// //add two numbers, the subtract a thrid from that answer
// const addThenSubtract = (x, y, z) => {
//     console.log('in addThenSubtract and x, y, and z are: ')
//     console.log(x)
//     console.log(y)
//     console.log(z)
//     // x + y = sum1
//     let sum1 = sum(x, y)
//     // su1 - z - answer
//     let answer = difference(sum1, z)
//     return answer
// }



// // let answer2 = difference(10, 3)
// // console.log(answer2)


// // let answer = sum(2, 3)
// // console.log(answer)

// let example = addThenSubtract(10, 20, 15)
// console.log('This is the final answer')
// console.log(example)






// Christina example
// function definition
// const sum = (num1, num2) => {
//     console.log('in sum and num1 and num2 are:')
//     console.log(num1)
//     console.log(num2)
//     return (num1 + num2)
// }

// const difference = (num1, num2) => {
//     console.log('in difference and num1 and num2 are:')
//     console.log(num1)
//     console.log(num2)
//     return (num1 - num2)
// }

// add two numbers, then subtract a third from that answer
// const addThenSubtract = (x, y, z) => {
//     console.log('in addThenSubtract and x, y, and z are: ')
//     console.log(x)
//     console.log(y)
//     console.log(z)
//     // x + y = sum1
//     let sum1 = sum(x, y)
//     // sum1 - z = answer
//     let answer = difference(sum1, z)
//     return answer
// }




// // let answer = sum(2, 3)
// // console.log(answer)

// // let answer2 = difference(10, 6)
// // console.log(answer2)

// let example = addThenSubtract(10, 20, 15)
// console.log('this is the final answer')
// console.log(example)

