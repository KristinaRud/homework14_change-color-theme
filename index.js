"use strick";

document.addEventListener("DOMContentLoaded", function () {
  if (localStorage.getItem("classTheme")) {
    const theme =
      localStorage.getItem("classTheme") === "dark" ? "dark" : "light";
    document.body.classList.toggle(theme);
    console.log("DOM fully loaded and parsed");
  }
});

document.querySelector(".changed-theme").addEventListener("click", (event) => {
  event.preventDefault();
  document.body.classList.toggle("dark");
  const theme = document.body.classList.contains("dark") ? "dark" : "light";
  localStorage.setItem("classTheme", theme);
});
