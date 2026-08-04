const menuBtn = document.getElementById("menuBtn");
const navbar = document.getElementById("navbar");

if (menuBtn && navbar) {

    menuBtn.addEventListener("click", function () {

        navbar.classList.toggle("show");

 });        

 const navLinks = navbar.querySelectorAll("a");

    navLinks.forEach(function (link) {

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

    const dayName = days[now.getDay()];
    const day = now.getDate();
    const month = months[now.getMonth()];
    const year = now.getFullYear();

    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();

    if (hours < 10) hours = "0" + hours;
    if (minutes < 10) minutes = "0" + minutes;
    if (seconds < 10) seconds = "0" + seconds;

    clock.innerHTML = `
        ${dayName}<br>
        ${day} ${month} ${year}<br>
        ${hours}:${minutes}:${seconds}
    `;

}
updateClock();
setInterval(updateClock, 1000);

const cards = document.querySelectorAll(".card");

cards.forEach(function (card, index) {

    card.style.opacity = "0";
    card.style.transform = "translateY(30px)";

    setTimeout(function () {

        card.style.transition = "0.6s ease";
        card.style.opacity = "1";
        card.style.transform = "translateY(0)";

    }, index * 200);

});