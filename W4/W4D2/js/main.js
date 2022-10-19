// Events!!

/*
DOM Events are the foundation of interactivity of a website.

We will tell JS to watch for an event (button click) and respond to that event with some kind of functionality

Ref to all events possible:
https://developer.mozilla.org/en-US/docs/Web/Events


The way we respond to events is with callback functions. This function is ran once the event happens

3 ways to add:

1. in the HTML (inline)

2. Assigning to DOM elements' properties:

3. Calling addEventListener()on a DOM element

Option 3 is what we want to use.!!

*/

// 2 other ways to add an event listener
// const testBtn = document.querySelector("#test")

// function reset () {
//   console.log("hi")
// }

// testBtn.onclick = reset
// see button with id="test" in html for other way





//alert("js loaded") //check to see if js is loaded

// Our First Event Listener
// Goal: When we click the Add Comment button, we want to create a new comment with the text entered in the input and then clear the input.

// We will do this by add a 'click' event listener
