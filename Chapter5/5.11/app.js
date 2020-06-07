document.write("<h1>Age Calculator</h1><br><br>");

var currentYear = new Date().getFullYear();
var birthYear = +prompt("Enter your birth year: ");
var age = currentYear - birthYear;
var age2 = age - 1 ;

document.write("Current Year: " + currentYear);
document.write("<br>Birth Year: " + birthYear);
document.write("<br>You are either " + age2 + " or " + age  + " years old");
