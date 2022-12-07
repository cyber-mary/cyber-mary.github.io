function alertFunction () {
    document.getElementById("textbox").style.fontSize = "24pt";
}

function onChange(){
    if(document.getElementById("fancy").checked === true){
        document.getElementById("textbox").style.fontWeight = "bold";
        document.getElementById("textbox").style.color = "blue";
        document.getElementById("textbox").style.textDecoration = "underline";
    } else {
        document.getElementById("textbox").style.fontWeight ="normal";
        document.getElementById("textbox").style.color = "black";
        document.getElementById("textbox").style.textDecoration = "none";
    }

}

function mooFunction(){
    var str = document.getElementById("textbox").value.toUpperCase();
    var parts = str.split(".");
    str = parts.join("-Moo");
    document.getElementById("textbox").value = str;

}