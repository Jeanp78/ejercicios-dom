const slides = document.querySelectorAll(".slide");
const next = document.getElementById("next");
const prev = document.getElementById("prev");

let slideVisible = 0;
next.addEventListener("click", () => {
    if (slideVisible < slides.length - 1) {
        slides[slideVisible].style.opacity = 0;
        slides[slideVisible + 1].style.opacity = 1;
        slideVisible++;
    }else{ 
        slides[slideVisible].style.opacity = 0;
        slides[0].style.opacity = 1;
        slideVisible = 0
    }
});

prev.addEventListener("click", () => {
    if (slideVisible > 0) {
        slides[slideVisible].style.opacity = 0;
        slides[slideVisible - 1].style.opacity = 1;
        slideVisible--;
    }else{ 
        slides[slideVisible].style.opacity = 0;
        slides[slides.length-1].style.opacity = 1;
        slideVisible = slides.length-1
    }
});
