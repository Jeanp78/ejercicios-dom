const character = document.getElementById("character");
const box = document.getElementById("game-box");
const gameButton = document.getElementById("game-button");
const stopGame = document.getElementById("stop-game");

const getPX = (element, prop) => {
    return Number(getComputedStyle(element)[prop].match(/[0-9]*/)[0]);
};

let width = getPX(box, "width");
let height = getPX(box, "height");
let topChar = getPX(character, "top");
let leftChar = getPX(character, "left");

let eventActive;

const move = (e) => {
    const arrowKeys = ["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight"];
    if (arrowKeys.includes(e.key)) {
        e.preventDefault();
    }
    switch (e.key) {
        case "ArrowDown":
            if (topChar < height - 75) {
                topChar += 20;
                character.style.top = `${topChar}px`;
                break;
            }
            break;
        case "ArrowUp":
            if (topChar > 5) {
                topChar -= 20;
                character.style.top = `${topChar}px`;
            }
            break;
        case "ArrowLeft":
            if (leftChar > 5) {
                leftChar -= 20;
                character.style.left = `${leftChar}px`;
            }
            break;
        case "ArrowRight":
            if (leftChar < width - 75) {
                leftChar += 20;
                character.style.left = `${leftChar}px`;
            }
            break;
    }
};

gameButton.addEventListener("click", () => {
    gameButton.disabled = true;
    eventActive = document.addEventListener("keydown", move);
});

stopGame.addEventListener("click", () => {
    gameButton.disabled = false;
    document.removeEventListener("keydown", move);
});

