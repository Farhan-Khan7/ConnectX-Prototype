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
const alumniMain = document.querySelector(".alumniMain")
const signupMain = document.querySelector(".signupMain")

const alumniContainer = document.querySelector(".alumni-container")
const studentContainer = document.querySelector(".student-container")
const instituteContainer = document.querySelector(".institue-container")
const loginContainer = document.querySelector(".login-container")

const footer = document.querySelector(".site-footer")


homeLink.addEventListener("click", function () {
    homeMain.style.display = "block"
    signupMain.style.display = "none"
    alumniMain.style.display = "none"
    signupLink.style.color = "#E0E0E0"
    homeLink.style.color = "#ffd60a"



})


alumniLink.addEventListener("click", function () {
    homeMain.style.display = "none"
    signupMain.style.display = "none"
    alumniMain.style.display = "block"
})


eventsLink.addEventListener("click", function () {
    homeMain.style.display = "none"
    signupMain.style.display = "none"
    alumniMain.style.display = "none"
})


donationsLink.addEventListener("click", function () {
    homeMain.style.display = "none"
    signupMain.style.display = "none"
    alumniMain.style.display = "none"
})


jobLink.addEventListener("click", function () {
    homeMain.style.display = "none"
    signupMain.style.display = "none"
    alumniMain.style.display = "none"
})


mentorshipLink.addEventListener("click", function () {
    homeMain.style.display = "none"
    signupMain.style.display = "none"
    alumniMain.style.display = "none"
})


signupLink.addEventListener("click", function () {
    homeLink.style.color = "#E0E0E0"
    signupLink.style.color = "#ffd60a"
    homeMain.style.display = "none"
    alumniMain.style.display = "none"
    footer.style.display = "none"
    signupMain.style.display = "initial"
})




const buttons = document.querySelectorAll('.form-changes-btn button');

buttons.forEach(button => {
    button.addEventListener('click', () => {
        buttons.forEach(btn => btn.classList.remove('active')); // pehle sab remove
        button.classList.add('active'); // clicked button ko add
    });
});




// Sirf Alumni button Students button Institute button
const alumniBtn = document.querySelector('#alumni');
const studentsBtn = document.querySelector('#students');
const instituteBtn = document.querySelector('#institute');

studentsBtn.addEventListener("click", function () {
    studentContainer.style.display = "block"
    alumniContainer.style.display = "none"
    instituteContainer.style.display = "none"
    loginContainer.style.display = "none"
})

alumniBtn.addEventListener("click", function () {
    alumniContainer.style.display = "block"
    studentContainer.style.display = "none"
    instituteContainer.style.display = "none"

})

instituteBtn.addEventListener("click", function () {
    instituteContainer.style.display = "block"
    alumniContainer.style.display = "none"
    studentContainer.style.display = "none"


})


// const loginBtnInstitute = document.querySelector('#Login-btn-institute');
const loginBtnAlumni = document.querySelector('#Login-btn-alumni');
const loginBtnstudent = document.querySelector('#Login-btn-student');
const loginBtnInstitute = document.querySelector('#Login-btn-institute');
const signupBtnAlumni = document.querySelector('#Signup-btn-alumni');
const signupBtnStudent = document.querySelector('#Signup-btn-student');
const signupBtnInstitute = document.querySelector('#Signup-btn-institute');

const alumniLogin = document.querySelector("#alumni-login")
const studentLogin = document.querySelector("#student-login")
const instituteLogin = document.querySelector("#institute-login")
// ----- LOGIN FROM EACH LOGIN -----


// ============== ALUMNI LOGIN SIGNUP PAGE =================
signupBtnAlumni.addEventListener("click", function () {
    alumniLogin.style.display = "none"
    alumniContainer.style.display = "block"
})
loginBtnAlumni.addEventListener("click", function () {
    alumniLogin.style.display = "block"
    alumniContainer.style.display = "none"
})

// ============== STUDENT LOGIN SIGNUP PAGE =================
signupBtnStudent.addEventListener("click", function () {
    studentLogin.style.display = "none"
    studentContainer.style.display = "block"
})
loginBtnstudent.addEventListener("click", function () {
    studentLogin.style.display = "block"
    studentContainer.style.display = "none"

})


