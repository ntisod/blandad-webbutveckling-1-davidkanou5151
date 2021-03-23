/* En kommentar
som kan sträcka sig över flera rader.*/

//En kommentar på en rad.
function visaDialog(){
alert("Hej min vän");
changeText();
}


function changeText(){
    document.getElementById("demo").innerHTML = "Hello ladies and gentelman; ";
}

function writeTewxt(){
    var namn = document.getElementById("fnamn").value;
    document.getElementById("text").innerHTML = namn;
}