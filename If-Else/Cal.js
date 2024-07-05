function calculate(num1, num2, operator){
    let result;
    
    if(operator == '+'){
        result = num1 + num2;
    } 
    else if(operator == '-'){
        result = num1 - num2;
    } 
    else if(operator == '*'){
        result = num1 * num2;
    } 
    else if(operator == '/'){
        result = num1 / num2;
    } 
    else if(operator == '%'){
        result = num1 % num2;
    }          
    else {
        result = 'Invalid Operator';
    }    
    console.log(result);
    return result;
};
calculate(10, 50, '#');