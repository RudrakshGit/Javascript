function getCelcius(f){
     const celcius = (f - 32) * 5/9;
     return celcius;
}

console.log(`The temp in celcius is: ${getCelcius(50)}\xB0C.`)