const cards = document.querySelectorAll(".card");
const searchInput = document.getElementById("search");

document.addEventListener("keyup", ({ key }) => {

    cards.forEach((e) => {
        let reg = new RegExp(searchInput.value,"i");
        if (searchInput.value == "") {
            e.classList.remove("opacity");
            e.classList.remove("hidden");
        } else {
            if (!reg.test(e.textContent)) {
                e.classList.add("opacity");
                e.classList.remove("hidden");
            } else {
                e.classList.add("hidden");
                e.classList.remove("opacity");
            }
        }
    });
});



