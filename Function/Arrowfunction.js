//Arrow function syntax
const add = (a,b) =>{
    return a + b;
};
console.log(add(10,5));

//Implicit Return
const sub = (a,b) => a - b;
console.log(sub(10,5));

//Can leave off() with a single parameter
const mul = a => a*2;
console.log(mul(10));

//Returning to objecct
const object = () => ({
    name: 'Mukesh',
});
console.log(object(name));