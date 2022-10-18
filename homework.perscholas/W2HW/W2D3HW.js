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

//===========================


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


//=============================


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


//==========================


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




//===============Bank Accounts take it a step further==========



// // ============== PART ONE =============
// class BankAccount{
//     constructor(ownerParam, balanceParam) {
//         this.ownerName = ownerParam
//         this.balance = balanceParam
//         this.acctNum = Math.floor(Math.random()*10000000)
//     }
//     deposit(addMoney){
//         this.balance += addMoney
//         return `You have successfully deposited $${addMoney}. Your new balance is $${this.balance}.`
//     }
//     withdraw(subtractMoney){
//         this.balance -= subtractMoney
//         if (this.balance - subtractMoney < 0){
//             return `You can not withdraw $${subtractMoney} from your account. INSUFFIECIENT FUNDS!!`
//         } else{
//             return `You have successfully withdrawed $${subtractMoney} from your account. Your new balance is $${this.balance - subtractMoney}.`
//         }

//     }
// }

// ====== Print to Console ======

// const chase = new BankAccount("Stan", 5000)
// console.log(chase)
// console.log(chase.deposit(500))
// console.log(chase.withdraw(500))
// console.log(chase.withdraw(50001))

// ================ PART TWO =================

// class CheckingAccount extends BankAccount{
//     constructor(ownerParam, balanceParam, overdraftEnabledParam = false){
//         super(ownerParam, balanceParam)
//         this.overdraftEnabled = overdraftEnabledParam
//     }
//     withdraw(subtractMoney){
//         if (this.overdraftEnabled === true){
//             this.balance -= subtractMoney
//                 return `You have successfully withdrawed $${subtractMoney}. Your new balance is $${this.balance}.`
//         } else {
//             return "You must enable the overdraft feature."
//         }
//     }
// }

// ====== Print to Console ======

// const chaseChecking = new CheckingAccount("Stan", 200, false) // Test for false
// const chaseChecking2 = new CheckingAccount("Stan", 200, true) // Test for true

// console.log(chaseChecking)
// console.log(chaseChecking.withdraw(400)) // Test for false
// console.log(chaseChecking2.withdraw(400)) // Test for true

// ============= PART THREE =============

// class SavingsAccount extends BankAccount{
//     withdraw(subtractMoney){
//         return `You can not withdraw money from your savings account ${this.acctNum}.`
//     }
// }

// ====== Print to Console ======

// const chaseSavings = new SavingsAccount("Stann", 1500000)

// console.log(chaseSavings)
// console.log(chaseSavings.withdraw(6556666))