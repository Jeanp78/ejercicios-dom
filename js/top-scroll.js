const btnScrollTop = document.getElementById("btn-scroll");

document.addEventListener("scroll", ({ target: { scrollingElement } }) => {
    if (scrollingElement.scrollTop > 300) {
        btnScrollTop.style.bottom = "10px";
    } else {
        btnScrollTop.style.bottom = "-100px";
    }
});

btnScrollTop.addEventListener("click", (e) => {
    e.view.scrollTo(0, 0);
});
