// ==========================================
// Smooth Scroll
// ==========================================

const startBtn = document.getElementById("startBtn");

startBtn.addEventListener("click", () => {
    document.getElementById("gallery").scrollIntoView({
        behavior: "smooth"
    });
});


// ==========================================
// Dark Mode
// ==========================================

const themeBtn = document.getElementById("themeBtn");

themeBtn.addEventListener("click", () => {

    document.body.classList.toggle("dark");

    if (document.body.classList.contains("dark")) {
        themeBtn.innerHTML = "☀️ Light Mode";
    } else {
        themeBtn.innerHTML = "🌙 Dark Mode";
    }

});


// ==========================================
// Image Modal
// ==========================================

const modal = document.getElementById("modal");
const modalImg = document.getElementById("modalImg");
const closeBtn = document.getElementById("close");

document.querySelectorAll(".photo img").forEach(img => {

    img.addEventListener("click", () => {

        modal.style.display = "flex";
        modalImg.src = img.src;

    });

});

closeBtn.addEventListener("click", () => {

    modal.style.display = "none";

});

modal.addEventListener("click", (e) => {

    if (e.target === modal) {
        modal.style.display = "none";
    }

});


// ==========================================
// Scroll Reveal Animation
// ==========================================

const revealItems = document.querySelectorAll(
    ".photo, .quote-box, .event"
);

revealItems.forEach(item => {

    item.style.opacity = "0";
    item.style.transform = "translateY(50px)";
    item.style.transition = "all .8s ease";

});

const reveal = () => {

    revealItems.forEach(item => {

        const top = item.getBoundingClientRect().top;

        if (top < window.innerHeight - 100) {

            item.style.opacity = "1";
            item.style.transform = "translateY(0)";

        }

    });

};

window.addEventListener("scroll", reveal);
window.addEventListener("load", reveal);


// ==========================================
// Rotating Friendship Quotes
// ==========================================

const quotes = [
    "Friends make every moment unforgettable ❤️",
    "Together is our favorite place to be.",
    "The best memories are made with friends.",
    "Friendship is one soul in two bodies.",
    "Distance means nothing when friendship means everything.",
    "Some people make life beautiful just by being in it.",
    "Every laugh with you became a lifelong memory.",
    "Real friends never leave your heart."
];

const quoteBoxes = document.querySelectorAll(".quote-box");

let quoteIndex = 0;

setInterval(() => {

    quoteBoxes.forEach((box, i) => {

        box.style.opacity = "0";

        setTimeout(() => {

            box.innerHTML =
                '"' +
                quotes[(quoteIndex + i) % quotes.length] +
                '"';

            box.style.opacity = "1";

        }, 300);

    });

    quoteIndex++;

}, 5000);


// ==========================================
// Floating Sparkles
// ==========================================

function createSparkle() {

    const sparkle = document.createElement("div");

    sparkle.className = "sparkle";

    sparkle.style.left = Math.random() * window.innerWidth + "px";

    sparkle.style.animationDuration =
        3 + Math.random() * 4 + "s";

    sparkle.style.width =
        6 + Math.random() * 8 + "px";

    sparkle.style.height = sparkle.style.width;

    document.body.appendChild(sparkle);

    setTimeout(() => {

        sparkle.remove();

    }, 7000);

}

setInterval(createSparkle, 500);


// ==========================================
// Save Theme
// ==========================================

if (localStorage.getItem("theme") === "dark") {

    document.body.classList.add("dark");
    themeBtn.innerHTML = "☀️ Light Mode";

}

themeBtn.addEventListener("click", () => {

    if (document.body.classList.contains("dark")) {

        localStorage.setItem("theme", "dark");

    } else {

        localStorage.setItem("theme", "light");

    }

});


// ==========================================
// Hero Fade-In
// ==========================================

window.addEventListener("load", () => {

    document.querySelector(".hero-content").style.opacity = "1";
    document.querySelector(".hero-content").style.transform = "translateY(0)";

});

// ==========================
// Envelope Animation
// ==========================

const envelope = document.getElementById("envelope");


function heartBurst(){

    for(let i=0;i<15;i++){

        const heart=document.createElement("div");

        heart.innerHTML="💖";

        heart.style.position="fixed";

        heart.style.left=(window.innerWidth/2-30+Math.random()*60)+"px";

        heart.style.top=(window.innerHeight/2)+"px";

        heart.style.fontSize=(18+Math.random()*18)+"px";

        heart.style.pointerEvents="none";

        heart.style.transition="all 2s ease";

        document.body.appendChild(heart);

        setTimeout(()=>{

            heart.style.transform=
            `translate(${(Math.random()-0.5)*400}px,-${200+Math.random()*250}px) rotate(${Math.random()*360}deg)`;

            heart.style.opacity=0;

        },20);

        setTimeout(()=>heart.remove(),2200);

    }

}

envelope.addEventListener("click",()=>{

    envelope.classList.toggle("open");

    heartBurst();

});

// ==========================================
// Friendship Day Wish Board
// ==========================================

const wishInput = document.getElementById("wishInput");
const saveWish = document.getElementById("saveWish");
const savedMsg = document.getElementById("savedMsg");

// Load saved wish
const storedWish = localStorage.getItem("friendshipWish");

if(storedWish){
    wishInput.value = storedWish;
}

saveWish.addEventListener("click",()=>{

    if(wishInput.value.trim()===""){

        savedMsg.style.color="red";
        savedMsg.innerHTML="Please write a wish first ❤️";
        return;

    }

    localStorage.setItem("friendshipWish",wishInput.value);

    savedMsg.style.color="green";
    savedMsg.innerHTML="✅ Your wish has been saved!";
});

const PASSWORD = "ana2711gube";   // Change this to your own password

const unlockBtn = document.getElementById("unlockBtn");
const passwordInput = document.getElementById("password");
const lockScreen = document.getElementById("lockScreen");
const website = document.getElementById("website");
const error = document.getElementById("error");

unlockBtn.addEventListener("click", unlock);

passwordInput.addEventListener("keypress", function(e){

    if(e.key==="Enter"){

        unlock();

    }

});

function unlock(){

    if(passwordInput.value===PASSWORD){

        lockScreen.style.opacity="0";

        setTimeout(()=>{

            lockScreen.style.display="none";

            website.style.display="block";

            website.style.animation="fadeIn 1s";

        },500);

    }

    else{

        error.innerHTML="❌ Incorrect password";

        document.querySelector(".lockCard").classList.add("shake");

        setTimeout(()=>{

            document.querySelector(".lockCard").classList.remove("shake");

        },400);

    }

}

// ==========================
// Music Player
// ==========================

const music = document.getElementById("bgMusic");
const musicBtn = document.getElementById("musicBtn");
const musicText = document.getElementById("musicText");

let playing = false;

musicBtn.addEventListener("click", () => {

    if(!playing){

        music.play();

        musicBtn.innerHTML = "⏸️";

        musicText.innerHTML = "Now Playing ❤️";

    }

    else{

        music.pause();

        musicBtn.innerHTML = "▶️";

        musicText.innerHTML = "Play Our Song";

    }

    playing = !playing;

});