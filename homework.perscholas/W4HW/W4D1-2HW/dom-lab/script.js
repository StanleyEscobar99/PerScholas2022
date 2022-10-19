//Menu data structure
var menuLinks = [
    {text: 'about', href: '/about'},
    {text: 'catalog', href: '#', subLinks: [
      {text: 'all', href: '/catalog/all'},
      {text: 'top selling', href: '/catalog/top'},
      {text: 'search', href: '/catalog/search'},
    ]},
    {text: 'orders', href: '#' , subLinks: [
      {text: 'new', href: '/orders/new'},
      {text: 'pending', href: '/orders/pending'},
      {text: 'history', href: '/orders/history'},
    ]},
    {text: 'account', href: '#', subLinks: [
      {text: 'profile', href: '/account/profile'},
      {text: 'sign out', href: '/account/signout'},
    ]},
  ];
// Tasks

//==============1

// 1.0 Select and cache the <main> element in a variable named mainEl.
let mainEl = document.getElementById("main")




// 1.1 Set the background color of mainEl to the value stored in the --main-bg CSS custom property.
    // Hint: Assign a string that uses the CSS var() function like this:
    // 'var(--main-bg)'
mainEl.style.backgroundColor="var(--main-bg)";


// 1.2 Set the content of mainEl to <h1>SEI Rocks!</h1>.
mainEl.innerHTML = '<h1>SEI Rocks!</h1>'


// 1.3 Add a class of flex-ctr to mainEl.
mainEl.classList.add("flex-ctr")



//==============2


// 2.0 Select and cache the <nav id="top-menu"> element in a variable named topMenuEl.
let topMenuEl = document.getElementById("top-menu")



// 2.1 Set the height topMenuEl element to be 100%.
topMenuEl.style.height = ("100%")



// 2.2 Set the background color of topMenuEl to the value stored in the --top-menu-bg CSS custom property.
topMenuEl.style.backgroundColor = "var(--top-menu-bg)"




// 2.3 Add a class of flex-around to topMenuEl.
topMenuEl.classList.add("flex-around")




//================3


//3.0 Copy the following data structure to the top of script.js:

// // Menu data structure
// var menuLinks = [
//     {text: 'about', href: '/about'},
//     {text: 'catalog', href: '/catalog'},
//     {text: 'orders', href: '/orders'},
//     {text: 'account', href: '/account'},
//   ];




// 3.1 Iterate over the entire menuLinks array and for each "link" object:

// for (i = 0; i < menuLinks.length; i++) {
//     console.log(menuLinks[i].text)
// }

// Create an <a> element.
// On the new element, add an href attribute with its value set
// to the href property of the "link" object.
// Set the new element's content to the value of the text property of
// the "link" object.
// Append the new element to the topMenuEl element.


menuLinks.forEach(function(str) {
    const a = document.createElement('a')
    a.setAttribute("href", str.href)
    a.textContent = str.text
    topMenuEl.append(a)
    console.log(str.text)
})





//============================PART 2=============================



//===============4


// 4.0 Select and cache the <nav id="sub-menu">element in a variable named subMenuEl.

let subMenuEl = document.getElementById("sub-menu")




// 4.1 Set the height subMenuElelement to be 100%.

subMenuEl.style.height = ('100%')




// 4.2 Set the background color of subMenuElto the value stored in the --sub-menu-bgCSS custom property.

subMenuEl.style.background = ('var(--sub-menu-bg)')





// 4.3 Add the class of flex-aroundto the subMenuElelement.

subMenuEl.classList.add ('flex-around')





// 4.4 Set the CSS positionproperty of subMenuElto the value of absolute.

subMenuEl.style.position = ('absolute')



// 4.5 Set the CSS topproperty of subMenuElto the value of 0.

subMenuEl.style.top = ('0')



//================5

