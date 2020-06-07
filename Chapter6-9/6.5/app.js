var num = +prompt("Enter the number of table you want: ");

if(num === 0){
    num = 5;
}

document.write("Table of " + num + "<br><br>");

for(var i = 1; i <= 10; i++){
    product = num * i;
    document.write(num + " x " + i + " = " + product + "<br>");
}