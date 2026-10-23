
const quotes = [
    {
        text: "Sometimes, growing up means accepting that the people you started with may not be the people who finish the journey with you. Appreciate the memories, learn from the changes, and keep making room for the experiences that will shape who you become.",
        author: "Marcus Ellison",
        category: "life"
    },
    {
        text: "You do not need to have everything figured out before taking the first step. Most people discover their strengths through experience, not endless planning. Begin with what you know, learn what you do not, and allow consistent effort to build your confidence.",
        author: "Daniel Brooks",
        category: "motivation"
    },
    {
        text: "Success becomes more meaningful when you can look back and recognize the person you had to become to achieve it. The discipline, patience, and lessons you gain along the way may eventually matter just as much as the destination you worked so hard to reach.",
        author: "Nathan Cole",
        category: "success"
    },
    {
        text: "Real affection is often found in the little things people do without expecting applause. It is the thoughtful message, the patient conversation, and the willingness to listen when life feels overwhelming. Sometimes, the smallest gestures leave the deepest impressions.",
        author: "Amara Bennett",
        category: "love"
    },
    {
        text: "Not every opportunity deserves a yes, and not every disagreement deserves your attention. Wisdom includes knowing what deserves your energy, what requires patience, and what you must leave behind. Protecting your time can be just as important as using it well.",
        author: "Ethan Hayes",
        category: "wisdom"
    },
    {
        text: "Never allow embarrassment to convince you that learning is something to hide. Every skilled person once asked basic questions, made avoidable mistakes, and struggled with unfamiliar ideas. Give yourself permission to be a beginner, because progress often begins where pride ends.",
        author: "Sophia Williams",
        category: "motivation"
    },
    {
        text: "The people worth keeping in your life will make an effort to understand you, even when they do not immediately agree with you. Healthy relationships are not built on perfect understanding, but on mutual respect, honest communication, and the willingness to keep trying.",
        author: "Caleb Morgan",
        category: "love"
    },
    {
        text: "A setback can reveal weaknesses in your plan without proving that your entire dream is impossible. Examine what happened, identify what you can improve, and return with a clearer strategy. Sometimes, the experience that disappoints you today prepares you for tomorrow's opportunity.",
        author: "Isabella James",
        category: "success"
    },
    {
        text: "You cannot prevent every difficult situation, but you can learn to meet challenges without allowing them to define your entire world. Pause before reacting, consider your options, and remember that a thoughtful response can create possibilities that anger or fear might overlook.",
        author: "David Carter",
        category: "wisdom"
    },
    {
        text: "Life is not made meaningful only by extraordinary achievements or unforgettable adventures. It is also found in familiar conversations, shared laughter, quiet evenings, and the people who make ordinary days feel special. Do not overlook the beauty of the life happening around you.",
        author: "Olivia Reed",
        category: "life"
    },
    {
        text: "There will be moments when your effort seems to produce nothing, and doubt begins to question whether continuing is worthwhile. Remember that improvement is not always immediately visible. Keep learning, remain willing to adjust, and give your hard work enough time to develop.",
        author: "Michael Foster",
        category: "motivation"
    },
    {
        text: "Money can create opportunities, but your decisions determine what you build with them. Pursue financial independence without forgetting your values, relationships, or personal growth. The goal is not simply to possess more, but to create a life in which your achievements serve a meaningful purpose.",
        author: "Grace Mitchell",
        category: "success"
    },
    {
        text: "Sometimes, the best way to show someone they matter is to give them your full attention. Put aside distractions, listen without preparing your next response, and take their feelings seriously. Being truly present can communicate care more clearly than a hundred empty promises.",
        author: "Samuel Bennett",
        category: "love"
    },
    {
        text: "Intelligence is not measured only by how quickly you answer a question. It also appears in your willingness to reconsider an opinion, admit uncertainty, and learn from people whose experiences differ from yours. The mind grows when curiosity becomes more important than always being right.",
        author: "Victoria Hayes",
        category: "wisdom"
    },
    {
        text: "You are not required to remain loyal to a version of yourself that no longer reflects what you have learned. Your interests can change, your priorities can mature, and your plans can take a different direction. Growth sometimes means giving yourself permission to begin again.",
        author: "Jordan Ellis",
        category: "life"
    },
    {
        text: "Confidence is not always a feeling that arrives before a challenge. Sometimes, it is the understanding that you can face uncertainty, ask for help, and learn along the way. Take the opportunity even when you feel nervous, and let experience teach you what preparation alone cannot.",
        author: "Chloe Anderson",
        category: "motivation"
    },
    {
        text: "A strong reputation is built long before the biggest opportunity arrives. The way you keep small promises, respond to criticism, and treat people when nothing is at stake gradually determines whether others can trust you with something important.",
        author: "Benjamin Clarke",
        category: "success"
    },
    {
        text: "Love should not require you to silence every opinion or abandon every part of yourself. A caring relationship allows both people to speak honestly, maintain their individuality, and work through disagreements without using affection as a weapon. Respect should remain even during difficult conversations.",
        author: "Zara Thompson",
        category: "love"
    },
    {
        text: "Not every criticism is an attack, and not every compliment is proof that you are doing everything right. Consider the source, examine the evidence, and decide what is useful. Learning to separate honest feedback from empty judgment can make your decisions much clearer.",
        author: "Alexander Brooks",
        category: "wisdom"
    },
    {
        text: "Your timeline does not need to match someone else's to be worthwhile. People begin with different resources, responsibilities, and opportunities, so comparison rarely tells the complete story. Concentrate on what you can learn today and let your own progress become the measure that guides you.",
        author: "Naomi Williams",
        category: "life"
    },
    {
        text: "When your original plan stops working, do not assume that your only choices are to quit or keep struggling in exactly the same way. Take an honest look at the situation, seek better information, and make adjustments that move you closer to what matters.",
        author: "Gabriel Wright",
        category: "motivation"
    },
    {
        text: "Lasting achievement usually comes from ordinary actions repeated with care. One study session, one improved skill, and one difficult task completed may not seem impressive alone, but together they create momentum. Respect the small steps because meaningful progress is often built quietly.",
        author: "Ava Collins",
        category: "success"
    },
    {
        text: "Caring about someone does not mean you must agree with every choice they make. You can express concern, offer advice, and remain supportive while respecting their ability to decide. Genuine care makes room for honesty without turning concern into control.",
        author: "Isaac Turner",
        category: "love"
    },
    {
        text: "Before deciding that someone is wrong, make sure you understand what they are actually saying. Assumptions can turn simple misunderstandings into unnecessary conflict. Ask questions, listen carefully, and judge the argument on its merits rather than on how unfamiliar it sounds.",
        author: "Maya Richardson",
        category: "wisdom"
    },
    {
        text: "You do not have to figure out your entire future in one afternoon. Some answers become clearer only after you try something, discover what matters to you, and learn from the results. Take the next sensible step instead of demanding certainty about every step ahead.",
        author: "Daniel Parker",
        category: "life"
    },
    {
        text: "Your past mistakes deserve reflection, not permanent control over your future. Accept responsibility, apologize where necessary, and learn what you can do differently next time. You cannot rewrite every decision you regret, but you can use what happened to make wiser choices now.",
        author: "Leah Morgan",
        category: "motivation"
    },
    {
        text: "People may celebrate your final achievement without seeing the difficult decisions and repeated attempts behind it. Do not let the absence of recognition convince you that your effort is meaningless. Build your skills, improve your work, and remember that progress matters before applause arrives.",
        author: "Noah Campbell",
        category: "success"
    },
    {
        text: "Sometimes, the kindest thing you can do for someone is to support their growth even when it changes the relationship. People need room to discover their interests, develop their confidence, and make independent decisions. Caring deeply should not mean keeping someone exactly as they are.",
        author: "Amara Johnson",
        category: "love"
    },
    {
        text: "A confident voice can make an idea sound convincing, but confidence alone cannot make it true. Look for evidence, examine the reasoning, and remain willing to question information that supports what you already believe. Good judgment requires curiosity as well as conviction.",
        author: "Elijah Scott",
        category: "wisdom"
        text: "The best is yet to come",
        author: "Lemoh Yasir"
    },
    {
        text: "You may discover that the future you once wanted no longer fits the person you are becoming. That realization does not make your earlier dreams foolish. It means experience has given you new information, and you now have an opportunity to choose your direction more thoughtfully.",
        author: "Esther Adeyemi",
        category: "life"
    },
    {
        text: "A difficult start does not determine how far you can eventually go. Limited resources and unfamiliar challenges may require you to learn creatively, seek support, and move patiently, but they do not erase your ability to improve. Begin with what you have and keep developing.",
        author: "Tobi Adebayo",
        category: "motivation"
    },
    {
        text: "Professional success is not only about producing impressive work; it is also about making collaboration easier. Communicate clearly, admit when something goes wrong, respect other people's time, and follow through on commitments. Reliability can turn a good opportunity into a lasting relationship.",
        author: "David Okafor",
        category: "success"
    },
    {
        text: "A relationship becomes more secure when both people can admit mistakes without fearing that every disagreement will become a competition. Listening, taking responsibility, and making sincere efforts to repair hurt create the conditions for trust to deepen over time.",
        author: "Aisha Bello",
        category: "love"
    },
    {
        text: "Patience is not the same as doing nothing and hoping for a better outcome. Real patience means continuing useful work while accepting that some results need time. Prepare carefully, remain flexible, and resist the temptation to abandon a worthwhile goal simply because it is taking longer than expected.",
        author: "Chinonso Eze",
        category: "wisdom"
    },
    {
        text: "Some of the moments you remember most fondly may not be the ones you planned. An unexpected conversation, a shared joke, or a simple day with people who care about you can become a treasured memory. Make room for joy beyond your schedule.",
        author: "Kemi Adeola",
        category: "life"
    },
    {
        text: "Not everyone will understand what you are trying to build, especially when your progress is still difficult to see. Listen to thoughtful advice, but do not let every doubt become a reason to stop. Keep learning, test your ideas, and let your actions provide clearer answers.",
        author: "Favour Nwosu",
        category: "motivation"
    },
    {
        text: "Setbacks can test your plans without cancelling your potential. Sometimes you will need to change your method, learn a missing skill, or ask for help you previously avoided. Adaptability allows you to keep pursuing a meaningful goal without pretending every part of the journey will be easy.",
        author: "Samuel Osei",
        category: "success"
    },
    {
        text: "An apology matters most when it shows that you understand what went wrong and are prepared to act differently. Words can open the door to forgiveness, but consistent behaviour helps rebuild trust. Take responsibility without demanding that another person immediately forget their hurt.",
        author: "Imani Clarke",
        category: "love"
    },
    {
        text: "Being open-minded does not require you to believe everything you hear. It requires you to consider unfamiliar ideas fairly, ask useful questions, and examine the evidence before reaching a conclusion. You can remain curious while still holding carefully considered values and principles.",
        author: "Daniel Mensah",
        category: "wisdom"
    },
    {
        text: "The people you meet can teach you more than what to admire; they can also help you recognize what matters to you. Notice the qualities you respect, the choices you question, and the experiences that change your perspective. Use those lessons to shape your own values.",
        author: "Ruth Lawson",
        category: "life"
    },
    {
        text: "You do not need perfect circumstances to begin improving your life. You may have limited time, incomplete knowledge, or a plan that still needs work. Start with one realistic action, learn from the result, and use what you discover to make the next step more effective.",
        author: "Nathaniel King",
        category: "motivation"
    },
    {
        text: "Long-term goals become easier to pursue when your daily habits support them. Motivation may rise and fall, but a manageable routine gives you something dependable to return to. Focus on building a process you can sustain rather than expecting yourself to feel inspired every single day.",
        author: "Adaobi Obi",
        category: "success"
    },
    {
        text: "The people who truly value you will not always know the perfect words to say, but they will make an effort to understand what you need. Consistent consideration, honest conversations, and respect during difficult moments often reveal more about affection than grand promises do.",
        author: "Michael Adams",
        category: "love"
    },
    {
        text: "You can stand firmly by your beliefs without humiliating someone who disagrees with you. Explain your reasoning, listen to their perspective, and recognize when a conversation has become unproductive. Strong principles do not require disrespect, and disagreement does not have to become hostility.",
        author: "Sarah Coleman",
        category: "wisdom"
    },
    {
        text: "Do not become so focused on the person you hope to be that you ignore the person you are today. Your ambitions deserve effort, but so do your friendships, your curiosity, and your well-being. Build toward the future while remaining present for the life you already have.",
        author: "Josephine Gray",
        category: "life"
    },
    {
        text: "When uncertainty makes you doubt yourself, focus on the parts of the challenge you can actually influence. Practise the skill, ask for feedback, and prepare for different outcomes. You cannot guarantee that every attempt will succeed, but you can make each attempt a chance to learn.",
        author: "Emmanuel James",
        category: "motivation"
    },
    {
        text: "Trust grows when your actions consistently match your promises. You do not need to impress everyone with ambitious claims; you need to be honest about what you can do and dependable about what you agree to do. Small acts of integrity can build a reputation that lasts.",
        author: "Faith Williams",
        category: "success"
    },
    {
        text: "Strong relationships are not built by avoiding every uncomfortable conversation. They grow when people can speak honestly, listen without rushing to defend themselves, and take responsibility for their actions. Conflict may still happen, but mutual respect can help both people find a healthier way forward.",
        author: "Christopher Dean",
        category: "love"
    },
    {
        text: "You cannot control how every person interprets your decisions, and exhausting yourself trying to please everyone will leave little room for your own priorities. Listen when feedback is sincere, reconsider your choices when evidence calls for it, and continue making thoughtful decisions that reflect your values.",
        author: "Abigail Ross",
        category: "wisdom"
    }
];


