
const toggleGreeting = () => {
    let greeting = document.getElementById("greeting");
    if (greeting.innerHTML === "Welcome") {
        greeting.innerHTML = "Hello!";
        greeting.style.color = "blue";
    } else {
        greeting.innerHTML = "Welcome";
        greeting.style.color = "black";
    }
};

document.getElementById("darkModeToggle").addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
});