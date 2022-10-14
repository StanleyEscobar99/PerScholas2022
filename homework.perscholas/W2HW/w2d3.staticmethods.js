// W2D3 HW: Static Methods and Properties
//There is only one Governor in the state, add static methods and properties you'd expect a Governor to have
//log the properties and test the methods (don't instantiate)


// class Governor {
//     static name = "Kathleen Hochul"
//     static preceded = "Andrew Cuomo"
//     static county = "Erie"

//     static polticalParty() {
//         console.log("Govenor is Democratic")
//     }

//     static isAlive (alive) {
//         if (alive === true)
//         console.log(`${this.name} is alive`)
//     }

// }

// Governor.polticalParty()
// Governor.isAlive(true)

// console.log(Governor)




//================================

// Think of three properties all people share, set them with the constructor
// Think of three methods all people share
// Create a PostalWorker class that inherits from person, add some methods
// Create a Chef class that inherits from person, add some methods
// Create 2 PostalWorkers and 2 Chefs, log them and test all their methods


// class People {
//     constructor(name, hairColor, age){
//     this.name = name 
//     this.hairColor = hairColor
//     this.age = age
// }
//     sleep () {
//         console.log("Zzzzz ... Zzzzzz")
//     }

//     eat () {
//         console.log("This food is good")
//     }

//     walk () {
//         console.log("I'm walking")
//     }

// }

// //Create a PostalWorker class that inherits from person, add some methods


// class PostalWorker extends People {
//     constructor (name, hairColor, age){
//     super(name, hairColor, age)
//     }

//     deliveringMail (){
//         console.log("I'm delivering Mail")
//     }

//     greet () {
//         console.log("Hey, how are you doing?")
//     }
// }

// //Create a Chef class that inherits from person, add some methods

// class Chef extends People {
//     constructor(name, hairColor, age){
//         super(name, hairColor, age)
//     }

//     cooking() {
//         console.log("I'm cooking an exquiste dish")
//     }

//     tasting () {
//         console.log("You got to taste the food before we serve it.")
//     }
// }


// // Create 2 PostalWorkers and 2 Chefs, log them and test all their methods

// const gregg = new PostalWorker("Gregg", "Black", "32")
// console.log(gregg)
// gregg.greet()
// gregg.deliveringMail()

// const odom = new PostalWorker("Odom", "Orange", "52")
// console.log(odom)
// odom.greet()
// odom.deliveringMail()

// const tom = new Chef("Tom", "Blonde", "43")
// console.log(tom)
// tom.tasting()
// tom.cooking()

// const frank = new Chef("Frank", "Red", "33")
// console.log(frank)
// frank.tasting()
// frank.cooking()
