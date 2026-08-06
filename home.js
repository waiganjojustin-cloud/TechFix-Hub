// Get the mobile menu button from the HTML
const menuBtn = document.getElementById("menuBtn");

// Get the navigation menu from the HTML
const navbar = document.getElementById("navbar");

// Check if both elements exist before adding functionality
if (menuBtn && navbar) {

    // When the menu button is clicked
    menuBtn.addEventListener("click", function () {

        // Show or hide the navigation menu
        navbar.classList.toggle("show");

    });

    // Select all navigation links inside the navbar
    const links = navbar.querySelectorAll("a");

    // Loop through each navigation link
    links.forEach(function (link) {

        // When a link is clicked
        link.addEventListener("click", function () {

            // Close the mobile navigation menu
            navbar.classList.remove("show");

        });

    });

}

// Get the clock element from the HTML
const clock = document.getElementById("clock");

// Function to display the current date and time
function updateClock() {

    // Stop the function if the clock element is missing
    if (!clock) return;

    // Create a new Date object containing the current date and time
    const now = new Date();

    // Array containing the names of the days
    const days = [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday"
    ];

    // Array containing the names of the months
    const months = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December"
    ];

    // Get the current hour, minute and second
    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();

    // Add a leading zero if the number is less than 10
    if (hours < 10) hours = "0" + hours;
    if (minutes < 10) minutes = "0" + minutes;
    if (seconds < 10) seconds = "0" + seconds;

    // Display the current day, date and time inside the clock element
    clock.innerHTML = `
        ${days[now.getDay()]}<br>
        ${now.getDate()} ${months[now.getMonth()]} ${now.getFullYear()}<br>
        ${hours}:${minutes}:${seconds}
    `;

}

// Display the clock immediately when the page loads
updateClock();

// Update the clock every 1 second (1000 milliseconds)
setInterval(updateClock, 1000);

// Display a success message in the browser console
console.log("TechFix Hub Home Loaded Successfully.");