const minDate = new Date().toLocaleDateString("es-CO", { year: "numeric", month: "2-digit", day: "2-digit" }).split("/").reverse().join("-");

const countdown = document.getElementById("countdown");
const messageCountdown = document.getElementById("message-countdown")
const confettiAudio = document.getElementById("confetti-audio");
const dateInput = document.getElementById("date-input");
const startButton = document.getElementById("start-countdown");
const restartButton = document.getElementById("restart-countdown");

let intervalCountdown;

dateInput.setAttribute("min", minDate);
const getDifference = (date, now) => {
    return date.getTime() - now.getTime();
};

const getCountDown = (resta) => {
    let days = resta / 86400000 >= 1 ? Math.floor(resta / 86400000) : 0;
    let hours = Math.floor((resta % 86400000) / 3600000);
    let minutes = Math.floor(((resta % 86400000) % 3600000) / 60000);
    let seconds = Math.floor((((resta % 86400000) % 3600000) % 60000) / 1000);
    return {
        days,
        hours,
        minutes,
        seconds,
    };
};

const startCountdown = (dateCountdown) => {
    intervalCountdown = setInterval(() => {
        let resta = getDifference(new Date(dateCountdown), new Date());
        if (resta <= 1000) {
            clearInterval(intervalCountdown);
            countdown.textContent = `0 días 0 horas 0 minutos 0 segundos`;
            messageCountdown.textContent = "El tiempo ha finalizado 🎉🎊"
            messageCountdown.classList.add("message-countdown")
            setTimeout(() => {
                confettiAudio.play();
                confetti.start();
            }, 200);
            setTimeout(() => confetti.stop(), 3000);

            return;
        }
        const { days, hours, minutes, seconds } = getCountDown(resta);
        countdown.textContent = `${days} dias ${hours} horas ${minutes} minutos ${seconds} segundos`;
    }, 1000);
};

startButton.addEventListener("click", () => {
    if (dateInput.value) {
        startButton.disabled = true;
        const dateCountdown = dateInput.value.replaceAll("-", "/");
        startCountdown(dateCountdown);
    } else {
        alert("Debes agregar una fecha a la cuenta regresiva");
    }
});

restartButton.addEventListener("click", () => {
    startButton.disabled = false;
    clearInterval(intervalCountdown);
    countdown.textContent = `- días - horas - minutos - segundos`;
    messageCountdown.textContent=""
    messageCountdown.classList.remove("message-countdown")
});
