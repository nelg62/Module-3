// // ------------------------------question 1
// console.log('This is question 1')

// // makeCounter below is a decorator function which creates and returns a function that
// // increments a counter.
// // a) Create a second counter counter2 using the makeCounter function and test to see if
// // it remains independent to counter1
// // b) Modify makeCounter so that it takes an argument startFrom specifying where the
// // counter starts from (instead of always starting from 0)
// // c) Modify makeCounter to take another argument incrementBy, which specifies how
// // much each call to counter() should increase the counter value by.

// function makeCounter(startFrom, incrementBy) {
//     let currentCount = startFrom;
//     return function() {
//     console.log(currentCount += incrementBy);
//     // console.log(currentCount)
//     return currentCount;
//     };
//     }
//     let counter1 = makeCounter(10, 5);
//     let counter2 = makeCounter(20, 7)
//     counter1(); // 1
//     counter1(); // 2
//     counter1()
//     counter2()
//     counter2()
//     counter2()

//     // ------------------------------question 2
//     console.log('This is question 2')

// //     The following delayMsg function is intended to be used to delay printing a message until
// // some time has passed.
// // a) What order will the four tests below print in? Why?

// //  #4 because there is no settimout so it is instantly printed-> #3 event if it is 0 it is printed stithly after the funtion with no settimout -> #2 after  20 miliseconds -> #1  after 100miliseconds

// // b) Rewrite delayMsg as an arrow function

// const delayMsg = (msg) => {console.log(`This message will be printed after a delay: ${msg}`)}

// // c) Add a fifth test which uses a large delay time (greater than 10 seconds)

// let timerbig = setTimeout(delayMsg, 10000, "Delay by 10 seconds")

// // d) Use clearTimeout to prevent the fifth test from printing at all.

// clearTimeout(timerbig)

// // function delayMsg(msg)
// // {
// // console.log(`This message will be printed after a delay: ${msg}`)
// // }
// setTimeout(delayMsg, 100, '#1: Delayed by 100ms');
// setTimeout(delayMsg, 20, '#2: Delayed by 20ms');
// setTimeout(delayMsg, 0, '#3: Delayed by 0ms');
// delayMsg('#4: Not delayed at all')

// ------------------------------question 3
// console.log('This is question 3')

// // 'Debouncing' is a concept that refers to 'putting off' the execution of multiple, fast-timed,
// // similar requests until there's a brief pause, then only executing the most recent of those
// // requests. See https://www.techtarget.com/whatis/definition/debouncing
// // It's often used to handle fast-firing scrolling events in a browser, or to prevent multiple server
// // requests being initiated if a user clicks repeatedly on a button.
// // Using the following code to test and start with:
// // a) Create a debounce(func) decorator, which is a wrapper that takes a function func and
// // suspends calls to func until there's 1000 milliseconds of inactivity. After this 1 second
// // pause, the most recent call to func should be executed and any others ignored.

// // function debounce(func) {
// //     let timeout

// //     return () => {
// //         clearTimeout(timeout)
// //         timeout = setTimeout(() => {
// //             func.apply()
// //         },1000)
// //     }
// // }

// // b) Extend the debounce decorator function to take a second argument ms, which defines the
// // length of the period of inactivity instead of hardcoding to 1000ms

// function debounce(func, ms, msg) {
//     let timeout

//     return () => {
//         clearTimeout(timeout)
//         timeout = setTimeout(() => {
//            funcbind = func.bind()
//            return funcbind(msg)
//         },ms)
//     }
// }

// // c) Extend debounce to allow the original debounced function printMe to take an argument
// // msg which is included in the console.log statement.

// function printMe(msg) {
//     console.log(`printing debounced message ${msg}`)
//     }
//     printMe = debounce(printMe, 1000, 'this is an added message'); //create this debounce function for a)
//     //fire off 3 calls to printMe within 300ms - only the LAST one should print, after 1000ms of no calls
//     setTimeout( printMe, 100);
//     setTimeout( printMe, 200);
//     setTimeout( printMe, 300);

//     // ------------------------------question 4
//     console.log('This is question 4')

// //     The Fibonacci sequence of numbers is a famous pattern where the next number in the
// // sequence is the sum of the previous 2.
// // e.g. 1, 1, 2, 3, 5, 8, 13, 21, 34, etc.
// // a) Write a function printFibonacci() using setInterval that outputs a number in
// // the Fibonacci sequence every second.

// // function printFibonacci() {
// //     let firstNum = 0
// //     let secondNum = 1
// //     let sequence = setInterval(() => {numTogether = firstNum + secondNum
// //     firstNum = secondNum
// //     secondNum = numTogether
// //     console.log(numTogether)},1000)
// //     // return sequence
// // }
// // printFibonacci()

// // b) Write a new version printFibonacciTimeouts() that uses nested setTimeout
// // calls to do the same thing

