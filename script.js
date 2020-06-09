// Assignment Code



var generateBtn = document.querySelector("#generate");
 
var lowercase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
var uppercase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
// Had to omit the grace accent character in order for code to continue working 
var specialChar = [" ", "!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "\", "]", "^", "_", "{", "|", "}", "~"]

// Write password to the #password input
function myFunction() {
    alert("I am an alert box!");
  }

myFunction();

function writePassword() {
    console.log(writePassword)
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  for 

  passwordText.value = password;

}
document.querySelector('.rateRecipe.btns-one-small').click();

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
