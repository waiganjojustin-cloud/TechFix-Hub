// Get the login form from the HTML page
const loginForm = document.getElementById("loginForm");

// Get the message area where login errors will be displayed
const message = document.getElementById("message");


// Technician login username
const username = "JJ";

// Technician login password
const password = "TechFix123";

// Number of allowed login attempts
let attempts = 3;



// Runs when the user submits the login form
loginForm.addEventListener("submit", function (event) {


    // Prevents the page from refreshing after submitting
    event.preventDefault();


    // Gets the username entered by the user
    const enteredUsername = document.getElementById("username").value.trim();


    // Gets the password entered by the user
    const enteredPassword = document.getElementById("password").value;



    // Checks if the entered details match the correct login details
    if (enteredUsername === username && enteredPassword === password) {


        // Saves login status in session storage
        // This allows the website to remember that the technician is logged in
        sessionStorage.setItem("loggedIn", "true");


        // Redirects the user to the Technician Portal page
        window.location.href = "technician.html";


    } else {


        // Reduces the number of remaining attempts
        attempts--;


        // Checks if the user still has remaining attempts
        if(attempts > 0){


            // Displays the remaining login attempts
            message.textContent =
            "❌ Incorrect details. Attempts left: " + attempts;


        }else{


            // Displays a message after all attempts are used
            message.textContent =
            "🚫 Too many failed attempts.";


            // Disables username input after failed attempts
            document.getElementById("username").disabled = true;


            // Disables password input after failed attempts
            document.getElementById("password").disabled = true;


            // Disables the login button
            loginForm.querySelector("button").disabled = true;


        }


    }


});



// Gets the password input field
const passwordInput = document.getElementById("password");


// Gets the eye icon used for showing/hiding password
const togglePassword = document.getElementById("togglePassword");



// Adds a click event to the eye icon
togglePassword.addEventListener("click", function(){


    // Checks if the password is currently hidden
    if(passwordInput.type === "password"){


        // Changes password field to visible text
        passwordInput.type = "text";


        // Changes icon to closed eye
        togglePassword.textContent = "🙈";


    }else{


        // Changes password field back to hidden password format
        passwordInput.type = "password";


        // Changes icon back to open eye
        togglePassword.textContent = "👁️";


    }


});