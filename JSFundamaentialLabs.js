// -----------------------------------------------------question 1

// What are the results of these expressions? (answer first, then use console.log() to check)

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

// -----------------------------------------------------question 2

// Which of the below are not giving the right answer? Why are they not correct? How can we fix them?

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

// -----------------------------------------------------question 3

// Which of the following console.log messages will print? Why?

if (0) console.log('#1 zero is true') // this will not print because 0 is not a value
if ("0") console.log('#2 zero is true') // this will print because the sting has a value
if (null) console.log('null is true') // this will not print because the value is null with = to 0
if (-1) console.log('negative is true') // this will print because it has a value
if (1) console.log('positive is true') // this will print because it has a value 

// -----------------------------------------------------question 4

// Rewrite this if using the ternary/conditional operator '?'. Test it with different values for a and b. What does the ‘+=’ do?

let a = 6, b = 4;
let result = `${a} + ${b} is `;
// if (a + b < 10) {
// result += 'less than 10';
// } else {
// result += 'greater than 10';
// }

a + b < 10 ? result += 'less than 10' : result += 'greater than 10'

console.log(result)

// -----------------------------------------------------question 5

//  Rewrite the following function using: a) function expression syntax, and b) arrow function syntax. Test each version to make sure they work the same.

// function getGreeting(name) {
//     return 'Hello ' + name + '!';
//     }

// a - Funtion expression syntax

// const getGreeting = function(name) {
//     return `Hello ${name}!`
// }
// console.log(getGreeting('Glen'))

// b - arrow function syntax

const getGreeting = (name) => { return `Hello ${name}!` }
console.log(getGreeting('Glen'))


// -----------------------------------------------------question 6

// a) Complete the inigo object by adding a lastName property and including it in the
// greeting.
// b) Complete getCatchPhrase so that if the person argument has 6 fingers, it instead
// prints his famous catch phrase to the console. HINT: see
// https://www.imdb.com/title/tt0093779/characters/nm0001597.
// // c) Update getCatchPhrase to use arrow function syntax and a conditional operator.

const westley = {
    name: 'Westley',
    numFingers: 5
}
const rugen = {
    name: 'Count Rugen',
    numFingers: 6
}
const inigo = {
    firstName: 'Inigo',
    lastName: 'Montoya',
    greeting(person) {
        let greeting = `Hello ${person.name}, my name is ${this.firstName} ${this.lastName}. `;
        console.log(greeting + getCatchPhrase(person));
    },
    // getCatchPhrase(person) {
    //   if (person.numFingers === 6) {
    //     return "You killed my father. Prepare to die"
    //   } else return "Nice to meet you."
    // }
}
const getCatchPhrase = (person) => person.numFingers === 6 ? "You killed my father. Prepare to die" : "Nice to meet you."
inigo.greeting(westley)
inigo.greeting(rugen)

// -----------------------------------------------------question 7

// The following object represents a basketball game and keeps track of the score as the
// game progresses.
// a) Modify each of the methods so that they can be ‘chained’ together and the last line of
// the example code works
// b) Add a new method to print the full time final score
// c) Add a new object property to keep track of the number of fouls and a method to
// increment it, similar but separate to the score. Include the foul count in the half time and
// full time console messages
// d) Test your object by chaining all the method calls together in different combinations.

const basketballGame = {
    score: 0,
    foul: 0,
    freeThrow() {
        this.score++;
        return this
    },
    basket() {
        this.score += 2;
        return this
    },
    threePointer() {
        this.score += 3;
        return this
    },
    halfTime() {
        console.log(`Halftime score is ${this.score} with ${this.foul} fouls`);
        return this
    },
    finalScore() {
        console.log(`Final score is ${this.score} with ${this.foul} fouls`)
    },
    foulBall() {
        this.foul++
        return this
    }
}
//modify each of the above object methods to enable function chaining as below:
basketballGame.basket().freeThrow().freeThrow().basket().foulBall().threePointer().halfTime().threePointer().basket().freeThrow().foulBall().threePointer().finalScore();

// -----------------------------------------------------question 8

// The object below represents a single city.
// a) Write a function that takes an object as an argument and uses a for...in loop to access
// and print to the console each of those object properties and their values. Test it using
// the sydney object below.
// b) Create a new object for a different city with different properties and call your function
// again with the new object.

const sydney = {
    name: 'Sydney',
    population: 5_121_000,
    state: 'NSW',
    founded: '26 January 1788',
    timezone: 'Australia/Sydney'
}

const newCity = {
    name: 'madeup',
    population: 3_214_000,
    state: 'mup',
    founded: '14 march 2024',
    timezone: 'zonetime'
}

const printObj = (city) => {

    for (let object in city) {
        console.log(`${object} - ${city[object]}`)
    }

}

printObj(sydney)
printObj(newCity)

// -----------------------------------------------------question 9 

// Use the following variables to understand how JavaScript stores objects by reference.
// a) Create a new moreSports variable equal to teamSports and add some new sport
// values to it (using push and unshift)
// b) Create a new dog2 variable equal to dog1 and give it a new value
// c) Create a new cat2 variable equal to cat1 and change its name property
// d) Print the original teamSports, dog1 and cat1 variables to the console. Have they
// changed? Why?
// e) Change the way the moreSports and cat2 variables are created to ensure the
// originals remain independent

let teamSports = ['Hockey', 'Cricket', 'Volleyball'];
let dog1 = 'Bingo';
let cat1 = { name: 'Fluffy', breed: 'Siberian' };

const moreSports = [...teamSports];
moreSports.push('soccer')
moreSports.unshift('swimming')

let dog2 = dog1
dog2 = 'doggy'

const cat2 = {...cat1};
cat2.name = 'bob'

console.log(teamSports)
console.log(dog1)
console.log(cat1)

console.log(moreSports)
console.log(dog2)
console.log(cat2)

// -----------------------------------------------------question 10

// The following constructor function creates a new Person object with the given name and
// age values.
// a) Create a new person using the constructor function and store it in a variable
// b) Create a second person using different name and age values and store it in a separate
// variable
// c) Print out the properties of each person object to the console
// d) Rewrite the constructor function as a class called PersonClass and use it to create a
// third person using different name and age values. Print it to the console as well.
// e) Add a canDrive method to both the constructor function and the class that returns true
// if the person is old enough to drive.

function Person(name, age) {
    this.name = name;
    this.age = age;
    this.human = true;
    this.canDrive = this.age > 16 ? "Can Drive" : "Cannot Drive"
}

class PersonClass {
    constructor(name, age, human) {
        this.name = name
        this.age = age
        this.human = true
        this.canDrive = this.age > 16 ? "Can Drive" : "Cannot Drive"
    }
}

let person1 = new Person('Joe', '80')
let person2 = new Person('jerremy', '14')
let person3 = new PersonClass('candice', '57')

console.log(person1)
console.log(person2)
console.log(person3)