const latitudeSpan = document.getElementById("latitude");
const longitudeSpan = document.getElementById("longitude");
const accuracySpan = document.getElementById("accuracy");
const geolocationBtn = document.getElementById("geolocation-btn");

const currentPositionMap = document.getElementById("current-position-map");

geolocationBtn.addEventListener("click", () => {
    navigator.geolocation.getCurrentPosition(({ coords: { latitude, longitude, accuracy } }) => {
        geolocationBtn.disabled=true
        latitudeSpan.textContent = latitude;
        longitudeSpan.textContent = longitude;
        accuracySpan.textContent = Math.floor(accuracy) + " metros";
        currentPositionMap.innerHTML = `<a target="_blank" href="https://www.google.com/maps/place/${latitude},${longitude}/"> Ver mapa </a>`;
    });
});
