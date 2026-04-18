const toggleBtn = document.getElementById("toggleBtn");
const body = document.body;
const modeText = document.getElementById("modeText");

// Load saved mode
if (localStorage.getItem("mode") === "dark") {
  body.classList.add("dark");
  modeText.textContent = "Dark Mode 🌙";
} else {
  modeText.textContent = "Light Mode ☀️";
}

toggleBtn.addEventListener("click", () => {
  body.classList.toggle("dark");

  if (body.classList.contains("dark")) {
    modeText.textContent = "Dark Mode 🌙";
    localStorage.setItem("mode", "dark");
  } else {
    modeText.textContent = "Light Mode ☀️";
    localStorage.setItem("mode", "light");
  }
});