// Temporary data (resets when the page refreshes)
let history = [];
let favorites = [];
let currentQuote = null;

// Get HTML elements
const navLinks = document.querySelectorAll(".nav-link");
const pages = document.querySelectorAll(".page");
const category = document.getElementById("category");
const quoteText = document.getElementById("quote-text");
const quoteAuthor = document.getElementById("quote-author");
const generateBtn = document.getElementById("generate-btn");
const favoriteBtn = document.getElementById("favorite-btn");
const message = document.getElementById("message");
const sidebar = document.getElementById("sidebar");

// Dashboard navigation
function showPage(pageId) {
    pages.forEach(function(page) {
        page.classList.remove("active");
    });

    navLinks.forEach(function(link) {
        link.classList.remove("active");
    });

    document.getElementById(pageId).classList.add("active");

    navLinks.forEach(function(link) {
        if (link.dataset.page === pageId) {
            link.classList.add("active");
        }
    });

    sidebar.classList.remove("open");

    if (pageId === "history") {
        displayHistory();
    }

    if (pageId === "favorites") {
        displayFavorites();
    }

    updateCounts();
}

navLinks.forEach(function(link) {
    link.addEventListener("click", function() {
        showPage(link.dataset.page);
    });
});

document.querySelectorAll("[data-go]").forEach(function(button) {
    button.addEventListener("click", function() {
        showPage(button.dataset.go);
    });
});

