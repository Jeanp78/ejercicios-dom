const cleverVideo = document.getElementById("clever-video");
const videoSection = document.getElementById("section13");

const videoObserver = new IntersectionObserver(
    (entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                cleverVideo.play();
            } else {
                cleverVideo.pause();
            }

            window.addEventListener("visibilitychange", (e) => {
                if (document.visibilityState == "visible") {
                    cleverVideo.play();
                } else {
                    cleverVideo.pause();
                }
            });
        });
    },
    { threshold: 0.5 }
);

videoObserver.observe(videoSection);
