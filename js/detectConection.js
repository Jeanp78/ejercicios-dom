const isConectedText = document.getElementById("is-conected-text");
const conectionToast = document.getElementById("conection-toast");
const conectionToastText = document.querySelector(".conection-toast h1");

const showToast = (text, isOnline) => {
    conectionToastText.textContent = text;
    conectionToast.style.background = isOnline ? "green" : "red";
    conectionToast.style.top = "0px";
    setTimeout(() => {
        conectionToast.style.top = "-200px";
    }, 3000);
};

window.addEventListener("online", () => {
    isConectedText.innerHTML = 'Estado de la conexión: <span class="success"> Conectado </span>';
    showToast("Se ha recuperado la conexión", true);
});

window.addEventListener("offline", () => {
    isConectedText.innerHTML = 'Estado de la conexión: <span class="danger"> Desconectado </span>';
    showToast("Se ha perdido la conexión", false);
});
