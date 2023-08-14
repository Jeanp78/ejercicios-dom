const themeBtn = document.getElementById("btn-theme");
const moon = document.getElementById("moon-theme");
const sun = document.getElementById("sun-theme");

let darkMode = false;

document.addEventListener("DOMContentLoaded", () => {
    switch (localStorage.getItem("theme")) {
        case "light":
            document.documentElement.removeAttribute("theme");
            break;
        case "dark":
            document.documentElement.setAttribute("theme", "dark");
            darkMode = true;
            moon.style.left = "-100px";
            sun.style.left = "15px";
            break;
        default:
            document.documentElement.removeAttribute("theme");
    }
    setTimeout(() => {
        sun.style.transition = "left .7s";
        moon.style.transition = "left .7s";
    }, 1000);
});

themeBtn.addEventListener("click", () => {
    if (darkMode) {
        document.documentElement.removeAttribute("theme");
        moon.style.left = "15px";
        sun.style.left = "-100px";
        localStorage.setItem("theme", "light");
        darkMode = false;
    } else {
        document.documentElement.setAttribute("theme", "dark");
        localStorage.setItem("theme", "dark");
        moon.style.left = "-100px";
        sun.style.left = "15px";
        darkMode = true;
    }
});
