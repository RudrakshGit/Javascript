const numbers = [1,2,3,4,5];
const doubleNum = numbers.map((number) => number * 2);
console.log(String(doubleNum));

//chain map method

const sqranddouble = numbers
.map((number) => Math.sqrt(number))
.map((sqrt) => sqrt * 2);

console.log(sqranddouble);

//chaining different methods

const evenNumbers = numbers
.filter((number) => number % 2 === 0)
.map((number) => number * 2);

console.log(evenNumbers);