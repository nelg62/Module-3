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


// todo B and C




console.log(camelCase('margin-left')) // marginLeft
console.log(camelCase('background-image')) // backgroundImage
console.log(camelCase('display')) // display

