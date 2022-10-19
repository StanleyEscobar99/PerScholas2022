//A. Q+A===========================

//1. How do we assign a value to a variable?

//We assing a value to a variable by using the equal operator "="
//EXAMPLE 
//let breakfast = 5

//===================


//2.How do we change the value of a variable?

//We change the value of a variable by calling on the variable again
//using the equal operator again
//EXAMPLE
//breakfast = 9


//===================

//3.How do we assign an existing variable to a new variable?

//We assign an existing variable to a new variable by calling on the 
//variable again


//===================

//4.Remind me, what are declare, assign, and define?

//Declaring is given a variable a name to be called upon.
//Assigning is given a variable a value using "=" operator 
//Defining is where you want to put it.

//===================

//5.What is pseudocoding and why should you do it?
//Pseudocoding is basically breaking down your code into simple terms of 
//what you want to do in a simplified form.


//6.What percentage of time should be spent thinking about how you're going 
//to solve a problem vs actually typing in code to solve it?

//I believe it's falls in the middle 50/50 for me atleast




//=======================B.Strings============================

//1.Create a variable called firstVariable

//let firstVariable;


//===================


//2.Assign it the value of the string "Hello World"

// let firstVariable = "Hello World"


//===================



//3. Change the value of this variable to some number

// firstVariable = 1



//===================



//4.Store the value of firstVariable in a new variable called secondVariable

// let secondVariable = firstVariable



//===================





//5.Change the value of secondVariable to any string.

// secondVariable = "Hello"



//===================





//6.What is the value of firstVariable?

// 1



//===================



//7.Create a variable called yourName and set it equal to your name 
//as a string. Then, write an expression that takes the string 
//"Hello, my name is " and the variable yourName so that it returns 
//a new string with them concatenated.

// let yourName = "Stan"

// console.log("Hello, my name is " + yourName + ".")







//================Booleans==================

//Using the provided variable definitions, replace the blanks so that all log statements print true in the console. Answers should be all be valid JS syntax and not weird things that don't make sense but happen to print true to the console


// const a = 4;
//   const b = 53;
//   const c = 57;
//   const d = 16;
//   const e = 'Kevin';

//   console.log(a < b);
//   console.log(c > d);
//   console.log('Name' === 'Name');



// //   // FOR THE NEXT TWO, USE ONLY && OR ||
//   console.log(true || false);
//   console.log(false && false && false && false && false || true);
//   console.log(false === false)
//   console.log(e == 'Kevin');
//   console.log(a + b == c); // note: a < b < c is NOT CORRECT (and is not a valid JS expression, think about using other math operations)
//   console.log(a * a == d); // note: the answer is a simple arithmetic equation, not something "weird"
//   console.log(48 == '48');








//===================D. The farm===================

// Declare a variable animal. Set it to be either "cow" or something else
// Write code that will print out "mooooo" if the it is equal to cow
// Change your code so that if the variable animal is anything other than a cow, it will print "Hey! You're not a cow."
// Commit


// let animal = "cow"

// if (animal === "cow") {
//     console.log("moooooo")
// } else {
//     console.log("Hey! Your not a cow")
// }








//=====================E. Driver's Ed==================

// Make a variable that holds a person's age; be semantic
// Write code that will print out "Here are the keys!", if the age is 16 years or older, or, if the age is younger than 16, a message should print "Sorry, you're too young."

// let age = 144
// if (age >= 16){
//     console.log("Here are the keys!")
// } else {
//     console.log("Sorry you're too young")
// }








//==================FOR LOOPS================


//A. The basics

//Write a loop that will print out all the numbers from 0 to 10, inclusive

// for (let i = 0; i <= 10; i++) {
//     console.log(i)
// }



//==================



//Write a loop that will print out all the numbers from 10 up to and including 400


// for (let i = 10; i <= 400; i++){
//     console.log(i)
// }



//==================



//Write a loop that will print out every third number starting with 12 and going no higher than 4000

// for (let i = 12; i <=4000; i+=3){
//     console.log(i)
// }





//=============B. Get even ==================

//Print out the numbers that are within the range of 1 - 100

// for (let i = 1; i <= 100; i++){
//     console.log(i)
// }



//================


