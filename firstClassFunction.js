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
