//For Loop
for (let i =1; i <= 100; i++){
    if (i % 3 === 0 && i % 5 === 0){
        console.log('FizzBuzz');
    }
    else if (i % 3 === 0){
        console.log('Fizz');
    }
    else if (i % 5 === 0){
        console.log('Buzz');
    }
    else{
        console.log(i);
    }
};

//While Loop
let x = 1;
while (x <= 100){
    if (x % 3 === 0 && x % 5 === 0){
        console.log('FizzBuzz');
    }
    else if (x % 3 === 0){
        console.log('Fizz');
    }
    else if (x % 5 === 0){
        console.log('Buzz');
    }
    else{
        console.log(x);
    }

    x++;
}