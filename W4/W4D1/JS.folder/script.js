// THE DOM

/**
 * The DOM is a global object within our javascript that representts the browser that this js file is linked too.
 * 
 * The document object is a huge object that has all kinds of info about the web browser(html)
 * 
 *
 * API
 * 
 * An application programming interface (API) is a way for two or more computer programs to communicate with each other.
 * 
This is what allows webpages to be dynamic with functionaility, UI, etc.
 * Ex: 
* - Add/remove elements to/from the document
 *  - Change the content of elements
 *  - Change the style properties of elements
 */


// Selecting and element by Id
let titleEl = document.getElementById('title')
titleEl.style.backgroundColor = "yellow"

// Selecting and element using querySelector
const titleH1 = document.querySelector(".main-title") // follows CSS rules #is class .is id
console.log(titleH1) // returns the first element that matches, if no matched were found it will return null

const pEl = document.querySelector(".cool")
console.log(pEl)

//const queryTitle = document.querySelector("#title")


// Changing the content of an element
// innerHTML: Property to read and change the content as ** HTML **

// textContent: Property to read and change the content as ** plain text **

//pEl.textContent = 'Comments for <strong>Today</strong>'// doesn't parse HTML because it only plain text


pEl.innerHTML = '<h1>Comments</h1> for <strong>Today</strong>'// does parse HTML

const str = "im a variable"
// EX w/ div
const container = document.querySelector(".container")

//container.innerHTML = `<h3> ${str} </h3> <p> This is my container </p>`



// Changing the style of an element

/**
 * What naming convention is used for CSS properties in the DOM? // 
  camelCase Ex: textAlign

 * What naming convention is used for CSS properties in CSS? // 
  kabob-case Ex: text-align

 * Why is it different? 
  to keep the standards of each langauge

 */

titleEl.style.textAlign = 'center';
titleEl.style.fontSize = "60px";

//Checking, setting, and getting attribute from an element

//Get

const pData = pEl.getAttribute("data")
console.log(pData)

//Check

const hasData = pEl.hasAttribute("data")
console.log(hasData)

//Setting or Changing
pEl.setAttribute("data", "I was set in javascript")
console.log(pEl)



// Add an <a>tag to index.htmlwith content of "Visit Google" but without an hrefattribute.
// Reload the page and verify that the link does not work (in fact, it probably doesn't even look like a link).
// In the JS, write the line of code that will add an hrefattribute that will make the link navigate to "https://www.google.com".
// Hint: Check out the previous slide

const pA = document.querySelector("#link")
pA.setAttribute("href", "https://www.google.com")



//When working with classes, we have a better option. The classList property

pEl.classList.add('aTag', 'google')

pEl.classList.remove("google")


pEl.classList.toggle("google") //if element doesnt have class it will add it
//If element doesnt have class it will remove it
pEl.classList.toggle("google")


console.log(pEl.classList.contains("aTag"))// returns boolean 

pEl.classList.replace('aTag', 'loremData')

console.log(pEl)

console.log(pEl)

// ❓ Review Questions

// If we want to change the text (no HTML) inside of a <div>, what property should we set?
      // textContent

// How many DOM elements are returned by the querySelector method?
    // one, it will return the FIRST MATCH

// What DOM element property is used to style a DOM element?
// the style property EX: pEl.style.color = "red"


//Selecting Multiple Elements by

//getElemenetsByTagName(str)

//getElemenetsByClassnamm(str)

const commentEls = document.querySelectorAll('.comment')
console.log(commentEls)



// In summary, use the following to help you decide which method to use to select DOM elements:

// getElementById: Use when you need to select a single element that has an id assigned to it.
// querySelector: Use when you need to select a single element that does not have an id.
// querySelectorAll: Use when you need to select multiple elements.



//Iterating over a collection of elements 

//For loop
// for (let i =0; i < commentEls.length; i++){
//     commentEls[i].style.fontSize = "30px"
//     commentEls[i].style.color = "green"
//     console.log(commentEls[i])
// }


//forEach

// commentEls.forEach((comment) => {
//     comment.style.fontSize = '30px'
// })

// let fontsize = 10
// commentEls.forEach((comment) => {
//     comment.style.fontSize = fontsize + "px"
//     fontsize+=10
// })


// for of
// for (let comment of commentEls) {
//     console.log(comment)
//     console.log(i)
//     i++
// }

// for of
let i =0
for (let comment of commentEls) {
    if (i === 2) {
        break     //this will exit this loop all together
    }
    console.log(comment)
    console.log(i)
    
    i++
}


//Creating a element and displaying it on the DOM

const fifthCommentEl = document.createElement('li')
fifthCommentEl.classList.add("comment")
fifthCommentEl.textContent = "fifth comment"
fifthCommentEl.style.fontSize = "10px"

const ulEl = document.getElementById("comments")

ulEl.append(fifthCommentEl)


// What method is the most efficient for selecting an element that has an id?
    //getElementById([insert id name here])

// If we want to insert content in an element that includes markup, what property would we assign to?
    //innerHTML

// If you had to pick only one method to select DOM elements with during your career as a developer, which one should you choose?
    //querySelector querySelectorAll

// Which property on DOM elements is used to set the CSS properties for that element?
    //style property

