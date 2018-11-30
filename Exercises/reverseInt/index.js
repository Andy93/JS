// given a integer, return reverse order of numbers

function reverseInt(number){
  return parseInt(number.toString().split('').reverse().join('')) * Math.sign(number);
}

module.exports = reverseInt;
