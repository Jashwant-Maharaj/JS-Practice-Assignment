var price_item1 = 650;
var price_item2 = 100;
var quantity_item1 = +prompt("Enter the number of item 1 you want: ");
var quantity_item2 = +prompt("Enter the number of item 2 you want: ");
var shipping_charges = 100;

document.write("<h1>Shopping Cart</h1><br>");
document.write("<br>Price of item 1 is " + price_item1);
document.write("<br>Quantity of item 1 is " + quantity_item1);
document.write("<br>Price of item 2 is " + price_item2);
document.write("<br>Quantity of item 2 is " + quantity_item2);
document.write("<br>Shipping Charges " + shipping_charges);

var netTotal_item1 = price_item1 * quantity_item1;
var netTotal_item2 = price_item2 * quantity_item2;
var grossTotal = netTotal_item1 + netTotal_item2 + shipping_charges;

document.write("<br><br>Total cost of your order is " + grossTotal);