var num1 = +prompt("Enter first number: ");
var num2 = +prompt("Enter second number: ")

var sub = num1 - num2;
var mul = num1 * num2;
var div = num1 / num2;
var mod = num1 % num2;

document.write("Difference between " + num1 + " and " + num2 + " is " + sub);
document.write("<br>Product of " + num1 + " and " + num2 + " is " + mul);
document.write("<br>Quotient of " + num1 + " over " + num2 + " is " + div);
document.write("<br>Remainder of " + num1 + " over " + num2 + " is " + mod);