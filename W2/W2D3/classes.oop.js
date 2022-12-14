// ====================================
//         OOP CLASSES
// ====================================

// Four pillars of OOP: Encapsulation, Inheritance, Abstaction, Polymorphism

// const createEnemy = (nameIs, healthIs, powerIs, staminaIs) => {
//     const newEnemy = {
//       name: nameIs,
//       health: healthIs,
//       power: powerIs,
//       stamina: staminaIs
//     }
//     return newEnemy
//   }
//   const createPlayer = (nameIs, healthIs, powerIs, staminaIs) => {
//     const newPlayer = {
//       name: nameIs,
//       health: healthIs,
//       power: powerIs,
//       stamina: staminaIs
//     }
//     return newPlayer
//   }

// //Create an enemy
// const ivana = createEnemy("Ivana", 10000, "Freeze Smile", 10000)

// console.log(ivana)

// //Create a play
// const anguel = createPlayer("Anguel", 20000, "Super Punch", 20000)

// console.log(anguel)

// Creating a class
// When creating names for our clasess, we use Pascal(always capatilize first letter) casing example ItemNumber
// Evrything in JS follows camelCase
// class Character {
//     sayGreeting () {
//         console.log("Hello World!")
//     }

//     sayGoodbye(){
//         console.log("Goodbye!")
//     }
// }

// const mina = new Character()
// const priyanka = new Character()

// // console.log(mina)
// // console.log(priyanka)

// // mina.sayGreeting()
// // priyanka.sayGreeting()

// mina.sayGoodbye()



// class Character {
//     constructor () {
//         this.legs = 2
//         this.arms = 2
//         this.eyes = "hazel"
//         this.hair = "gray"
//     } 
//         greet (otherCharacter) {
//         console.log('hi ' + otherCharacter + '!');
//       }

//         smite () {
//         console.log('I smite thee you vile person');
//       }
// }


// const mina = new Character()
// const priyanka = new Character()

// console.log(mina)


// class Character {
//     constructor (name, age, eyes, hair) {
//       this.legs = 2;
//       this.arms = 2;
//       this.name = name;
//       this.age = age;
//       this.eyes = eyes;
//       this.hair = hair;
//     }
//     greet (otherCharacter) {
//       console.log('hi ' + otherCharacter + '!');
//     }
//     smite () {
//       console.log('I smite thee you vile person');
//     }
//   }

//   const me = new Character('Cathy the Miraculous', 29, 'brown', 'locs of dark brown');
//   console.log(me);

// const mina = new Character()
// const priyanka = new Character()

// console.log(mina)


// class Character {
//     constructor(name, age, eyes, hair, lovesCats = false, lovesDogs) {
//         this.legs = 2;    //auto if i don't put them up here 
//         this.arms = 2;    //auto
//         this.name = name;
//         this.age = age;
//         this.eyes = eyes;
//         this.hair = hair;
//         this.lovesCats = lovesCats;
//         this.lovesDogs = lovesDogs || false;
//     }
//     greet(otherCharacter) {
//         console.log('hi ' + otherCharacter + '!');
//     }

//     setHair(hairColor){            //function to change hair color
//         this.hair = hairColor
//     }
//     smite() {
//         console.log('I smite thee you vile person');
//     }
// }

// const joel = new Character('Cathy the Miraculous', 29, 'brown', 'locs of dark brown', true, true);
// const stan = new Character('Arthur the Wavy', 32, 'brown', 'his waves be spinnin keep of the g for greatness');
// console.log(joel);
// console.log(stan);

// // =========ALTERING PROPERTIES OF AN INSTANCE ======
// stan.hair = "Red"

// console.log(stan)

// stan.setHair("Black")

// console.log(stan)

// ==================================================// ======= USING AN OBJECT TO INTERACT WITH OTHER OBJECTS =====

// ==============================
//           OOP CLASSES
// ==============================

// Four pillars of OOP: Encapsulation, Inheritance, Abstraction,Polymorphism
// freeCodeCamp: https://www.freecodecamp.org/news/four-pillars-of-object-oriented-programming/
// Encapsulation: https://www.sumologic.com/glossary/encapsulation/

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

// // Create an enemy
// const ivana = createEnemy('Ivana', 10000, 'Freeze Smile', 10000)
// const anguel = createPlayer('Anguel', 20000, 'Super Punch', 20000)

// console.log(ivana)
// console.log(anguel)

// Creating a class
// When creating names for our classes, we use PascalCase casing
// Everything in JS follows camelCase

// Superclass or parent class
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

