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