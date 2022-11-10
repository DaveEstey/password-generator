// Assignment code here
var lCaseArr = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z",]
var uCaseArr = lCaseArr.map(element => { return element.toUpperCase(); });
var symbolsArr = ["!", '"', "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", ']', "^", "_", "`", "{", "|", "}", "~"];
var numbersArr = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var errorMsg = "Please try again!";


function getMultipleRandom(arr, num) { // Shuffles the final string of options and chooses a section based off of character number input 'pLegnth'
  var shuffled = [...arr].sort(() => 0.5 - Math.random());

  return shuffled.slice(0, num);
}

function generatePassword() {

  var pLength = prompt("Pick a Password length, type the number 8 up to 24 ");

  if (pLength >= 8 && pLength <= 24) { // Makes sure that pLength is acceptable size
    var passArr = []; // Scrambled version of the full array needed
    var totalPassArr = []; // Full array needed
    // Input parameters
    var lCase = confirm("Click OK if you want lowercase letters.");
    var uCase = confirm("Click OK if you want Uppercase letters.");
    var symbols = confirm("Click OK if you want special symbols.");
    var numbers = confirm("Click OK if you want numeric symbols.");

    // Creating the total array needed to be used
    if (lCase || uCase || symbols || numbers) {
      if (lCase) {
        totalPassArr = totalPassArr.concat(lCaseArr);
      }
      if (uCase) {
        totalPassArr = totalPassArr.concat(uCaseArr);
      }
      if (symbols) {
        totalPassArr = totalPassArr.concat(symbolsArr);
      }
      if (numbers) {
        totalPassArr = totalPassArr.concat(numbersArr);
      }

      passArr = getMultipleRandom(totalPassArr, pLength);
      var newPass = passArr.join(''); // Making the array into readable string
      return newPass;

    } else {
      window.alert("You can't have a password with nothing in it, silly!"); // error for no input parameters
      return errorMsg;
    }

  } else {
    window.alert("invalid choice! Click the button to try again!"); // error for invalid password length
    return errorMsg;
  }
}

var generateBtn = document.querySelector("#generate");
// Get references to the #generate element


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);