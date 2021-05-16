//const passwordInput = document.getElementById("password") as HTMLInputElement;

//const confirmPasswordInput = document.getElementById("confirm-password") as HTMLInputElement;

const registerMessageLabel = document.getElementById("register-message") as HTMLLabelElement;

const form = document.getElementById("register-form") as HTMLFormElement;

form.addEventListener("submit", (e) => {
    e.preventDefault();
    const formData = (e.target as unknown) as FormTarget;
    if(formData[3].value !== formData[4].value){
        registerMessageLabel.classList.add("alert-danger");
        registerMessageLabel.innerText = "The passwords are not matching";
        return;
    }
    const request =  new XMLHttpRequest();
    request.open("POST", "/register");
    request.addEventListener("load", () => {
        const data = JSON.parse(request.response);
        if(data.success){
            window.location.href="/login";
        }
        else{
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


interface FormTarget{
    0: HTMLInputElement;
    1: HTMLInputElement;
    2: HTMLInputElement;
    3: HTMLInputElement;
    4: HTMLInputElement;
    5: HTMLSelectElement;
}