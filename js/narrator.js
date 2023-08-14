const voicesSelect = document.getElementById("voices");
const voicesButton = document.getElementById("voices-button");
const textToRead = document.getElementById("text-to-read");

let voices;

window.speechSynthesis.onvoiceschanged = function () {
    voices = speechSynthesis.getVoices();
    voices.forEach((voice, index) => {
        const option = document.createElement("option");
        option.textContent = `${voice.name} / ${voice.lang}`;
        option.value = index;
        voicesSelect.append(option);
    });
};

voicesButton.addEventListener("click", () => {
    if (textToRead.value && voicesSelect.value != "null") {
        let utterance = new SpeechSynthesisUtterance(textToRead.value);
        utterance.voice = voices[voicesSelect.value];
        speechSynthesis.speak(utterance);
    } else {
        alert("Primero debes rellenar los campos");
    }
});
