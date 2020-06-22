// Assignment Code

var generateBtn = document.querySelector("#generate");

// Creating an array for lowercase letters
var lowercase = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];
// Creating an array for Uppercase letters
var uppercase = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];
// Creating an array for Special Characters
var specialChar = [
  " ",
  "!",
  "#",
  "$",
  "%",
  "&",
  "'",
  "(",
  ")",
  "*",
  "+",
  ",",
  "-",
  ".",
  "/",
  ":",
  ";",
  "<",
  "=",
  ">",
  "?",
  "@",
  "[",
  "]",
  "^",
  "_",
  "{",
  "|",
  "}",
  "~",
];
// Creating an array for Numbers
var numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
// Creating an array that encompasses all four arrays above
var alltheabove = [];

var passwordLength;

// Write password to the #password input
function generatePassword() {

  
  var numbersandpasswords = prompt(
    "How many characters would you like to have in your password?"
  );

  passwordLength = numbersandpasswords;

  if (parseInt(numbersandpasswords) < 8) {
    alert("You need a minimum of 8 characters");
    generatePassword();
  } else if (parseInt(numbersandpasswords) > 128) {
    alert("There is a maximum of 128 characters");
    generatePassword();
  } else {
    var uppercase2 = confirm("Do you want Uppercase letters?");

    var lowercase2 = confirm("Do you want Lowercase letters?");
  
    var specialChar2 = confirm("Do you want Special Characters?");
  
    var numbers2 = confirm("Do you want numbers?");
  
    if (uppercase2 === true) {
      alltheabove = alltheabove.concat(uppercase);
    }
    if (lowercase2 === true) {
      alltheabove = alltheabove.concat(lowercase);
    }
    if (specialChar2 === true) {
      alltheabove = alltheabove.concat(specialChar);
    }
    if (numbers2 === true) {
      alltheabove = alltheabove.concat(numbers);
    }
   
return alltheabove

  }
 
}


function writePassword() {
  var password = generatePassword();
  var finalPassword = [];
  for (var i = 0; i < passwordLength; i++) {
    // Randomly chooses a choice from the options array. This is the Computer's guess.
    var randomIndex = Math.floor(Math.random() * password.length)
    finalPassword.push(password[randomIndex])

    
  }


    
     var passwordText = document.querySelector("#password");

     passwordText.value = finalPassword.join("");

  // Add event listener to generate button
  
}

generateBtn.addEventListener("click", writePassword);
