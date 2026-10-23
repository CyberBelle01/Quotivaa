
const loginForm = document.getElementById("loginForm");

loginForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const email = document.getElementById("email").value.trim().toLowerCase();
    const password = document.getElementById("password").value;
    const message = document.getElementById("message");

    message.style.color = "red";
    message.textContent = "";

    let users;

    try {
        users = JSON.parse(localStorage.getItem("users") || "[]");

        if (!Array.isArray(users)) {
            users = [];
        }
    } catch (error) {
        message.textContent = "Could not read saved accounts.";
        return;
    }

    const user = users.find(function (account) {
        return (
            account.email.toLowerCase() === email &&
            account.password === password
        );
    });

    if (!user) {
        message.textContent = "Incorrect email or password.";
        return;
    }

    const loggedInUser = {
        fullName: user.fullName,
        username: user.username,
        email: user.email
    };

    try {
        localStorage.setItem("loggedInUser", JSON.stringify(loggedInUser));
    } catch (error) {
        message.textContent = "Login could not be completed. Try again.";
        return;
    }

    message.style.color = "green";
    message.textContent = "Login successful! Opening your dashboard...";

    loginForm.querySelector('button[type="submit"]').disabled = true;

    setTimeout(function () {
        window.location.href = "generator.html";
    }, 700);
});
