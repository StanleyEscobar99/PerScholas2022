// // start with creating an individual car
// // remember that constructor is a method, so you need () and {}
// // you need set the parameters to something inside the class in order for them to be used
// // you can use default values, but if you miss you parameter, you change the order and thing get assigned weird
// // you don't need to set everything in the constructor
// class Car {
//     constructor (makerParam, serialNumberParam, yearParam) {
//         this.maker = makerParam
//         this.serialNumber = serialNumberParam || 'TBD'
//         this.year = yearParam || 2000
//     }
//     // this defined the method, but doesn't make it run
//     drive () {
//         console.log('vroom vroom')
//     }
// }
// // you can use a variable or not as input arguments, but watch the order
// // order matters and variable names don't to the constructor
// let newMaker = 'Honda'
// const testCar = new Car(newMaker, '234235', 2010)
// console.log(testCar)
// // an example of adding properties outside of the constructor
// testCar.color = 'blue'
// // testCar.year = 2022
// console.log(testCar)
// // this is invoking the method that was defined in the class
// testCar.drive()
// // you can change this
// // but if you hard code a value, you need to have a manner of changing it
// // if that is not always what you want it to be
// testCar.color = 'green'
// const car2 = new Car('Honda', '34534645', 2019)
// console.log("car 2")
// console.log(car2)
// console.log("test car")
// console.log(testCar)