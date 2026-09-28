
/* =========================
   MOBILE MENU
========================= */

const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");

menuBtn.addEventListener("click", () => {

    navLinks.classList.toggle("active");

    const icon = menuBtn.querySelector("i");

    if (navLinks.classList.contains("active")) {

        icon.classList.remove("fa-bars");
        icon.classList.add("fa-xmark");

    } else {

        icon.classList.remove("fa-xmark");
        icon.classList.add("fa-bars");

    }

});


/* =========================
   CLOSE MENU AFTER CLICK
========================= */

const navItems = document.querySelectorAll(".nav-links a");

navItems.forEach((item) => {

    item.addEventListener("click", () => {

        navLinks.classList.remove("active");

        const icon = menuBtn.querySelector("i");

        icon.classList.remove("fa-xmark");
        icon.classList.add("fa-bars");

    });

});


/* =========================
   NAVBAR BACKGROUND
========================= */

const header = document.querySelector(".header");

window.addEventListener("scroll", () => {

    if (window.scrollY > 50) {

        header.style.background = "rgba(8, 27, 29, 0.97)";

    } else {

        header.style.background = "rgba(16, 44, 46, 0.92)";

    }

});


/* =========================
   SCROLL REVEAL
========================= */

const revealElements = document.querySelectorAll(
    ".about-content, .about-images, .villa-card, .experience-card, .gallery-item, .kitchen-content, .kitchen-image, .location-content, .location-image"
);

const observer = new IntersectionObserver(
    (entries) => {

        entries.forEach((entry) => {

            if (entry.isIntersecting) {

                entry.target.classList.add("show");

                observer.unobserve(entry.target);

            }

        });

    },
    {
        threshold: 0.12
    }
);


revealElements.forEach((element) => {

    element.classList.add("reveal");

    observer.observe(element);

});


/* =========================
   WHATSAPP CLICK
========================= */

const whatsappButtons = document.querySelectorAll(
    ".nav-whatsapp, .btn-whatsapp, .whatsapp-btn, .floating-whatsapp"
);

whatsappButtons.forEach((button) => {

    button.addEventListener("click", () => {

        console.log("WhatsApp opened");

    });

});
