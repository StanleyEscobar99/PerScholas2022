//W2D1 HW: Javascript Functions

//============== 1 =================
// 1.(completed above) Define a function, as a function declaration, maxOfTwoNumbersthat takes two numbers as arguments and returns the largest of them. If they are the same, return that number. Use the if-else construct or a ternary expression - the Math.max method is not allowed.

console.log("1.")

function maxOfTwoNumbers(x, y) {
  if (x >= y) {
    return x;
  } else {
    return y;
  }
}

console.log(maxOfTwoNumbers(233,32))




//============== 2 =================
// 2. Define a function, as a function expression, maxOfThreethat takes three numbers as arguments and returns the largest of them. Again, the Math.max method is not allowed.

console.log("2.")

function maxOfThree(num1,num2,num3) {
    if (num1 > num2) {       
        return num1;
    } else if (num2 > num3) {
        return num2
    } else {
        return num3
    }
}
console.log(maxOfThree(333,33,3))






//============== 3 =================
//3. Define a function, as a function declaration, isCharAVowelthat takes a character as an argument and returns true if it is a vowel, false otherwise.

console.log("3.")

let vowels = "aeiouAEIOU"

    function isCharAVowel(char) { 
        for (let i = 0; i < vowels.length; i++){
            if (char === vowels[i]){
                return true
            }
        }
        return false
    }
  console.log(isCharAVowel("a"))







//================== 4 ====================
// 4. Define a function, as a function expression, sumArraythat takes an array of numbers and returns the sum of those numbers. For example, sumArray([2, 4, 5]);would return 11.

console.log("4.")

let sum = 0

    const sumArray = (args) => {
        args.forEach((num) => { sum += num})
        return sum
}
console.log(sumArray([5, 15, 10]))







//=================== 5 ====================
// 5.Define a function, as a function declaration, multiplyArraythat takes an array of numbers and returns the product of those numbers. For example, multiplyArray([2, 4, 5]);would return 40.

console.log("5.")

function multiplyArray(numArr){
    let newSum = 1 // 350
    numArr.forEach(function(times){
       newSum *= times
   })
return newSum
}
  console.log(multiplyArray([2, 4, 5]))







//============== 6 ====================
// 6.Define a function, as a function expression, numArgsthat returns the number of arguments passed to the function when called.

console.log("6.")

let numArgs = (...args) => {
    console.log(args.length)
}
numArgs(1,3,6,8)









//================== 7 =====================
// 7.Define a function, as a function declaration, reverseStringthat takes a string, reverses the characters, and returns it. For example, reverseString('rockstar');would return the string "ratskcor".

console.log("7.")

function reversesString(string) {
    let backWards = ""
    for (let i = string.length - 1; i >= 0; i--) {
        backWards += string[i]
    }
    return backWards
}

console.log(reversesString('rockstar'))






// ===================== 8 =================
// 8.Define a function, as a function expression, longestStringInArraythat takes an array of strings as an argument and returns the length of the longest string.

console.log("8.")

const longestStringInArrayB = function(arrayOfNums) {
  let longest = 0;

  for(let x = 0; x < arrayOfNums.length; x++) {
      if(arrayOfNums[x].length > longest) {
          longest = arrayOfNums[x].length;
      }
  }

  return longest
  
}
console.log(longestStringInArrayB(["first", "second", "thrid"]))







//================== 9 =====================
// 9.Define a function, as a function declaration, stringsLongerThanthat takes an array of strings and a number as arguments, and returns an array of the strings that are longer than the number passed in. For example, stringsLongerThan(['say', 'hello', 'in', 'the', 'morning'], 3);would return ["hello", "morning"].

console.log("9.")

function stringsLongerThan(x, y) {
    let w = []
     x.forEach((check) => {
        if (check.length > y){
            w.push(check)
        }
    })
console.log(w)
}

(stringsLongerThan(["say", "hello", "one", "morning"], 4))



