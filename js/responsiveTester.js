const url = document.getElementById("url");
const widthTab = document.getElementById("width");
const heightTab = document.getElementById("height");
const openTab = document.getElementById("open-tab");
const closeTab = document.getElementById("close-tab");

let win;

openTab.addEventListener("click", () => {
    console.log(widthTab.value || 500);
    if (url.value) {
        win = window.open(`https://${url.value}`, "Responsive Tester", `width=${Number(widthTab.value) || 500},height=${Number(heightTab.value) || 500}`);
    } else {
        alert("Debes completar la url");
    }
});

closeTab.addEventListener("click", () => {
    if (win) {
        win.close();
    }
});
