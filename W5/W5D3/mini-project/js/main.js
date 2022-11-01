//=================Week 5 D3: Save the Universe===============


//Making our Ship

class UssShip {
    static hull = 20
    static firepower = 5
    static accuracy = 0.7
    static alive = true

    static attack() {
        let ranNum = Math.random();
        if (ranNum < UssShip.accuracy) {
            console.log(`We hit them Captain!`);
            AlienShip.hull -= UssShip.firepower;
        } else {
            console.log(`You missed the alien ship`);
            console.log("Prepare for there attack")
        };

    }
}



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
            UssShip.hull -= this.firepower;
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


function retreat() {
    console.log("Do you wish to keep fighting the Aliens or let them win?")
}


function game() {


}
const battle = function () {

    do {

        console.log("It's our turn to attack!")
        UssShip.attack()
        console.log("")

        if (alienFleet.hull > 0) {
            AlienShip.attack()
            if (UssShip.hull >= 0) {
                UssShip.attack()
            } else {
                console.log("You lose!")
            }
        } else {
            ("You win!")
        }
    } while (alienFleet.hull > 0 && UssShip.hull > 0)
}

const fight = function () {
    for (let i = 0; i < alienFleet.length; i++) {
        battle(UssShip, alienFleet[i])
    }

    console.log("You win")
}

fight()