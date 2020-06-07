var a = 2;
var b = 1;

document.write("The value of a is: " + a + " and b is: " + b + "<br>");
var i = --a;
document.write("<br>The value of --a is: " + i);
var j = i - --b;
document.write("<br>The value of --a - --b is: " + j);
var k = j + ++b;
document.write("<br>The value of --a - --b + ++b is: " + k);
var result = k + b--;
document.write("<br>The value of --a - --b + ++b + b-- is: " + result);
document.write("<br><br>Result is: " + result);