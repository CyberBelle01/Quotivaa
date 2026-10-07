const quotes = [
    {
        text: "Success does not always arrive when you expect it. Sometimes, it comes quietly after you have spent a long time refusing to give up.",
        author: "Marcus Ellison"
    },
    {
        text: "You do not need to have everything figured out before you take the first step. Progress often begins with nothing more than courage.",
        author: "Daniel Brooks"
    },
    {
        text: "The mistakes you make today can become the lessons that guide you toward better decisions tomorrow, if you are willing to learn from them.",
        author: "Nathan Cole"
    },
    {
        text: "A difficult beginning does not mean you are heading toward a difficult ending. Keep moving, keep learning, and give yourself time to grow.",
        author: "Adrian Miles"
    },
    {
        text: "Your future is built from the small decisions you make when nobody is watching. Choose habits that your future self will appreciate.",
        author: "Ethan Parker"
    },
    {
        text: "There will be days when your progress feels invisible, but remember that roots grow beneath the ground long before a tree becomes visible.",
        author: "Samuel Carter"
    },
    {
        text: "Do not allow one disappointing moment to convince you that your entire journey has failed. A setback is only one chapter of your story.",
        author: "Julian Hayes"
    },
    {
        text: "The person you want to become is created through repeated choices, patient effort, and the willingness to continue when motivation disappears.",
        author: "Oliver Bennett"
    },
    {
        text: "Sometimes the bravest thing you can do is begin again, especially when you know exactly how painful the previous attempt was.",
        author: "Caleb Morgan"
    },
    {
        text: "Dreams become more powerful when you stop waiting for the perfect moment and start working with the opportunities that are already around you.",
        author: "Isaac Reynolds"
    },
    {
        text: "You cannot control every circumstance that enters your life, but you can control the attitude and effort you bring to each situation.",
        author: "Aaron Mitchell"
    },
    {
        text: "Growth often feels uncomfortable because it requires you to leave behind habits, thoughts, and fears that once made you feel safe.",
        author: "Leonard Brooks"
    },
    {
        text: "Do not measure your journey only by how far you have left to go. Take time to recognize how far you have already traveled.",
        author: "Michael Foster"
    },
    {
        text: "A strong future is rarely created in one extraordinary moment. It is usually built through ordinary days filled with consistent effort.",
        author: "Thomas Reed"
    },
    {
        text: "When you are tempted to quit, remember why you started and consider whether the obstacle in front of you deserves the power to stop you.",
        author: "Henry Wallace"
    },
    {
        text: "Knowledge becomes valuable when you use it to solve problems, help others, and create something that did not exist before.",
        author: "Victor Lawson"
    },
    {
        text: "You may not be the best person in the room today, but you can choose to be the person who learns the most.",
        author: "Benjamin Scott"
    },
    {
        text: "Confidence is not knowing that everything will work perfectly. It is trusting yourself enough to handle things when they do not.",
        author: "Edward Grant"
    },
    {
        text: "The road to meaningful achievement is rarely straight. Sometimes getting lost teaches you more than following the original direction ever could.",
        author: "George Anderson"
    },
    {
        text: "Your circumstances may influence where you begin, but they do not have to determine how far you are willing to go.",
        author: "Robert Harrison"
    },
    {
        text: "Every skill that feels difficult today was once something you did not know how to do. Give yourself permission to be a beginner.",
        author: "James Carter"
    },
    {
        text: "Do not spend so much time comparing your chapter one with someone else's chapter twenty. Everyone's journey develops at a different pace.",
        author: "William Turner"
    },
    {
        text: "The ability to keep learning after failure is one of the greatest advantages you can give yourself in life.",
        author: "Alexander Moore"
    },
    {
        text: "Small improvements may seem insignificant when viewed alone, but repeated consistently, they can completely transform the direction of your life.",
        author: "Christopher Adams"
    },
    {
        text: "You cannot change yesterday, but you can decide what lesson you will carry from it into everything you do tomorrow.",
        author: "Matthew Lewis"
    },
    {
        text: "Great ideas often begin as imperfect thoughts. Do not reject an idea simply because you have not yet discovered how to improve it.",
        author: "Andrew Collins"
    },
    {
        text: "Patience is not doing nothing while waiting for success. It is continuing to work while understanding that meaningful results take time.",
        author: "Jonathan Pierce"
    },
    {
        text: "Sometimes progress means moving forward, and sometimes it means stopping long enough to understand which direction you should take next.",
        author: "Nicholas Wright"
    },
    {
        text: "Your potential is not measured by what you already know. It is also measured by how willing you are to learn what you do not know.",
        author: "Stephen Walker"
    },
    {
        text: "The hardest part of many journeys is not reaching the destination but convincing yourself that you are capable of beginning.",
        author: "Charles Bennett"
    },
    {
        text: "Do something today that makes tomorrow easier. The smallest useful action can become the beginning of a much bigger change.",
        author: "Daniel Harper"
    },
    {
        text: "You will encounter people who doubt your abilities, but their opinion does not have to become the limit you place on yourself.",
        author: "Ryan Mitchell"
    },
    {
        text: "Failure becomes less frightening when you understand that it can provide information about what needs to change before your next attempt.",
        author: "Jason Miller"
    },
    {
        text: "The most valuable lessons are sometimes hidden inside experiences you never wanted to have. Look carefully before deciding that they were wasted.",
        author: "Patrick Evans"
    },
    {
        text: "A goal becomes easier to approach when you stop thinking about the entire mountain and focus on the next step.",
        author: "Benjamin Hayes"
    },
    {
        text: "Your attention is one of your most valuable resources. Spend it on things that help you become the person you want to be.",
        author: "Marcus Bennett"
    },
    {
        text: "Being talented can open a door, but discipline is what helps you keep walking when the excitement of starting has disappeared.",
        author: "David Anderson"
    },
    {
        text: "You are allowed to change your plans when you discover a better direction. Changing course is not the same thing as giving up.",
        author: "Daniel Morgan"
    },
    {
        text: "The people who succeed are not always the ones who begin with the most advantages. Sometimes they are simply the ones who continue.",
        author: "Samuel Wright"
    },
    {
        text: "If you spend every day waiting until you feel ready, you may never begin. Start where you are and improve as you go.",
        author: "Alexander Grant"
    },
    {
        text: "A quiet effort repeated every day can eventually become louder than a thousand promises made without action.",
        author: "Elliot Parker"
    },
    {
        text: "Do not let the fear of making a wrong decision prevent you from making any decision at all. Learn, adjust, and keep moving.",
        author: "Nathan Brooks"
    },
    {
        text: "The future does not ask you to be perfect. It asks you to keep becoming better than the person you were yesterday.",
        author: "Lucas Bennett"
    },
    {
        text: "Sometimes the opportunity you are looking for is hidden inside the responsibility you are currently trying to avoid.",
        author: "Andrew Parker"
    },
    {
        text: "You cannot always choose the challenges you face, but you can choose whether those challenges become excuses or opportunities to grow.",
        author: "Ryan Carter"
    },
    {
        text: "Every expert was once unfamiliar with the things they now understand. Never confuse being inexperienced with being incapable.",
        author: "Thomas Mitchell"
    },
    {
        text: "The best time to improve your life is not when everything becomes easy. It is when you decide that difficulty will not stop you.",
        author: "James Reynolds"
    },
    {
        text: "Your journey may look completely different from everyone else's, and that is perfectly fine. Different paths can still lead to meaningful destinations.",
        author: "Oliver Morgan"
    },
    {
        text: "If you keep showing up, keep learning, and keep adjusting, eventually the things that once seemed impossible can become part of your normal routine.",
        author: "Ethan Brooks"
    },
    {
        text: "Do not underestimate what can happen when curiosity, patience, and consistent effort are combined over a long period of time.",
        author: "Michael Reynolds"
    }
];


const quoteText = document.getElementById("quote-text");
const quoteAuthor = document.getElementById("quote-author");
const generateBtn = document.getElementById("generate-btn");

generateBtn.addEventListener("click", generateQuote);

function generateQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    const randomQuote = quotes[randomIndex];
    quoteText.textContent = randomQuote.text;
    quoteAuthor.textContent = "- " + randomQuote.author;
}

generateQuote();