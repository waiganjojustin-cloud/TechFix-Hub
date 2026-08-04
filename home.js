const menuBtn = document.getElementById("menuBtn");
const navbar = document.getElementById("navbar");

if (menuBtn && navbar) {

    menuBtn.addEventListener("click", function () {

        navbar.classList.toggle("show");

    });

    const links = navbar.querySelectorAll("a");

    links.forEach(function (link) {

        link.addEventListener("click", function () {

            navbar.classList.remove("show");

        });

    });

}

const clock = document.getElementById("clock");

function updateClock() {

    if (!clock) return;

    const now = new Date();

    const days = [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday"
    ];

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

    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();

    if (hours < 10) hours = "0" + hours;
    if (minutes < 10) minutes = "0" + minutes;
    if (seconds < 10) seconds = "0" + seconds;

    clock.innerHTML = `
        ${days[now.getDay()]}<br>
        ${now.getDate()} ${months[now.getMonth()]} ${now.getFullYear()}<br>
        ${hours}:${minutes}:${seconds}
    `;

}

updateClock();

setInterval(updateClock, 1000);

console.log("TechFix Hub Home Loaded Successfully.");