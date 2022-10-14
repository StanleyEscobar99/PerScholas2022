// EXERCISE 1: Write a Function Declaration
// Write a function named computeAreausing the function declaration approach.
// It will have two parameters: width& height.
// It will compute the area of a rectangle (width X height) and return a string in the following form:
// The area of a rectangle with a width of _ and a height of _ is ___ square units.
// Invoke the function to test it.

//1.


//For this problem we had to find the Area of the rectangle 
//We made a function called "compute area" which would take 2 parameters (width, height)
// then we made a variable "squareUnits" that varieable equaled width * height 
// after that we consoloe.log a "string" added the variebale to it
//after that we called on function and input 2 parameters(2, 4)

// function computeArea(width, height) {      
//     let squareUnits = width * height;
//         console.log("The area of the rectangel with a width of " + (width) + " and a height of " + (height) +" is " + squareUnits +" square units.");;
//   }
  
// computeArea(2, 4)




// EXERCISE 2: Write a Function Expression
// Write a function named planetHasWaterusing the function expression syntax.
// It will have one parameter: planet.
// Return trueif the planetargument is either "Earth" or "Mars", otherwise return false.
// Bonus points if you ensure the function will work regardless of the casing of the planetbeing passed in ('earth', 'MARS', etc.).
// Invoke the function a couple of times to test it!

//  Notes 
//We had to write a function named planetHasWaterusing in in the form of a function experession
//after we right the parameter it only has one parameter "planet"
// for this function we have to return a bolean (true) or (false)
//After we wrote the function we have to make sure this can return true if we input earth or mars
//so we wrote a if/else statement we used an absolute value "===" to determine if the 
// if the console.log had the response we were looking for we also used a or expression "||" to write 
//both mars and earth in a single if statement after we put the if statement we had to make sure the it would 
//return true so we used the built in key "return" to make sure that's the respone we got 
//for the else statement we left it blank because if the answer is anything else then it will return false.
//We decided to try to get the bonus points so we used the built in function ".toLowerCase" to make sure no matter what case
//(upper case, lower case, randomly cased) the answer will always return true 

//2.

// const planetHasWaterusing = (planet) => {
//     if(planet.toLowerCase() === 'earth' || planet.toLowerCase() === 'mars') {
//         return true
//     } else {
//         return false
//     }
// }

// console.log(planetHasWaterusing("Earth"))

// FUNCTION REVIEW QUESTIONS
// ❓ How many different ways are there to define a function?
// 2 ways function espression & function declaration

// ❓ What's the only practical difference between a function definition and a function expression?
// function declaration is going to be hoisted and function expression is going to stay in that place

