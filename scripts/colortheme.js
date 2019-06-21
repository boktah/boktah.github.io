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
        console.log("Update dark: " + theme);
    };
    style2.onclick = function () {
        swapStyleSheet("/assets/css/light.css");
        theme = "light";
        localStorage.setItem("theme", theme);
        console.log("Update dark: " + theme);
    };
}

window.onload = function () {
    console.log("Before init: " + theme);
    initiate();
    console.log("After init: " + theme);
    if (theme == "dark") {
        console.log("Load default stylesheet");
        swapStyleSheet("/assets/css/default.css");
    } else if (theme == "light") {
        console.log("Load light stylesheet");
        swapStyleSheet("/assets/css/light.css");
    } else {
        console.log("Load default stylesheet (invalid theme val)");
        swapStyleSheet("/assets/css/default.css");
    }
};
