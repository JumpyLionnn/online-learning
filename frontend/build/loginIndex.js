"use strict";
const registerMessageLabel = document.getElementById("login-message");
const form = document.getElementById("login-form");
form.addEventListener("submit", (e) => {
    e.preventDefault();
    const formData = e.target;
    const request = new XMLHttpRequest();
    request.open("POST", "/login");
    request.addEventListener("load", () => {
        const data = JSON.parse(request.response);
        if (data.success) {
            console.log(data.token);
            window.localStorage.setItem("token", "bearer " + data.token);
            window.location.href = "/dashboard";
        }
        else {
            registerMessageLabel.classList.add("alert-danger");
            registerMessageLabel.innerText = data.message;
        }
    });
    const searchParams = new URLSearchParams();
    searchParams.set("email", formData[0].value);
    searchParams.set("password", formData[1].value);
    request.send(searchParams);
});
