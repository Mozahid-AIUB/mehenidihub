/* ================================================
   darkmode.js — MehendiHub
   Handles dark/light mode toggle.
   Saves user preference in localStorage.
================================================ */

var darkToggle = document.getElementById("darkToggle");

// Load saved preference on page load
if (localStorage.getItem("theme") === "dark") {
    document.body.classList.add("dark-mode");
    if (darkToggle) darkToggle.textContent = "☀️";
}

// Toggle on button click
if (darkToggle) {
    darkToggle.addEventListener("click", function () {
        document.body.classList.toggle("dark-mode");
        var isDark = document.body.classList.contains("dark-mode");
        localStorage.setItem("theme", isDark ? "dark" : "light");
        darkToggle.textContent = isDark ? "☀️" : "🌙";
    });
}