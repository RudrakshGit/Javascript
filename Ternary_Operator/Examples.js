const age = 13;

//Using if statement

if(age >= 18){
    console.log('You can vote');
}
else{
    console.log('You cannot vote');
};

//Using ternary operator "variablename = (condition) ? value1:value2"

age >= 18 ? console.log('You can vote') : console.log('You cannot vote');

//Assigning a conditional value to a variable
const canVote = age >= 18 ? true : false;
console.log(canVote);

//Multiple operations
age >= 18 ? console.log('You can vote', true) : console.log('You cannot vote', false , 'invalid age');