// const mina = new Character()
// const priyanka = new Character()
// const cathy = new Character('Cathy the Miraculous', 29, 'brown', 'locs of dark brown', false);
// const stanley = new Character('Stanley the GOAT', 25, 'brown', 'green', false, false)

// console.log(mina)
// console.log(priyanka)
// console.log(cathy)

// mina.sayGreeting()
// priyanka.sayGreeting()

// mina.sayGoodbye()

// ===== ALTERING PROPERTIES OF AN INSTANCE =====
// cathy.hair = 'supernova red'

// // console.log('NEW CATHY BELOW')
// // console.log(cathy)

// // console.log('NEW PRIYANKA BELOW')
// priyanka.setHair('black')

// // console.log(priyanka)

// // ===== USING AN OBJECT TO INTERACT WITH OTHER OBJECTS =====
// // console.log(stanley)

// // Make Cathy say hi to Stanley
// // cathy.classyGreeting(stanley)

// // Make Stanely say hi to Cathy
// // stanley.classyGreeting(cathy)

// // ===== IF WE WERE TO MAKE A SUPERHERO CLASS NOT BEING DRY =====
// // DO NOT DO THIS!!!

// // class SuperHero {
// //     constructor(name, age, eyes, hair, lovesCats = true, lovesDogs) {
// //         this.legs = 2
// //         this.arms = 2
// //         this.name = name
// //         this.age = age
// //         this.eyes = eyes
// //         this.hair = hair
// //         this.lovesCats = lovesCats
// //         this.lovesDogs = lovesDogs || false
// //         this.superpowers = 'Mega Punch'
// //     }

// //     greet(otherCharacter) {
// //         console.log('hi ' + otherCharacter + '!')
// //     }

// //     classyGreeting(otherClassyCharacter) {
// //         console.log(`Greetings ${otherClassyCharacter.name}!`)
// //     }

// //     setHair(hairColor) {
// //         this.hair = hairColor
// //     }

// //     smite() {
// //         console.log('I smite thee you vile person')
// //     }
// // }

// // ===== INHERITANCE =====
// // What we actually want to do to get the same functionality and use DRY principle

// Subclass or child class
class SuperHero extends Character {
    // ReferenceError: Must call super constructor in derived class before accessing 'this' or returning from derived constructor
    // You will get this error above if you include a constructor method without including the super() that references back to the parent class
    constructor (name, age, eyes, hair) {
        super(name, age, eyes, hair)
        this.skills = [["thievery", "speed", "willpower"]]
    }

    fly() {
        console.log('Hey, I am flying...WOOO!')
    }

    // Method overriding: needs to be the exact same name of the method from the parent class
    greet(otherCharacter) {
        console.log(`Yo, ${otherCharacter}! My hair is ${this.hair}.`)
    }

    smite() {
        // We use the reserved keyword super to access our parent class
        super.smite()
        this.fly()
    }
}

const julia = new SuperHero('Julia', 25, 'brown', 'blonde')
console.log(julia)

julia.fly()
console.log(julia.legs)

// Can we access fly() using an instance of the parent class?
// stanley is an instance of Parent class so we don't have access to the fly() that lives inside SuperHero class.
// stanley.fly()

// ===== POLYMORPHISM =====
// Method overriding is a run-time polymorphism. It helps to increase the readability of the program. It is used to grant the specific implementation of the method which is already provided by its parent class or superclass

// Without method overriding
// julia.greet('Marcus')

// method override
// julia.greet('Serjay')

// An example
/* 
class Animal
-> makeNoise() -> "RAWR"

class Dog extends Animal
-> makeNoise() -> 'Woof Woof!'

class Cat extends Animal
-> makeNoise() -> 'Meow!'
*/

// ==== CALLING THE PARENT CLASS FROM THE CHILD CLASS =====
// julia.smite()

// console.log(julia)

// julia.greet('Marcus')

//exercise

class Villian extends Character {
    constructor (name, age, eyes, hair) {
        super(name, age, eyes, hair)
        this.powerIs = ["Time Travel to any date in the calendar year", "Immortal"]
    }  timeTraveling() {
        console.log(`I'm time traveling bye ${this.timeTraveling}`)
    }
}

class Nemesis extends Character {
    constructor (name, age, eyes, hair) {
        super(name, age, eyes, hair)
        this.powerIs = ["Time travel", "Immortal"]
    }  timeTraveling() {
        console.log(`I'm time traveling bye ${this.timeTraveling}`)
    }
}


const calenderMan = new Villian("Calendar Man", 2022, "Red", "Black",)

calenderMan.lovesCats = false
calenderMan.timeTraveling()

console.log(calenderMan)


const timeKeeper = new Nemesis("Time Keeper", "14 billion years old", "Black", "Bold")


console.log(timeKeeper)