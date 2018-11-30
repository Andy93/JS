// IIFE - Immediately Invoke Function Expression

(function (){
    var number= Math.random() * 10;
    console.log(number >= 5);
})();

(function (simplifier){
    var number= Math.random() * 10;
    console.log(number >= 5 -simplifier);
})(5);
