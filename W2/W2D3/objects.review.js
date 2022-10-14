// ====================================
//          OBEJECTS and ARRAYS
// ====================================

// Why should we write our objects with const?
// So we dont change the data type of the variable
// const arr = []
// const obj = {}

// const adventurer = {
// 	name: "Timothy",
// 	hitpoints: 10,
// 	belongings: ["sword", "potion", "Tums"]
// }

// //Access Timothy
// console.log(adventurer.name)

// // Access hitpoints 
// console.log(adventurer.hitpoints)

// // Print out "My name is Timthony. I have 99 Tums in my adventurer's bag"
// console.log(`My name ${adventurer.name} I have 99 ${adventurer.belongings[2]} in my adventurer's bag`)

// // Iterate over an array 
// for (let i=0; i < adventurer.belongings.length; i++) {
//     console.log(adventurer.belongings[i]);
// }

//==============USE AN OBJECT WITHIN AN OBJECT
const newAdventurer = {
    name: "Timothy",
    hitpoints: 10,
    belongings: ["sword", "potion", "Tums"],
    companion: {
        name: "Velma",
        type: "Bat"
    }
}

//Access compain obj
console.log(newAdventurer.companion)

//Access compain name
console.log(newAdventurer.companion.name)

//Access compain type
console.log(newAdventurer.companion.type)

//Access compain name type
console.log(newAdventurer.companion.name + " is a " + newAdventurer.companion.type)

//Access Tim's type

const newadventurer2 = {
    name: "Timothy",
    hitpoitns: 10,
    belongings: ["sword", "potion", "Tums"],
    companion: {
        name: "Velma",
        type: "Bat", 
        companion: { 
            name: "Tim",
            type: "Parasite"
        }
    }
}

console.log(newadventurer2.companion.companion.type)

//Use an array within an object within an object within an object
const newAdventurer3 = {
    name: "Timothy",
    hitpoints: 10,
    belongings: ["sword", "potion", "Tums"],
    companion: {
        name: "Velme", 
        type: "Bat",
        companion: {
            name: "Tim",
            type: "Parasite",
            belongings: ["SCUBA Tank", "Rogan josh", "health insurance"]
        }
    }
}
console.log(newAdventurer3.companion.companion.belongings[2])


//=======ARRAY OF OBJECTS===========

const movies = [ 
    {title: "Tokyo Stort"}, 
    {title: "Paul Blart: Mall Cop"}, 
    {title: "L'Avventure"}
]

//Access the array L'Avventure
console.log(movies[2])

//Access: the title L'Avventura
console.log(movies[2].title)

//You could loop over the array and just print all of the titles:

for (let i=0; i < movies.length; i++) {
    console.log(movies[i].title)
}

// ==============COMBINE OBJECTS, ARRAYS, AND FUNCTIONS==============
const foo = {
    someObject: {
        someProperty: 'Oh, hai!'
    }
}

// Writing a method inside an object
// We call function inside objects methods
//If we write a method using an arrow function, we lose access to "this" keyword
//Avoid using arrow functions in objects
// use "this" key to access other keys in objects  
// 
console.log(foo.someObject.someProperty)

const bar = {
    name:'Stan',
    sayGreeting: function () {
        console.log(`Oh, goodbye ${this.name}`)
    }
}

bar.sayGreeting()

// //================================Christina Notes
      
// //  // =============================================================
// // //      OBJECTS and ARRAYS
// // // =============================================================

// // // Can we write an object using "let" and "var"
// // // We used const primarily yesterday?
// // // Why should we write our objects with const?  
// // // So that we don't reassign our object completely - or accidentally overwrite it
// // // const arr = []
// // // const obj = {}

// // // commenting this out because there is one lower down
// // const adventurer = {
// // 	name: "Timothy",
// // 	hitpoints: 10,
// // 	belongings: ["sword", "potion", "Tums"]
// // }

// // // Access Timothy and show on the screen
// // console.log(adventurer.name)

// // // Access hitpoints and show on screen
// // console.log(adventurer.hitpoints)

// // // Print out "My name is Timothy.  I have 99 Tums in my adventurer's bag."
// // // using string interpolation
// // console.log(`My name is ${adventurer.name}. I have 99 ${adventurer.belongings[2]} in my adventurer's bag.`)
// // // the other way to do this would be using concatenation
// // // uncomment to see that they are the same
// // // console.log("My name is " + adventurer.name + ". I have 99 " + adventurer.belongings[2] +" in my adventurer's bag.")

// // // Iterate over an array
// // // we are going to iterate over the length of the array so that we can see each of the
// // // belongings in the array
// // for (let i=0; i<adventurer.belongings.length; i++) {
// //     console.log(adventurer.belongings[i])
// // }


