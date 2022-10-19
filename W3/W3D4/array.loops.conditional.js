// //========Part I HTML & CSS===============

// //Rank you comfort with the following material on a scale of 0 - 5:

// // 4 -I feel pretty good about the material, but some extra 
// //review would help


// //============Part II: JavaScript Reps=======================

// //===========Easy Going

// //Write a for loop that will log the numbers 1 through 20.

// // for (let i = 1; i <= 20; i++){
// //     console.log(i)
// // }

// //==============Get Even

// // Write a for loop that will log only the even numbers in 
// //0 through 200.

// // for (let i = 0; i <= 200; i++) {
// //     if (i % 2 == 0) {
// //         console.log(i)
// // }
// // }

// //=============Fizz Buzz

// //This is a classic problem that you should get really comfortable solving. If you've solved it before, try to make it more elegant and short.

// //Write a javascript application that logs all numbers from 
// //1 - 100.

// //If a number is divisible by 3 log "Fizz" instead of the number.

// //If a number is divisible by 5 log "Buzz" instead of the number.

// //If a number is divisible by 3 and 5 log "FizzBuzz" instead of the number.

// // for (let i = 0; i <= 100; i++) {
// //     if (i % 5 == 0 && i % 3 == 0){
// //         console.log("FizzBuzz")
// //     } else if (i % 5 == 0) {
// //         console.log("Buzz")
// //     } else if (i % 3 == 0) {
// //         console.log("Fizz")
// //     } else {
// //         console.log(i)
// //     }
// // }



// //===========Wild Wild Life

// // Use the following arrays to answer the questions below 
// //(name,species ,age, hometown): You should be modifying the elements 
// //by accessing them. It is up to you which methods to use.

// const wolfy = ["Wolfy", "wolf", 16, "Yukon Territory"]
// const sharky = ["Sharky", "shark", 20, "Left Coast"]
// const plantee = ["Plantee", "plant",  5000 , "Mordor"]
// const porgee = ["Porgee", "Porg", 186, "Ahch-To"]
// const dart = ["D'Art" , "Demogorgan Dog", 2, "Upside Down"]

// //1
// //Plantee just had her birthday; change Plantee's array to reflect her being a year older.

// plantee[2] = 5001

// console.log(plantee[2])

// //2
// //Change Wolfy's hometown from "Yukon Territory" to "Gotham City".

// wolfy[3] = "Gotham City"

// console.log(wolfy[3])


// //3
// //Give D'Art a second hometown by adding "Hawkins"

// dart.push("Hawking")

// console.log(dart)

// //4
// //Porgee decides that Wolfy can't be named "Wolfy" anymore. 
// //Remove "Wolfy" from the wolfy array and replace it with "Gameboy".

// wolfy.shift()

// wolfy.unshift("Gameboy")

// console.log(wolfy)

// //=============================


// //==========Yell at the Ninja Turtles

// //1
// //Create an array with the members of the ninja turtles 
// //(Donatello, Leonardo, Raphael, Michaelangelo)

// const ninjaTurtles = ["Dantello", "Leonardo", "Raphael", "Michaelangelo"]

// //2
// //Use a for of loop (not a typo - try it out! Try a for of loop) 
// //to call toUpperCase() on each of them and print out the result.

// // for (let i = 0; i < ninjaTurtles.length; i++) {
// //     ninjaTurtles[i] = ninjaTurtles[i].toUpperCase()
// // }

// // console.log(ninjaTurtles)


// // for (const turtle of ninjaTurtles) {
// //     console.log(turtle.toUpperCase())
// // }


// // //=============Methods, Revisted


// // const favMovies = ['Jaws', 'The Fellowship of the Ring', 'Howl\'s Moving Castle', 'Django Unchained', 'Cloud Atlas', 'The Usual Suspects', 'Toy Story', 'Conan the Barbarian', 'Titanic', 'Harry Potter', 'Fried Green Tomatoes', 'Volver', 'Oculus', 'Seven', 'Black Panther', 'Harry Potter', 'Imitation of Life', 'Snatch', 'Fast and Furious'];

// // //Console log: the index of Titanic
// // console.log(favMovies[8])


// // //Do the following and console.log the final results (I have included some 
// // //thought questions, you don't have to write out an answer for those marked as such):

// // //1.
// // //use the .sort method Thought question: what did this do to the array? 
// // //Did it permanently alter it?

// // favMovies.sort()
// // console.log(favMovies)

// // //It sorted the movies in Alphabetical order, Yes it did permanently alter it


// // //2.
// // //Use the method pop

// // favMovies.pop()
// // console.log(favMovies)

// // //3.
// // //push "Guardians of the Galaxy"

// // favMovies.push("Guardians of the Galax")
// // console.log(favMovies)

// // //4.
// // //Reverse the array

// // favMovies.reverse()
// // console.log(favMovies)

// // //5.
// // //Use the shift method

// // favMovies.shift()
// // console.log(favMovies)

// // //6.
// // //unshift - what does it return?

// // favMovies.unshift()
// // console.log(favMovies)

// // //It returns the length of the array