// ==============  INSTITUTE LOGIN SIGNUP PAGE =================

signupBtnInstitute.addEventListener("click", function () {
    instituteLogin.style.display = "none"
    instituteContainer.style.display = "block"
})
loginBtnInstitute.addEventListener("click", function () {
    instituteLogin.style.display = "block"
    instituteContainer.style.display = "none"
})












homeLink.addEventListener("click", () => {
    homeMain.style.display = "block";
    signupMain.style.display = "none";
    alumniMain.style.display = "none";
    footer.style.display = "block";
});

alumniLink.addEventListener("click", () => {
    homeMain.style.display = "none";
    signupMain.style.display = "none";
    alumniMain.style.display = "block";
    footer.style.display = "block";
});

signupLink.addEventListener("click", () => {
    homeMain.style.display = "none";
    alumniMain.style.display = "none";
    signupMain.style.display = "block";
    footer.style.display = "none";
});


// ================== SIGNUP/LOGIN TOGGLE ==================


// signupBtnAlumni?.addEventListener("click", () => {
//     alumniLogin.style.display = "none";
//     alumniContainer.style.display = "block";
// });

// loginBtnAlumni?.addEventListener("click", () => {
//     alumniLogin.style.display = "block";
//     alumniContainer.style.display = "none";
// });


// ================== ALUMNI SIGNUP FORM -> CREATE CARD ==================
const alumniForm = document.querySelector("#alumni-form");
const alumniCardsContainer = document.querySelector(".alumniMain .cards");
const photoInput = document.querySelector("#alumni-photo"); // file input

alumniForm.addEventListener("submit", function (e) {
    e.preventDefault(); // default submit stop

    // --- Form Data ---
    const name = document.querySelector("#alumni-name").value;
    const graduationYear = document.querySelector("#alumni-graduation-year").value;
    const instituteName = document.querySelector("#alumni-institute-name").value;
    const linkedIn = document.querySelector("#alumni-linkedIn-url").value;
    const skills = document.querySelector("#alumni-skills").value.split(",");
    const github = document.querySelector("#alumni-github-url").value;
    const company = document.querySelector("#alumni-company").value;
    const jobTitle = document.querySelector("#alumni-job-title").value;

    // --- Photo Handling (agar user upload kare to usi ka use hoga) ---
    let photoURL = `https://placehold.co/80x80/0a192f/ccd6f6?text=${name[0] || 'A'}`;
    if (photoInput.files && photoInput.files[0]) {
        photoURL = URL.createObjectURL(photoInput.files[0]);
    }

    // --- Create Card ---
    const card = document.createElement("div");
    card.classList.add("alumni-card");

    card.innerHTML = `
            <div class="card-header">
                <img src="${photoURL}" alt="Profile Picture" class="profile-pic">
                <div class="header-info">
                    <h2>${name}</h2>
                <p>Position : ${jobTitle || "Alumni"}</p>
                <p>Company : ${company || "Not Specified"}</p>
                </div>
            </div>
            <ul class="info-section">
                <li><i class="fa-solid fa-graduation-cap"></i> Graduation Year: ${graduationYear}</li>
                        <li><i class="fa-solid fa-graduation-cap"></i> Institute: ${instituteName}</li>
            </ul>
            <div class="skills-section">
                <h3>Skills</h3>
                <div class="skills-pills">
                    ${skills.map(skill => `<span class="skill">${skill.trim()}</span>`).join("")}
                </div>
            </div>
            <div class="card-footer">
                <div class="social-links">
                    ${linkedIn ? `<a href="${linkedIn}" target="_blank"><i class="fa-brands fa-linkedin"></i></a>` : ""}
                    ${github ? `<a href="${github}" target="_blank"><i class="fa-brands fa-github"></i></a>` : ""}
                </div>
                <button class="connect-btn">Connect</button>
            </div>
        `;

    // --- Add Card to Alumni Directory ---
    alumniCardsContainer.appendChild(card);

    // --- Reset form ---
    alumniForm.reset();

    // --- After signup -> Show Login Page ---
    alumniContainer.style.display = "none";
    alumniLogin.style.display = "block";
    signupMain.style.display = "block";
});



