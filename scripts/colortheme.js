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
        console.log("Update dark: " + dark);
    };
    style2.onclick = function () {
        swapStyleSheet("/assets/css/light.css");
        dark = false;
        console.log("Update dark: " + dark);
    };
}

window.onload = function () {
    console.log("Before init: " + dark);
    initiate();
    console.log("After init: " + dark);
    if (dark) {
        console.log("Load default stylesheet");
        swapStyleSheet("/assets/css/default.css");
    } else {
        console.log("Load light stylesheet");
        swapStyleSheet("/assets/css/light.css");
    }
};
