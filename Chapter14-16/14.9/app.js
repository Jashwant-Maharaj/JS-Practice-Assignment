var colors = ["Red", "Black", "Orange", "Yellow"];
document.write("Initial array: <br>" + colors);

var addAtBeginning = prompt("Enter the color you want to add at beginning: ");
colors.unshift(addAtBeginning);
document.write("<br><br>Array after adding color at beginning: <br>" + colors);

var addAtEnd = prompt("Enter the color you want to add at end: ");
colors.push(addAtEnd);
document.write("<br><br>Array after adding color at end: <br>" + colors);

var addAgainAtBeginning1 = prompt("Enter the first color you want to add at beginning: ");
var addAgainAtBeginning2 = prompt("Enter the second color you want to add at beginning: ");
colors.unshift(addAgainAtBeginning1, addAgainAtBeginning2);
document.write("<br><br>Array after adding two colors at beginning: <br>" + colors);

colors.shift();
document.write("<br><br>Array after deleting color at beginning: <br>" + colors);

colors.pop();
document.write("<br><br>Array after deleting color at end: <br>" + colors);

var position = +prompt("At what index you want to add color: ");
var colorToAdd = prompt("Which color you want to add at that index: ");
colors.splice(position, 0, colorToAdd);
document.write("<br><br>Array after adding color at desired index: <br>" + colors);

var positionToDelete = +prompt("At what index you want to delete color: ");
var numbersOfColorsToDelete = +prompt("Enter the number of colors you want to delete: ");
colors.splice(positionToDelete, numbersOfColorsToDelete);
document.write("<br><br>Array after deleting desired number of colors at desired index: <br>" + colors);
