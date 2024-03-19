// ---------------------------------------------------------question 1 

// Create a function that takes a string as a parameter and returns the string with the first
// character of each word changed into a capital letter, as in the example below. Test it with
// different strings.


// function ucFirstLetters(value) {
//   split = value.split(" ")
//   let finnishedWord = ""
// split.forEach(item => {


//    finnishedWord += item[0].toUpperCase()

//    finnishedWord += item.slice(1)

//    console.log(`I am in ${finnishedWord}`)

// });

//     }

const ucFirstLetters = (value) => {
  return value.toLowerCase().split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')

  // return value.replace(/(^\w|\s\w)/g, m => m.toUpperCase())  //found this but dont fully understand how it works 
}

console.log(ucFirstLetters("orange monkey")) //Los Angeles


// ---------------------------------------------------------question 2

// Create a function truncate(str, max) that truncates a given string of text if its total
// length is greater than the max length. It should return either the truncated text, with an
// ellipsis (...) added to the end if it was too long, or the original text otherwise.
// b) Write another variant of the truncate function that uses a conditional operator.

console.log(truncate('This text will be truncated if it is too long', 25))
// This text will be truncat...

function truncate(str, max) {
  // if (str.length > max) {
  //   return str.substring(0, max) + "..."
  // }else
  // return str

  return str.length > max ? str.substring(0, max) + "..." : str
}

// ---------------------------------------------------------question 3 

// Use the following animals array for the below tasks. Test each one by printing the result to
// the console. Review the following link for tips:

// https://developer.mozilla.org/en-
// US/docs/Web/JavaScript/Reference/Global_Objects/Array

// a) Add 2 new values to the end
// b) Add 2 new values to the beginning
// c) Sort the values alphabetically
// d) Write a function replaceMiddleAnimal(newValue) that replaces the value in the
// middle of the animals array with newValue
// e) Write a function findMatchingAnimals(beginsWith) that returns a new array
// containing all the animals that begin with the beginsWith string. Try to make it work
// regardless of upper/lower case.

const animals = ['Tiger', 'Giraffe']
animals.push("Monkey", "Cow")
animals.unshift("Sheep", "Zebra")
animals.sort()

console.log(animals.length % 2)

middle = animals.length / 2 - 1


function replaceMiddleAnimal(newValue) {
  if (animals.length % 2 === 0) {
    animals.splice(middle, 1, newValue)
    console.log(animals)
  } else {
    animals.splice(middle, 1, newValue)
    console.log(animals)
  }
}
console.log(animals)
console.log(replaceMiddleAnimal("Pig"))

let newAnimals = []

function findMatchingAnimals(beginsWith) {
  console.log(animals.map(word => word.charAt(0)))

  for (let i = 0; i < animals.length; i++) {
    if (beginsWith.toUpperCase() === animals[i].charAt(0).toUpperCase()){
      console.log("match")
    newAnimals.push(animals[i])

    } else{
      console.log("no match")
    }
  }
  console.log(newAnimals)
}

findMatchingAnimals("c")


// ---------------------------------------------------------question 4 

// Write a function camelCase(cssProp) that changes dash-separated CSS properties like
// 'margin-left' into camel-cased 'marginLeft'.
// The function should remove all dashes, and uppercase the first letter of each word after a
// dash.
// b) Create variants of the camelCase function that use different types of for loops, and
// c) with and without the conditional operator.

// function camelCase(cssProp) {
//  split = cssProp.split('-')
//  if (split.length > 1) {
//   cssProp = split[0] + split[1].charAt(0).toUpperCase() + split[1].slice(1)
//  }
// // console.log(split)
// // console.log(cssProp)
// return cssProp
// }

// ---------------------------------------------------------------------------------------------------------------------------------------------------
// todo B and C---------------------------------------------------------------------------------------------------------------------------------------
// ---------------------------------------------------------------------------------------------------------------------------------------------------




// console.log(camelCase('margin-left')) // marginLeft
// console.log(camelCase('background-image')) // backgroundImage
// console.log(camelCase('display')) // display


