var theme = localStorage.getItem("theme");

function swapStyleSheet(sheet) {
    document.getElementById("pagestyle").setAttribute("href", sheet);  
}

function initiate() {
    var style1 = document.getElementById("dark");
    var style2 = document.getElementById("light");

    style1.onclick = function () {
        swapStyleSheet("/assets/css/default.css");
        theme = "dark";
        localStorage.setItem("theme", theme);
    };
    style2.onclick = function () {
        swapStyleSheet("/assets/css/light.css");
        theme = "light";
        localStorage.setItem("theme", theme);
    };
}

window.onload = function () {
    initiate();
    if (theme == "dark") {
        swapStyleSheet("/assets/css/default.css");
    } else if (theme == "light") {
        swapStyleSheet("/assets/css/light.css");
    } else {
        swapStyleSheet("/assets/css/default.css");
    }
};
