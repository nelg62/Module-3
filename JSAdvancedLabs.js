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


// ------------------------------question 6 
console.log('This is question 6')

// Use the Function prototype to add a new delay(ms) function to all functions, which can
// be used to delay the call to that function by ms milliseconds.

// function multiply(a, b) {
//     console.log( a * b );
//     }

    Function.prototype.delay = function delay(ms) {
return function (...a) {
        setTimeout(() => {multiply.apply(multiply,a)},ms)
}
    }


// multiply.delay(500)
    multiply.delay(500)(5, 5); // prints 25 after 500 milliseconds
    multiply.delay(1000)(5,5,5,5)
    

//     a) Use the example multiply function below to test it with, as above, and assume that all
// delayed functions will take two parameters
// b) Use apply to improve your solution so that delayed functions can take any number of
// parameters
// c) Modify multiply to take 4 parameters and multiply all of them, and test that your
// delay prototype function still works.

function multiply(a,...b) {
    bTogether = b.reduce((first,second) => first*second)
    console.log(a * bTogether)
    }
