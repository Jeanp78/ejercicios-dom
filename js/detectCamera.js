const webcamContainer = document.getElementById("webcam");
const activeCamera = document.getElementById("active-camera");

const md = navigator.mediaDevices;

activeCamera.addEventListener("click", () => {
    activeCamera.disabled=true;
    md.getUserMedia({ video: true, audio: false })
        .then((res) => {
            webcamContainer.srcObject = res;
            webcamContainer.play();
        })
        .catch((e) => {
            alert("Debes conectar tu cámara")
        });
});
