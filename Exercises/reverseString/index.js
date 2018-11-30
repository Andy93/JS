// Reverse a String - given a string reverse the order of its characters

function reverseString(str){
  const arr = str.split('');
  arr.reverse();
  return arr.join('');
}

// function reverseString(str){
//   return str.split('').reverse().join('');
// }

// function reverseString(str){
//   let reversed ='';
//   for(let character of str){
//     reversed = character + reversed;
//   }
//   return reversed;
// }

// function reverseString(str){
//   return str.split('').reduce((reversed, character) => {
//     return character + reversed;
//   }, '');
// }

module.exports = reverseString;
