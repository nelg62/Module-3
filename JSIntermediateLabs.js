// // ---------------------------------------------------------question 1 

// // Create a function that takes a string as a parameter and returns the string with the first
// // character of each word changed into a capital letter, as in the example below. Test it with
// // different strings.


// // function ucFirstLetters(value) {
// //   split = value.split(" ")
// //   let finnishedWord = ""
// // split.forEach(item => {


// //    finnishedWord += item[0].toUpperCase()

// //    finnishedWord += item.slice(1)

// //    console.log(`I am in ${finnishedWord}`)

// // });

// //     }

// const ucFirstLetters = (value) => {
//   return value.toLowerCase().split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')

//   // return value.replace(/(^\w|\s\w)/g, m => m.toUpperCase())  //found this but dont fully understand how it works 
// }

// console.log(ucFirstLetters("orange monkey")) //Los Angeles


// // ---------------------------------------------------------question 2

// // Create a function truncate(str, max) that truncates a given string of text if its total
// // length is greater than the max length. It should return either the truncated text, with an
// // ellipsis (...) added to the end if it was too long, or the original text otherwise.
// // b) Write another variant of the truncate function that uses a conditional operator.

// console.log(truncate('This text will be truncated if it is too long', 25))
// // This text will be truncat...

// function truncate(str, max) {
//   // if (str.length > max) {
//   //   return str.substring(0, max) + "..."
//   // }else
//   // return str

//   return str.length > max ? str.substring(0, max) + "..." : str
// }

// // ---------------------------------------------------------question 3 

// // Use the following animals array for the below tasks. Test each one by printing the result to
// // the console. Review the following link for tips:

// // https://developer.mozilla.org/en-
// // US/docs/Web/JavaScript/Reference/Global_Objects/Array

// // a) Add 2 new values to the end
// // b) Add 2 new values to the beginning
// // c) Sort the values alphabetically
// // d) Write a function replaceMiddleAnimal(newValue) that replaces the value in the
// // middle of the animals array with newValue
// // e) Write a function findMatchingAnimals(beginsWith) that returns a new array
// // containing all the animals that begin with the beginsWith string. Try to make it work
// // regardless of upper/lower case.

// const animals = ['Tiger', 'Giraffe']
// animals.push("Monkey", "Cow")
// animals.unshift("Sheep", "Zebra")
// animals.sort()

// console.log(animals.length % 2)

// middle = animals.length / 2 - 1


// function replaceMiddleAnimal(newValue) {
//   if (animals.length % 2 === 0) {
//     animals.splice(middle, 1, newValue)
//     console.log(animals)
//   } else {
//     animals.splice(middle, 1, newValue)
//     console.log(animals)
//   }
// }
// console.log(animals)
// console.log(replaceMiddleAnimal("Pig"))

// let newAnimals = []

// function findMatchingAnimals(beginsWith) {
//   console.log(animals.map(word => word.charAt(0)))

//   for (let i = 0; i < animals.length; i++) {
//     if (beginsWith.toUpperCase() === animals[i].charAt(0).toUpperCase()){
//       console.log("match")
//     newAnimals.push(animals[i])

//     } else{
//       console.log("no match")
//     }
//   }
//   console.log(newAnimals)
// }

// findMatchingAnimals("c")


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

// function camelCase(cssProp) {
//   split = cssProp.split('-')
//   split.forEach((element, element2,) => {
//     if (element2 == 0) {
//      console.log(element.toLowerCase())
//     } else {
//      console.log(element.charAt(0).toUpperCase() + split[element2].slice(1))
//     }
//   });
// }

// function camelCase(cssProp) {
//   split = cssProp.split('-')
//   if (split.length > 1) {
//     let items = ""
  
//   split.forEach((element, element2,) => {
//     if (element2 == 0) {
//     items += element.toLowerCase()
//     } else {
//     items += element.charAt(0).toUpperCase() + split[element2].slice(1)
//     }
//   });
//   return items
// }else{
//   return cssProp.toLowerCase()
// }
// }

