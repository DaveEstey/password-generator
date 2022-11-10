// Assignment code here
var lCaseArr = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z",]
var uCaseArr = lCaseArr.map(element => { return element.toUpperCase(); });
var symbolsArr = ["!",'"',"#","$","%","&","'","(",")","*","+",",","-",".","/",":",";","<","=",">","?","@","[",']',"^","_","`","{","|","}","~"];
var numbersArr = ["0","1","2","3","4","5","6","7","8","9"];
var passArr = [];
var newPassArr = [];
var random = Math.floor(Math.random() * lCaseArr.length);

function generatePassword(){
  
  const pLength = prompt("Pick a Password length, type the number 8 up to 24 ");  
  
  
  var lCase = confirm("Click OK if you want lowercase letters.");
  
  
 // var uCase = confirm("Click OK if you want Uppercase letters.");
  
  
 // var symbols = confirm("Click OK if you want special symbols.");
  
  
 // var numbers = comfirm("Click OK if you want numeric symbols.");

  

if (pLength >= 8 && pLength <= 24){
  console.log("1");
for (var i=0; i < pLength; i++){
 // if (!lCase){//&& !uCase && !symbols && !numbers){
      //window.alert("A password can't consist of nothing, silly! Try again!")
    // }else 
    if(lCase) {// && !uCase && !symbols && !numbers)
    
        
      
    }
    /* }else if(lCase && uCase && !symbols && !numbers){
      passArr = lCaseArr.concat(uCaseArr);

    }else if(lCase && !uCase && symbols && !numbers){
      passArr = lCaseArr.concat(symbolsArr);
    }else if(lCase && !uCase && !symbols && numbers){

    }else if(lCase && uCase && symbols && !numbers){

    }else if(lCase && uCase && !symbols && numbers){

    }else if(!lCase && uCase && symbols && numbers){ 

    }else if{
 */
  }
//}else {
  //window.alert("invalid Choice, try again");
//}
//  return newPassArr = newPassArr.join('');
return newPass;
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
generateBtn.addEventListener("click", generatePassword);
