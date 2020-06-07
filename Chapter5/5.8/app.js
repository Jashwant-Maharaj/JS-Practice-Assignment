var totalMarks = 980;
var marksObtained = +prompt("Enter the marks obtained:");
var percentage = marksObtained / totalMarks * 100;

document.write("<h1>Marks Sheet</h1><br>");
document.write("<br>Total marks: " + totalMarks);
document.write("<br>Marks obtained: " + marksObtained);
document.write("<br>Percentage: " + percentage + "%");