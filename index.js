console.log(1/0) // division by zero = Infinity
console.log(-1/0) // negative division by zero = -Infinity
console.log("not a number" / 1) // invalid mathematical operation = NaN

// // function checkAge returns a value when called
// function checkAge(age) {
//     if (age >= 18) {
//     return 'adult'; // if the condition is true, return this string and exit
//     }
//     return 'non-adult'; // if the condition was false, return this string and exit
//     }
//     console.log( checkAge(21) ) // adult
//     console.log( checkAge(13) ) // non-adult

    const checkAge = (age) => {
    return (age >= 18 ? 'adult' : 'non-adult')
    }

    console.log(checkAge(20))

    function test(value) {
        return value || "not a value"
    }