function swapStyleSheet(sheet) {
    document.getElementById("pagestyle").setAttribute("href", sheet);  
}

function initate() {
    var style1 = document.getElementById("dark");
    var style2 = document.getElementById("light");

    style1.onclick = swapStyleSheet("default.css");
    style2.onclick = swapStyleSheet("light.css");
}

window.onload = initate;
