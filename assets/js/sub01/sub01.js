import { applyI18n, getCurrentLang } from "../i18n/langChange.js";
import { initLangTab } from "../ui/langTab.js";
import { renderRegion } from "./renderRegion.js";
import { renderAttractions } from "./renderAttractions.js";
import { getLocalizedRegion } from "./regionData.js";

// 현재 선택된 언어와 지역을 저장하는 변수입니다.
// - `lang`은 사용자가 선택한 언어 코드('kr'|'en')를 담습니다.
// - `currentRegion`은 보여줄 지역 키를 담습니다.
let lang = localStorage.getItem("lang") || "kr";
let currentRegion = "jung";

// 설명: 언어가 바뀌면('langchange' 이벤트) 이 페이지는 언어 값을 갱신하고
// `updateAll()`을 호출해서 텍스트와 이미지들을 다시 그립니다.
window.addEventListener('langchange', (e) => {
    if (e && e.detail && e.detail.lang) {
        lang = e.detail.lang; // 전역 변수 갱신
        updateAll(); // 화면을 다시 렌더링
    }
});

// 페이지를 처음 열 때 현재 언어 설정을 화면에 적용합니다.
// applyI18n은 내부에서 'langchange' 이벤트를 발생시키므로
// 위의 리스너가 먼저 등록되어 있어야 정상적으로 동작합니다.
applyI18n(getCurrentLang());

// 언어 탭 UI 초기화 (탭 클릭 핸들러 등 등록)
initLangTab();

// --- SubMenu (햄버거 메뉴) 관련 간단한 이벤트 바인딩 ---
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


// Region buttons swiper (for responsive horizontal scrolling of region buttons)
// Use slidesPerView: 'auto' so each slide sizes to the button's intrinsic width
// and enable freeMode so it behaves like a horizontal scroll with navigation arrows.
window.regionBtnSwiper = new Swiper(".sub01__region__btn__swiper", {
    slidesPerView: 3,
    spaceBetween: 15,
    // freeMode: true,
    // watchOverflow: true,
    navigation: {
        nextEl: ".sub01__region__btn__sec .swiper-button-next",
        prevEl: ".sub01__region__btn__sec .swiper-button-prev",
    },
    breakpoints: {
        479: {
            slidesPerView: 3,


        },
        768: {
            slidesPerView: 5,
            spaceBetween: 30,

        },
        1200: {
            slidesPerView: 7,
        },
        1470: {
            slidesPerView: 10,
        },
        1720: {
            slidesPerView: 10,

        }
    }
});
//regionBtn swiper
// Swiper 초기화 (추천 장소 리스트의 슬라이더)
// window.attractionSwiper로 노출하면 다른 모듈(renderAttractions 등)에서 접근해
// 업데이트 호출할 수 있습니다.
window.attractionSwiper = new Swiper(".attraction__swiper", {
    slidesPerView: 1,
    grid: {
        rows: 2,
    },
    spaceBetween: 20,
    // loop: true,
    pagination: {
        el: ".sub01__attractionSec .swiper-pagination",
        clickable: true,
    },
    breakpoints: {
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
        1470: {
            slidesPerView: 4,
            grid: {
                rows: 1,
            },
        },
    }

});



// 지역 버튼 클릭 처리: 버튼의 data-region 속성에서 지역 키를 읽어
// `currentRegion`을 바꾸고 화면을 다시 렌더링합니다.
document.querySelectorAll(".select__btn").forEach(btn => {
    btn.addEventListener("click", () => {
        currentRegion = btn.dataset.region;
        updateAll();
    });
});

// Ensure region button active class is set (visual 'selected' state)
function updateRegionButtonsActive() {
    document.querySelectorAll(".select__btn").forEach(btn => {
        if (btn.dataset.region === currentRegion) btn.classList.add('is-active');
        else btn.classList.remove('is-active');
    });
    // If regionBtnSwiper exists, scroll it so the active button is visible/centered.
    try {
        if (window.regionBtnSwiper) {
            const btns = Array.from(document.querySelectorAll('.select__btn'));
            const idx = btns.findIndex(b => b.dataset.region === currentRegion);
            if (idx >= 0) {
                // slideTo will bring the selected slide into view; use slideToClosest-like behavior
                window.regionBtnSwiper.slideTo(idx);
            }
        }
    } catch (e) {
        console.warn('Could not scroll regionBtnSwiper', e);
    }
}

// updateAll: 현재 선택된 지역과 언어를 기준으로
// 화면의 모든 영역(이미지, 제목, 추천장소)을 다시 그리는 함수입니다.
function updateAll() {
    // renderRegion과 renderAttractions는 (regionKey, lang) 시그니처를 사용합니다.
    renderRegion(currentRegion, lang);
    renderAttractions(currentRegion, lang);
    // Update active state for region buttons so selected button stays highlighted
    updateRegionButtonsActive();

    // Update the small direct cards' region name texts (localized)
    try {
        const localized = getLocalizedRegion(currentRegion, lang);
        const regionName = localized ? localized.directTitle : '';
        document.querySelectorAll('.sub01__direct__card__region').forEach(el => {
            el.textContent = regionName;
        });
    } catch (e) {
        console.warn('Could not update direct card region names', e);
    }
    // Swiper에게 슬라이드가 바뀌었음을 알려줍니다. (동적으로 innerHTML로 바꿨으므로 업데이트 필요)
    try {
        if (window.attractionSwiper) {
            window.attractionSwiper.update();
            // 첫 슬라이드로 이동
            window.attractionSwiper.slideToLoop(0);
        }
    } catch (e) {
        // 오류가 나더라도 앱이 멈추지 않도록 안전하게 처리
        console.warn('Could not update attractionSwiper', e);
    }
}

// 초기 렌더링
updateAll();

