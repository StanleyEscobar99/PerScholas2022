// Functions

// function addition (x, y) {
//     let sum = x + y
//     console.log(sum)
// }

// addition(5, 10)

// Many Arguments

// const spreadArgs = (...args) => {
//     console.log(args)
// }

// spreadArgs(1,2,3,4,"cheese", 79)

// Exercise:

// function addThreeNums (x, y, z) {
//     return x + y + z
// }

// const sum = addThreeNums(32, 1, 2)

// console.log(sum)

//Exercise ES5


// const addAndDivide = (x, y, z) => {
//   return (x + y + z) / 3;
// };

// console.log(addAndDivide(3, 6, 9));

// const addSumOfArgs = (...args) => {
//     let base = 0
//     args.forEach((num) => {
//         base += num
//     })
//     return base / args.length
// }

// console.log(addSumOfArgs(2,23,31,32,23))


// let tracker = 0

// function printHelloWorld(str) {
//     console.log(str)
//     printName('Toby')
// }

// function printName (name) {
//     console.log(name)
//     console.trace("my first trace")
// }

// const increment = () => {
//     const avariable = "hello world"
    
//     tracker++



//     printHelloWorld(avariable)


// }



// increment()


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

