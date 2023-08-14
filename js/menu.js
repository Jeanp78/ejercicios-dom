const button = document.getElementById("btn-opener");
const menu = document.getElementById("nav-menu");
const links = document.getElementById("list-link");
const up = document.querySelector(".list-up");
const down = document.querySelector(".list-down");
let open = false;

button.addEventListener("click", () => {
    menu.style.transition = "left 0.3s ease";
    if (open) {
        up.style.opacity = 0;
        down.style.opacity = 1;
        menu.style.left = "-100vw";
        open = !open;
    } else {
        up.style.opacity = 1;
        down.style.opacity = 0;
        menu.style.left = 0;
        open = !open;
    }
});

let breakpointMenu = matchMedia("(max-width: 1750px)");

const activeMenu = () => {
    if (breakpointMenu.matches) {
        links.addEventListener("click", () => {
            open = !open;
            menu.style.left = "-100vw";
            up.style.opacity = 0;
            down.style.opacity = 1;
        });
    }
};

activeMenu()

breakpointMenu.addListener(activeMenu);
