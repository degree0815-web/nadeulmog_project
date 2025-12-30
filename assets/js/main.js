import { applyI18n, getCurrentLang } from "./i18n/langChange.js";
import { initLangTab } from "./ui/langTab.js";



// Apply lang when page is loaded
applyI18n(getCurrentLang());

// Connect to tab Event
initLangTab();

//SubMenu
const hamburgerBtn = document.querySelector('.hamburger-btn');
const subMenu = document.querySelector('.sub__menu');
const closeBtn = document.querySelector('.close__btn');
const overlay = document.querySelector('.overlay');

hamburgerBtn.addEventListener('click', (e) => {
    e.preventDefault();
    subMenu.classList.add('active');
});

closeBtn.addEventListener('click', () => {
    subMenu.classList.remove('active');
});

overlay.addEventListener('click', () => {
    subMenu.classList.remove('active');
});


// banner pallarax
const hide = (item) => {
    gsap.set(item, { autoAlpha: 0 });
}

const animate = (item) => {
    let x = 0;
    let y = 0;
    let delay = item.dataset.delay;

    if (item.classList.contains("reveal_LTR")) {
        x = -100,
            y = 0
    } else if (item.classList.contains("reveal_BTT")) {
        x = 0,
            y = 100
    } else if (item.classList.contains("reveal_TTB")) {
        x = 0,
            y = -100
    } else {
        x = 100,
            y = 0;
    }

    gsap.fromTo(item,
        { autoAlpha: 0, x: x, y: y },
        { autoAlpha: 1, x: 0, y: 0, delay: delay, duration: 1.5, overwrite: "auto", ease: "expo" }
    );
};

gsap.utils.toArray(".reveal").forEach(item => {
    hide(item);

    ScrollTrigger.create({
        trigger: item,
        start: "top bottom",
        end: "bottom top",
        markers: false,
        onEnter: () => { animate(item) }
    });
});
// swiper
var swiper = new Swiper(".gallery__swiper", {
    spaceBetween: 20,
    slidesPerView: 1,
    grid: {
        rows: 1,
    },
    speed: 700,
    loop: true,
    pagination: {
        el: ".swiper-pagination",
        type: "progressbar",
    },
    breakpoints: {

        325: {
            slidesPerView: 1,
            grid: {
                rows: 1,
            },

        },
        479: {
            slidesPerView: 1,
            grid: {
                rows: 2,
            },

        },
        768: {
            slidesPerView: 2,
            grid: {
                rows: 2,
            },
        },
        1200: {
            slidesPerView: 3,
            grid: {
                rows: 1,
            },
        },
        1720: {
            slidesPerView: 4,
            grid: {
                rows: 1,
            },

        }
    }
});