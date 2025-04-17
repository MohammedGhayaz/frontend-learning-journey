const toggleGreeting = () => {
    let greeting = document.getElementById("greeting");
    if (greeting.innerHTML === "Welcome") {
        greeting.innerHTML = "Hello!";
        greeting.style.color = "blue";
        document.body.style.backgroundColor = 'grey';
    } else {
        greeting.innerHTML = "Welcome";
        greeting.style.color = "black";
        document.body.style.backgroundColor = 'white';
    }
};