var char = prompt("Enter character: ");
var asciiCode = char.charCodeAt();

if(asciiCode >= 65 && asciiCode <= 90){
    alert("It is a uppercase letter.");
}
else if(asciiCode >= 97 && asciiCode <= 122){
    alert("It is a lowercase letter.");
}
else{
    alert("It is a number.");
}