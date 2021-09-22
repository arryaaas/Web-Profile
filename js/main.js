// Menambahkan shadow pada header saat halaman web di scroll
document.addEventListener("scroll", function () {
  const header = document.querySelector(".header");
  if (this.body.scrollTop > 1 || this.documentElement.scrollTop > 1) {
    header.classList.add("header-scrolled");
  } else {
    header.classList.remove("header-scrolled");
  }
});

// Mengatur buka dan tutup menu navbar saat icon hamburger tampil
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", mobileMenu);

function mobileMenu() {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
}

const navLink = document.querySelectorAll(".nav-item > a");

navLink.forEach((n) => n.addEventListener("click", closeMenu));

function closeMenu() {
  hamburger.classList.remove("active");
  navMenu.classList.remove("active");
}

// Membuat animasi text berjalan menggunakan TextPlugin GSAP
gsap.registerPlugin(TextPlugin);
gsap.to(".hero-title > p", {
  duration: 2,
  delay: 2,
  text: "3rd-year Computer Science Student",
});

// Membuat animasi ketika halaman di scroll menggunakan AOS (Animate On Scroll)
const aboutText = document.querySelector(".about-text");
aboutText.dataset.aos = "fade-up";

const aboutSocial = document.querySelector(".about-social");
aboutSocial.dataset.aos = "fade-up";
aboutSocial.dataset.aosDelay = 350;

const skillCard = document.querySelectorAll(".skill-card");
skillCard.forEach((item) => {
  item.dataset.aos = "zoom-in";
});

const timelineItem = document.querySelectorAll(".timeline-item");
timelineItem.forEach((item, i) => {
  item.dataset.aos = "fade-down";
  item.dataset.aosDelay = i * 350;
});

const educationRight = document.querySelector(".education-right");
educationRight.dataset.aos = "fade-up";
educationRight.dataset.aosDelay = 1400;

const portfolioCard = document.querySelectorAll(".portfolio-card");
portfolioCard.forEach((item) => {
  item.dataset.aos = "zoom-in";
});

const contactLeft = document.querySelector(".contact-left");
contactLeft.dataset.aos = "fade-down";

const contactRight = document.querySelector(".contact-right");
contactRight.dataset.aos = "fade-up";
contactRight.dataset.aosDelay = 350;

AOS.init({
  duration: 1500,
  once: true,
});

// Membuat animasi parallax untuk ilustrasi pada section education dan contact dengan parallax.js
let scenes = [];
const scenesSelector = document.querySelectorAll(".scene");

for (let i = 0; i < scenesSelector.length; i++) {
  scenes[i] = new Parallax(scenesSelector[i]);
}

// Membuat fitur ucapan selamat pagi, siang, sore, dan malam menggunakan SweetAlert2
const hour = new Date().getHours();

function greetingsAlert(msg, icon) {
  Swal.fire({
    position: "top",
    html: `
      <div style="display: flex; justify-content: center; align-items: center; gap: 1rem;">
        <p>${msg}</p>
        <img src=${icon} alt="Greetings Icons" width="32px"/>
      </div>
    `,
    showConfirmButton: false,
    timer: 1500,
  });
}

if (hour >= 4 && hour < 10) {
  greetingsAlert("Selamat Pagi", "../img/icons/morning.svg");
} else if (hour >= 10 && hour < 14) {
  greetingsAlert("Selamat Siang", "../img/icons/noon.svg");
} else if (hour >= 14 && hour < 18) {
  greetingsAlert("Selamat Sore", "../img/icons/dusk.svg");
} else if (hour >= 18 || hour < 4) {
  greetingsAlert("Selamat Malam", "../img/icons/night.svg");
}

// Mengirim pesan melalui email menggunakan EmailJS
(function () {
  emailjs.init("user_9ISWZiapR7yZpiSrx1OrH");
})();

const contactForm = document.getElementById("contact-form");

function contactFormAlert(icon, title, text) {
  Swal.fire({
    icon: `${icon}`,
    title: `${title}`,
    text: `${text}`,
  });
}

contactForm.addEventListener("submit", function (event) {
  event.preventDefault();
  emailjs.sendForm("contact_service", "contact_form", this).then(
    function (response) {
      contactForm.reset();
      console.log("SUCCESS!", response.status, response.text);
      contactFormAlert("success", "Sukses", "Pesan berhasil dikirim");
    },
    function (error) {
      console.log("FAILED...", error);
      contactFormAlert("error", "Ups...", "Ada yang tidak beres!");
    }
  );
});