//Adjust your code to add a message next to even numbers only that says: "<-- is an even number"

// for (let i =1; i <= 100; i++) {
//     if (i % 2 == 0 ){
//         console.log(i +"<-- is a even number")
//     } else {
//         console.log(i)
//     }
// }


//======================



//C. Give me Five

//For the numbers 0 - 100, print out "I found a number. High five!" if the number is a multiple of five


// for (let i = 0; i <= 100; i++) {
//     if (i % 5 === 0){
//         console.log("I found a " + i + ". High five!")
//     } else {
//         console.log(i)
//     }
// }



//========================




//Add to the code from above to print out "I found a number. Three is a crowd" if the number is a multiple of three


// for(let i = 0; i <= 100; i++){
//     if(i % 5 === 0 && i % 3 === 0 ){
//         console.log(`I found a ${i}. High five! Three is a crowd`)
//     } else if (i % 3 == 0){
//         console.log(`I found a ${i}. Three is a crowd`)
//     } else if(i % 5 == 0){
//         console.log(`I found a ${i}. High five!`)
//     }
// }



//=====================



//D. Savings account

//Write code that will save the sum of all the numbers between 1 - 10 to a variable called bank_account.
//Check your work! Your bank_account should have $55 in it.

// let bank_account = 0

// for (let i = 0; i <= 10; i++){
//     bank_account += i
// }

// console.log(bank_account)



//======================




//You got a bonus! Your pay is now doubled each week. Write code that will save the sum of all the 
//numbers between 1 - 100 multiplied by 2.
//Check your work! Your bank_account should have $10,100 in it.

// for (let i = 0; i<=100; i+2){  
//         bank_account += i * 2
// }
// console.log(bank_account)

// let bank_account = 0

// for (let i = 0; i<=100; i++){  
//     bank_account += i * 2
// }
// console.log(bank_account)







//============III. Arrays & Control flow===================

//1.What are the things in an array called?

//The things in an array are called elements





//===================




//2. Do Arrays guarantee those things will be in order?

//No because you can swith the order, using built in functions


//===================



//3.What real-life thing could you model with an array?

//Basically anything because array take any data type.



// =========================B. Easy Does It================

//Create an array that contains three quotes and store it in a variable called quotes


// const arr = ["You can do it", "Teamwork makes Dream work", "I can and I will"]

// let quotes = arr

// console.log(quotes)





// //============C. Accessing elements====================

// //Given the following array const randomThings = [1, 10, "Hello", true]

// const randomThings = [1, 10, "Hello", true]


//==============


// //How do you access the 1st element in the array?

// //To access the first element in the array 
// console.log(randomThings[0])


//=====================


// // Change the value of "Hello" to "World"

// randomThings[2] = "World"


//===================



// //Check the value of the array to make sure it updated the array. How? Why, yes! console.log();

// console.log(randomThings)




// //==================D. Change values======================

// //Given the following array const ourClass = ["Salty", "Zoom", "Sardine", "Slack", "Github"]
// const ourClass = ["Salty", "Zoom", "Sardine", "Slack", "Github"]


// //What would you write to access the 3rd element of the array?
// console.log(ourClass[3])

//=====================


// //Change the value of "Github" to "Octocat"
// ourClass[4] = "Octocat"

//====================


// //Add a new element, "Cloud City" to the array

// ourClass.push("Cloud City")

// console.log(ourClass)




//=================E. Mix It Up====================

// //Note: You don't really need .splice() for these. You could use it, but there are simpler array methods that are more appropriate.
// //Given the following array: const myArray = [5, 10, 500, 20]

// const myArray = [5, 10, 500, 20]

// //Add the string "Aegon" to the end of the array. Add another string of your choice to the end of the array.
// myArray.push("Aegon", "Cat")

// console.log(myArray)


//=================


// // Remove the 5 from the beginning of the array.
// myArray.shift()

// console.log(myArray)


//===================


// // Add the string "Bob Marley" to the beginning of the array.

// myArray.unshift("Bob Marley")

// console.log(myArray)


//====================


// // Remove the string of your choice from the end of the array.

// myArray.pop()

// console.log(myArray)


//=====================

