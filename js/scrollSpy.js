const sections = document.querySelectorAll("section");
const li = document.querySelectorAll(".list-link");

// sections.forEach((section, index) => {
const observer = new IntersectionObserver(
    (entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                // li[index].classList.add("is-active");
                document.querySelector(`li a[href="#${entry.target.getAttribute("id")}"]`).classList.add("is-active");
            } else {
                document.querySelector(`li a[href="#${entry.target.getAttribute("id")}"]`).classList.remove("is-active");
            }
        });
    },
    { threshold: 0.5 }
);

sections.forEach((section) => {
    observer.observe(section);
});
// });
