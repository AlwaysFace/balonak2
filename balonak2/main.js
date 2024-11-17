const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");
const menuBtnIcon = menuBtn.querySelector("i");

menuBtn.addEventListener("click", () => {
  navLinks.classList.toggle("open");

  const isOpen = navLinks.classList.contains("open");
  menuBtnIcon.setAttribute("class", isOpen ? "ri-close-line" : "ri-menu-line");
});

navLinks.addEventListener("click", () => {
  navLinks.classList.remove("open");
  menuBtnIcon.setAttribute("class", "ri-menu-line");
});

const scrollRevealOption = {
  origin: "bottom",
  distance: "50px",
  duration: 1000,
};

// header container
ScrollReveal().reveal(".header__content p", {
  ...scrollRevealOption,
});

ScrollReveal().reveal(".header__content h1", {
  ...scrollRevealOption,
  delay: 500,
});

ScrollReveal().reveal(".header__content .header__btn", {
  ...scrollRevealOption,
  delay: 1000,
});

// about container
ScrollReveal().reveal(".about__container .section__header", {
  ...scrollRevealOption,
});

ScrollReveal().reveal(".about__container .section__description", {
  ...scrollRevealOption,
  delay: 500,
});

// blog container
ScrollReveal().reveal(".blog__card", {
  ...scrollRevealOption,
  interval: 500,
});

const instagram = document.querySelector(".instagram__flex");

const instagramContent = Array.from(instagram.children);

instagramContent.forEach((item) => {
  const duplicateNode = item.cloneNode(true);
  duplicateNode.setAttribute("aria-hidder", true);
  instagram.appendChild(duplicateNode);
});

document.addEventListener('DOMContentLoaded', function () {
  var swiper = new Swiper('.swiper-container', {
    centeredSlides: true,     // Center the active slide
    loop: true,               // Infinite loop mode
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    breakpoints: {
      // For small screens (mobile phones)
      600: {
        slidesPerView: 1,     // Show 1 slide on screens up to 600px wide
        spaceBetween: 10,
      },
      // For medium screens (tablets)
      768: {
        slidesPerView: 2,     // Show 2 slides on screens up to 768px wide
        spaceBetween: 20,
      },
      // For large screens (desktops)
      1024: {
        slidesPerView: 3,     // Show 3 slides on screens above 1024px
        spaceBetween: 30,
      },
    },
  });
});


document.addEventListener('DOMContentLoaded', function () {
  var fadeInText = document.querySelector('.fade-in-text'); // Najde element s textem

  function checkScroll() {
    // Získání pozice elementu a pozice okna
    var rect = fadeInText.getBoundingClientRect();
    var windowHeight = window.innerHeight;

    // Pokud je element v zorném poli, přidejte třídu pro animaci
    if (rect.top <= windowHeight && rect.bottom >= 0) {
      fadeInText.classList.add('visible');
    } else {
      fadeInText.classList.remove('visible');
    }
  }

  // Zavolání funkce při každém scrollování
  window.addEventListener('scroll', checkScroll);
  // Zavolání při načtení stránky pro okamžitý efekt
  checkScroll();
});



