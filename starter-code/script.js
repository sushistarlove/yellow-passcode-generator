// Assignment Code
var generateBtn = document.querySelector("#generate");
function generatePassword() {

  // WHEN I click the button to generate a password

  // THEN I am presented with a series of prompts for password criteria

    // I need a prompt asking password length (solved: mini project)

    var passwordLength = window.prompt("Enter a length between 8-128 characters")

        // conditional statement checks number of characters

        var numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

        var lowerCase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

        var upperCase = ['D', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

        var specialChar = ['-', '_', '=', '+', '/', '*', '(', ')', '&', '^', '%', '$', '#', '@', '!', '<', '>', '{', '}', '[', ']', ';', ':'];

        var charSet = "";

var charsToUse = [];

        var hasNums = confirm("Do you want numbers?");
        if(hasNums === true ) {
          charSet = "";
        }

        var hasLower = confirm("Do you want lowercase characters?");
        if(hasLower === true ) {
          charSet = "";
        }

        var hasUpper = confirm("Do you want uppercasecase characters?");
        if(hasUpper === true ) {
          charSet = "";
        }

        var hasSpecial = confirm("Do you want lowercase Characters?");
        if(hasSpecial === true ) {
          charSet = "";
        }


    // I need 4 confirms for uppercase, lowercase, special characters, and numbers
      // Need for arrays that house these characters
  // WHEN prompted for password criteria
  // THEN I select which criteria to include in the password
  // WHEN prompted for the length of the password
  // THEN I choose a length of at least 8 characters and no more than 128 characters
  // WHEN prompted for character types to include in the password
  // THEN I choose lowercase, uppercase, numeric, and/or special characters
  // WHEN I answer each prompt
  // THEN my input should be validated and at least one character type should be selected
  // WHEN all prompts are answered
  // THEN a password is generated that matches the selected criteria
  // WHEN the password is generated
  // THEN the password is either displayed in an alert or written to the page
  
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

