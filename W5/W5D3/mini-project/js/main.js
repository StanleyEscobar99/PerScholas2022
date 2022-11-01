//=================Week 5 D3: Save the Universe===============


//Making our Ship

class UssShip {
    constructor() {
        this.hull = 20,
        this.firepower = 5,
        this.accuracy = 0.7,
        this.alive = true
    }
    attack() {
        let ranNum = Math.random();
        if (ranNum < this.accuracy) {
            console.log(`We hit them Captain!`);
            AlienShip.hull -= this.firepower;
        } else {
            console.log(`You missed the alien ship`);
            console.log("Prepare for there attack")
        };

    }
}

let uss = new UssShip


//Making Alien Ship 
class AlienShip {
    constructor(name) {
        this.shipName = name;
        this.hull = Math.random() * (6 - 3) + 3;
        this.firepower = Math.random() * (4 - 2) + 2;
        this.accuracy = Math.random() * (.8 - .6) + .6;
    };
    attack() {
        let ranNum = Math.random();
        if (ranNum < this.accuracy) {
            console.log(`It's a hit!`);
            uss.hull -= this.firepower;
            console.log(`We've been hit`);
        } else {
            console.log(`The alien ship missed!`);
        };
    };
}


//Alien Ship array 
const alienFleet = [
    new AlienShip("Ship 1"),
    new AlienShip("Ship 2"),
    new AlienShip("Ship 3"),
    new AlienShip("Ship 4"),
    new AlienShip("Ship 5"),
    new AlienShip("Ship 6")
]



const battle = function(x, y) {

    do {
        uss.attack()
        if (alienFleet.hull > 0) {
            AlienShip.attack()
            if (uss.hull >= 0) {
                uss.attack()
            } else {
                console.log("You lose!")
            }
        } else {
            ("You win!")
        }
    } while (alienFleet.hull > 0 && uss.hull > 0)
}

const fight = function (x, y) {
    for (let i = 0; i < alienFleet.length; i++){
        battle(UssShip, alienFleet[i])
    }

    console.log("You win")
}

fight()