/* ===================================================
   OUR FRIENDSHIP ❤️
   SCRIPT.JS
=================================================== */


/* ===================================================
   FIREBASE IMPORTS
=================================================== */

import { initializeApp } from
"https://www.gstatic.com/firebasejs/12.2.1/firebase-app.js";

import {
    getFirestore,
    collection,
    addDoc,
    serverTimestamp,
    query,
    orderBy,
    onSnapshot
} from
"https://www.gstatic.com/firebasejs/12.2.1/firebase-firestore.js";


/* ===================================================
   FIREBASE CONFIG
=================================================== */

const firebaseConfig = {

    apiKey: "YOUR_API_KEY",

    authDomain: "YOUR_AUTH_DOMAIN",

    projectId: "YOUR_PROJECT_ID",

    storageBucket: "YOUR_STORAGE_BUCKET",

    messagingSenderId: "YOUR_SENDER_ID",

    appId: "YOUR_APP_ID"

};


/* ===================================================
   INITIALIZE FIREBASE
=================================================== */

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);


/* ===================================================
   PASSWORD
=================================================== */

const PASSWORD = "ana2711gube";


/* ===================================================
   DOM ELEMENTS
=================================================== */

const website = document.getElementById("website");

const lockScreen = document.getElementById("lockScreen");

const unlockBtn = document.getElementById("unlockBtn");

const passwordInput = document.getElementById("password");

const error = document.getElementById("error");

const startBtn = document.getElementById("startBtn");

const themeBtn = document.getElementById("themeBtn");


/* ===================================================
   PASSWORD SCREEN
=================================================== */

function unlockWebsite(){

    if(passwordInput.value.trim() === PASSWORD){

        lockScreen.style.opacity = "0";

        setTimeout(()=>{

            lockScreen.style.display = "none";

            website.style.display = "block";

            website.style.animation = "fadeIn .8s";

        },500);

    }

    else{

        error.innerHTML = "❌ Wrong Password";

        const card = document.querySelector(".lockCard");

        card.classList.add("shake");

        setTimeout(()=>{

            card.classList.remove("shake");

        },400);

    }

}


unlockBtn.addEventListener("click", unlockWebsite);


passwordInput.addEventListener("keypress",(e)=>{

    if(e.key==="Enter"){

        unlockWebsite();

    }

});


/* ===================================================
   HERO BUTTON
=================================================== */

startBtn.addEventListener("click",()=>{

    document.getElementById("gallery").scrollIntoView({

        behavior:"smooth"

    });

});


/* ===================================================
   DARK MODE
=================================================== */

if(localStorage.getItem("theme")==="dark"){

    document.body.classList.add("dark");

    themeBtn.innerHTML="☀️ Light Mode";

}


themeBtn.addEventListener("click",()=>{

    document.body.classList.toggle("dark");

    if(document.body.classList.contains("dark")){

        themeBtn.innerHTML="☀️ Light Mode";

        localStorage.setItem("theme","dark");

    }

    else{

        themeBtn.innerHTML="🌙 Dark Mode";

        localStorage.setItem("theme","light");

    }

});


/* ===================================================
   HERO FADE IN
=================================================== */

window.addEventListener("load",()=>{

    const hero=document.querySelector(".hero-content");

    hero.style.opacity="1";

    hero.style.transform="translateY(0)";

});

/* ===================================================
   IMAGE MODAL
=================================================== */

const modal = document.getElementById("modal");
const modalImg = document.getElementById("modalImg");
const closeBtn = document.getElementById("close");

const galleryImages = document.querySelectorAll(".photo img");

// Open image
galleryImages.forEach((img) => {

    img.addEventListener("click", () => {

        modal.style.display = "flex";

        modalImg.src = img.src;

        modalImg.alt = img.alt;

        document.body.style.overflow = "hidden";

    });

});

// Close button
closeBtn.addEventListener("click", closeModal);

// Click outside image
modal.addEventListener("click", (e) => {

    if (e.target === modal) {

        closeModal();

    }

});

// ESC key closes modal
document.addEventListener("keydown", (e) => {

    if (e.key === "Escape") {

        closeModal();

    }

});

function closeModal(){

    modal.style.display = "none";

    document.body.style.overflow = "auto";

}
/* ===================================================
   SCROLL REVEAL ANIMATION
=================================================== */

// Select all elements that should animate
const revealElements = document.querySelectorAll(
    ".photo, .event, .wish-card, .music-player, .letter-section, .gallery, .timeline, .Event-day, footer"
);

// Initial hidden state
revealElements.forEach((element) => {

    element.style.opacity = "0";
    element.style.transform = "translateY(50px)";
    element.style.transition = "opacity 0.8s ease, transform 0.8s ease";

});

// Reveal function
function revealOnScroll() {

    revealElements.forEach((element) => {

        const elementTop = element.getBoundingClientRect().top;

        const revealPoint = window.innerHeight - 100;

        if (elementTop < revealPoint) {

            element.style.opacity = "1";
            element.style.transform = "translateY(0)";

        }

    });

}

// Run on page load
window.addEventListener("load", revealOnScroll);

// Run while scrolling
window.addEventListener("scroll", revealOnScroll);

/* ===================================================
   FLOATING SPARKLES
=================================================== */

function createSparkle() {

    const sparkle = document.createElement("div");

    sparkle.classList.add("sparkle");

    // Random horizontal position
    sparkle.style.left = Math.random() * window.innerWidth + "px";

    // Random size
    const size = Math.random() * 8 + 4;

    sparkle.style.width = size + "px";
    sparkle.style.height = size + "px";

    // Random animation duration
    sparkle.style.animationDuration =
        (3 + Math.random() * 4) + "s";

    // Random opacity
    sparkle.style.opacity =
        (0.4 + Math.random() * 0.6);

    document.body.appendChild(sparkle);

    // Remove after animation
    setTimeout(() => {

        sparkle.remove();

    }, 7000);

}

// Create a sparkle every 350ms
setInterval(createSparkle, 350);

/* ===================================================
   ENVELOPE OPENING ANIMATION
=================================================== */

const envelope = document.getElementById("envelope");

if (envelope) {

    envelope.addEventListener("click", () => {

        envelope.classList.toggle("open");

        if (envelope.classList.contains("open")) {

            heartBurst();

        }

    });

}

/* /* ===================================================
   HEART BURST EFFECT
=================================================== */

function heartBurst() {

    const rect = envelope.getBoundingClientRect();

    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    const hearts = ["❤️", "💖", "💙", "💕", "💗"];

    for (let i = 0; i < 25; i++) {

        const heart = document.createElement("div");

        heart.className = "burst-heart";

        heart.innerHTML =
            hearts[Math.floor(Math.random() * hearts.length)];

        heart.style.left = centerX + "px";
        heart.style.top = centerY + "px";

        heart.style.fontSize =
            (18 + Math.random() * 20) + "px";

        const angle = Math.random() * Math.PI * 2;

        const distance = 120 + Math.random() * 220;

        const x = Math.cos(angle) * distance;
        const y = Math.sin(angle) * distance;

        heart.style.setProperty("--x", x + "px");
        heart.style.setProperty("--y", y + "px");

        document.body.appendChild(heart);

        setTimeout(() => {

            heart.remove();

        }, 1800);

    }

}