// // Reverse this array using Array.prototype.reverse(). Did you mutate the array? What does mutate mean? Did the .reverse() method return anything?

// myArray.reverse()

// console.log(myArray)



//=====================


// //Did you mutate the array?
// //Yes

// //What does mutate mean? 
// //It changes the form an array

// //Did the .reverse() method return anything?
// //Yes it reversed the array




//================F. Biggie Smalls=================


//Create a variable that contains an integer.

//Write an if ... else statement that:

// console.log()s "little number" if the number is entered is less than 100
// console.log()s big number if the number is greater than or equal to 100.

// let num = 222

// if (num < 100){
//     console.log("Little Number")
// } else {
//     console.log("Big Number")
// }



// ===============G. Monkey in the Middle

// Write an if ... else if ... else statement:

// console.log() little number if the number entered is less than 5.

// let num = 10

// if (num < 5){
//     console.log("Little Number")
// } else if (num >= 10){
//     console.log("Big Number")
// } else {
//     console.log("monkey")
// }


// If the number entered is more than 10, log big number.
// Otherwise, log "monkey". 



// //=================H. What's in Your Closet?=============

// const kristynsCloset = [
//     "left shoe",
//     "cowboy boots",
//     "right sock",
//     "GA hoodie",
//     "green pants",
//     "yellow knit hat",
//     "marshmallow peeps"
//   ];

//   // Thom's closet is more complicated. Check out this nested data structure!!
//   const thomsCloset = [
//     [
//       // These are Thom's shirts
//       "grey button-up",
//       "dark grey button-up",
//       "light blue button-up",
//       "blue button-up",
//     ],[
//       // These are Thom's pants
//       "grey jeans",
//       "jeans",
//       "PJs"
//     ],[
//       // Thom's accessories
//       "wool mittens",
//       "wool scarf",
//       "raybans"
//     ]
//   ];

// //What's Kristyn wearing today? Using bracket notation to access items in 
// //kristynsCloset, log the sentence "Kristyn is rocking that " + the third item in
// // Kristyn's closet + " today!" to the console.

// console.log("Kristyn is rocking that " + kristynsCloset[2] + " today!")

// //Kristyn just bought some sweet shades! Add "raybans" to her closet after "yellow knit hat".


// kristynsCloset.splice(6, 0, "raybans")

// console.log(kristynsCloset)


// //Kristyn spilled coffee on her hat... modify this item to read "stained knit hat" instead of yellow.

// kristynsCloset[5] = "stained knit hat"
// console.log(kristynsCloset)

// //Put together an outfit for Thom! Using bracket notation, access the first element in Thom's shirts array.
// console.log(thomsCloset[0][0])


// //In the same way, access one item from Thom's pants array.
// console.log(thomsCloset[1][1])


// //Access one item from Thom's accessories array.
// console.log(thomsCloset[2][1])

// //Log a sentence about what Thom's wearing. Example: "Thom is looking fierce in a grey button-up, jeans and wool scarf!"

// console.log("Thom is looking fierce in a " + thomsCloset[0][0] + ", " + thomsCloset[1][1] + " and " + thomsCloset[2][1] + "!")

// //Get more specific about what kind of PJs Thom's wearing this winter. Modify the name of his PJ pants to Footie Pajamas.

// thomsCloset[1][2] = "Footie Pajamas"

// console.log(thomsCloset[1][2])


//======================IV. Functions======================

//=================A
// Do you think you could write a function called printGreeting with a parameter name that returns a greeting with the argument interpolated into the greeting?

// function printGreeting(name) {
//     console.log ("Hello there " + name)
// }

// printGreeting("Stan")



//==================B
// Write a function printCool that accepts one parameter, name as an argument. 
//The function should print the name and a message saying that that person is cool.

// function printCool(name) {
//     console.log(name + " is cool.")
// }

// printCool("Stan")


//=================C
//Write a function calculateCube that takes a single number and prints the 
//volume of a cube made from that number.


// function calculateCube (num) {
//     console.log(num *= num * num)
// }

// calculateCube(5)


//=================D
//Write a function isVowel that takes a character (i.e. a string of length 1) and 
//returns true if it is a vowel, false otherwise. The vowel could be upper or lower 
//case. Test your function on every vowel and make sure it's working. In general, when 
//you write functions, take a minute to test them with different values to make sure 
//they behave the way you want.


