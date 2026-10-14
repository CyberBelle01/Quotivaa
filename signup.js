
const signupForm = document.getElementById("signupForm");

signupForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const fullName = document.getElementById("fullname").value.trim();
    const username = document.getElementById("username").value.trim();
    const email = document.getElementById("email").value.trim().toLowerCase();
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirm-password").value;
    const message = document.getElementById("message");

    if (password !== confirmPassword) {
        message.textContent = "Passwords do not match!";
        return;
    }

    const users = JSON.parse(localStorage.getItem("users") || "[]");

    if (users.some(user => user.email === email)) {
        message.textContent = "Email already registered!";
        return;
    }

    if (users.some(user => user.username.toLowerCase() === username.toLowerCase())) {
        message.textContent = "Username already taken!";
        return;
    }

    users.push({
        fullName: fullName,
        username: username,
        email: email,
        password: password
    });

    localStorage.setItem("users", JSON.stringify(users));

    message.textContent = "Signup successful!";

    signupForm.reset();

    setTimeout(function () {
        window.location.href = "login.html";
    }, 1000);
});