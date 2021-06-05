// Assignment Code
var generateBtn = document.querySelector("#generate");
function generatePassword() {
  // WHEN I click the button to generate a password
  // THEN I am presented with a series of prompts for password criteria
    // I need a prompt asking password length (solved: mini project)
    var passwordLength = window.prompt("Enter a length between 8-128 characters")

        // conditional statement checks number of characters
        var charSet = "";
        
        if( charTypeLower === "numeric" ) {
          charSet = "0123456789";
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

