//3.0
// var menuLinks = [
//   {text: 'about', href: '/about'},
//   {text: 'catalog', href: '/catalog'},
//   {text: 'orders', href: '/orders'},
//   {text: 'account', href: '/account'},
// ];

//5.0
const menuLinks = [
  { text: 'about', href: '/about' },
  {
    text: 'catalog', href: '#', subLinks: [
      { text: 'all', href: '/catalog/all' },
      { text: 'top selling', href: '/catalog/top' },
      { text: 'search', href: '/catalog/search' },
    ]
  },
  {
    text: 'orders', href: '#', subLinks: [
      { text: 'new', href: '/orders/new' },
      { text: 'pending', href: '/orders/pending' },
      { text: 'history', href: '/orders/history' },
    ]
  },
  {
    text: 'account', href: '#', subLinks: [
      { text: 'profile', href: '/account/profile' },
      { text: 'sign out', href: '/account/signout' },
    ]
  },
];

//=====================TASK 1======================

//1.0
const mainEl = document.querySelector('main');

//1.1
mainEl.style.backgroundColor = 'var(--main-bg)';

//1.2
mainEl.innerHTML = '<h1>SEI Rocks!</h1>';

//1.3
mainEl.classList.add('flex-ctr');




//=====================TASK 2=======================

//2.0
const topMenuEl = document.getElementById('top-menu');

//2.1
topMenuEl.style.height = '100%';

//2.2
topMenuEl.style.backgroundColor = 'var(--top-menu-bg)';

//2.3
topMenuEl.classList.add('flex-around');



//==================TASK 3=======================
//3.0 AT THE TOP


//3.1
menuLinks.forEach(function (linkObj) {
  const aEl = document.createElement('a');   //A
  aEl.setAttribute('href', linkObj.href);    //B
  aEl.textContent = linkObj.text;            //C
  topMenuEl.appendChild(aEl);                //D
});





//==============================================Part 2==================================




//====================TASK 4========================

//4.0
const subMenuEl = document.getElementById('sub-menu');


//4.1
subMenuEl.style.height = '100%';


//4.2
subMenuEl.style.backgroundColor = 'var(--sub-menu-bg)';


//4.3
subMenuEl.classList.add('flex-around');


//4.4
subMenuEl.style.position = 'absolute';


//4.5
subMenuEl.style.top = '0';



//===================TASK 5========================
//5.0 AT THE TOP


//5.1
let topMenuLinks = document.querySelectorAll('#top-menu a');  //A
let showingSubMenu = false;                                   //B



//5.2
topMenuEl.addEventListener('click', function (evt) {    //A
  evt.preventDefault();                                 //B
  let link = evt.target;
  if (link.tagName !== 'A')                             //C
    return;
  console.log(link.textContent)                         //D




//5.3
if (link.classList.contains('active')) {                
  link.classList.remove('active');                  
  showingSubMenu = false;
  subMenuEl.style.top = '0';
  return
}





//5.4
topMenuLinks.forEach(function (a) {
  a.classList.remove('active');
});



//5.5
link.classList.add('active');


//5.6
let linkObj = menuLinks.find(function (obj) {
  return obj.text === link.textContent;
});
showingSubMenu = linkObj.hasOwnProperty('subLinks');

//Task 6.4
if (evt.target.text === 'about'){
  mainEl.innerHTML = `<h1>${evt.target.text}</h1`;
}

//5.7
if (showingSubMenu) {
  buildSubMenu(linkObj.subLinks);
  subMenuEl.style.top = '100%';
} else {
  subMenuEl.style.top = '0';
}

});


//5.8
function buildSubMenu(subLinks) {
  subMenuEl.innerHTML = '';
  subLinks.forEach(function (link) {
    let aEl = document.createElement('a');
    aEl.setAttribute('href', link.href);
    aEl.textContent = link.text;
    subMenuEl.append(aEl);
  });
}





// //===================TASK 6===================

//6.0
subMenuEl.addEventListener('click', function (evt) {
  evt.preventDefault();
  let link = evt.target;
  if (link.tagName !== 'A') 
  return;
  console.log(link.textContent);

//6.1
  showingSubMenu = false;
  subMenuEl.style.top = '0';

// 6.2
  topMenuLinks.forEach(function (a) {
  a.classList.remove('active');
});

// 6.3 
mainEl.innerHTML = `<h1>${link.textContent}</h1>`;
});


//6.4