function camelCase(cssProp) {
  split = cssProp.split('-')
  cssProp =  split.length > 1 ? splitloop() : cssProp.toLowerCase()
  return cssProp
}

function splitloop() {
  let items = ""
  split.forEach((element, element2) => {
  cssProp = element2 == 0 ? items += element.toLowerCase() : items += element.charAt(0).toUpperCase() + split[element2].slice(1)
  });
  return cssProp
}



console.log(camelCase('margin-left-orange-apple-mango')) // marginLeft
console.log(camelCase('background-image')) // backgroundImage
console.log(camelCase('display')) // display


// // ---------------------------------------------------------question 5

// // Decimal number operations in JavaScript can lead to unexpected results, as in the
// // following:
// let twentyCents = 0.20
// let tenCents = 0.10
// console.log(`${twentyCents} + ${tenCents} = ${twentyCents + tenCents}`)
// // 0.2 + 0.1 = 0.30000000000000004
// // We can sometimes avoid this using the toFixed function to force the number of decimal
// // places as below, but it’s not always useful:
// let fixedTwenty = twentyCents.toFixed(2);
// console.log(twentyCents.toFixed(2))
// let fixedTen = tenCents.toFixed(2);
// console.log(typeof(tenCents.toFixed(2)))
// console.log(fixedTwenty + fixedTen) //why is this not working?
// // a) Explain why the above code returns the wrong answer:
// // Answer: the toFixed converts them both to a string which makes them not add together as expected and just adds onto the end 

// // b) Create a function currencyAddition(float1, float2) which safely adds the two
// // decimal numbers float1 and float2 and returns the correct float result.

// function currencyAddition(float1, float2) {
//  let addNum = parseFloat(float1) + parseFloat(float2)
//  return console.log(addNum)
// }

// currencyAddition(0.1,0.6)

// // c) Create a function currencyOperation(float1, float2, operation) which
// // safely performs the given operation (either +, -, / or *) on the two numbers and returns

// // the correct float result. https://developer.mozilla.org/en-
// // US/docs/Web/JavaScript/Reference/Statements/switch may be useful.

// // function currencyOperation(float1, float2, operation) {
// //   switch (operation) {
// //     case "+":
// //       console.log(parseFloat(float1) + parseFloat(float2))
// //     break;

// //     case "-":
// //       console.log(parseFloat(float1) - parseFloat(float2))
// //     break;

// //     case "/":
// //       console.log(parseFloat(float1) / parseFloat(float2))
// //     break;

// //     case "*":
// //       console.log(parseFloat(float1) * parseFloat(float2))
// //     break;
// //   }
  
// // }

// // currencyOperation(3.2, 8.6, "*")

// // d) (Extension) Extend the above function to include a fourth argument numDecimals
// // which allows the operation to support different amounts of decimal places from 1 to 10.
// // HINT: Assume 2 decimal places for b) and c) and use a multiplication factor. Test with
// // different values as well as the below:

// // ---------------------------------------------------------------------------------------------------------------------------------------------------
// // to do D why are they not equeling to true? --------------------------------------------------------------------------------------------------------
// // ---------------------------------------------------------------------------------------------------------------------------------------------------
// let = numWthfloat = ""
// function currencyOperation(float1, float2, operation, numDecimals) {
//   switch (operation) {
//     case "+":
//       numWthfloat = parseFloat(float1) + parseFloat(float2)
//       console.log(numWthfloat.toFixed(numDecimals))
//     break;

//     case "-":
//       numWthfloat = parseFloat(float1) - parseFloat(float2)
//       console.log(numWthfloat.toFixed(numDecimals))
//     break;

//     case "/":
//       numWthfloat = parseFloat(float1) / parseFloat(float2)
//       console.log(numWthfloat.toFixed(numDecimals))
//     break;

