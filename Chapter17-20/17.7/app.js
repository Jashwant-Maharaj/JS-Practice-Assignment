items = ["cake", "apple pie", "cookie", "chips", "patties"];

var search = prompt("Welcome to ABC Bakery. What do you want to order sir/ma'am?");

for (var i = 0; i <= items.length; i++) {
    if (items[i] === search) {
        document.write(items[i] + " is <b>available</b> at index " + i + " in our bakery");
        break;
    }
    else if(i === items.length){
        document.write("We are sorry . " + search + " is <b>not available</b> in our bakery");
        break
    }
    
}

