class Pokemon {
    constructor(hp, power) {
        // this.name = name;
        this.hp = hp;
        this.power = power;
    }
}

// const pikachu = new Pokemon('pikachu', 100, 100);
// const charmander = new Pokemon('charmander', 100, 80);
// const magikarp = new Pokemon('magikarp', 20, 5);

const firstArray = [];
const secondArray = [];

for(let i = 0; i < 3; i++){
    firstArray.push(new Pokemon(Math.ceil(Math.random() * 100), Math.ceil(Math.random() * 100)));
    secondArray.push(new Pokemon(Math.ceil(Math.random() * 100), Math.ceil(Math.random() * 100)));
}
console.log(firstArray);
console.log(secondArray);

// Step 4: Create a function called battle(). In this function, have the first Pokemon in the first array battle the first Pokemon in the second array. 
//Randomize whoever goes first. Subtract their firepower from their opponent's hp. 
//Whoever reaches 0 hp first will be defeated. Print the battle results in the console.

function battle () {
    if (firstArray[1] > secondArray[1]) {
        console.log(firstArray)
    } else {
        console.log(secondArray)
    }
}

battle ()