// // //7.
// // // splice "Django Unchained" and add "Avatar" (try finding the index of 
// // //"Django Unchained", instead of counting it yourself) Thought question: 
// // //did this permanently alter our array?

// // favMovies.splice(14, 0, "Avatar")

// // console.log(favMovies)

// // //Yes it permanently did alter our array

// // //8.
// // //slice the last half of the array (challenge yourself and try to programatically 
// // //determine the middle of the array rather than counting it and hard coding it) 
// // //- Thought question: did this permanently alter our array?

// // const lasthalf = favMovies.slice(9, 19)
// // console.log(lasthalf)

// // //No slice created a new array

// // //9. store the value of your slice in a variable, console.log it - Thought question: what is going on here?
// // console.log(lasthalf)

// // //10. console.log your final results

// // console.log(favMovies)

// // //11.After running the above tasks, console.log the index of "Fast and Furious" 
// // //-We removed it from the array, what value do we get when we look for the 
// // //index of something that is not in the array?

// // favMovies[13] = "Volver"

// // console.log(favMovies[13])


// // //12.
// // //Thought question: that we declared the variable favMovies with const, and 
// // //yet, we were allowed to change the array. Weird? Should we have used let?

// // //No because const will still allow you the change the data stored in arrays


// //=================Where is Waldo


// const whereIsWaldo = [["Timmy", "Frank"], "Eggbert",
//                     ["Lucinda", "Jacc", "Neff", "Snoop"],
//                     ["Petunia", ["Baked Goods", "Waldo"]]]

// //Remove Eggbert (hint look at the slice/splice method(s))
// whereIsWaldo.splice(whereIsWaldo.indexOf("Eggbert"), 1)


// // Change "Neff" to "No One"
// whereIsWaldo[1][2] = "No One"


// //Access and console.log "Waldo"

// console.log(whereIsWaldo[2][1][1])

// //=================Excited Kitten

// //Write code that logs "Love me, pet me! HSSSSSS!" 20 times.

// let odd = "Love me, pet me! HSSSSSS!"
// let even = ["...human...why you taking pictures of me?...", "...the catnip made me do it...", "...why does the red dot always get away..."]

// //========Part I HTML & CSS===============

// //Rank you comfort with the following material on a scale of 0 - 5:

// // 4 -I feel pretty good about the material, but some extra 
// //review would help


// //============Part II: JavaScript Reps=======================

// //===========Easy Going

// //Write a for loop that will log the numbers 1 through 20.

// // for (let i = 1; i <= 20; i++){
// //     console.log(i)
// // }

// //==============Get Even

// // Write a for loop that will log only the even numbers in 
// //0 through 200.

// // for (let i = 0; i <= 200; i++) {
// //     if (i % 2 == 0) {
// //         console.log(i)
// // }
// // }

// //=============Fizz Buzz

// //This is a classic problem that you should get really comfortable solving. If you've solved it before, try to make it more elegant and short.

// //Write a javascript application that logs all numbers from 
// //1 - 100.

// //If a number is divisible by 3 log "Fizz" instead of the number.

// //If a number is divisible by 5 log "Buzz" instead of the number.

// //If a number is divisible by 3 and 5 log "FizzBuzz" instead of the number.

// // for (let i = 0; i <= 100; i++) {
// //     if (i % 5 == 0 && i % 3 == 0){
// //         console.log("FizzBuzz")
// //     } else if (i % 5 == 0) {
// //         console.log("Buzz")
// //     } else if (i % 3 == 0) {
// //         console.log("Fizz")
// //     } else {
// //         console.log(i)
// //     }
// // }



// //===========Wild Wild Life

// // Use the following arrays to answer the questions below 
// //(name,species ,age, hometown): You should be modifying the elements 
// //by accessing them. It is up to you which methods to use.

// const wolfy = ["Wolfy", "wolf", 16, "Yukon Territory"]
// const sharky = ["Sharky", "shark", 20, "Left Coast"]
// const plantee = ["Plantee", "plant",  5000 , "Mordor"]
// const porgee = ["Porgee", "Porg", 186, "Ahch-To"]
// const dart = ["D'Art" , "Demogorgan Dog", 2, "Upside Down"]

// //1
// //Plantee just had her birthday; change Plantee's array to reflect her being a year older.

// plantee[2] = 5001

// console.log(plantee[2])

// //2
// //Change Wolfy's hometown from "Yukon Territory" to "Gotham City".

// wolfy[3] = "Gotham City"

// console.log(wolfy[3])


// //3
// //Give D'Art a second hometown by adding "Hawkins"

// dart.push("Hawking")

// console.log(dart)

// //4
// //Porgee decides that Wolfy can't be named "Wolfy" anymore. 
// //Remove "Wolfy" from the wolfy array and replace it with "Gameboy".

// wolfy.shift()

// wolfy.unshift("Gameboy")

// console.log(wolfy)

// //=============================


// //==========Yell at the Ninja Turtles

// //1
// //Create an array with the members of the ninja turtles 
// //(Donatello, Leonardo, Raphael, Michaelangelo)

// const ninjaTurtles = ["Dantello", "Leonardo", "Raphael", "Michaelangelo"]

