//Objects are key value pairs


//          Christina notes
// // Everything is an object, even functions
// // know the difference between arrays and objects

// // key (always a string): value (any type) pair
// // if you do this, then each of the keys has an undefined value and it will cause an error
// // const car = {
// //     make, 
// //     model,
// //     color,
// //     year
// // }
// // console.log(car)

// // unless you have a good reason to, it's best to assign the values to the keys 
// const car = {
//     make: "BMW", 
//     model: "M3",
//     color: "Black",
//     year: "2026"
// }
// // the below console log shows the entire car object
// console.log(car)


// // to access the data in an object, we use dot notation
// // this will show "BMW"
// console.log(car.make)
// // using interpolation
// console.log(`the car's make is: ${car.make}`)
// // this will show 2026
// console.log(car.year)

// // Can we access the keys?
// // yes, by using the Object method Object.keys()
// console.log(Object.keys(car))

// // you can change a value by reassigning the key 
// car.color = "white"
// console.log(car)

// // ALL keys must be unique, otherwise the value of the key will be overwritten by the most recent assignment

// // // to delete a key, you can use delete
// delete car.doors
// console.log(car)

// ----------------------
//      IF YOU HAVE AN ERROR
// ----------------------
///  I added a method into the object above
//  if you have an error using drive, make sure you updated that

// don't forget to use the () in order to invoke the method
// there are updates in the notes above regarding changing the hardcoded string
// there are important notes regarding template literal interpolation and this.
//
// car.drive()

// to illustrate the difference between using car.make and this.make 
// create a new object carOne
// ** notice that we are using the function key word and not an arrow function
// const carOne = {
//     make: "BMW", 
//     model: "M3",
//     color: "Black", 
//     year: "2026",
//     drive: function () { 
//         console.log("the " + this.make + " is driving")
//     } 
// }

// // carOne.drive()

// const carTwo = {
//     make: "BMW", 
//     model: "M3",
//     color: "Black",
//     year: "2026",
//     drive: function () { 
//         console.log("the " + this.make + " is driving")
//     } ,
//     owners: ["Bob", "Sally", "Sue"]
// }

// // if i want to access carTwo's owner Sally, then i need to access the object, then the key that is the array
// // i know that arrays have indices so i will access the index that corresponds to Sally
// console.log(carTwo.owners[1])


//My Notes

// const car = {
//     make: "BMW",
//     model: "M3",
//     color: "Black",
//     year: "2026"
// }
// //even if a number pout it string if it wont ever change if it will change leave it as a number


// console.log(car)
// // too acces data in an object, we use dot notation

// console.log(car.make)
// console.log(car.year)

// //how to add key to object outsid of it
// car.doors = "2"

// console.log(car)

// //How to reassign a value 
// car.color="White"
// console.log(car)
//How to delete keys 

// delete car.color
// console.log(car)


//  Adding Functions 

// const car = {
//     make: "BMW",
//     model: "M3",
//     color: "Black",
//     year: "2026",
//     drive: ()=>{          //how to call on a key in function
//         console.log(`the ${car.make} is driving`)
//     }
// }

// car.drive()

// //Hot to make THIS work with Function not arrow function
// const carOne = {
//     make: "BMW",
//     model: "M3",
//     color: "Black",
//     year: "2026",
//     drive: function() {      //how to call on a key in function
//         console.log(`the ${this.make} is driving`)
//     }
// }

// carOne.drive()

//Arryas in Object
// const carOne = {
//     make: "BMW",
//     model: "M3",
//     color: "Black",
//     year: "2026",
//     drive: function() {      //how to call on a key in function
//         console.log(`the ${this.make} is driving`)
//     },
//     owners: ["Bob", "Sally", "Sue"]
// }
//How to call it
// console.log(carOne.owners[1])