// 5.0 Update the menuLinksarray in script.js to this:
// var menuLinks = [
//     {text: 'about', href: '/about'},
//     {text: 'catalog', href: '#', subLinks: [
//       {text: 'all', href: '/catalog/all'},
//       {text: 'top selling', href: '/catalog/top'},
//       {text: 'search', href: '/catalog/search'},
//     ]},
//     {text: 'orders', href: '#' , subLinks: [
//       {text: 'new', href: '/orders/new'},
//       {text: 'pending', href: '/orders/pending'},
//       {text: 'history', href: '/orders/history'},
//     ]},
//     {text: 'account', href: '#', subLinks: [
//       {text: 'profile', href: '/account/profile'},
//       {text: 'sign out', href: '/account/signout'},
//     ]},
//   ];






// 5.1 Select and cache the all of the <a>elements inside of topMenuElin a variable named topMenuLinks.
//Declare a global showingSubMenu variable and initialize it to false;

let topMenuLinks = document.querySelectorAll("#top-menu > a")

let showingSubMenu = false




// 5.2
// let showingSubMenuvariable = false
// Attach a delegated 'click' event listener to topMenuEl.
// The first line of code of the event listener function should call the event object's preventDefault()method.
// The second line of code function should immediately return if the element clicked was not an <a>element.
// console.logthe content of the <a>to verify the handler is working.

// document.querySelector('#topMenuEl').addEventListener('click', (evt) => {
//}

    topMenuEl.addEventListener("click", function(evt) {
        evt.preventDefault();
        let aLink = evt.target;
        if(aLink !== "a")
            return;
        console.log(aLink.textContent)
})
console.log(topMenuLinks)






// 5.3
// Next in the event listener, if the clicked <a>link has a class of active:
// Remove the activeclass from the clicked <a>element.
// Set the showingSubMenuto false.
// Set the CSS topproperty of subMenuElto 0.
// return to exit the handler.













// 5.4
//Next, the event listener should remove a class name of activefrom each <a>element in topMenuLinks- whether the activeclass exists or not.
//Hint: Removing a non-existent class from an element does not cause an error, so just remove it!











//5.5
// Next, the event listener should add a class name of activeto the <a>element that was clicked.










//5.6
//Set showingSubMenuto trueif the clicked <a>element's "link" object within menuLinkshas a subLinksproperty 
//(all do, except for the "link" object for ABOUT), otherwise, set it to false.
//Hint: Saving the "link" object in a variable will come in handy for passing its subLinksarray in Task 5.7












//5.7
// Next in the event listener...
// If showingSubMenuis true:
// Call a buildSubMenufunction passing to it the subLinksarray for the clicked <a>element.
// Set the CSS topproperty of subMenuElto 100%.
// Otherwise (showingSubMenuis false):
// Set the CSS topproperty of subMenuElto 0.












//5.8
//Code the buildSubMenufunction so that it:

// Clears the contents of subMenuEl.
// Iterates over the subLinksarray passed as an argument; and for each "link" object:

// Create an <a>element.
// On the new element, add an hrefattribute with its value set to the hrefproperty of the "link" object.
// Set the new element's content to the value of the textproperty of the "link" object.
// Append the new element to the subMenuElelement.














//===================6


//6.0
//Attach a delegated 'click' event listener to subMenuEl.
// The first line of code of the event listener function should call the event object's preventDefault()method.
// The second line of code function should immediately return if the element clicked was not an <a>element.
// console.logthe content of the <a>to verify the handler is working.











//6.1
//Next, the event listener should:
// Set showingSubMenuto false.
// Set the CSS topproperty of subMenuElto 0.









//6.2
//// Remove the class name of activefrom each <a>element in topMenuLinks- whether the activeclass exists or not.









//6.3
//Update the contents of mainElto the contents of the <a>element, within an <h1>, clicked within subMenuEl.







//6.4
//If the ABOUT link is clicked, an <h1>about</h1>should be displayed







