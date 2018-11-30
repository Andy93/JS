// First Class Funtions : Funtions as Arguments

var numbers = [20, 40, 60, 80, 100];

function arrayFunc(arr, fn){
    arrRes = [];
    for(var i = 0; i < arr.length; i++){
        arrRes.push(fn(arr[i]));
    }
    return arrRes;
}

function numberMinus(x){
    return 100 - x;
}

function compareNumber(x){
    return x >=40;
}

var newNumbers = arrayFunc(numbers, numberMinus);
var numBool = arrayFunc(newNumbers, compareNumber);

console.log(newNumbers);
console.log(numBool);

// First Class Funtions : Funtions Returning Functions

function question(job){
    return function(name){
        if(job === 'Engineer'){
            console.log(name + ', what are you working on?');
        } else {
            console.log(name + ', what is your profession?');
        }
    }
}

var mainQuestion = question('Engineer');
mainQuestion('John');

mainQuestion = question('');
mainQuestion('John');

//Another way of saying it.

question('Engineer')('Dave');
question('')('Kev');
