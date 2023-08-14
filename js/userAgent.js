const platfrom = document.getElementById("platform");
const userAgent = document.getElementById("user-agent");

document.addEventListener("DOMContentLoaded", () => {
    userAgent.innerHTML = `<b style="color:red">User Agent:</b> ${window.navigator.userAgent}`;
    platfrom.innerHTML = `<b style="color:red">Plataforma:</b> ${window.navigator.userAgentData.platform} &nbsp;&nbsp;&nbsp;&nbsp <b style="color:red">Navegador:</b> ${window.navigator.vendor}`;
});

