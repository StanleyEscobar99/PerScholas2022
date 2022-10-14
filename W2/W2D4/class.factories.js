// // start with creating an individual car 

// //remeber constructor is a method, so you need () and {}
// //you need to set the parameters to something inside the class in order for them to be used you can use default values, but if you miss parameter it 
// class Car {         //1            2
//     constructor (makerParam, serialNumberParam) { these are defaults ()
//         this.maker = makerParam
//         this.serialNumber = serialNumberParam
//     }
// }

// // //order matters
// //                          //1          2
// // const testCar = new Car ("Honda", "123456789")

// // console.log(testCar)


// // //another way to add
// // let newMaker = "BMW"

// // const testCar2 = new Car (newMaker, "987654321")

// // console.log(testCar2)

// // or statement
// // class Car {         //1            2
// //     constructor (makerParam, serialNumberParam) {
// //         this.maker = makerParam                 //false statement if they input nothing
// //         this.serialNumber = serialNumberParam || "TBD"
// //     }
// // }

// // let newMaker = "Honda"
// // const testCar = new Car(newMaker, )
// // console.log(testCar)

// // //adding a new argument outside of constructor
// // testCar.year = 2022
// // console.log(testCar)

// // class Car {         //1            2            3  these are defaults
// //     constructor(makerParam, serialNumberParam, yearParam) {
// //         this.maker = makerParam             //false statement if they input nothing
// //         this.serialNumber = serialNumberParam || "TBD"
// //         this.year = yearParam || 2000
// //     }
// // }

// // let newMaker = "Honda"
// // const testCar = new Car(newMaker,)
// // console.log(testCar)

// // //changing value of year  
// // testCar.year = 2022
// // console.log(testCar)

// class Car {         //1            2            3  these are defaults
//     constructor(makerParam, serialNumberParam, yearParam) {
//         this.maker = makerParam                 //false statement if they input nothing
//         this.serialNumber = serialNumberParam || "TBD"
//         this.year = yearParam || 2000
//     }                          

//     drive () {
//         console.log('vroom', 'vroom')
//     }
// }

// let newMaker = "Honda"
// const testCar = new Car(newMaker, "123456789", )
// // console.log(testCar)

// testCar.drive()

// console.log(testCar)

// // const car2 = new Car("Audi", "21212121", "2009")
// // console.log(car2)

// //an example of adding properties outside of parameters
// testCar.color = "blue"
// console.log(testCar)






// ================FACTORIES ==================

//WHY A FACTORY?
// this provides a means for creating multiple versions or instances of a class
class Car {
    constructor (makerParam, serialNumberParam, yearParam) {
        this.make = makerParam
        this.serialNumber = serialNumberParam
        this.year = yearParam || 2000
    }

    drive () {
        console.log("vroom vroom")
    }
}

class Factory {
    // the only parameter passed in to the constructor is company
    // cars is an array, but will be created with an empty array 
    // this way I know that it exists and I can use later.
    constructor (companyParam) {
        this.company = companyParam
        this.cars = []
    }
    // this is how I make a new car
    // and then i add it to my cars array
    // note that I'm using the Car class from above and creating a new instance
    // the serial number is going to be the current length of cars
    generateCar () {
        // this is instantiating a new car
        const newCar = new Car(this.company, this.cars.length)
        this.cars.push(newCar)

        // You could make this way more complex
        // you could add the year, you could create colors, you could add doors or models
        // if you wanted to make this more comples, you probably want to update your Car Class to match
        
    }
    // this another Factory method
    //it has an index parameter and we will use that to access the Factory's car array
    findCar (index) {
        return this.cars[index]
    }
}

// the instance label (variable name) and company name don't have to match
// this is just more readable for people when we want to figure out which factory we are using
const tesla = new Factory('Tesla')
//the factory exists but there are no cars
console.log(tesla)

tesla.generateCar()
console.log(tesla)

tesla.generateCar()
console.log(tesla)

tesla.generateCar()
console.log(tesla)

console.log(tesla.findCar(1))

const porche = new Factory('Porche')
porche.generateCar()
porche.generateCar()
porche.generateCar()
porche.generateCar()
porche.generateCar()
porche.generateCar()
porche.generateCar()
console.log(porche)
console.log(tesla)

console.log(porche.findCar(3))




// //================ STATIC PROPERTIES ===============
// //These only work for class as a whole
// //These don't work on specific instances


// class ThereIsOnlyOne {
//     constructor (nameProp) {
//         this.name = nameProp
//     }

//     static sharedName = 'we all share this one'

//     static onlyOne() {
//         console.log("I don't have power in an instance, only the entire class")
//     }

//     methodWeUnderstand() {
//         console.log("I ONLY work in an instance")
//     }

// }

// ThereIsOnlyOne.onlyOne()
// //ThereIsOnlyOne.methodWeUnderstand()

// console.log(ThereIsOnlyOne.sharedName)

// console.log('----------Instantiatingng first instance-------------')

// const invokedOne = new ThereIsOnlyOne("first instance")
// console.log(invokedOne)

// console.log("--------Now there is an instance----------")
// // demonstrate that onlyOne() doesn't work on the instance
// //invokedOne.onlyOne()
// invokedOne.methodWeUnderstand()


class Animal {
    constructor () {
        this.numLegs = 4
        this.diet = 'herbivores'
    }
    // this a property
    static isAlive= true
    //this is a method
    static sleeping () {
        console.log('is sleeping')
    }
}

// this is logging a property
console.log(Animal.isAlive)

// this is invoking a method
Animal.sleeping()

const sheep = new Animal()
//sheep.sleeping()
