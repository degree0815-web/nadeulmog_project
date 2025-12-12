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
    spaceBetween: 40,    // 슬라이드 간격 (픽셀 단위) - 여기서 조절하면 슬라이드 사이 간격이 변함
    initialSlide: 0,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    breakpoints: {
        479: {
            slidesPerView: 3,

        },
        768: {
            slidesPerView: 5,
        },
        1200: {
            slidesPerView: 7,

        },
        1720: {
            slidesPerView: 10,

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
    jung: '#511212',
    dong: '#402412',
    michuhol: '#1E2A2D',
    yeonsu: '#182E2F',
    namdong: '#293523',
    bupyeong: 'linear-gradient(180deg, #D38881, #7DBCAF)',
    gyeyang: '#1A2C27',
    seo: '#334752',
    ganghwa: '#434C2A',
    ongjin: '#212C3C',
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
    // Remove existing slides and add new ones
    if (window.gallerySwiper) {
        window.gallerySwiper.removeAllSlides();
        const slides = images.map(src => `<div class="swiper-slide"><img src="${src}" alt=""></div>`);
        window.gallerySwiper.appendSlide(slides);
        window.gallerySwiper.update();
        window.gallerySwiper.slideTo(0);
    } else {
        // fallback: replace DOM directly
        const wrapper = document.querySelector('.sub03__gallery__swiper .swiper-wrapper');
        if (wrapper) {
            wrapper.innerHTML = images.map(src => `<div class="swiper-slide"><img src="${src}" alt=""></div>`).join('');
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