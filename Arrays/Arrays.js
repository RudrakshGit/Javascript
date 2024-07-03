let x;
const fruits = ['apple','banana','orange'];
const berries = ['strawberry', 'raspberry', 'blueberry'];

//fruits.push(berries.toString());


//x = `${fruits[0]} ${fruits[3]}`;
x = [...berries,...fruits];
//x = x.toString();
x = x.includes('strawberry');

//x = fruits.concat(berries);

//const arr = [1,2,[3,4],5,6];

//x = arr.flat();
console.log(x);