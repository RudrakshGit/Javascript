//simple function
function sayhello(){
       console.log('Hello World!');     
} 
sayhello(); 

//more basic function
  //adding two values
function add(num1, num2){
    console.log(num1 + num2);
}

add(10,5);

 //subtracting two values
 function sub(num1, num2){
    return num1 - num2;
 }

 const subtraction = sub(10, 5);
console.log(subtraction);

//Parameters & Arguments
//Assigned argument 
function regUser(user){
    return user + ' is registered.';
}

console.log(regUser('Mukesh'));

//Default parameters
function regUser(user = 'Bot'){
    return user + ' is registered.';
}

console.log(regUser());

//Other
function regUser(user){
    if (!user){
        user = 'Bot';
    }
return user + ' is registered';
}

console.log(regUser());

//Rest Parameters(adding multiple parameters together)
function sum(...numbers){
    let total = 0;
    for (const num of numbers){
        total += num;
    }

    return total;
}

console.log(sum(1,2,3,4,5,100));

//Objects as para
function login(user){
    return `The user ${user.name} with id ${user.id} is logged in successfully.`;
}
const user = {
    name: 'Mukesh',
    id: 404,
};

console.log(login(user));
console.log(
    login({
        name: 'Sachin',
        id: 486,
    })
)

// Arrays as para

function getRandom(arr){
    const randomindex = Math.floor(Math.random() * arr.length);

    const item = arr[randomindex];

    console.log(item);

};

getRandom([1,2,3,4,5,6,7,8,9,10]);