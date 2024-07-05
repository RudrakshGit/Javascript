function calculate(num1, num2, operator){
    let result;

    switch(operator){
        case '+':
            result = num1 + num2;
            break;
        case '-':
            result = num1 - num2;
            break;
        case '*':
            result = num1 * num2;
            break;
        case '/':
            result = num1 / num2;
            break;
        case '%':
            result = num1 % num2;
            break;    
        default:
            result = 'Invalid Operator';

        };
        console.log(result);
        return result;

    };
  calculate(10, 5 , '+')