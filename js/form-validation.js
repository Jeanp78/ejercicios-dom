const nameForm = document.getElementById("name");
const email = document.getElementById("email");
const matter = document.getElementById("matter");
const comments = document.getElementById("comments");

const nameVal = document.getElementById("name-validation");
const emailVal = document.getElementById("email-validation");
const matterVal = document.getElementById("matter-validation");
const commentVal = document.getElementById("comments-validation");

const loader = document.getElementById("loader");
const formData = document.getElementById("form-data");

nameForm.addEventListener("keyup", () => {
    if (nameForm.value.length < 1) {
        nameVal.textContent = "El campo nombre es requerido";
    } else {
        if (!/^[A-Za-z\s]+$/.test(nameForm.value)) {
            nameVal.textContent = "Debes escribir un nombre válido";
        } else {
            nameVal.textContent = "";
        }
    }
});

email.addEventListener("keyup", () => {
    if (email.value < 1) {
        emailVal.textContent = "El campo correo es requerido";
    } else {
        if (/[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/g.test(email.value)) {
            emailVal.textContent = "";
        } else {
            emailVal.textContent = "Debes escribir un correo válido";
        }
    }
});

matter.addEventListener("keyup", () => {
    if (matter.value < 1) {
        matterVal.textContent = "El campo asunto es requerido";
    } else {
        matterVal.textContent = "";
    }
});

comments.addEventListener("keyup", () => {
    if (comments.value < 1) {
        commentVal.textContent = "El campo comentarios es requerido";
    } else {
        if (comments.value.length > 100) {
            commentVal.textContent = "Solo se admite un máximo de 100 caracteres";
        } else {
            commentVal.textContent = "";
        }
    }
});

document.addEventListener("submit", (e) => {
    e.preventDefault();
    loader.style.display = "block";
    setTimeout(() => {
        loader.style.display = "none";
        formData.submit();
    }, 3000);
});