//     case "*":
//       numWthfloat = parseFloat(float1) * parseFloat(float2)
//       console.log(numWthfloat.toFixed(numDecimals))
//     break;
//   }
  
// }

// currencyOperation(3.2, 8.6, "*", 5)
// console.log(0.3 == currencyAddition(0.1, 0.2)) // true
// console.log(0.3 == currencyOperation(0.1, 0.2, '+')) // true

// // ---------------------------------------------------------question 6 

// // Create a function unique(duplicatesArray) which takes an array parameter that may
// // include duplicates. Your function should return an array containing only the unique values
// // from duplicatesArray.
// // Test with the following arrays and create another one of your own.

// const colours = ['red', 'green', 'blue', 'yellow', 'orange', 'red', 'blue', 'yellow']
// const testScores = [55, 84, 97, 63, 55, 32, 84, 91, 55, 43]
// const peopleNames = ['Glen', 'Dave', 'Fred', 'Jessie', 'Glen', 'Fred', 'Jessie', 'Mac']

// function unique(duplicatesArray) {
//   console.log(Array.from(new Set(duplicatesArray)))
// }

// console.log(unique(colours)) // [ 'red', 'green', 'blue', 'yellow', 'orange' ]
// console.log(unique(testScores)) // [ 55, 84, 97, 63, 32, 91, 43 ]
// console.log(unique(peopleNames))


// // ---------------------------------------------------------question 7

// // Use the following array of book objects to practice the array functions for map, find and
// // filter. Test each of your answers to the below tasks.

// const books = [
//   { id: 1, title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', year: 1925 },
//   { id: 2, title: 'To Kill a Mockingbird', author: 'Harper Lee', year: 1960 },
//   { id: 3, title: '1984', author: 'George Orwell', year: 1949 },
//   { id: 4, title: 'Brave New World', author: 'Aldous Huxley', year: 1932 },
//   { id: 5, title: 'The Catcher in the Rye', author: 'J.D. Salinger', year: 1951 },
//   ];

// //   a) Write a function getBookTitle(bookId) that uses the find function to return the
// // title of the book object with the matching id.

// function getBookTitle(bookId) {
//   let idNum = books.find(book => book.id == bookId)
//   console.log(idNum)
// }

// getBookTitle(1)

// // b) Write a function getOldBooks() that uses the filter function to return all book
// // objects written before 1950.

// function getOldBooks() {
//   let oldBooks = books.filter(book => book.year < 1950)
//   console.log(oldBooks)
// }

// getOldBooks()

// // c) Write a function addGenre() that uses the map function to add a new genre property
// // to all of the above books, with the value ‘classic’.

// function addGenre() {
//   let newGenres = books.map(book => ({...book, value: "Classic"}) )
//   console.log(newGenres)
// }

// addGenre()

// // d) (Extension) Write a function getTitles(authorInitial) that uses map and
// // filter together to return an array of book titles for books written by authors whose
// // names start with authorInitial.

// function getTitles(authorInitial) {
//   let bookFilter = books.filter(book => book.author.charAt(0).toUpperCase() == authorInitial.toUpperCase())
//   let bookMap = bookFilter.map(book => book.title)
//   console.log(bookMap)
// }

// getTitles('j')

// // e) (Extension) Write a function latestBook() that uses find and forEach to get the
// // book with the most recent publication date.
// biggestYear = []
// function latestBook() {
//   books.forEach((item) => {
//     biggestYear.push(item.year)
//   })
// console.log(biggestYear)
// let chosenNum = Math.max(...biggestYear)
//   let maxYear = books.find(book => book.year == chosenNum)
//   console.log(maxYear)
// }

// latestBook()


// ---------------------------------------------------------question 8

// // The following code creates a new Map object for storing names beginning with A, B, or C
// // with their phone numbers.

// const phoneBookABC = new Map() //an empty map to begin with
// phoneBookABC.set('Annabelle', '0412312343')
// phoneBookABC.set('Barry', '0433221117')
// phoneBookABC.set('Caroline', '0455221182')

