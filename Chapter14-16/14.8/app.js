var studentName = ["Michael", "John", "Tony"];
var score = [320, 230, 480];

for(var i = 0; i < studentName.length; i++){
    document.write("Score of " + studentName[i] + " is " + score[i] + ". Percentage: " + (score[i] / 500) * 100 + "%<br>");
}