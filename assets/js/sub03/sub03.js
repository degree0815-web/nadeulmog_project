import { applyI18n, getCurrentLang } from "../i18n/langChange.js";
import { initLangTab } from "../ui/langTab.js";
import { regionData } from "../sub01/regionData.js";
import { colorPalettes } from "../ui/colorPalette.js";
import { regionGallery } from "./regionGallery.js";



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



window.sub03Swiper = new Swiper('.sub03__region__btn__swiper', {
    grabCursor: true,
    slidesPerView: 3,
    spaceBetween: 30,
    initialSlide: 0,
    navigation: {
        nextEl: '.sub03__region__pagination__wrap .swiper-button-next',
        prevEl: '.sub03__region__pagination__wrap .swiper-button-prev',
    },
    breakpoints: {
        315: {
            spaceBetween: 20,
        },
        479: {
            slidesPerView: 3,
        },
        768: {
            slidesPerView: 4,
        },
        1200: {
            slidesPerView: 8,
        },
        1470: {
            slidesPerView: 10,
            spaceBetween: 40,

        }
    }
});


window.gallerySwiper = new Swiper(".sub03__gallery__swiper", {
    centeredSlides: true,
    slidesPerView: 'auto',
    spaceBetween: 20,

    pagination: {
        el: ".sub03__content__right__wrap .swiper-pagination",
        type: "progressbar",
    },
    autoplay: {
        delay: 2000,
        disableOnInteraction: false,
    }

});

// Helpers: map small region key to colorPalettes key
const paletteKeyMap = {
    jung: 'junggu',
    dong: 'donggu',
    michuhol: 'michuhol',
    yeonsu: 'yeonsugu',
    namdong: 'namdonggu',
    bupyeong: 'bupyeong',
    gyeyang: 'gyeyang',
    seo: 'seogu',
    ganghwa: 'ganghwagun',
    ongjin: 'ongjingun',
};

const regionBackgroundColors = {
    jung: 'linear-gradient(180deg, #511212, #5B3D2A)',
    dong: 'linear-gradient(180deg, #402412, #6D725E)',
    michuhol: 'linear-gradient(180deg, #2E474D, #72595D)',
    yeonsu: 'linear-gradient(180deg, #3B6262, #A98E9D)',
    namdong: 'linear-gradient(180deg, #293523, #4B4B4B)',
    bupyeong: 'linear-gradient(180deg, #D38881, #7DBCAF)',
    gyeyang: 'linear-gradient(180deg, #416147, #547489)',
    seo: 'linear-gradient(180deg, #223742, #779996)',
    ganghwa: 'linear-gradient(180deg, #434C2A, #7C5A40)',
    ongjin: 'linear-gradient(180deg, #212C3C, #90C7E9)',
};

let currentRegion = 'jung';
let currentLang = getCurrentLang();

function renderRegionUI(region, lang) {
    const data = regionData[region];
    if (!data) return;

    // Get custom background color for region (can be solid color or gradient)
    const bgValue = regionBackgroundColors[region] || '#ffffff';
    document.body.style.background = bgValue;

    // Get palette for color swatches
    const paletteKey = paletteKeyMap[region] || paletteKeyMap['jung'];
    const palette = colorPalettes[paletteKey] || ['#ffffff', '#cccccc', '#999999'];

    // region name
    const regionNameEl = document.querySelector('.region__name');
    if (regionNameEl) regionNameEl.innerHTML = data.title?.[lang] || data.directTitle?.[lang] || '';

    // palette colors
    const c1 = document.querySelector('.sub03__colorPalette__color01');
    const c2 = document.querySelector('.sub03__colorPalette__color02');
    const c3 = document.querySelector('.sub03__colorPalette__color03');
    if (c1) c1.style.backgroundColor = palette[0];
    if (c2) c2.style.backgroundColor = palette[1];
    if (c3) c3.style.backgroundColor = palette[2];

    // palette description (localized)
    const descEl = document.querySelector('.sub03__colorPalette__desc');
    if (descEl) descEl.innerHTML = data.sectionDesc?.[lang] || '';

    // Render gallery slides for region
    const images = regionGallery[region] || [];
    // Rebuild swiper to reliably start from the first slide
    const container = document.querySelector('.sub03__gallery__swiper');
    const wrapper = container?.querySelector('.swiper-wrapper');
    if (container && wrapper) {
        wrapper.innerHTML = images.map(src => `<div class=\"swiper-slide\"><img src=\"${src}\" alt=\"\"></div>`).join('');
        // destroy existing instance if present
        if (window.gallerySwiper && typeof window.gallerySwiper.destroy === 'function') {
            window.gallerySwiper.destroy(true, true);
        }
        // re-initialize to guarantee index 0
        window.gallerySwiper = new Swiper('.sub03__gallery__swiper', {
            slidesPerView: 'auto',
            spaceBetween: 0,
            centeredSlides: false,
            pagination: {
                el: '.swiper-pagination',
                type: 'progressbar',
            },
            autoplay: {
                delay: 2000,
                disableOnInteraction: false,
            },
            breakpoints: {
                315: {

                },
                479: {
                    spaceBetween: 17,
                },
                1200: {
                    spaceBetween: 20,
                    centeredSlides: true,
                },
            },
            initialSlide: 0,
        });
        window.gallerySwiper.slideTo(0, 0, false);
    } else {
        const fallbackWrapper = document.querySelector('.sub03__gallery__swiper .swiper-wrapper');
        if (fallbackWrapper) {
            fallbackWrapper.innerHTML = images.map(src => `<div class=\"swiper-slide\"><img src=\"${src}\" alt=\"\"></div>`).join('');
        }
    }
}

// Wire region buttons
function wireRegionButtons() {
    const buttons = document.querySelectorAll('.sub03__region__btn__swiper .btn');
    buttons.forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            const region = btn.dataset.region;
            if (!region) return;
            currentRegion = region;

            // active state
            buttons.forEach(b => b.classList.remove('is-active'));
            btn.classList.add('is-active');

            renderRegionUI(currentRegion, currentLang);
            // ensure dynamic texts are processed by i18n (do not emit langchange)
            applyI18n(currentLang, false);
        });
    });
}

// react to language changes
window.addEventListener('langchange', (e) => {
    if (e && e.detail && e.detail.lang) {
        currentLang = e.detail.lang;
        renderRegionUI(currentRegion, currentLang);
        // translation of data-i18n attributes is handled globally by applyI18n when language was changed
    }
});

// initial
wireRegionButtons();
renderRegionUI(currentRegion, currentLang);