// // // ======= USE AN OBJECT WITHIN AN OBJECT ===========
// // // Using an object WITHIN an object

// // const newAdventurer = {
// // 	name: "Timothy",
// // 	hitpoints: 10,
// // 	belongings: ["sword", "potion", "Tums"],
// //     companion: {
// //         name: "Velma",
// //         type: "Bat",
// //         companion: {
// //             name: "Tim",
// //             type: "Parasite",
// //             belongings: ["SCUBA tank", "rogan josh", "health insurance"]
// //         }
// //     }
// // }

// // // Access the entire companion object
// // console.log(newAdventurer.companion)

// // // Access the name and the type seperately
// // console.log(newAdventurer.companion.name + " is a " + newAdventurer.companion.type)

// // // Access Tim's type
// // console.log(newAdventurer.companion.companion.type)

// // //  now we want an OBJECT in an OBJECT in an OBJECT
// // console.log(newAdventurer.companion.companion.belongings[2])



// // // ========== ARRAY OF OBJECTS ========== 
// // // these are anonymous objects becaus there is no name for each object
// // // but they can be accessed by using array indices
// // // notice that they are all formatted the same
// // const movies = [
// //     {title: "Tokyo Story"},
// //     {title: "Paul Blart: Mall Cop"},
// //     {title: "L'Avventura"}
// // ]

// // // access the title L'Aventura
// // console.log(movies[2].title)

// // // iterate over the movies array printing all the titles
// // for(let i=0; i < movies.length; i++) {
// //     console.log(movies[i].title)    
// // }

// // // ========== COMBINE OBJECTS, ARRAY, AND FUNCTIONS ========== 
// // const foo = {
// //     someObject: {
// //         someProperty: 'Oh, hai!'
// //     }
// // }
// // console.log(foo.someObject.someProperty)

// // // Writing a method inside an object
// // // We call functions inside object methods
// // const bar = {
// //     someMethod: () => {
// //         console.log('Oh, goodbye!', this)
// //     }
// // }

// // bar.someMethod()

// // // difference between bar and bar 2 is function declaration versus arrow function
// // const bar2 = {
// //     someMethod: function () {
// //         console.log('oh, goodbye!', this)
// //     }
// // }

// // bar2.someMethod()     


// //====================Christina Notes
// // ===============================================================
// //                      OOP CLASSES
// // ===============================================================

// // Some of this is review from yesterday, but there is a new focus
// // Four pillars of OOP
// // Encapsulation - when we create an object or class, we only want similar things inside, but also
// //      we try to contain things - like methods - related to that object or class inside
// // Inheritance
// // Abstraction
// // Polymorphism
// // freeCodeCamp: https://www.freecodecamp.org/news/four-pillars-of-object-oriented-programming/
// // Encapsulation: https://www.sumologic.com/glossary/encapsulation/

// // why do we even use classes?
// // so that we can create multiple copies of this that have the same structure and types 
// // of attributes
// // it helps to keep your code dry
// // 
// // be careful with what you hardcode into your applications

// // THESE ARE REGULAR FUNCTIONS
// // we are using these to demonstrate why why might use classes
// const createEnemy = (nameIs, healthIs, powerIs, staminaIs) => {
//     const newEnemy = {
//         name: nameIs,
//         health: healthIs,
//         power: powerIs,
//         stamina: staminaIs
//     }
//     return newEnemy
// }

// const createPlayer = (nameIs, healthIs, powerIs, staminaIs) => {
//     const newPlayer = {
//         name: nameIs,
//         health: healthIs,
//         power: powerIs,
//         stamina: staminaIs
//     }
//     return newPlayer
// }

// // create an enemy
// const ivana = createEnemy('Ivana', 10000, 'Freeze Smile', 10000)
// const anguel = createPlayer('Anguel', 20000, 'Super Punch', 20000)

// // console.log(ivana)
// // console.log(anguel)

// //  THIS /\ would get really redundant if you had a bunch of classes
// // if we use a class, then we would reuse some things and make our lives easier
// // Creating a class 
// // Capitalize the first letter of class name by convention
// // use PascalCase it is like camelCase but the very first letter is capitalized as well as the following first letters
// // normally we use cameCase

// // we started with this to show how we can use methods with classes and how they are reusable now
// // but also there is no explicit constructor in this on
// // class Character {
// //     sayGreeting() {
// //         console.log('Hello World!')
// //     }
// //     sayGoodbye() {
// //         console.log('Goodbye!')
// //     }
// // }

// // now we have a constructor which gives us an idea of what attributes do, can, or should exist
// // we can have defaults but we don't need them
// // be careful about trying to access attributes that you haven't defined, or given a value to

