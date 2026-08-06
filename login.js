const loginForm = document.getElementById("loginForm");
const message = document.getElementById("message");


const username = "JJ";
const password = "TechFix123";
let attempts = 3;

loginForm.addEventListener("submit", function (event) {

    event.preventDefault();

    const enteredUsername = document.getElementById("username").value.trim();
    const enteredPassword = document.getElementById("password").value;

    if (enteredUsername === username && enteredPassword === password) {

        sessionStorage.setItem("loggedIn", "true");

        window.location.href = "technician.html";

    } else {

        attempts--;

if(attempts > 0){

    message.textContent =
    "❌ Incorrect details. Attempts left: " + attempts;

}else{

    message.textContent =
    "🚫 Too many failed attempts.";

    document.getElementById("username").disabled = true;

    document.getElementById("password").disabled = true;

    loginForm.querySelector("button").disabled = true;

}

    }

});

const passwordInput = document.getElementById("password");
const togglePassword = document.getElementById("togglePassword");

togglePassword.addEventListener("click", function(){

    if(passwordInput.type === "password"){

        passwordInput.type = "text";

        togglePassword.textContent = "🙈";

    }else{

        passwordInput.type = "password";

        togglePassword.textContent = "👁️";

    }

});