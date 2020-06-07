var num = +prompt("Enter the number of table you want: ");
document.write("Table of " + num + "<br>");

for(var i = 1; i <= 10; i++){
    var product = num * i;
    document.write("<br>" + num + " x " + i + " = " + product);
}