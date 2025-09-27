document.addEventListener('DOMContentLoaded', () => {
    tsParticles.load("tsparticles", {
        fullScreen: {
            enable: true,
            zIndex: -1 // Taki yeh background mein rahe
        },
        background: {
            color: {
                value: "#0a192f" // Dark background color
            }
        },
        particles: {
            number: {
                value: 80, // Particles ki sankhya
                density: {
                    enable: true,
                    value_area: 800
                }
            },
            color: {
                // value: "#ff3b00" // Particle ka naya rang
                value: "#0a192f"
            },
            shape: {
                type: "circle"
            },
            opacity: {
                value: 0.5,
                random: true,
            },
            size: {
                value: 3,
                random: true,
            },
            links: {
                color: "#ffffff", // Particles ke beech ki line ka rang
                distance: 150,
                enable: true,
                opacity: 0.2,
                width: 1
            },
            move: {
                enable: true,
                speed: 2,
                direction: "none",
                out_mode: "out",
            }
        },
        interactivity: {
            detectsOn: "canvas",
            events: {
                onHover: {
                    enable: true,
                    mode: "repulse" // Cursor le jaane par particles dur jayenge
                },
                onClick: {
                    enable: true,
                    mode: "push" // Click karne par aur particles aayenge
                },
                resize: true
            },
            modes: {
                repulse: {
                    distance: 100,
                    duration: 0.4
                },
                push: {
                    quantity: 4
                }
            }
        },
        detectRetina: true,
    });
});
// Background Animation 



// Hero Section Changing text 
const texts = [
    "Find Alumni Mentors to guide your career.",
    "Discover Exclusive Jobs and Internships.",
    "Join Events and Reunions worldwide.",
    "Contribute through Donations and Support.",
    "Grow together with Community Networking."
];

let index = 0;
const changingText = document.getElementById("changing-text");

function changeText() {
    // naya text lagao
    changingText.textContent = texts[index];
    index = (index + 1) % texts.length;

    // animation reset karne ke liye pehle hatao
    changingText.style.animation = "none";
    changingText.offsetHeight; // reflow trigger
    // fir dobara lagao
    changingText.style.animation = "slideUpFade 0.8s ease forwards";
}

// Start me bhi ek baar run karo
changeText();

// Har 3 sec me change karo
setInterval(changeText, 3000);


// Text Changing Js Done


const navTabs = document.querySelector(".nav-tabs");
const homeLink = document.querySelector(".home");
const alumniLink = document.querySelector(".alumni");
const eventsLink = document.querySelector(".events");
const donationsLink = document.querySelector(".donatitions");
const jobLink = document.querySelector(".job");
const mentorshipLink = document.querySelector(".mentorship");
const signupLink = document.querySelector(".signup");
const homeMain = document.querySelector(".homeMain")


homeLink.addEventListener("click" , function(){
    homeMain.style.display = "initial"
})


alumniLink.addEventListener("click" , function(){
    homeMain.style.display = "none"
})


eventsLink.addEventListener("click" , function(){
    homeMain.style.display = "none"
})


donationsLink.addEventListener("click" , function(){
    homeMain.style.display = "none"
})


jobLink.addEventListener("click" , function(){
    homeMain.style.display = "none"
})


mentorshipLink.addEventListener("click" , function(){
    homeMain.style.display = "none"
})


signupLink.addEventListener("click" , function(){
    homeMain.style.display = "none"
})



