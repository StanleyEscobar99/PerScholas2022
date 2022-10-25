// DOM Queries
// const startButton = document.querySelector("#start-button")
const startContainer = document.querySelector("#start-container")
const gameContainer = document.querySelector("#game-container")

// Input Queries
const fName = document.querySelector('#fname')

// Player 1
const p1Name = document.querySelector('#p1-name')


class Player {
    constructor(name, element) {
        this.name = name;
        this.element = element;
    }
}

const game = {
    start: function() {
        // startButton.classList.toggle("hide")
        startContainer.classList.toggle("hide")
        gameContainer.classList.toggle("hide")
    },
    checkElement: function(eventParam) {
        eventParam.preventDefault()
        // console.log('We clicked submit', event, "!!!!!!!")

        // Check input values
        console.log(fName.value)

        // Change player name
        p1Name.textContent = fName.value
    }
}

// Event Listeners
// startButton.addEventListener("click", () => {
//     console.log("we're starting the game")
//     startButton.classList.add("hide")
// })