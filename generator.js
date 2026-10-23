
"use strict";

// Check the logged-in user.
let user;

try {
    user = JSON.parse(localStorage.getItem("loggedInUser") || "null");
} catch (error) {
    user = null;
}

if (!user || !user.email) {
    window.location.replace("login.html");
} else {
    startDashboard();
}

function startDashboard() {
    let userKey = user.email.toLowerCase();

    function readArray(key) {
        try {
            const data = JSON.parse(localStorage.getItem(key) || "[]");
            return Array.isArray(data) ? data : [];
        } catch (error) {
            return [];
        }
    }

    let history = readArray(userKey + "_history");
    let favorites = readArray(userKey + "_favorites");

    let totalGenerated = Number(
        localStorage.getItem(userKey + "_totalGenerated") || history.length
    );

    if (!Number.isFinite(totalGenerated) || totalGenerated < 0) {
        totalGenerated = history.length;
    }

    let currentQuote = null;

    // Replace these examples with your full quote collection.
    const quotes = [
        {
            text: "The secret of getting ahead is getting started.",
            author: "Mark Twain",
            category: "motivation"
        },
        {
            text: "It always seems impossible until it's done.",
            author: "Nelson Mandela",
            category: "success"
        },
        {
            text: "Believe you can and you're halfway there.",
            author: "Theodore Roosevelt",
            category: "motivation"
        },
        {
            text: "The journey of a thousand miles begins with one step.",
            author: "Lao Tzu",
            category: "wisdom"
        },
        {
            text: "Life is what happens when you're busy making other plans.",
            author: "John Lennon",
            category: "life"
        },
        {
            text: "Where there is love there is life.",
            author: "Mahatma Gandhi",
            category: "love"
        },
        {
            text: "Success is the sum of small efforts repeated day in and day out.",
            author: "Robert Collier",
            category: "success"
        },
        {
            text: "Knowing yourself is the beginning of all wisdom.",
            author: "Aristotle",
            category: "wisdom"
        },
        {
            text: "Do what you can, with what you have, where you are.",
            author: "Theodore Roosevelt",
            category: "motivation"
        },
        {
            text: "A journey is best measured in friends, rather than miles.",
            author: "Tim Cahill",
            category: "life"
        }
    ];

    // Elements.
    const sidebar = document.getElementById("sidebar");
    const menuButton = document.getElementById("menu-btn");
    const greeting = document.getElementById("greeting");
    const welcomeMessage = document.getElementById("welcome-message");
    const usernameDisplay = document.getElementById("username-display");
    const sidebarName = document.getElementById("sidebar-name");

    const generatedCount = document.getElementById("generated-count");
    const favoriteCount = document.getElementById("favorite-count");
    const recentQuote = document.getElementById("recent-quote");

    const categorySelect = document.getElementById("category");
    const quoteText = document.getElementById("quote-text");
    const quoteAuthor = document.getElementById("quote-author");
    const generateButton = document.getElementById("generate-btn");
    const favoriteButton = document.getElementById("favorite-btn");
    const message = document.getElementById("message");

    const historyList = document.getElementById("history-list");
    const favoritesList = document.getElementById("favorites-list");

    const profileName = document.getElementById("profile-name");
    const profileUsername = document.getElementById("profile-username");
    const profileEmail = document.getElementById("profile-email");
    const saveProfileButton = document.getElementById("save-profile");
    const profileMessage = document.getElementById("profile-message");

    // Save this user's quote data.
    function saveData() {
        try {
            localStorage.setItem(
                userKey + "_history",
                JSON.stringify(history)
            );

            localStorage.setItem(
                userKey + "_favorites",
                JSON.stringify(favorites)
            );

            localStorage.setItem(
                userKey + "_totalGenerated",
                String(totalGenerated)
            );

            return true;
        } catch (error) {
            return false;
        }
    }

    // Greeting and account information.
    function displayGreeting() {
        const hour = new Date().getHours();

        let greetingText;

        if (hour < 12) {
            greetingText = "Good morning";
        } else if (hour < 17) {
            greetingText = "Good afternoon";
        } else {
            greetingText = "Good evening";
        }

        const name = user.fullName || user.username || "there";

        greeting.textContent = greetingText + ", " + name + "! ✨";

        welcomeMessage.textContent =
            "Welcome back to Quotivaa. Ready for a little inspiration?";

        usernameDisplay.textContent = user.username
            ? "Signed in as @" + user.username
            : "";

        sidebarName.textContent = user.fullName || user.username || "Your account";
    }

    // Navigation between dashboard sections.
    function showPage(pageName) {
        document.querySelectorAll(".page").forEach(function (page) {
            page.classList.toggle("active", page.id === pageName);
        });

        document.querySelectorAll(".nav-link").forEach(function (link) {
            link.classList.toggle(
                "active",
                link.dataset.page === pageName
            );
        });

        sidebar.classList.remove("open");
        menuButton.setAttribute("aria-expanded", "false");
    }

    document.querySelectorAll(".nav-link").forEach(function (link) {
        link.addEventListener("click", function () {
            showPage(link.dataset.page);
        });
    });

    document.querySelectorAll('[data-go="generate"]').forEach(function (button) {
        button.addEventListener("click", function () {
            showPage("generate");
        });
    });

    // Mobile menu.
    menuButton.addEventListener("click", function () {
        const isOpen = sidebar.classList.toggle("open");
        menuButton.setAttribute("aria-expanded", String(isOpen));
    });

    // Dashboard counts.
    function updateCounts() {
        generatedCount.textContent = totalGenerated;
        favoriteCount.textContent = favorites.length;
    }

    // Show the most recent quote on the overview.
    function displayRecentQuote() {
        recentQuote.textContent = "";

        if (history.length === 0) {
            recentQuote.textContent = "Your recent quote will appear here.";
            return;
        }

        const quote = document.createElement("p");
        quote.textContent = "“" + history[0].text + "” — " + history[0].author;
        recentQuote.appendChild(quote);
    }

    // Generate a quote.
    function generateQuote() {
        const category = categorySelect.value;

        const availableQuotes = quotes.filter(function (quote) {
            return category === "all" || quote.category === category;
        });

        if (availableQuotes.length === 0) {
            message.textContent = "No quotes available in this category.";
            return;
        }

        let choices = availableQuotes.filter(function (quote) {
            return !currentQuote || quote.text !== currentQuote.text;
        });

        if (choices.length === 0) {
            choices = availableQuotes;
        }

        const randomIndex = Math.floor(Math.random() * choices.length);
        currentQuote = choices[randomIndex];

        quoteText.textContent = currentQuote.text;
        quoteAuthor.textContent = "— " + currentQuote.author;

        totalGenerated++;

        history.unshift({
            text: currentQuote.text,
            author: currentQuote.author,
            category: currentQuote.category,
            date: new Date().toISOString()
        });

        history = history.slice(0, 100);

        const saved = saveData();

        displayHistory();
        displayRecentQuote();
        updateCounts();
        updateFavoriteButton();

        message.textContent = saved
            ? ""
            : "Quote displayed, but saving failed. Check browser storage.";
    }

    generateButton.addEventListener("click", generateQuote);

    // Favorites.
    function updateFavoriteButton() {
        if (!currentQuote) {
            favoriteButton.textContent = "♡ Save to Favorites";
            return;
        }

        const saved = favorites.some(function (quote) {
            return quote.text === currentQuote.text;
        });

        favoriteButton.textContent = saved
            ? "♥ Already in Favorites"
            : "♡ Save to Favorites";
    }

    favoriteButton.addEventListener("click", function () {
        if (!currentQuote) {
            message.textContent = "Generate a quote first!";
            return;
        }

        const exists = favorites.some(function (quote) {
            return quote.text === currentQuote.text;
        });

        if (exists) {
            message.textContent = "This quote is already in your favorites.";
            return;
        }

        favorites.unshift({
            text: currentQuote.text,
            author: currentQuote.author,
            category: currentQuote.category,
            date: new Date().toISOString()
        });

        if (!saveData()) {
            favorites.shift();
            message.textContent = "Could not save your favorite. Try again.";
            return;
        }

        displayFavorites();
        updateCounts();
        updateFavoriteButton();

        message.textContent = "Added to favorites!";
    });

    // Quote history.
    function displayHistory() {
        historyList.replaceChildren();

        if (history.length === 0) {
            const empty = document.createElement("p");
            empty.className = "empty-message";
            empty.textContent = "You haven't generated any quotes yet.";
            historyList.appendChild(empty);
            return;
        }

        history.forEach(function (quote) {
            const item = document.createElement("div");
            item.className = "quote-item";

            const text = document.createElement("p");
            text.textContent = "“" + quote.text + "”";

            const author = document.createElement("small");
            author.textContent = "— " + quote.author;

            item.append(text, author);

            if (quote.date) {
                const date = document.createElement("small");
                date.textContent = " · " + new Date(quote.date).toLocaleString();
                item.appendChild(date);
            }

            historyList.appendChild(item);
        });
    }

    // Saved favorites and remove button.
    function displayFavorites() {
        favoritesList.replaceChildren();

        if (favorites.length === 0) {
            const empty = document.createElement("p");
            empty.className = "empty-message";
            empty.textContent = "You haven't saved any favorites yet.";
            favoritesList.appendChild(empty);
            return;
        }

        favorites.forEach(function (quote) {
            const item = document.createElement("div");
            item.className = "quote-item";

            const text = document.createElement("p");
            text.textContent = "“" + quote.text + "”";

            const author = document.createElement("small");
            author.textContent = "— " + quote.author;

            const removeButton = document.createElement("button");
            removeButton.type = "button";
            removeButton.textContent = "Remove Favorite";

            removeButton.addEventListener("click", function () {
                const previousFavorites = favorites;

                favorites = favorites.filter(function (savedQuote) {
                    return savedQuote.text !== quote.text;
                });

                if (!saveData()) {
                    favorites = previousFavorites;
                    return;
                }

                displayFavorites();
                updateCounts();
                updateFavoriteButton();
            });

            item.append(text, author, removeButton);
            favoritesList.appendChild(item);
        });
    }

    // Profile.
    function displayProfile() {
        profileName.value = user.fullName || "";
        profileUsername.value = user.username || "";
        profileEmail.value = user.email || "";
    }

    saveProfileButton.addEventListener("click", function () {
        const newName = profileName.value.trim();
        const newEmail = profileEmail.value.trim().toLowerCase();

        profileMessage.style.color = "#b42318";
        profileMessage.textContent = "";

        if (!newName || !newEmail || !profileEmail.checkValidity()) {
            profileMessage.textContent = "Enter a valid name and email address.";
            return;
        }

        let users;

        try {
            users = JSON.parse(localStorage.getItem("users") || "[]");

            if (!Array.isArray(users)) {
                users = [];
            }
        } catch (error) {
            profileMessage.textContent = "Could not read account information.";
            return;
        }

        const oldEmail = userKey;

        const userIndex = users.findIndex(function (account) {
            return account.email.toLowerCase() === oldEmail;
        });

        if (userIndex === -1) {
            profileMessage.textContent = "Your account could not be found.";
            return;
        }

        const emailTaken = users.some(function (account) {
            return (
                account.email.toLowerCase() === newEmail &&
                account.email.toLowerCase() !== oldEmail
            );
        });

        if (emailTaken) {
            profileMessage.textContent = "That email is already registered.";
            return;
        }

        const newKey = newEmail;

        const updatedUser = {
            fullName: newName,
            username: users[userIndex].username,
            email: newEmail
        };

        try {
            // Transfer saved data if the email changes.
            if (newKey !== oldEmail) {
                localStorage.setItem(newKey + "_history", JSON.stringify(history));
                localStorage.setItem(newKey + "_favorites", JSON.stringify(favorites));
                localStorage.setItem(
                    newKey + "_totalGenerated",
                    String(totalGenerated)
                );
            }

            users[userIndex].fullName = newName;
            users[userIndex].email = newEmail;

            localStorage.setItem("users", JSON.stringify(users));
            localStorage.setItem("loggedInUser", JSON.stringify(updatedUser));

            if (newKey !== oldEmail) {
                localStorage.removeItem(oldEmail + "_history");
                localStorage.removeItem(oldEmail + "_favorites");
                localStorage.removeItem(oldEmail + "_totalGenerated");
                userKey = newKey;
            }
        } catch (error) {
            profileMessage.textContent = "Could not save your changes.";
            return;
        }

        user = updatedUser;
        displayGreeting();

        profileMessage.style.color = "#087348";
        profileMessage.textContent = "Profile updated successfully!";
    });

    // Log out.
    document.getElementById("logout-btn").addEventListener("click", function () {
        localStorage.removeItem("loggedInUser");
        window.location.replace("login.html");
    });

    // Start the dashboard.
    displayGreeting();
    displayProfile();
    displayHistory();
    displayFavorites();
    displayRecentQuote();
    updateCounts();
    showPage("overview");
}
