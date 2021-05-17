"use strict";
//const passwordInput = document.getElementById("password") as HTMLInputElement;
//const confirmPasswordInput = document.getElementById("confirm-password") as HTMLInputElement;
const registerMessageLabel = document.getElementById("register-message");
const form = document.getElementById("register-form");
form.addEventListener("submit", (e) => {
    e.preventDefault();
    const formData = e.target;
    if (formData[3].value !== formData[4].value) {
        registerMessageLabel.classList.add("alert-danger");
        registerMessageLabel.innerText = "The passwords are not matching";
        return;
    }
    const request = new XMLHttpRequest();
    request.open("POST", "/register");
    request.addEventListener("load", () => {
        const data = JSON.parse(request.response);
        if (data.success) {
            window.location.href = "/login";
        }
        else {
            registerMessageLabel.classList.add("alert-danger");
            registerMessageLabel.innerText = data.message;
        }
    });
    const searchParams = new URLSearchParams();
    searchParams.set("firstName", formData[0].value);
    searchParams.set("lastName", formData[1].value);
    searchParams.set("email", formData[2].value);
    searchParams.set("password", formData[3].value);
    searchParams.set("userType", formData[5].value);
    request.send(searchParams);
});
