
/* --------------------------------------------------
    SideMenu
-------------------------------------------------- */
const sideMenu = document.querySelector("#sideMenu");
function openMenu() {
    sideMenu.style.transform = "translateX(-16rem)";
}
function closeMenu() {
    sideMenu.style.transform = "translateX(16rem)";
}

document.addEventListener("DOMContentLoaded", () => {
/* --------------------------------------------------
    Navbar
-------------------------------------------------- */
const navBar = document.querySelector("nav");
const navLinks = document.querySelector("nav ul");

// Navbar transparency on scroll
window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
    navBar.classList.add("bg-white", "bg-opacity-50", "backdrop-blur-lg", "shadow-sm");
    navLinks.classList.remove("bg-white", "shadow-sm", "bg-opacity-50");
    } else {
    navBar.classList.remove("bg-white", "bg-opacity-50", "backdrop-blur-lg", "shadow-sm");
    navLinks.classList.add("bg-white", "shadow-sm", "bg-opacity-50");
    }
});

/* --------------------------------------------------
    About Section Animation
-------------------------------------------------- */
const introParagraph = document.getElementById("intro-paragraph");
const timelineContainer = document.getElementById("timeline-container");
const timelineLine = document.getElementById("timeline-line");
const masters = document.getElementById("masters");
const bachelors = document.getElementById("bachelors");

const aboutObserver = new IntersectionObserver(
    (entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
        // Animate paragraph
        introParagraph.classList.remove("opacity-0", "translate-y-5");
        introParagraph.classList.add("opacity-100", "translate-y-0");

        // Fade in timeline container
        timelineContainer.classList.remove("opacity-0");
        timelineContainer.classList.add("opacity-100");

        // Animate timeline line
        timelineLine.style.height = `${timelineContainer.scrollHeight}px`;

        // Animate Masters icon
        setTimeout(() => {
            masters.classList.remove("opacity-0", "translate-y-5");
            masters.classList.add("opacity-100", "translate-y-0");
        }, 500);

        // Animate Bachelors icon
        setTimeout(() => {
            bachelors.classList.remove("opacity-0", "translate-y-5");
            bachelors.classList.add("opacity-100", "translate-y-0");
        }, 1500);

        // Unobserve after animation triggers once
        aboutObserver.unobserve(entry.target);
        }
    });
    },
    { threshold: 0.2 }
);

aboutObserver.observe(introParagraph);
aboutObserver.observe(timelineContainer);

/* --------------------------------------------------
    Skills Section Animation
-------------------------------------------------- */
const skillCards = document.querySelectorAll(".card");
const skillsObserver = new IntersectionObserver((entries, obs) => {
    entries.forEach((entry) => {
    if (entry.isIntersecting) {
        entry.target.classList.add("appeared");
        obs.unobserve(entry.target); // Animate once
    }
    });
});

skillCards.forEach((card) => skillsObserver.observe(card));

/* --------------------------------------------------
    Experience Section Animation
-------------------------------------------------- */
const experienceContainer = document.getElementById("experience-timeline-container");
const experienceLine = document.getElementById("experience-timeline-line");
const experienceMarkers = document.querySelectorAll("[id^='experience-marker-']");

const experienceObserver = new IntersectionObserver(
    (entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
        // Fade in timeline container
        experienceContainer.classList.remove("opacity-0");
        experienceContainer.classList.add("opacity-100");

        // Animate line height
        experienceLine.style.height = `${experienceContainer.scrollHeight}px`;

        // Animate each marker
        experienceMarkers.forEach((marker, index) => {
            setTimeout(() => {
            marker.classList.remove("opacity-0", "translate-y-5");
            }, 300 + index * 700);
        });

        experienceObserver.unobserve(entry.target);
        }
    });
    },
    { threshold: 0.2 }
);

experienceObserver.observe(experienceContainer);

/* --------------------------------------------------
    Carousel for Projects Section (md or larger)
-------------------------------------------------- */
const prevButton = document.querySelector(".swiper-button-prev");
const nextButton = document.querySelector(".swiper-button-next");
const carouselItems = document.getElementById("carousel-items");
const dots = document.querySelectorAll("#carousel-indicators span");

let currentIndex = 0;
const items = document.querySelectorAll("#carousel-items > div");
const totalItems = items.length;

function updateCarousel() {
    const offset = -currentIndex * items[0].clientWidth;
    carouselItems.style.transform = `translateX(${offset}px)`;

    // Update dots
    dots.forEach((dot, index) => {
    if (index === currentIndex) {
        dot.classList.add("bg-[#ff4e50]");
        dot.classList.remove("bg-gray-400");
    } else {
        dot.classList.add("bg-gray-400");
        dot.classList.remove("bg-[#ff4e50]");
    }
    });
}

prevButton.addEventListener("click", () => {
    currentIndex = currentIndex > 0 ? currentIndex - 1 : totalItems - 1;
    updateCarousel();
});

nextButton.addEventListener("click", () => {
    currentIndex = currentIndex < totalItems - 1 ? currentIndex + 1 : 0;
    updateCarousel();
});

updateCarousel(); // Set initial state

/* --------------------------------------------------
    Research Section Animation
-------------------------------------------------- */
const researchCards = document.querySelectorAll(".fade-in-up");
const researchObserver = new IntersectionObserver((entries, obs) => {
    entries.forEach((entry) => {
    if (entry.isIntersecting) {
        entry.target.classList.add("appeared");
        obs.unobserve(entry.target); // Animate once
    }
    });
}, { threshold: 0.1 });

researchCards.forEach((card) => researchObserver.observe(card));

/* --------------------------------------------------
    Projects Section 2 (Stacked for small screens)
-------------------------------------------------- */
const fadeUpElements = document.querySelectorAll(".fade-up");
const projects2Observer = new IntersectionObserver((entries, obs) => {
    entries.forEach((entry) => {
    if (entry.isIntersecting) {
        entry.target.classList.add("show");
        obs.unobserve(entry.target); // Animate once
    }
    });
}, { threshold: 0.1 });

fadeUpElements.forEach((el) => projects2Observer.observe(el));
});
