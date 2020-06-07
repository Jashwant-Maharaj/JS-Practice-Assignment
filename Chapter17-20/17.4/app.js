var num = +prompt("Enter a number to show its multiplication table");
var length = +prompt("Enter length of multiplication table");

document.write("Multiplication table of " + num);
document.write("Length " + length + "<br>");

for(var i = 1; i <= length; i++){
    document.write("<br>" + num + " x " + i + " = " + num * i);
}