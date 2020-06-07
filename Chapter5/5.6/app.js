var temp_c = +prompt("Enter temperature in celsius ");
var temp_f = +prompt("Enter temperature in fahrenheit ");
var output_temp_c = (temp_f - 32) * 5 / 9;
var output_temp_f = (temp_c * 9 / 5) + 32;
document.write(temp_c + " <sup>o</sup>C is " + output_temp_f + " <sup>o</sup>F. <br>");
document.write(temp_f + " <sup>o</sup>F is " + output_temp_c + " <sup>o</sup>C. <br>");