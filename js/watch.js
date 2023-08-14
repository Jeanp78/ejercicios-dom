const section = document.getElementById("section1");

const showBtn = document.getElementById("show-watch");
const hideBtn = document.getElementById("hide-watch");
const watch = document.getElementById("watch");
let interval;

const startAlarmBtn = document.getElementById("start-alarm");
const stopAlarmBtn = document.getElementById("stop-alarm");
const alarm = document.getElementById("alarm");

const getTime = () => {
    return new Date().toLocaleString("es-CO", { hour: "2-digit", minute: "2-digit", second: "2-digit" });
};

showBtn.addEventListener("click", () => {
    showBtn.disabled = true;
    watch.textContent = getTime();
    interval = setInterval(() => {
        watch.textContent = getTime();
    }, 1000);
});

hideBtn.addEventListener("click", () => {
    showBtn.disabled = false;
    watch.textContent = "";
    clearInterval(interval);
});

startAlarmBtn.addEventListener("click", () => {
    startAlarmBtn.disabled = true;
    alarm.play();
});

stopAlarmBtn.addEventListener("click", () => {
    startAlarmBtn.disabled = false;
    alarm.pause();
    alarm.currentTime = 0;
});
