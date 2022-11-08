//====================Codel(Wordle)=======================
//1st project

//Here was my first step assinging buttonEle to equal button(my whole key board)
const buttonEle = document.querySelectorAll("button");

//We are assinging wordEle to grid row to
const wordEle = document.querySelectorAll(".grid-row");

const wordForTheDay = "alert";
let row = 1;
let letter = 1;
let gameOver= false
let guessedCorrect = false

//Needed help with this linked youtube videos who helped with this part at bottom
//We are calling each button then we add an eventListener which will excute
//on click after that it was time to make a function enterKeys then we add it to
//key press will call on the each elements data-key value like we set in html
//data-key=A for A
buttonEle.forEach((element) => {
  element.addEventListener("click", function () {
    enterKeys(element.attributes["data-key"].value);
  });
});

//After builiding the enterKeys() function we move on to building the
//fillout() function that was called in else
//for the function we call on the wordEle that i Defined at the top and then
//we use .word to get each square on and also letter and row after we assing inner
//we subtract one to start from 0 the first square
//Also this function is only to be run as long as letter is less than 6
//because there is only 5 squares we also add ine to letter each time
//to move over squares

function fillOut(key) {
  if (letter < 6) {
    wordEle[row - 1].querySelectorAll(".word")[letter - 1].innerText = key;
    letter += 1;
  }
}

//The check word function first we define the letterEle to equal
//wordEle row - 1 to start at first row and select the class .word
//After we use the for LetterEle to check each character in the word so we use IndexOf Letter = wordFortheDay.indexOf .element
//.innertext. to toLowerCase basically we are making sure the words match up using the index of also the to lower case just so casing wont have an effect

//after we make an If else statement calling on classes we made in css
//Green means you got letter in correct index yellow means
//letter isnt in the correct location but it is used in word
//grey just means there is no use of the letter
//Also added a a counter to numOfCorrectAlphabet which will go up one every correct letter

function checkWord() {
  const letterEle = wordEle[row - 1].querySelectorAll(".word");
  let numOfCorrectAlphabets = 0

  letterEle.forEach((element, index) => {
    const indexOfLetterInWordOfTheDay = wordForTheDay.indexOf(
      element.innerText.toLowerCase()
    );

    if (indexOfLetterInWordOfTheDay === index) {
      numOfCorrectAlphabets += 1
      element.classList.add("word-green");
    } else if (indexOfLetterInWordOfTheDay > 0) {
      element.classList.add("word-yellow");
    } else {
      element.classList.add("word-grey");
    }
  });

  if (numOfCorrectAlphabets === 5){
    gameOver= true
    guessedCorrect = true
    alert("CONGRATS YOU WIN!")
  } else if (row === 7) {
    gameOver = true
    alert('You lost! :(')
  }
}

//now we create the enterWord() function
//So for the if I put if its less than then 6 letters I dont know why
//6 but 6 was working for me instead of 5 then I alert the player there
//arent enough letters then we call on check word function that I will create
//above the enterword function We also increment row by 1 to move
//down to the following row and let letter equal 1 to start at the front of that row
function enterWord() {
  if (letter < 6) {
    alert("Not Enough Letters");
  } else {
    checkWord();
    row += 1;
    letter = 1;
  }
}



//For the delete letter function Iwent with a for loop
//but I kind of reversed it to make it to subtract one from letter
//as long as index empty we will subtract and if it is we break out of loop
function deleteLetter() {
  const letterEle = wordEle[row - 1].querySelectorAll('.word')
  for (let index = letterEle.length - 1; index >= 0; index--) {
    const element = letterEle[index];
    if (element.innerText !== "") {
      element.innerText = ""
      letterEle -= 1
      break
    }
    
  }
}

//here is where we begin to build our main function I tried going many ways about
//but when i was doing research this felt like the simplest way to do it in my
//opinion when basically start by saying if player clicks enter key he will submit
//his answer with enter word function same thing in else if if player clicks delete
//the delete letter function will excute and for the else it will call function
//fillOut() which will be entering letters into square
function enterKeys(key) {
  if(!gameOver) {
    if (key.toLowerCase() === "enter") {
      enterWord();
    } else if (key.toLowerCase() === "delete") {
      deleteLetter()
    } else {
      fillOut(key);
    }
  } else {
    alert('Game Over')
  }
  
}