// ---------------------------------------------------------question 5

// Decimal number operations in JavaScript can lead to unexpected results, as in the
// following:
let twentyCents = 0.20
let tenCents = 0.10
console.log(`${twentyCents} + ${tenCents} = ${twentyCents + tenCents}`)
// 0.2 + 0.1 = 0.30000000000000004
// We can sometimes avoid this using the toFixed function to force the number of decimal
// places as below, but it’s not always useful:
let fixedTwenty = twentyCents.toFixed(2);
console.log(twentyCents.toFixed(2))
let fixedTen = tenCents.toFixed(2);
console.log(typeof(tenCents.toFixed(2)))
console.log(fixedTwenty + fixedTen) //why is this not working?
// a) Explain why the above code returns the wrong answer:
// Answer: the toFixed converts them both to a string which makes them not add together as expected and just adds onto the end 

// b) Create a function currencyAddition(float1, float2) which safely adds the two
// decimal numbers float1 and float2 and returns the correct float result.

function currencyAddition(float1, float2) {
 let addNum = parseFloat(float1) + parseFloat(float2)
 return console.log(addNum)
}

currencyAddition(0.1,0.6)

// c) Create a function currencyOperation(float1, float2, operation) which
// safely performs the given operation (either +, -, / or *) on the two numbers and returns

// the correct float result. https://developer.mozilla.org/en-
// US/docs/Web/JavaScript/Reference/Statements/switch may be useful.

// function currencyOperation(float1, float2, operation) {
//   switch (operation) {
//     case "+":
//       console.log(parseFloat(float1) + parseFloat(float2))
//     break;

//     case "-":
//       console.log(parseFloat(float1) - parseFloat(float2))
//     break;

//     case "/":
//       console.log(parseFloat(float1) / parseFloat(float2))
//     break;

//     case "*":
//       console.log(parseFloat(float1) * parseFloat(float2))
//     break;
//   }
  
// }

// currencyOperation(3.2, 8.6, "*")

// d) (Extension) Extend the above function to include a fourth argument numDecimals
// which allows the operation to support different amounts of decimal places from 1 to 10.
// HINT: Assume 2 decimal places for b) and c) and use a multiplication factor. Test with
// different values as well as the below:

// ---------------------------------------------------------------------------------------------------------------------------------------------------
// to do D why are they not equeling to true? --------------------------------------------------------------------------------------------------------
// ---------------------------------------------------------------------------------------------------------------------------------------------------
let = numWthfloat = ""
function currencyOperation(float1, float2, operation, numDecimals) {
  switch (operation) {
    case "+":
      numWthfloat = parseFloat(float1) + parseFloat(float2)
      console.log(numWthfloat.toFixed(numDecimals))
    break;

    case "-":
      numWthfloat = parseFloat(float1) - parseFloat(float2)
      console.log(numWthfloat.toFixed(numDecimals))
    break;

    case "/":
      numWthfloat = parseFloat(float1) / parseFloat(float2)
      console.log(numWthfloat.toFixed(numDecimals))
    break;

    case "*":
      numWthfloat = parseFloat(float1) * parseFloat(float2)
      console.log(numWthfloat.toFixed(numDecimals))
    break;
  }
  
}

currencyOperation(3.2, 8.6, "*", 5)
console.log(0.3 == currencyAddition(0.1, 0.2)) // true
console.log(0.3 == currencyOperation(0.1, 0.2, '+')) // true

// ---------------------------------------------------------question 6 

// Create a function unique(duplicatesArray) which takes an array parameter that may
// include duplicates. Your function should return an array containing only the unique values
// from duplicatesArray.
// Test with the following arrays and create another one of your own.

const colours = ['red', 'green', 'blue', 'yellow', 'orange', 'red', 'blue', 'yellow']
const testScores = [55, 84, 97, 63, 55, 32, 84, 91, 55, 43]
console.log(unique(colours)) // [ 'red', 'green', 'blue', 'yellow', 'orange' ]
console.log(unique(testScores)) // [ 55, 84, 97, 63, 32, 91, 43 ]
