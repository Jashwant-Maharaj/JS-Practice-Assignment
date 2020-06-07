var subject1 = prompt("Enter First Subject: ");
var marks1 = +prompt("Enter Marks: ");
var subject2 = prompt("Enter Second Subject: ");
var marks2 = +prompt("Enter Marks: ");
var subject3 = prompt("Enter Third Subject: ");
var marks3 = +prompt("Enter Marks: ");

document.getElementById("subject1").innerHTML = subject1;
document.getElementById("marks1").innerHTML = marks1;
document.getElementById("subject2").innerHTML = subject2;
document.getElementById("marks2").innerHTML = marks2;
document.getElementById("subject3").innerHTML = subject3;
document.getElementById("marks3").innerHTML = marks3;

var totalMarks = 100;

percentage1 = (marks1 / totalMarks) * 100;
percentage2 = (marks2 / totalMarks) * 100;
percentage3 = (marks3 / totalMarks) * 100;

document.getElementById("percentage1").innerHTML = percentage1 + "%";
document.getElementById("percentage2").innerHTML = percentage2 + "%";
document.getElementById("percentage3").innerHTML = percentage3 + "%";

var marksTotal = totalMarks * 3;
document.getElementById("marksTotal").innerHTML = marksTotal;

var totalObtained = marks1 + marks2 + marks3;
document.getElementById("totalObtained").innerHTML = totalObtained;

var totalPercentage = (totalObtained / marksTotal) * 100;
document.getElementById("totalPercentage").innerHTML = totalPercentage + "%";