// function printFibonacciTimeouts(time,limit) {
//         let firstNum = 0
//         let secondNum = 1
//     setTimeout(function fibloop(loopnum) {numTogether = firstNum + secondNum
//             firstNum = secondNum
//             secondNum = numTogether
//             console.log(numTogether)
//         if (loopnum < limit) setTimeout(fibloop, time, loopnum+1)
//         },time, 1)
// }

// printFibonacciTimeouts(1000, 10)

// // c) Extend one of the above functions to accept a limit argument, which tells it how many
// // numbers to print before stopping.

// // ------------------------------queston 5
// console.log('This is question 5')

// // The following car object has several properties and a method which uses them to print a
// // description. When calling the function normally this works as expected, but using it from
// // within setTimeout fails. Why?

// // there needs to be a function to give context to the set timeout the car.description i just the name and not a function

// let car = {
//     make: "Porsche",
//     model: '911',
//     year: 1964,
//     description() {

//     console.log(`This car is a ${this.make} ${this.model} from ${this.year}`);
//     }
//     };
//     car.description(); //works
//     // setTimeout(car.description, 200); //fails

// //     a) Fix the setTimeout call by wrapping the call to car.description() inside a
// // function

// // setTimeout(() => car.description(), 200)

// // b) Change the year for the car by creating a clone of the original and overriding it

// car = {...car, year: "1831" }

// // c) Does the delayed description() call use the original values or the new values from
// // b)? Why?

// // it uses the new value bacause the function call is called after the change has happened

// // d) Use bind to fix the description method so that it can be called from within
// // setTimeout without a wrapper function

// const bindcar = car.description.bind(car)
// setTimeout(bindcar, 200)

// // e) Change another property of the car by creating a clone and overriding it, and test that
// // setTimeout still uses the bound value from d)

// car = {...car, make: 'woodencar'}
// setTimeout(bindcar, 200)

// // ------------------------------question 6
// console.log('This is question 6')

// // Use the Function prototype to add a new delay(ms) function to all functions, which can
// // be used to delay the call to that function by ms milliseconds.

// // function multiply(a, b) {
// //     console.log( a * b );
// //     }

//     Function.prototype.delay = function delay(ms) {
// return function (...a) {
//         setTimeout(() => {multiply.apply(multiply,a)},ms)
// }
//     }

// // multiply.delay(500)
//     multiply.delay(500)(5, 5); // prints 25 after 500 milliseconds
//     multiply.delay(1000)(5,5,5,5)

// //     a) Use the example multiply function below to test it with, as above, and assume that all
// // delayed functions will take two parameters
// // b) Use apply to improve your solution so that delayed functions can take any number of
// // parameters
// // c) Modify multiply to take 4 parameters and multiply all of them, and test that your
// // delay prototype function still works.

// function multiply(a,...b) {
//     bTogether = b.reduce((first,second) => first*second)
//     console.log(a * bTogether)
//     }

// // ------------------------------question 7
// console.log('This is question 7')

// function Person(name, age, gender) {
//     this.name = name;
//     this.age = age;
//     this.gender = gender;
//     }

//     const person1 = new Person('James Brown', 73, 'male')

// // In JavaScript, the toString method is used to convert an object to a string representation.
// // By default, when an object is converted to a String, it returns a string that looks something
// // like [object Object].
// // However, we can define our own toString methods for custom objects to provide a more
// // meaningful string representation.
// // a) Define a custom toString method for the Person object that will format and print
// // their details

// Person.prototype.toString = function addtostring() {
//     return `name: ${this.name} age: ${this.age} gender: ${this.gender}`
// }

// // b) Test your method by creating 2 different people using the below constructor function
// // and printing them

// const person2 = new Person('Paul paul', 82, 'male')
// const person3 = new Person('Bob bob', 22, 'female')

// // c) Create a new constructor function Student that uses call to inherit from Person and
// // add an extra property cohort

// function Student(name, age, gender) {
// Person.call(this,name, age, gender)
// this.subject = 'Programing'
// }

// // d) Add a custom toString for Student objects that formats and prints their details. Test
// // with 2 students.

// const student1 = new Student('Jess jess', 33, 'male')
// const student2 = new Student('Mac mac', 22, 'male')
// Student.prototype.toString = function addtostring() {
//     return `name: ${this.name} age: ${this.age} gender: ${this.gender} subject: ${this.subject}`
// }

//     console.log('person1: '+person1) //prints person1: [object Object]
//     console.log('person2: '+person2)
//     console.log('person3: '+person3)
//     console.log('student1: '+student1)
//     console.log('student2: '+student2)

// // ------------------------------question 8
// console.log("This is question 8");

// // The following DigitalClock class uses an interval to print the time every second once
// // started, until stopped.

