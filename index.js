// console.log(1/0) // division by zero = Infinity
// console.log(-1/0) // negative division by zero = -Infinity
// console.log("not a number" / 1) // invalid mathematical operation = NaN

// // // function checkAge returns a value when called
// // function checkAge(age) {
// //     if (age >= 18) {
// //     return 'adult'; // if the condition is true, return this string and exit
// //     }
// //     return 'non-adult'; // if the condition was false, return this string and exit
// //     }
// //     console.log( checkAge(21) ) // adult
// //     console.log( checkAge(13) ) // non-adult

//     const checkAge = (age) => {
//     return (age >= 18 ? 'adult' : 'non-adult')
//     }

//     console.log(checkAge(20))

//     function test(value) {
//         return value || "not a value"
//     }

//     console.log(test('apple'))
//     console.log(test())


// function increaseFactory(x) {
//     return function internalFactory() {
//        x++
//        return x;
//     };
// }

// const people =  increaseFactory(30)
// console.log(people())
// console.log(people())


function cachingDecorator(origFunction) { // decorator takes a function as parameter
    const cache = new Map(); // can also include outer environment variables via a closure
    return function(x) { // decorator returns same function with extra bits - caching
    if (cache.has(x)) { // if the key exists in the cache,
    console.log('returned cached value for '+x); return cache.get(x); // read and return the result from it
    }
    let result = origFunction(x) // otherwise, call the original function and store the result
    cache.set(x, result); // then cache (remember) the result for next time
    return result;
    };
    }

let worker = {
    getMultiplier() {
    return Math.floor(Math.random() * 1_000_000); // large random number
    },
    slow(x) {
    let random = 0, goal = x * this.getMultiplier(); // needs context to work
    for (let i = 0; i < goal; i++) random++;
    console.log(`worker.slow(${x}): randomly generated goal is ${goal}`);
    return random; // return large number
    }
    };
    worker.slow(5) // works, context comes from before the dot, ie. worker
    worker.fast = cachingDecorator(worker.slow.bind(worker)) // without call/apply, context is lost
    worker.fast(3) // TypeError: Cannot read properties of undefined (reading 'getMultiplier')