var subject1Marks = +prompt("Enter marks of first subject: ");
var subject2Marks = +prompt("Enter marks of second subject: ");
var subject3Marks = +prompt("Enter marks of third subject: ");
var totalObtainedMarks = subject1Marks + subject2Marks + subject3Marks;
var totalMarks = +prompt("Enter total marks: ");
var percentage = (totalObtainedMarks / totalMarks) * 100;
var grade = "", remarks = "";

if(percentage >= 80 && percentage <= 100){
    grade = "A-one";
    remarks = "Excellent";
}
if(percentage >= 70 && percentage < 80){
    grade = "A";
    remarks = "Good";
}
if(percentage >= 60 && percentage < 70){
    grade = "B";
    remarks = "You need to improve";
}
if(percentage < 60){
    grade = "Fail";
    remarks = "Sorry";
}

document.write("<h1>Marks Sheet</h1><br><br>");
document.write("Total marks : " + totalMarks);
document.write("<br>Marks obtained : " + totalObtainedMarks);
document.write("<br>Percentage : " + percentage + "%");
document.write("<br>Grade : " + grade);
document.write("<br>Remarks : " + remarks);