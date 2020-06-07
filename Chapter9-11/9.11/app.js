var num1 = +prompt("Enter first number: ");
var num2 = +prompt("Enter second number: ");
var opr = prompt("Enter operation you want to perform: ");
var result; 

if(opr === '+'){
    result = num1 + num2;
}
if(opr === '-'){
    result = num1 - num2;
}
if(opr === '*' || opr === 'x'){
    result = num1 * num2;
}
if(opr === '/'){
    result = num1 / num2;
}
if(opr === '%'){
    result = num1 % num2;
}

alert("The result is: " + result);