// Mobile menu
document.getElementById("menu-btn").addEventListener("click", function() {
    sidebar.classList.toggle("open");
});

// Generate a quote
function generateQuote() {
    let availableQuotes = [];

    if (category.value === "all") {
        availableQuotes = quotes;
    } else {
        availableQuotes = quotes.filter(function(quote) {
            return quote.category === category.value;
        });
    }

    if (availableQuotes.length === 0) {
        message.textContent = "No quotes available in this category.";
        return;
    }

    let randomIndex = Math.floor(Math.random() * availableQuotes.length);

    currentQuote = availableQuotes[randomIndex];

    quoteText.textContent = currentQuote.text;
    quoteAuthor.textContent = "— " + currentQuote.author;
    message.textContent = "";

    history.unshift(currentQuote);

    updateCounts();
}

generateBtn.addEventListener("click", generateQuote);
category.addEventListener("change", generateQuote);

// Save a favorite
favoriteBtn.addEventListener("click", function() {
    if (currentQuote === null) {
        message.textContent = "Generate a quote first!";
        return;
    }

    let alreadySaved = favorites.some(function(quote) {
        return quote.text === currentQuote.text;
    });

    if (alreadySaved) {
        message.textContent = "This quote is already in your favorites.";
    } else {
        favorites.push(currentQuote);
        message.textContent = "Quote saved to favorites!";

        updateCounts();
    }
});

