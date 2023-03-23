let option = prompt( 'Enter option you want to do: +, -, * чи /' );
console.log(option);
    
let num1 = Number(prompt( 'Enter the first value, please.' ));
console.log(num1)
let num2 = Number(prompt( 'Enter the second value, please.' ));
console.log(num2);
    
switch (option) {
    case '+':
        result = num1 + num2;
        console.log(result);
        break;
    case '-':
        result = num1 - num2;
        console.log(result);
        break;
    case '*':
        result = num1 * num2;
        console.log(result);
        break;
    case '/':
        if (num2) {
          result = num1 / num2;
        } else {
          result = 'infinity';
        }
        console.log(result);
        break;
      default:
        result = 'choose the option';
        console.log(result);
    }

    alert(num1 + option + num2 + '=' + result);