// //2
// //Use a for of loop (not a typo - try it out! Try a for of loop) 
// //to call toUpperCase() on each of them and print out the result.

// // for (let i = 0; i < ninjaTurtles.length; i++) {
// //     ninjaTurtles[i] = ninjaTurtles[i].toUpperCase()
// // }

// // console.log(ninjaTurtles)


// // for (const turtle of ninjaTurtles) {
// //     console.log(turtle.toUpperCase())
// // }


// // //=============Methods, Revisted


// // const favMovies = ['Jaws', 'The Fellowship of the Ring', 'Howl\'s Moving Castle', 'Django Unchained', 'Cloud Atlas', 'The Usual Suspects', 'Toy Story', 'Conan the Barbarian', 'Titanic', 'Harry Potter', 'Fried Green Tomatoes', 'Volver', 'Oculus', 'Seven', 'Black Panther', 'Harry Potter', 'Imitation of Life', 'Snatch', 'Fast and Furious'];

// // //Console log: the index of Titanic
// // console.log(favMovies[8])


// // //Do the following and console.log the final results (I have included some 
// // //thought questions, you don't have to write out an answer for those marked as such):

// // //1.
// // //use the .sort method Thought question: what did this do to the array? 
// // //Did it permanently alter it?

// // favMovies.sort()
// // console.log(favMovies)

// // //It sorted the movies in Alphabetical order, Yes it did permanently alter it


// // //2.
// // //Use the method pop

// // favMovies.pop()
// // console.log(favMovies)

// // //3.
// // //push "Guardians of the Galaxy"

// // favMovies.push("Guardians of the Galax")
// // console.log(favMovies)

// // //4.
// // //Reverse the array

// // favMovies.reverse()
// // console.log(favMovies)

// // //5.
// // //Use the shift method

// // favMovies.shift()
// // console.log(favMovies)

// // //6.
// // //unshift - what does it return?

// // favMovies.unshift()
// // console.log(favMovies)

// // //It returns the length of the array

// // //7.
// // // splice "Django Unchained" and add "Avatar" (try finding the index of 
// // //"Django Unchained", instead of counting it yourself) Thought question: 
// // //did this permanently alter our array?

// // favMovies.splice(14, 0, "Avatar")

// // console.log(favMovies)

// // //Yes it permanently did alter our array

// // //8.
// // //slice the last half of the array (challenge yourself and try to programatically 
// // //determine the middle of the array rather than counting it and hard coding it) 
// // //- Thought question: did this permanently alter our array?

// // const lasthalf = favMovies.slice(9, 19)
// // console.log(lasthalf)

// // //No slice created a new array

// // //9. store the value of your slice in a variable, console.log it - Thought question: what is going on here?
// // console.log(lasthalf)

// // //10. console.log your final results

// // console.log(favMovies)

// // //11.After running the above tasks, console.log the index of "Fast and Furious" 
// // //-We removed it from the array, what value do we get when we look for the 
// // //index of something that is not in the array?

// // favMovies[13] = "Volver"

// // console.log(favMovies[13])


// // //12.
// // //Thought question: that we declared the variable favMovies with const, and 
// // //yet, we were allowed to change the array. Weird? Should we have used let?

// // //No because const will still allow you the change the data stored in arrays







// //=================Where is Waldo


// const whereIsWaldo = [["Timmy", "Frank"], "Eggbert",
//                     ["Lucinda", "Jacc", "Neff", "Snoop"],
//                     ["Petunia", ["Baked Goods", "Waldo"]]]

// //Remove Eggbert (hint look at the slice/splice method(s))
// whereIsWaldo.splice(whereIsWaldo.indexOf("Eggbert"), 1)


// // Change "Neff" to "No One"
// whereIsWaldo[1][2] = "No One"


// //Access and console.log "Waldo"

// console.log(whereIsWaldo[2][1][1])






// //=================Excited Kitten

// //Write code that logs "Love me, pet me! HSSSSSS!" 20 times.

// let comment = "Love me, pet me! HSSSSSS!";
// let kittyTalk = ["...human...why you taking pictures of me?...",
//                 "...the catnip made me do it...", 
//                 "...why does the red dot always get away..."];

// let randomNum = 0;
             
// for(let meow = 1; meow <= 20; meow++) {
//     console.log(comment);
//     if(meow % 2 === 0) {
//         randomNum = Math.floor(Math.random() * kittyTalk.length);
//         console.log(kittyTalk[randomNum]);
//     }
// }




//==============Find the Median

// const nums = [14,11,16,15,13,16,15,17,19,11,12,14,19,11,15,17,11,18,12,17,12,71,18,15,12];
// let median;
// let temp;


// temp = nums.length / 2;
// if(temp % 2 !== 0) {
//     temp = Math.floor(temp);
// }

// if(nums.length % 2 !== 0){
//     median = ((nums[temp] + (nums[temp + 1])) / 2);
// } else {
//     median = nums[temp];
// }

// console.log(median);

//Another way

// nums.sort();
// console.log(nums[Math.floor(nums.length / 2)]);




