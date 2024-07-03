const myString = 'developer';

//solution 1;
let newstring = myString.charAt(0).toUpperCase() + myString.slice(1);
//solution 2;
newstring = myString[0].toUpperCase() + myString.substring(1);
//solution 3;
newstring = `${myString[0].toUpperCase()}${myString.slice(1)}`;

console.log(newstring);
