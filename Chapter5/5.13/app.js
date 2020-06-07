document.write("<h1>The Lifetime Supply Calculator</h1><br><br>");

var snack = "Lays Wavy"
var currentAge = 22;
var maximumAge = 65;
var amount = 3;

var snackNeeded = 3 * 365 * (maximumAge - currentAge);

document.write("Favorite Snack: " + snack);
document.write("<br>Current age: " + currentAge);
document.write("<br>Estimated Maximum age: " + maximumAge);
document.write("<br>Amount of snacks per day: " + amount);
document.write("<br>You will need " + snackNeeded + " to last you until the ripe old age " + maximumAge);