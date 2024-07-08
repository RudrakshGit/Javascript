//Add all of the positive numbers in the array.

const numbers = [2, -30, 50, 20, -12, -9, 7];

const positivenumbers = numbers
.filter((number) => number > 0)
.reduce((acc,cur) => acc + cur , 0);
console.log(positivenumbers);