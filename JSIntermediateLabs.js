// question 1 

// Create a function that takes a string as a parameter and returns the string with the first
// character of each word changed into a capital letter, as in the example below. Test it with
// different strings.



console.log(ucFirstLetters("los angeles") ) //Los Angeles

function ucFirstLetters(value) {
  split = value.split(" ")
  
split.forEach(item => {
    
   let finnishedWord = ""
   finnishedWord += item[0].toUpperCase()

   finnishedWord += item.slice(1)

   console.log(finnishedWord)
    
});
   
    }