// class DigitalClock {
//     constructor(prefix) {
//         this.prefix = prefix;
//     }
//     display() {
//         let date = new Date();
//         //create 3 variables in one go using array destructuring
//         let [hours, mins, secs] = [
//             date.getHours(),
//             date.getMinutes(),
//             date.getSeconds(),
//         ];
//         if (hours < 10) hours = "0" + hours;
//         if (mins < 10) mins = "0" + mins;
//         if (secs < 10) secs = "0" + secs;
//         console.log(`${this.prefix} ${hours}:${mins}:${secs}`);
//     }
//     stop() {
//         clearInterval(this.timer);
//     }
//     start() {
//         this.display();
//         this.timer = setInterval(() => this.display(), 1000);
//     }
// }
// // const myClock = new DigitalClock("my clock:");
// // myClock.start();

// // a) Create a new class PrecisionClock that inherits from DigitalClock and adds the
// // parameter precision – the number of ms between 'ticks'. This precision parameter
// // should default to 1 second if not supplied.

// // class PrecisionClock extends DigitalClock {
// //   constructor(prefix, precision) {
// //     super(prefix);
// //     console.log('precision',precision);
// //     if (precision == undefined) {
// //       this.precision = 1000;
// //     } else {
// //       this.precision = precision;
// //     }
// //   }
// //   start() {
// //     setInterval(() => this.display(), this.precision);
// //   }
// // }

// // class PrecisionClock extends DigitalClock {
// //     constructor(prefix, precision = 1000) {
// //         super(prefix)
// //         this.precision = precision
// //     }
// //     start() {
// //         setInterval(() => this.display(), this.precision)
// //     }
// // }


// // // creates very fast loop will look at this later
// // const preciseClock = new PrecisionClock("percice", 3000);

// // preciseClock.start();

// // b) Create a new class AlarmClock that inherits from DigitalClock and adds the
// // parameter wakeupTime in the format hh:mm. When the clock reaches this time, it
// // should print a 'Wake Up' message and stop ticking. This wakeupTime parameter should
// // default to 07:00 if not supplied.

// class AlarmClock extends DigitalClock {
//     constructor(prefix, wakeupTime = "07:00") {
//         super(prefix)
//         this.wakeupTime = wakeupTime
//     }
//     display2() {
//         let date = new Date()

//         let [hours, mins] = [
//             date.getHours(),
//             date.getMinutes(),
//         ];

//         if (hours < 10) hours = "0" + hours;
//         if (mins < 10) mins = "0" + mins;

//         let currentTime = `${hours}:${mins}`
//         this.currentTime = currentTime
//         console.log(this.currentTime)

//         if (this.currentTime == this.wakeupTime){
//             setTimeout(() => clearInterval(this.timer2))
//             console.log("WAKE UP!!!")
//     }
//     }


//     alarm() {
//         this.display2()
//         console.log(this.currentTime)
//         console.log(this.wakeupTime)
//        this.timer2 = setInterval(() => this.display2(), 1000);
//     }
// }


// const alarm = new AlarmClock("WAKE UP", "13:59")

// alarm.alarm()

// // ------------------------------question 9
// console.log("This is question 9")

// // We can delay execution of a function using setTimeout, where we need to provide both
// // the callback function and the delay after which it should execute.
// // a) Create a promise-based alternative randomDelay() that delays execution for a
// // random amount of time (between 1 and 20 seconds) and returns a promise we can use
// // via .then(), as in the starter code below
// // b) If the random delay is even, consider this a successful delay and resolve the promise,
// // and if the random number is odd, consider this a failure and reject it
// // c) Update the testing code to catch rejected promises and print a different message
// // d) Try to update the then and catch messages to include the random delay value

// function randomDelay() {
//     // your code
//     let randomTime = Math.floor(Math.random() * (20000 - 1000 + 1)) + 1000
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if (randomTime % 2 == 0) {
//                 resolve(console.log(`even number success the number was: ${randomTime}`))
//             } else {
//                 reject(console.log(`odd number fail the number was: ${randomTime}`))
//             }
//         }, randomTime)
//     }
//     )
// }
// randomDelay().then(() => console.log('There appears to have been a delay.')).catch(() => console.log("there was an error"));


// ------------------------------question 10
console.log("This is question 10")

// Fetch is a browser-based function to send a request and receive a response from a server,
// which uses promises to handle the asynchronous response.
// The below fetchURLData uses fetch to check the response for a successful status
// code, and returns a promise containing the JSON sent by the remote server if successful
// or an error if it failed. (To run this code in a node.js environment, follow the instructions in
// the comments before the function.)
// a) Write a new version of this function using async/await
// b) Test both functions with valid and invalid URLs
// c) (Extension) Extend your new function to accept an array of URLs and fetch all of them,
// using Promise.all to combine the results.

//run 'npm init' and accept all the defaults
//run 'npm install node-fetch'
//add this line to package.json after line 5: "type": "module",
import fetch from 'node-fetch'
globalThis.fetch = fetch
function fetchURLData(url) {
let fetchPromise = fetch(url).then(response => {
if (response.status === 200) {
return response.json();
} else {
throw new Error(`Request failed with status ${response.status}`);
}

});
return fetchPromise;
}
fetchURLData('https://jsonplaceholder.typicode.com/todos/1')
.then(data => console.log(data))
.catch(error => console.error(error.message));