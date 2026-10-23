
const signupForm = document.getElementById("signupForm");

signupForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const fullName = document.getElementById("fullname").value.trim();
    const username = document.getElementById("username").value.trim();
    const email = document.getElementById("email").value.trim().toLowerCase();
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirm-password").value;
    const message = document.getElementById("message");

    message.textContent = "";
    message.style.color = "red";

    if (password !== confirmPassword) {
        message.textContent = "Passwords do not match!";
        return;
    }

    if (password.length < 8) {
        message.textContent = "Password must be at least 8 characters.";
        return;
    }

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

    const usernameExists = users.some(function (user) {
        return user.username.toLowerCase() === username.toLowerCase();
    });

    const emailExists = users.some(function (user) {
        return user.email.toLowerCase() === email;
    });

    if (usernameExists) {
        message.textContent = "That username is already taken.";
        return;
    }

    if (emailExists) {
        message.textContent = "An account with this email already exists.";
        return;
    }

    const newUser = {
        fullName: fullName,
        username: username,
        email: email,
        password: password
    };

    users.push(newUser);

    try {
        localStorage.setItem("users", JSON.stringify(users));
    } catch (error) {
        message.textContent = "Could not save your account. Try again.";
        return;
    }

    message.style.color = "green";
    message.textContent = "Account created! Redirecting to login...";

    signupForm.querySelector('button[type="submit"]').disabled = true;

    setTimeout(function () {
        window.location.href = "login.html";
    }, 1000);
});