// let vowel = "aeiouAEIOU"

// function isVowel(char) {
//     for (let i = 0; i < vowel.length; i++) {
//         if (char.toLowerCase() == vowel[i]) {
//             return true
//         }
//     }
//     return false
// }
//     console.log(isVowel("u"))


// ============E. getTwoLengths
// Write a function getTwoLengths that accepts two parameters (strings). 
//The function should return an array of numbers where each number is the
// length of the corresponding string.

// let string = []

// function getTwoLengths (str1, str2){
//     string.push(str1.length, str2.length)
//     return string
// }

// console.log(getTwoLengths("Hello", "Hi"))


//=========F. getMultipleLengths

// Write a function getMultipleLengths that accepts a single parameter as 
//an argument: an array of strings. The function should return 
//an array of numbers where each number is the length of the corresponding string.


// let multiple = []

// function getMultipleLengths (arr) {
//     arr.forEach((str) => {
//         multiple.push(str.length)
//     })
//     return multiple
// }

// console.log(getMultipleLengths(["Stan", "ABC", "ABCDE"]))






//================G.maxOfThree
// Define a function maxOfThree that takes three numbers as arguments 
//and returns the largest of them. If all numbers are the same, it doesn't 
//matter which one is returned. If the two largest numbers are the same, 
//one of them should be returned. Be sure to test it with larger values in 
//each of the three locations.


// function maxOfThree(num1,num2,num3) {
//     if (num1 > num2) {       
//         return num1;
//     } else if (num2 > num3) {
//         return num2
//     } else {
//         return num3
//     }
// }
// console.log(maxOfThree(333,33,3))



//===================H. printLongestWord
//Write a function printLongestWord that accepts a single argument, 
//an array of strings. The method should return the longest word in the array. 
//In case of a tie, the method should return the word that appears first in the array.


// function printLongestWord (array) {
//     let longest = array[0]
//     let longestWordNum = array[0].length
    
//     for (let i = 0; i <array.length; i++) {
//         if (longestWordNum < array[i].length)
//         longest = array[i]
//         longestWordNum = array[i].length
//     }
//     return longest
// }

// console.log(printLongestWord(["a", "abc", "abcd", "abcde"]))


//=====================Objects===================

//      A. Make a user object
// Create an object called user.
// Write in to the object the key-value pairs for name, email, age, 
//and purchased. Set the value of purchased to an empty array []. 
//Set the other values to whatever you would like.

// const user = {
//     name: "Stan",
//     email: "abc@gmail.com",
//     age: 23,
//     purchased: []

// }




//       B. Update the user

//Our user has changed his or her email address. Without changing the original userobject, update the emailvalue to a new email address.

// user.email = "123@gmail.com"

// console.log(user)



//Our user has had a birthday! Without changing the original userobject, increment the agevalue using the postfix operator. Hint: age++

// user.age++

// console.log(user.age)


//          C. Adding keys and values
// You have decided to add your user's location to the data that you want to collect.
// Without changing the original userobject, add a new key location to the object, and give it a value or some-or-other location (a string).


// user.location = "New York"

//          D. Shopaholic!
// Our user has purchased an item! They have purchased some "carbohydrates". Using .push(), add the string "carbohydrates" to the purchasedarray.

// Our user has purchased an item! They have purchased some "peace of mind". Using .push(), add the string "peace of mind" to the purchasedarray.

// Our user has purchased an item! They have purchased some "Merino jodhpurs". Using .push(), add the string "Merino jodhpurs" to the purchasedarray.

// user.purchased.push("carbohydrates", "peace of mind", "Merino jodhpurs")

// Console.log just the "Merino jodhpurs" from the purchasedarray.

// console.log(user.purchased[2])



//          E. Object-within-object



//Write a friend object into your userobject and give the friend a name, age, location, and purchased array (empty for now)

// user.friend = {
//     name: "Jose",
//     age: 24,
//     location: "New York",
//     purchased: []
// }


// Console.log just the friend's name

// console.log(user.friend.name)

// // Console.log just the friend's location

// console.log(user.friend.location)

