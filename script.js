document.addEventListener('DOMContentLoaded', () => {
    tsParticles.load("tsparticles", {
        fullScreen: {
            enable: true,
            zIndex: -1 // Taki yeh background mein rahe
        },
        background: {
            color: {
                value: "#121212" // Dark background color
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
                value: "#ff3b00" // Particle ka naya rang
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