// // once we add a class that extends this one, this is
// // Superclass, or parent class
// class Character {
//     constructor(name, age, eyes, hair, lovesCats = true, lovesDogs) {
//         this.legs = 2
//         this.arms = 2
//         this.name = name
//         this.age = age
//         this.eyes = eyes
//         this.hair = hair
//         this.lovesCats = lovesCats
//         this.lovesDogs = lovesDogs || false
//     }

//     greet(otherCharacter) {
//         console.log('hi ' + otherCharacter + '!')
//     }

//     // we added this to show how we can have objects interact with other objects
//     // in the case we are using 'classy' to show how both objects are instances of this same class
//     classyGreeting(otherClassyCharacter) {
//         console.log(`Greetings ${otherClassyCharacter.name}!`)
//     }

//     setHair(hairColor) {
//         this.hair = hairColor
//     }

//     smite() {
//         console.log('I smite thee you vile person')
//     }
// }


// // when you create a new instance of the class, you don't NEED to pass in the attributes, 
// // BUT notice the difference when you don't
// // pay attention to the order that you pass things in
// const mina = new Character()
// const priyanka = new Character()
// const cathy = new Character('Cathy the Miraculous', 29, 'brown', 'locs of dark brown', false);

// // this illustrates how some things are set and others are undefined when nothing was passed into the constructor
// // this is because of the default values, look at the constructor and what is not undefined, and what those values are
// // console.log(mina)
// // console.log(priyanka)
// // console.log(cathy)

// // mina.sayGreeting()
// // priyanka.sayGreeting()

// // mina.sayGoodbye()
// // priyanka.sayGoodbye()


// // ===== ALTERING PROPERTIES OF AN INSTANCE =====
// // you CAN access and change a property explicitly
// cathy.hair = 'supernova red'

// // console.log('NEW CATHY BELOW')
// // console.log(cathy)


// // BUT you can also create a method to set the hair in the class
// // why would we do this?  it seems like more work...
// // we can add more to this method than in the assignment above
// //          like error checking, and output, maybe one property is dependent on another and they should change together
// //          
// // console.log('NEW PRIYANKA BELOW')
// priyanka.setHair('black')

// // console.log(priyanka)

// // now we want to show how we can have objects interact with other objects
// // we can have an object be an argument in a method
// const stanley = new Character('Stanley the GOAT', 25, 'brown', 'green', false, false)
// // console.log(stanley)

// // Make Cathy say hi to Stanley
// // we are invoking the classyGreeting and passing in the entire Stanley class object
// // cathy.classyGreeting(stanley)
// // stanley.classyGreeting(cathy)



// // ===== INHERITANCE =====
// // What we actually want to do to get the same functionality and use DRY principle

// //  Now we're going to talk about inheritance
// // inheritance is how we build up classes
// // so, for a different example, when we were talking about animals, if Animal is the parent class, 
// // we can have a Mammal class that has all of the properties of the Animal class
// // in this case, Animal is the parent class and Mammal is the child class
// // but we also way that Mammal extends Animal
// //  that means that Mammal has at least the properties and methods of Animal, but it could have more

// // subclass or child class
// class SuperHero extends Character {
//     // ReferenceError: Must call super constructor in derived class before accessing 'this' or returning 
//     // from derived constructor
//     // You will get the above error if you include a constructor method without including the super()
//     // that references back to the parent class
//     constructor (name, age, eyes, hair) {
//         super(name, age, eyes, hair)
//         this.skills = ['thievery', 'speed', 'willpower']
//     }

//     fly() {
//         console.log('Hey, I am flying...WOOO!')
//     }

//     // Method overriding: needs to be the exact same name of the method 
//     greet(otherCharacter) {
//         console.log('yo ' + otherCharacter + '!')
//     }

//     smite() {
//         // we use the reserved keyword super to access our parent class
//         super.smite()
//         this.fly()
//     }

// }

// const julia = new SuperHero("Julia", 25, 'brown', 'blonde')
// // console.log(julia)
// julia.fly()
// julia.greet('Marcus')

// // Can we access fly() using an instance of the parent class?
// // stanley is an instance of Parent class so we don't have access to the fly() that lives inside SuperHero class.
// // stanley.fly()

// // ===== POLYMORPHISM =====
// // Method overriding is a run-time polymorphism. It helps to increase the readability of the program. It is used 
// // to grant the specific implementation of the method which is already provided by its parent class or superclass

// // An example
// /* 
// class Animal
// -> makeNoise() -> "RAWR"

// class Dog extends Animal
// -> makeNoise() -> 'Woof Woof!'

// class Cat extends Animal
// -> makeNoise() -> 'Meow!'
// */

// // ===== CALLING THE PARENT CLASS INSIDE THE CHILD CLASS =====
// // julia.smite()

// console.log(julia)

// julia.greet('Marcus')