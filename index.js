function isPalindrome(word) {
  // Write your algorithm here
  let result = stringCheck(word);
  if (result == true) {
    return true;
  } else {
    return false;
  }
}

function stringCheck(word) {
  let back = word.length - 1;
  for (let i = 0; i < back; i++) {
    let x = word[i];
    let y = word[back - i];
    if (x != y) {
      return false;
    }
  }
  return true;
}

/* 
  Add your pseudocode here
  
  check the character at opposite sides
  word => compare w == d;
  write a function that 
  iterate over the string,front and backwards
  boolean check for the both
*/

/*
  Add written explanation of your solution here
  the function stringCheck iterates over the characters
  in the word argument; from left to right and right to left
  it then checks if the values dont match with != to
  return false. if they match it exits loop and returns true;

  then i assign stringCheck to result in fun isPalindrome() then
  boolean check for true or false.
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
