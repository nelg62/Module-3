// question 1

console.log("" + 1 + 0) // 10 the string at the start makes the + a string
console.log("" - 1 + 0) // -1 -1 + 0   
console.log(true + false) // 1  1 + 0 = 1 True=1 false=0
console.log(!true) // false   if true is not = to true which is false
console.log(6 / "3") // 2  6/3   
console.log("2" * "3") // 6    2* 3
console.log(4 + 5 + "px") // 9px   4 + 5 and addign px
console.log("$" + 4 + 5) // $45  string at start makes the rest a string 
console.log("4" - 2) // 2  minus makes the string a number
console.log("4px" - 2) // nan  4px is not a number and cannot by minused 
console.log(" -9 " + 5) // -9  5     the string has spaces and then add 5 to the end
console.log(" -9 " - 5) // -14    munus makes the sting a number and then minus the number 
console.log(null + 1) // 1     null=0  + 1
console.log(undefined + 1) // nan  undefined is not a number 
console.log(undefined == null) // true  these work simillarly were the value is nothing
console.log(undefined === null) // false they are not exactly the same as thet have differant obect types 
console.log(" \t \n" - 2) // -2  minus ignore the string and make it -2

// question 2

// we need to change the values from string to numbers 
let three = 3
// let three = "3"  was
let four = 4
// let four = "4"  was
let thirty = 30
// let thirty = "30" was
//what is the value of the following expressions?
let addition = three + four  //this is the value that will not be working because the values are strings and + does not change string numbers to numbers
// without change the value is 34  with change the value is 7 
let multiplication = three * four
// value is 12
let division = three / four
// value would be 0.75
let subtraction = three - four
// value would be -1
let lessThan1 = three < four
let lessThan2 = thirty < four

// question 3

if (0) console.log('#1 zero is true') // this will not print because 0 is not a value
if ("0") console.log('#2 zero is true') // this will print because the sting has a value
if (null) console.log('null is true') // this will not print because the value is null with = to 0
if (-1) console.log('negative is true') // this will print because it has a value
if (1) console.log('positive is true') // this will print because it has a value 