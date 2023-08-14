const arr = ["PHP", "JavaScript", "Java", "Go", "C++", "Python", "Perl", "Visual Basic", "Node", "C#"];
const ul = document.getElementById("participants");
const lotteryBtn = document.getElementById("lottery-btn");
const lotteryBtnReset = document.getElementById("lottery-btn-reset");
const countdownLottery = document.getElementById("countdown-lottery");

const winner = document.getElementById("winner");

const fragment = document.createDocumentFragment();

arr.forEach((e) => {
    const li = document.createElement("li");
    li.textContent = e;
    fragment.append(li);
});

ul.append(fragment);

lotteryBtn.addEventListener("click", async () => {
    countdownLottery.classList.add("bounce");
    for (let i = 3; i > 0; i--) {
        winner.innerHTML = "El ganador es &nbsp;";
        countdownLottery.textContent = i;
        await new Promise((resolve) => {
            setTimeout(() => {
                resolve();
            }, 1000);
        });
    }
    countdownLottery.textContent = "";
    winner.textContent = `El ganador es ${arr[Math.round(Math.random() * 9)]} 🎉`;
    winner.classList.add("message-countdown");
    confettiAudio.play();
    confetti.start();
    setTimeout(() => confetti.stop(), 3000);
});

lotteryBtnReset.addEventListener("click", () => {
    winner.textContent = "";
    winner.classList.remove("message-countdown");
});
