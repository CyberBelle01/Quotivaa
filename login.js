
const loginForm = document.getElementById("loginForm");

loginForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const email = document.getElementById("email").value.trim().toLowerCase();
    const password = document.getElementById("password").value;
    const message = document.getElementById("message");

    const users = JSON.parse(localStorage.getItem("users") || "[]");

    const user = users.find(function (user) {
        return user.email === email && user.password === password;
    });

    if (!user) {
        message.textContent = "Incorrect email or password!";
        return;
    }

    localStorage.setItem("loggedInUser", JSON.stringify({
        fullName: user.fullName,
        username: user.username,
        email: user.email
    }));

    message.textContent = "Login successful!";

    setTimeout(function () {
        window.location.href = "generator.html";
    }, 1000);
});