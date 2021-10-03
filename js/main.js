// Mengatur light / dark theme
const themeIcon = document.querySelector(".theme-icon");

function retrieve_theme(){
    var theme = localStorage.getItem('website-theme');
    if(theme != null){
        themeIcon.src = "img/icons/sun.svg";
        document.body.classList.add(theme);
    }
}

retrieve_theme();

themeIcon.addEventListener("click", function () {
  document.body.classList.toggle("dark-theme");
  if (document.body.classList.contains("dark-theme")) {
    themeIcon.src = "img/icons/sun.svg";
    localStorage.setItem('website-theme' , 'dark-theme');
  } else {
    themeIcon.src = "img/icons/moon.svg";
    localStorage.removeItem("website-theme");
  }
});

// Data portfolio
const portfolio = [
  {
    url_image: "img/portfolio/matrix-calculator.png",
    title: "Matrix Calculator",
    category: "Android, Kotlin",
    description: "Aplikasi untuk menghitung operasi matriks mulai dari penjumlahan, pengurangan, perkalian, determinan, trace, invers, transpose, dan perkalian skalar.",
    link_github: "https://github.com/arryaaas/Matrix-Calculator",
  },
  {
    url_image: "img/portfolio/my-movie-db.png",
    title: "My Movie Db",
    category: "Android, Kotlin",
    description: "Aplikasi katalog film dan acata tv. Temukan berbagai macam informasi mengenai film dan acara tv terbaik dan dapatkan notifikasi film terbaru setiap harinya.",
    link_github: "https://github.com/arryaaas/My-Movie-Db",
  },
  {
    url_image: "img/portfolio/info-covid-19.png",
    title: "Info Covid-19",
    category: "Android, Kotlin",
    description: "Dapatkan informasi terupdate terkait perkembangan virus Covid-19. Konsultasikan kesehatan dengan dokter dan lihat daftar rumah sakit rujukan Covid-19.",
    link_github: "https://github.com/arryaaas/Info-Covid-19",
  },
  {
    url_image: "img/portfolio/github-users.png",
    title: "Github User's",
    category: "Android, Kotlin",
    description: "Aplikasi katalog pengguna Github. Temukan informasi seputar nama perusahaan, lokasi, dan jumlah repository dari berbagai pengguna github di seluruh dunia.",
    link_github: "https://github.com/arryaaas/Github-Users",
  },
  {
    url_image: "img/portfolio/met-num.png",
    title: "Met Num",
    category: "Web, Python",
    description: "Aplikasi web kalkulator untuk menghitung metode numerik mulai dari metode tertutup, metode terbuka, diferensiasi numerik, dan integrasi numerik.",
    link_github: "https://github.com/arryaaas/Met-Num",
  },
  {
    url_image: "img/portfolio/youtube-downloader.png",
    title: "YouTube Downloader",
    category: "Web, Python",
    description: "Aplikasi web untuk mendownload Video YouTube, tersedia berbagai tipe dan resolusi. Mulai dari 3gpp, mp4, 144p, 360p, 720p, dan masih banyak lagi.",
    link_github: "https://github.com/arryaaas/YouTube-Downloader",
  },
  {
    url_image: "img/portfolio/qr-code-generator.png",
    title: "QR Code Generator",
    category: "Web, Python",
    description: "Aplikasi web untuk membuat QR Code. Cukup masukkan url dan submit, kemudian tunggu beberapa saat dan QR Code siap untuk didownload.",
    link_github: "https://github.com/arryaaas/QR-Code-Gen",
  },
  {
    url_image: "img/portfolio/matrix-caculator-gui.png",
    title: "Matrix Calculator GUI",
    category: "GUI, Python",
    description: "Matrix Calculator GUI adalah aplikasi desktop untuk menghitung penjumlahan, pengurangan, perkalian, perkalian skalar dan determinan sebuah matriks.",
    link_github: "https://github.com/arryaaas/Matrix-Calculator-GUI",
  },
];

// Render element card portfolio sesuai category yang dipilih
let selectedCategory = "All";

function renderPortfolio(category) {
  let cards = "";
  const filteredPortfolio = category !== "All" ? portfolio.filter((i) => i.category.includes(category)) : portfolio;
  filteredPortfolio.forEach((p) => {
    cards += `
      <div class="portfolio-card">
        <img src="${p.url_image}" alt="${p.title}" width="100%" />
        <div class="portfolio-card-body">
          <div class="portfolio-card-title">
            <h3>${p.title}</h3>
            <p><em>${p.category}</em></p>
          </div>
          <p>${p.description}</p>
          <a href="${p.link_github}" target="_blank" class="btn btn-portfolio-card">Lihat selengkapnya</a>
        </div>
      </div>
    `;
  });
  const portfolioWrapper = document.querySelector(".portfolio-wrapper");
  portfolioWrapper.innerHTML = cards;
}

renderPortfolio(selectedCategory);

const categoryItems = document.querySelectorAll(".category-item");

categoryItems.forEach((e) => {
  e.addEventListener("click", function () {
    const current = document.querySelector(".category-item-active");
    current.classList.remove("category-item-active");
    this.classList.add("category-item-active");
    selectedCategory = this.innerHTML;
    renderPortfolio(selectedCategory);
  });
});

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
    background: "var(--clr-background-card)",
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
