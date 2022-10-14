/**
 * Function Continued
 */

//Things to remeber
// DRY- Don't Repeat Yourself
//Good input garbage in garbage out

// 2 ways to write a function

//Function Declaration
//function declarations will be hoisted to the top.


// function sayHello(name) {
//     console.log("Hello " + name + "!")
// }

// sayHello("Toby")

//Function Expression

// const sayHelloAgain = function (name) {
//     console.log("Hello " + name + "!")
// }

// sayHelloAgain("Stan")

//define name

// const sayHelloAgain = function (name) {
//     console.log(typeof name)
//     console.log("Hello " + name + "!")
// }

// sayHelloAgain("Stan")

// //How to make sure user puts a string
// const sayHelloAgain = function (name) {
//     if (typeof name !== "string" ) {
//         console.log("Input was not not a string, try again")
//         return
//     }
//     console.log("Hello " + name + "!")
// }

// sayHelloAgain(1)


//Arrow Functions

// both the same
// const add = (num1, num2) => num1 + num2

// const add = (num1, num2) => {
//     return num1 + num2
// }


// const add = (num1, num2, num3) => num1 + num2 + num3

// console.log(add(2, 12, 4))


// function areBothEven(n1, n2) {
//     return !(n1 % 2) && !(n2 % 2)
// }

// console.log(areBothEven(2, 6))


//How to make sure is not a string (|| = OR) we got to put OR also areBothEven is a built in function
// function areBothEven(n1, n2) {
//     if (typeof n1 !== "number" || n2 !== "number"){
//             console.log("Is not a number")
//         return
//     } else {
//         return !(n1 % 2) && !(n2 % 2)
// }
// }
// console.log(areBothEven(2, "mk"))

//0-falsey
//anything that isn't zero is-truthy
//"Stan" - truthy
// ""- falsey
//Example 

// 0 - falsey
// anything that isn't zero is truthy
// "christina" - truthy
// "" - falsey

// Example of truthy and falsey in a real scerniao
// const arr = []

// if (arr.length) {
//   console.log("I have elements!!")
// } else {
//   console.log("i'm empty:(")
// }


//Parameters/Arguments

//                     parameters
// function bottleCapper (bottle, cap) {
//     return bottle + cap
// }
//     //console.log(bottle) refrences error
// bottleCapper("green bottle (argument)", " white cap (argument)")


// //Spread Operator
// function getDevObject(myName,age, ...skills) {
//     console.log(skills)

//     return {
//         devName: myName,
//         age: age,
//         jobSkills: skills
//     }
// }

// console.log(getDevObject("Betty", 123, "awesome", "cool"))

// //          Objects
// //Key /value pairs
// const arr = [1,2,34,3]
// const person = {
//     name: "Stan",
//     job: "devloper",
//     isAwesome: true,
//     skills: ["coding", "something else"],
//     pet: {
//         name: "fido"
//     }
// }

// console.log(person.name)

// //How to get an object in an object
// console.log(person.pet.name)

// //How to reach into a specific array
// console.log(person.skills[1])

// //Objects in array
// const arrOfObj = [
//     {
//         username: "Stan",
//         email: "asdd@asd.com"
//     },
//     {
//         username: "Stan",
//         email: "asdd@asd.com"
//     },
//     {
//         username: "Stan",
//         email: "asdd@asd.com"
//     },
//     {
//         username: "Stan",
//         email: "asdd@asd.com"
//     }
// ]

// //How to access a object inside an array [].example
// console.log(arrOfObj[1].username)


//Default Parameters

// const bicycleObj = {
//     brand: "mongoose",
//     color: "red"
// }

// function setColor(bicycleObj2, newColor) {
//     bicycleObj2.color = newColor || "purple"
// }                   

// setColor(bicycleObj, "green")

// console.log(bicycleObj)


// //Functions as arguments 

// const a = ["red", "green", "green"]

// a.forEach(function(color){
//     console.log(color)
// })


//Questions
//What's the difference between an argument and a parameter?
//Parameters are the 'slots', the placeholders for
// inputs that the function should receive 
//                           vvvvvv
//function bottleCapper (bottle, cap) {
// return bottle + cap;
// bottleCapper( "green bottle", "white cap");
//                       arguments
//Arguments are the specific values
//of JS data types that we give those
//slots when we run a function


// const a = ["red", "green", "green"]



// a.forEach(function(color){
//     const a = color
//         console.log(a)
// })

//Scope

// const num = 4 //global scope

// function foo(x) {
//     const b = num * 4      //foo: local scopes x, b, bar

//     function bar(y) {
//         const c = y * b         //bar: local scopes y, c
//         return c
//     }

//     return bar(b)
// }

// console.log(foo(num))

//You can look out, but can't you can't look in!

//
// // Global Scope
// const num = 4

// function foo(x) {
//   // Function local scope
//   const  b= num * 4

//   function bar(y) {
//     const c = y * b
//     // foo1() this will give a reference error
//     return c
//   }
//   // even though on same level of scope, you cannot share variables
//   function foo1 () {
//     console.log(c)
//   }


//   return bar(b);
// }

//IFFE
// (() => {
//     console.log("I was ran immediatly")
// })()

// Block Scope

// function varTest() {
//     var x = 10;
//     if (true) {
//         var x = 20;  // same variable!
//         console.log(x);  // 2
//     }
//     console.log(x);  // 2
// }



// varTest()

// function letTest() {
//     let x = 1;
//     if (true) {
//         let x = 2;  // different variable
//         console.log(x);  // 2
//     }
//     console.log(x);  // 1
// }

// letTest()


// let countDown = 10;
// console.log(countDown)
// for (let i = 1; i <= 10; i++){
// 	countDown--
// }

// console.log(countDown)

//
function declarations () {

}