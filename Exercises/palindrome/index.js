// given a string, if reverse equals original return true, else false

function palindrome(str){
  const reversed = str.split('').reverse().join('');
  return str === reversed;
}

// function palindrome(str){
//   return str.split('').every((char , i) => {
//     return char === str[str.length -i-1];
//   });
// }

module.exports = palindrome;
