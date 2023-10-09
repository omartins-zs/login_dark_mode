let body = document.body;
let loginBox = document.querySelector(".login-box");
let h1 = document.getElementsByClassName("h1")[0];
let inputs = document.querySelectorAll("input");
let loginButton = document.getElementById("login-button");

function switchTheme() {
    loginBox.classList.toggle("dark-mode");
    body.classList.toggle("dark-mode");
    h1.classList.toggle("dark-mode");

    inputs.forEach(input => {
        input.classList.toggle("dark-mode");
    });

    loginButton.classList.toggle("dark-mode");
    h2.classList.toggle("dark-mode");
}