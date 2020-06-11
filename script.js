// Assignment Code



var generateBtn = document.querySelector("#generate");
 
var lowercase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
var uppercase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
var specialChar = [" ", "!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "]", "^", "_", "{", "|", "}", "~"]
var numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]

var alltheabove = []
// Write password to the #password input
function generatePassword() {
    var numbersandpasswords = prompt("How many characters would you like to have in your password?");
    if (numbersandpasswords < 8)  {
      alert("You need a minimum of 8 characters")
      generatePassword() 
    } else if (numbersandpasswords > 128) {
      alert("There is a maximum of 128 characters")
      generatePassword()
    }``
    var uppercase2 = confirm("Do you want Uppercase letters?")
    
    var lowercase2 = confirm("Do you want Lowercase letters?")

    var specialChar2 = confirm("Do you want Special Characters?")
  
    var numbers2 = confirm("Do you want numbers?")
    
    if (uppercase2 === true){
      alltheabove = alltheabove.concat(uppercase)
    }
    if (lowercase2 === true){
      alltheabove = alltheabove.concat(lowercase)
    }
    if (specialChar2 === true){
      alltheabove = alltheabove.concat(specialChar)
    }
    if (numbers2 === true){
      alltheabove = alltheabove.concat(numbers)
    }
    console.log(alltheabove)
}

function writePassword() {
    console.log(writePassword)
  var password = generatePassword();
  var passwordText = document.querySelector("#password");


  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
