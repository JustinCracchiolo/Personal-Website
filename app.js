let currentIndex = 0;
const projects = ["Images/login-project.png", "Images/chess.png", "Images/education.png", "Images/gdp.png", 
    "Images/heatmap.png", "Images/plot.png", "Images/pokedex.png", "Images/quote.png"
];

const switchImg = () => { 
    document.getElementById('project-slide').src = projects[currentIndex];
    currentIndex = (currentIndex + 1) % projects.length;
}
setInterval(switchImg, 10000);

window.onload = switchImg;

const navToAbout = () => {
    window.location.href = "about.html";
}

const navToHome = () => {
    window.location.href = "index.html";
}

const navToContact = () => {
    window.location.href = "contact.html";
}

function sendTo() {
    window.location.href = "https://mail.google.com/mail/u/0/#inbox";
}