var color = prompt("Enter the color of road traffic signal: ");

if(color === "Red" || color === "red"){
    alert("Must Stop");
}
else if(color === "Yellow" || color === "yellow"){
    alert("Ready to move");
}
else if(color === "Green" || color === "green"){
    alert("Move now");
}
else{
    alert("Signal is out of order");
}