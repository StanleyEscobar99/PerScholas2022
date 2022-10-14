//Creating Classes & Factories

//Hamster

class Hamster {
    constructor(owner, name, price) {
        this.owner = ""
        this.name = name
        this.price = 15
    }

    wheelRun(run) {
        console.log("squeak squeak")
    }

    eatFood(eat) {
        console.log("nibble nibble")
    }

    getPrice() {
        return this.price
    }
}

const ham = new Hamster()

// console.log(ham.getPrice())

//Person

class Person {
    constructor(name) {
        this.name = name
        this.age = 0
        this.height = 0
        this.weight = 0
        this.mood = 0
        this.hamsters = []
        this.bankAccount = 0
    }

    getName() {
        return this.name
    }

    getAge() {
        return this.age
    }

    getWeight() {
        return this.weight
    }

    greet() {
        console.log("Hey " + this.name + "!")
    }

    eat() {
        this.weight++
    }
    exercise() {
        this.weight--
    }
    
    ageUp () {
        this.age++
        this.height++
        this.mood--
        this.bankAccount += 10
    }

    buyHamster(hamster) {
        this.hamsters.push(hamster)
        this.mood += 10
        this.bankAccount -= hamster.getPrice()
    }


}

//1. Instantiate a new Person named Timmy
const timmy = new Person("Timmy")


//2. Age Timmy five years
timmy.ageUp()
timmy.ageUp()
timmy.ageUp()
timmy.ageUp()
timmy.ageUp()

//3. At this point Timmy's a little bummed. As a precocious child,
// he feels he's "seen it all" already. Have him eat five times.
timmy.eat()
timmy.eat()
timmy.eat()
timmy.eat()
timmy.eat()

//4. Now Timmy's a little heavier than he wants to be. Kindergarten's 
//coming up and he wants to look good. Have him exercise five times
timmy.exercise()
timmy.exercise()
timmy.exercise()
timmy.exercise()
timmy.exercise()

//5. Age Timmy 9 years
timmy.ageUp()
timmy.ageUp()
timmy.ageUp()
timmy.ageUp()
timmy.ageUp()
timmy.ageUp()
timmy.ageUp()
timmy.ageUp()
timmy.ageUp()


//6. Create a hamster named "Gus"
const gus = new Hamster("Gus")


//7. Set Gus's owner to the string "Timmy"
gus.owner += "Timmy"




//8. Have Timmy "buy" Gus
timmy.buyHamster(gus)

//9. Age Timmy 15 years
timmy.ageUp()
timmy.ageUp()
timmy.ageUp()
timmy.ageUp()
timmy.ageUp()
timmy.ageUp()
timmy.ageUp()
timmy.ageUp()
timmy.ageUp()
timmy.ageUp()
timmy.ageUp()
timmy.ageUp()
timmy.ageUp()
timmy.ageUp()
timmy.ageUp()


//10. Have Timmy eat twice
timmy.eat()
timmy.eat()

//11. Have Timmy exercise twice
timmy.exercise()
timmy.exercise()


console.log(gus)
console.log(timmy)



//Chef Make Dinners

class Chef {
    constructor(chefNameParam) {
        this.chef = chefNameParam
        this.dinners = []
    }

    generateDinner(appetizer, entree, dessert) {
        const newDinner = new Dinner(appetizer, entree, dessert)
        this.dinners.push(newDinner)
    }
}


class Dinner {
    constructor(appetizer, entree, dessert){
        this.appetizer = appetizer
        this.entree = entree
        this.dessert = dessert
    }
}

// class Chef {
//     static createDinner(meal1, meal2, meal3){
//         console.log(new Dinner(meal1, meal2, meal3))
//     }
// }

// Chef.createDinner("Chips and Salsa", "Tacos", "Churros")
// Chef.createDinner("Salad", "Salmon", "Fudge cake")
// Chef.createDinner("Fried Pickels", "Steak", "Vanilla Ice Cream")

const gordon = new Chef("Gordon")
console.log(gordon)

gordon.generateDinner("Chips and Salsa", "Tacos", "Churros")

gordon.generateDinner("Salad", "Salmon", "Fudge cake")

gordon.generateDinner("Fried Pickels", "Steak", "Vanilla Ice Cream")

console.log(gordon)
