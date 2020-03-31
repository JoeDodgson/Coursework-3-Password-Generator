// Assignment of variables
var generateBtn = document.querySelector("#generate");
var passwordLength = "";
var charsLower = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var charsUpper = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "Q", "X", "Y", "Z"];
var charsNumeric = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
var charsSpecial = ["~", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "-", "_", "+", "=", "{", "}", "[", "]", "|", "\\", "/", ":", ";", '"', "'", "<", ">", ",", ".", "?"];

// Write password to the #password input
function writePassword() {

  //Reset variables used in the function
  var charsPossible = [];
  var charsPossibleCurrent = 0;
  var passwordText = "";

  //Clear out any passwords which are already displayed in the text area
  document.getElementById("password").innerHTML = "";

  //Welcome message. OK=continue. Cancel=close.
  var continueBool = confirm("Welcome to Joe's password generator.\nClick 'OK' to continue. Or click 'Cancel' to close");
  
  if (continueBool == false) {
    alert("Sorry you didn't want to generate a password. If you change your mind, click the 'Generate Password' button")
    return;
  }
  else {
  }

  //Password length prompt
  var passwordLength = prompt("Please enter the number of characters you would like your password to be (between 8 and 128 characters).\nClick OK to confirm your selection");
  
  //Change password length to an integer
  passwordLength = parseFloat(passwordLength);

  //Validate input password length: exclude non-numbers, non-decimals and outside 8 to 128 range
  if (passwordLength >= 8 && passwordLength <= 128 && passwordLength == Math.round(passwordLength)){
  }
  else {
    alert("There was a problem with the the password length you entered. Remember to enter a whole number between 8 and 128");
    return;
  }

  //Ask whether to include Lower case
  var includeLower = confirm("Would you like to include Lower case characters in your password?\nOK = yes. Cancel = no.");

  //Store the current length of the charsPossible array
  charsPossibleCurrent = charsPossible.length;

  //Add Lower case characters to the charsPossible array if selected
  if(includeLower == true) {
    for (i = charsPossibleCurrent; i < charsPossibleCurrent + charsLower.length; i++) {
      charsPossible[i] = charsLower[i];
    }
  }
  else {
  }


  //Ask whether to include Upper case
  var includeUpper = confirm("Would you like to include Upper case characters in your password?\nOK = yes. Cancel = no.");

  //Store the current length of the charsPossible array
  charsPossibleCurrent = charsPossible.length;

  //Add Upper case characters to the charsPossible array if selected
  if(includeUpper == true) {
    for (i = charsPossibleCurrent; i < charsPossibleCurrent + charsUpper.length; i++) {
      charsPossible[i] = charsUpper[i-charsPossibleCurrent];
    }
  }
  else {
  }


  //Ask whether to include Numeric characters
  var includeNumeric = confirm("Would you like to include Numeric characters in your password?\nOK = yes. Cancel = no.")

  //Store the current length of the charsPossible array
  charsPossibleCurrent = charsPossible.length;

  //Add Numeric characters to the charsPossible array if selected
  if(includeNumeric == true) {
    for (i = charsPossibleCurrent; i < charsPossibleCurrent + charsNumeric.length; i++) {
      charsPossible[i] = charsNumeric[i-charsPossibleCurrent];
    }
  }
  else {
  }


  //Ask whether to include Special characters
  var includeSpecial = confirm("Would you like to include Special characters in your password?\nOK = yes. Cancel = no.")

  //Store the current length of the charsPossible array
  charsPossibleCurrent = charsPossible.length;

  //Add Special characters to the charsPossible array if selected
  if(includeSpecial == true) {
    for (i = charsPossibleCurrent; i < charsPossibleCurrent + charsSpecial.length; i++) {
      charsPossible[i] = charsSpecial[i-charsPossibleCurrent];
    }
  }
  else {
  }

  //Alert the user if they did not select any character types and end the function
  if(charsPossible.length == 0){
    alert("You must select at least one character type to include in your password (lower case, upper case, numeric or special characters).");
    return;
  }
  else {
  }

  //Generate the password text by randomly selecting characters from the charsPossible array
  for(i = 0; i < passwordLength; i++){
    passwordText = passwordText + charsPossible[Math.floor(charsPossible.length*Math.random())];
  }

  //Display the text in the HTML text area
  document.getElementById("password").innerHTML = passwordText;

  //Update the text to show that a password has been generated
  document.body.children[0].children[1].children[1].children[0].innerHTML = "Your generated password is:";

  //Update the outline colour of the box to be green
  document.querySelector("textarea").setAttribute("style","border: solid #00cc00;");
}

//Add event listener for 'generate password' button click. Activate writePassword function when clicked
generateBtn.addEventListener("click", writePassword);