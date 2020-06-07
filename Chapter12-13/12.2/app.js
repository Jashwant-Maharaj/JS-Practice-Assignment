var num1 = +prompt("Enter first number: ");
var num2 = +prompt("Enter second number: ");
var max;

if(num1 === num2){
    alert("Both number are equal.");
}
else{
    if(num1 > num2){
        max = num1;
    }
    if(num2 > num1){
        max = num2;
    }
    alert(max + " is bigger number.")
}
