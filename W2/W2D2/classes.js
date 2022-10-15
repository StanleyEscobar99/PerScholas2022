//Christina notes
// // classes are blueprints to create objects
// // or templates
// // you start with the baseline that you are provided, and then you can customize
// // there may be some things that are required, but there may be options
// // classes are good for reusability - which we like in code

// // we could do this
// // this is hard-coding certain things, and we can't reuse the underlying framework
// // const lion = {
// //     legs: 4,
// //     color: "golden",
// //     diet: "Carnivores"
// // }
// // // but then if there is a new animal, we'd have to add a whole new object manually
// // const zebra = {
// //     legs: 4,
// //     color: "black and white",
// //     diet: "Herbivores"
// // }

// // class is a reserved JS keyword
// // classes alwlays start with a capital letter

// class Animal {
//     // the constructor is automatically called to create the animal
//     // it is a function
//     // we are going to use the keyword "this" and it will refer to the object that you are constructing
//     constructor(nameParam, legsParam, colorParam, dietParam) {
//         // we are now creating the keys for each new object
//         this.name = nameParam;
//         this.legs = legsParam;
//         this.color = colorParam;
//         this.diet = dietParam;
//         // return is not needed because the new object is returned by default
//     }

//     //Methods in classes
//     // ***** Methods DO NOT go into the constructor
//     // they are part of the definition of the class 
//     // it's like the directions that go with the recipe - if you think about the constructor as the ingredients
//     // you don't have to use the keyword function 

//     // This is a method in our class
//     bathing() {
//         this.isBathing = true
//         console.log("Animal is bathing")

//     }

// }

// initializing a new instance of this class
// *note the vocabulary above
// let lion = new Animal("Lion", "4", "golden", "Carnivore")
// // console.log(lion)
// let zebra = new Animal("Zebra", "4", "black and white", "Herbivore")
// // console.log(zebra)

// let elephant = new Animal ("Elephant", "4", "gray", "Herbivore")
// console.log(elephant)
// elephant.bathing()
// console.log(elephant)


//classes are blueprints for objects

// const lion = {
//     legs: 4,
//     color: "golden",
//     diet: "Carnivores"
// }

// const zebra = {
//     legs: 4,
//     color: "black and white",
//     diet: "Herbivores"
// }

// class is a reserved Javascript keyword
// classes always start with a capital letter
//example class Car

// class Animal {
//     //use the constructor method
//     constructor(name,legs,color,diet){
//         //create the keys for each new object
//         this.name = name
//         this.legs = legs
//         this.color = color
//         this.diet = diet
//     }
// }
// // how to add a new animal
// let lion = new Animal("Lion","4","golden","Carnivore")

// // console.log(lion)

// let zebra = new Animal("Zebra","4","black and white","Herbivore")

// console.log(zebra)

// console.log(lion.legs)

//Methods in classes

// class Animal {
//     constructor(name,legs,color,diet){
//         this.name = name
//         this.legs = legs
//         this.color = color
//         this.diet = diet
//     }
//     //This is a method in our counstructor
//     bathing(){
//         this.isBathing = true 
//         console.log('Animal is bathing')
//     }
// }

// let elephant = new Animal('Elephant',"4","Grey","Herbivore")

// console.log(elephant)
// console.log(elephant)
// elephant.bathing()

//Exercise

//Create a class named Car
// Every car should have
// "Make"
// "Model"
// "Year"
// "Doors"
// "Location"
// "Price"
// Create 3 new Cars
// Create a method that allows each car to drive
// Method should output the name of the car and "is driving"


// class Car {
//     constructor(make, model, doors, location, price) {
//         this.make = make
//         this.model = model
//         this.doors = doors
//         this.location = location
//         this.price = price
//     }
//     driving() {
//         this.isDriving = true;
//         console.log(`This ${this.make} ${this.model} is driving.`);
//     }
// }

// let bmw = new Car("BMW","M3","2","3 miles","$22,000")
// let honda = new Car("Honda","Accord","4","4 miles","$16,000")
// let nissan = new Car("Nissan","Rogue","4","20 miles","$19,000")


// bmw.driving(true)
// console.log(bmw)


// console.log(honda)

// nissan.driving(true)
// console.log(nissan)