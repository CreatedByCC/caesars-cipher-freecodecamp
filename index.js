function rot13(str) {
    str = str.toUpperCase();
    let result = "";
  
    for (let c = 0; c < str.length; c++){   //loop through each character in the string
      const charCode = str.charCodeAt(c);   //assign the char code to var charcode
      
      if (charCode > 64 && charCode <= 90) {    //test if it is a letter between A (charCode = 65) and Z (charCode = 90)
        //if it's outside the range, find the difference (90 - (charCode + 13)) and add 64 to push it back into A-Z range
        result += String.fromCharCode((charCode + 13) <= 90 ? (charCode + 13) : (charCode + 13) % 90 + 64); //convert charCode back to str and add the letter to result
      } 
      else {
        result += String.fromCharCode(charCode); //if it's not a letter convert back to str and add to result - to keep spaces and other non-alphabetical characters
      }
    }
  
    //console.log(result)
    return result;
  }
  
  rot13("SERR PBQR PNZC"); // console: FREE CODE CAMP
  rot13("SERR CVMMN!"); // console: FREE PIZZA!