// Display quote history
function displayHistory() {
    const historyList = document.getElementById("history-list");
    historyList.innerHTML = "";

    if (history.length === 0) {
        historyList.innerHTML =
            '<p class="empty-message">No quotes generated yet.</p>';
        return;
    }

    history.forEach(function(quote) {
        let item = document.createElement("div");
        item.className = "quote-item";

        let text = document.createElement("p");
        text.textContent = "“" + quote.text + "”";

        let author = document.createElement("small");
        author.textContent = "— " + quote.author;

        item.appendChild(text);
        item.appendChild(author);
        historyList.appendChild(item);
    });
}

// Display favorite quotes
function displayFavorites() {
    const favoritesList = document.getElementById("favorites-list");
    favoritesList.innerHTML = "";

    if (favorites.length === 0) {
        favoritesList.innerHTML =
            '<p class="empty-message">You have no favorite quotes yet.</p>';
        return;
    }

    favorites.forEach(function(quote) {
        let item = document.createElement("div");
        item.className = "quote-item";

        let text = document.createElement("p");
        text.textContent = "“" + quote.text + "”";

        let author = document.createElement("small");
        author.textContent = "— " + quote.author;

        let removeBtn = document.createElement("button");
        removeBtn.textContent = "Remove from Favorites";

        removeBtn.addEventListener("click", function() {
            favorites = favorites.filter(function(savedQuote) {
                return savedQuote.text !== quote.text;
            });

            displayFavorites();
            updateCounts();
        });

        item.appendChild(text);
        item.appendChild(author);
        item.appendChild(removeBtn);

        favoritesList.appendChild(item);
    });
}

// Update dashboard numbers
function updateCounts() {
    document.getElementById("history-count").textContent = history.length;
    document.getElementById("favorite-count").textContent = favorites.length;
}

// Display the dummy profile
const profileName = document.getElementById("profile-name");
const profileEmail = document.getElementById("profile-email");

profileName.value = user.fullname;
profileEmail.value = user.email;

document.getElementById("sidebar-name").textContent = user.fullname;

// Edit the dummy profile
document.getElementById("save-profile").addEventListener("click", function() {
    const name = profileName.value.trim();
    const email = profileEmail.value.trim();

    if (name === "" || email === "") {
        document.getElementById("profile-message").textContent =
            "Please enter your name and email.";
        return;
    }

    user.fullname = name;
    user.email = email;

    document.getElementById("sidebar-name").textContent = user.fullname;

    document.getElementById("profile-message").textContent =
        "Profile updated!";
});

// Demo logout
document.getElementById("logout-btn").addEventListener("click", function() {
    alert("Demo logout clicked!");
});

// Initial setup
updateCounts();
generateQuote();