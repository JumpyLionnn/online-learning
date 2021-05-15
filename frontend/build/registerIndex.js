"use strict";
const passwordInput = document.getElementById("password");
const confirmPasswordInput = document.getElementById("confirm-password");
const registerMessageLabel = document.getElementById("register-message");
document.getElementById("register-form").addEventListener("submit", (e) => {
    if (passwordInput.value !== confirmPasswordInput.value) {
        e.preventDefault();
        registerMessageLabel.classList.add("alert-danger");
        registerMessageLabel.innerText = "The passwords are not matching";
    }
});
