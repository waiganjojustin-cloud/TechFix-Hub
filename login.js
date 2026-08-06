const loginForm = document.getElementById("loginForm");
const message = document.getElementById("message");


const username = "JJ";
const password = "TechFix123";

loginForm.addEventListener("submit", function (event) {

    event.preventDefault();

    const enteredUsername = document.getElementById("username").value.trim();
    const enteredPassword = document.getElementById("password").value;

    if (enteredUsername === username && enteredPassword === password) {

        sessionStorage.setItem("loggedIn", "true");

        window.location.href = "technician.html";

    } else {
        
        message.textContent = "❌ Invalid username or password.";

    }

});