// // CHANGE the friend's age to 55

// user.friend.age = 55
// console.log(user.friend.age)

// The friendhas purchased "The One Ring". Use .push()to add "The One Ring" to the friend's purchasedarray.

// user.friend.purchased.push("The One Ring")
// console.log(user.friend.purchased)

// // The friendhas purchased "A latte". Use .push()to add "A latte" to the friend's purchasedarray.

// user.friend.purchased.push("A latte")
// console.log(user.friend.purchased)

// // Console.log just "A latte" from the friend's purchasedarray.

// console.log(user.friend.purchased[1])



//          F. Loops

// Write a for loop that iterates over the User's purchased array (NOT the friend's purchased array), 
//and prints each element to the console.

// function userList (arr) {
//     arr.purchased.forEach ((x) => {
//         console.log(x)
//     })
// }

// console.log(user.purchased)

// //Write a for loop that iterates over the Friend's purchasedarray, and prints each element to the console.

// function friendList (arr) {
//     arr.friend.purchased.forEach ((z) => {
//         console.log(z)
//     })
// }

// console.log(user.friend.purchased)





//=================G. Functions can operate on objects
//Write a single function updateUserthat takes no parameters. 
//When the function is run, it should:


//it should increment the user's age by 1

//make the user's name uppercase


//The function does not need a return statement, it will merely modify the user object.


// function updateUserthat () {
//     user.age++
//     user.name = user.name.toUpperCase()
// }

// updateUserthat()
// console.log(user)


//Write a function oldAndLoudthat performs the exact same tasks as updateUser, 
//but instead of hard-coding it to only work on our userobject, make it take 
//a parameter person, and have it modify the object that is passed in as an 
//argument when the function is called. Call your oldAndLoudfunction with 
//useras the argument.

// function oldAndLoudfunction (person) {
//     person.age++
//     person.name = person.name.toUpperCase()
// }

// oldAndLoudfunction(user)
// oldAndLoudfunction(user.friend)

// console.log(user)
// // console.log(user.friend)





//====================Cat Combinator=====================

//1.
// Define an object called cat1 that contains the following properties:
// name
// breed
// age (a number)
// console.log the cat's age
// console.log the cat's breed

// const cat1 = {
//     name: "Garfield",
//     breed: "Persian Tabby",
//     age: 44
//   }

// console.log(cat1.age)
// console.log(cat1.breed)



//2. Papa cat
// Define an object called cat2 that also contains the properties:
// name
// breed
// age (a number)

// const cat2 = {
//     name: "Nermal",
//     breed: "Ragdoll",
//     age: 43
//   }


//3. Combine Cats!
//The cats are multiplying!
  
//Write a function combineCatsthat has two parameters mama, and papa. The function will take two arguments -- each a cat object.
  
//Pass cat1 and cat2 as arguments to the combineCatsfunction. The function should console.log them.
  
// function combineCats(x, y) {
//     console.log(cat1, cat2)
// }

// combineCats()


// Make it so the combineCats function will return a combination of the two incoming cats

// The result should be an object wherein the

// name is a concatenation of the parents' names
// the age is 1
// the breed is each of the parents' breeds with a hyphen in between

// const combineCats = (cat1, cat2) => {
//     return {
//         name: `${cat1.name}${cat2.name}`,
//         age: 1,
//         breed: `${cat1.breed}-${cat2.breed}`
//     }
// }

// console.log(combineCats(cat1, cat2))


// 4. Cat brain bender
// If combineCatsreturns an object, and if combineCatstakes objects as arguments, then it stands to reason that:

// catCombinatorcan use itself as its own argument.

// Take a second to stew on that . . .

// What is the result of:

// console.log(combineCats(combineCats(cat1, cat2), combineCats(cat1, cat2)));
// Whoa . . .

// The above console.log is two levels deep of combineCats.

// Write a console.log that is three levels deep of combineCats. combineCats should have two arguments, each which are combineCats, each which have two arguments, each which are combineCats.
// Your output should look something 




// console.log(combineCats(combineCats(combineCats(cat1, cat2), combineCats(cat1, cat2)), combineCats(combineCats(cat1, cat2), combineCats(cat1, cat2))));

//======================================================================