// // a) Create a new phoneBookDEF Map to store names beginning with D, E or F

// const phoneBookDEF = new Map()

// // b) Initialise the contents of phoneBookDEF by passing in an array of keys/values

// phoneBookDEF.set('Dan', '021341564')
// phoneBookDEF.set('Emily', '03849539')
// phoneBookDEF.set('Fred', '0234826349')

// // c) Update the phone number for Caroline

// phoneBookABC.set('Carolie', '0543876538')

// // d) Write a function printPhoneBook(contacts) that prints the names and phone
// // numbers in the given Map

// function printPhoneBook(contacts) {
//   contacts.forEach((number, contact) => {
//     console.log(`${contact}: ${number}`)
//   });
 
// }

// // printPhoneBook(phoneBookABC)
// // printPhoneBook(phoneBookDEF)

// // e) Combine the contents of the two individual Maps into a single phoneBook Map

// const allNumbers = new Map([...phoneBookABC, ...phoneBookDEF])

// // f) Print out the full list of names in the combined phone book

// printPhoneBook(allNumbers)


// // ---------------------------------------------------------question 9

// // Given the below salaries object, perform the following tasks.

// let salaries = {
//   "Timothy" : 35000,
//   "David" : 25000,
//   "Mary" : 55000,
//   "Christina" : 75000,
//   "James" : 43000
//   };

// //   a) Write a function sumSalaries(salaries) that calculates and returns the total of all salaries
// let totalPrice = 0
// function sumSalaries(salaries) {
//   let salVal = Object.values(salaries)
//   salVal.forEach(element => {
//     totalPrice += element
//   });
//   console.log(totalPrice)
// }

// sumSalaries(salaries)

// // b) Write a function topEarner(salaries) that calculates and returns the name of the person
// // earning the highest salary

// function topEarner(salaries) {
//   let topIncomeobj = Object.values(salaries)
//   let topIncome = Math.max(...topIncomeobj)
//   let namePerson = Object.keys(salaries).find(key => salaries[key] === topIncome)
//   console.log(`Top Earner ${namePerson} With $${topIncome}`)
// }

// topEarner(salaries)


// ---------------------------------------------------------question 10

// // 10.The following code uses the Date object to print the current time and the number of hours
// // that have passed today so far. Extend the code to do the following:

// const today = new Date();
// console.log('Current time is ' + today.toLocaleTimeString())
// console.log(today.getHours() + ' hours have passed so far today')

// // a) Print the total number of minutes that have passed so far today

// hours = today.getHours()
// HoursInMins = hours * 60
// minutes = today.getMinutes()
// console.log(minsInDay = HoursInMins + minutes)

// // b) Print the total number of seconds that have passed so far today
// secondsInMins = minsInDay * 60
// seconds = today.getSeconds()
// console.log(TotaSecInDay = secondsInMins + seconds)

// // c) Calculate and print your age as: 'I am x years, y months and z days old'



// const birthDay = new Date('1997-05-29')

// birthDay.toLocaleString()

// totalYear = today.getFullYear() - birthDay.getFullYear()

// MonthsInYear = totalYear * 12

// TotalMonths = MonthsInYear + birthDay.getMonth()

// daysInMonths = TotalMonths * 30 

// totalDays = daysInMonths + birthDay.getDate()

// console.log(`I am ${totalYear} years, ${TotalMonths} months and ${totalDays} days old`)

// // d) Write a function daysInBetween(date1, date2) which calculates and returns the amount
// // of days in between the two given dates.

// function daysInBetween(date1, date2) {
// let combineddates = date1.getTime() - date2.getTime()
// console.log(Days = combineddates / (1000 * 60 * 60 * 24))
// console.log(Months = Days / 12)
// console.log(Years = Months / 31)
// }

// daysInBetween(today, birthDay)