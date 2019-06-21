function swapStyleSheet(sheet) {
    document.getElementById("pagestyle").setAttribute("href", sheet);  
}

function initate() {
    var style1 = document.getElementById("dark");
    var style2 = document.getElementById("light");

    style1.onclick = function () { swapStyleSheet("/assets/css/default.css"); };
    style2.onclick = function () { swapStyleSheet("/assets/css/light.css"); };
}

window.onload = initate;
