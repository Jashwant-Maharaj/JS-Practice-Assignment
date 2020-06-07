var devices = ["Keyboard", "Mouse", "Printer", "Moniter"];

document.write("Devices: <br>" + devices + "<br>");

for(var i = devices.length - 1; i >= 0; i--){
    document.write("<br>Out: <br>" + devices[i]);
}