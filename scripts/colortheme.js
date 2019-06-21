var dark = true;

function swapStyleSheet(sheet) {
    document.getElementById("pagestyle").setAttribute("href", sheet);  
}

function initiate() {
    var style1 = document.getElementById("dark");
    var style2 = document.getElementById("light");

    style1.onclick = function () {
        swapStyleSheet("/assets/css/default.css");
        dark = true;
    };
    style2.onclick = function () {
        swapStyleSheet("/assets/css/light.css");
        dark = false;
    };
}

window.onload = function () {
    if (dark) {
        swapStyleSheet("/assets/css/dark.css");
    } else {
        swapStyleSheet("/assets/css/light.css");
    }
    initiate;
};
