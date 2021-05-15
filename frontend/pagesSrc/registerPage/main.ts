const passwordInput = document.getElementById("password") as HTMLInputElement;

const confirmPasswordInput = document.getElementById("confirm-password") as HTMLInputElement;

const registerMessageLabel = document.getElementById("register-message") as HTMLLabelElement;

(document.getElementById("register-form") as HTMLFormElement).addEventListener("submit", (e) => {
    if(passwordInput.value !== confirmPasswordInput.value){
        e.preventDefault();
        registerMessageLabel.classList.add("alert-danger");
        registerMessageLabel.innerText = "The passwords are not matching";
    }
});