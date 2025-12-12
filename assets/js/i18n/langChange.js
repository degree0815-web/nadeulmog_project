import ko from "./kr.js";
import en from "./en.js";

// languages: 데이터 객체들을 모아둔 곳
const languages = {
    kr: ko,
    en: en,
};

// currentLang는 현재 선택된 언어를 메모리에 보관합니다.
// 페이지를 새로고침해도 로컬스토리지에 저장된 값이 있으면 그 값을 사용합니다.
let currentLang = localStorage.getItem("lang") || "kr";

// applyI18n(lang): 페이지의 모든 [data-i18n] 속성이 붙은 요소들을 찾아
// 해당 언어의 텍스트로 바꿉니다.
// - data-i18n 값은 'menu.home' 같은 점 구분 키를 사용할 수 있습니다.
// - 텍스트 교체 후 로컬스토리지에 선택값을 저장하고,
//   다른 모듈이 반응할 수 있도록 'langchange' 이벤트를 방송(dispatch)합니다.
export function applyI18n(lang, emitEvent = true) {
    const texts = languages[lang];

    // 모든 data-i18n 요소를 순회하면서 해당 키의 텍스트로 변경
    document.querySelectorAll("[data-i18n]").forEach((el) => {
        const key = el.getAttribute("data-i18n");

        // 'a.b.c' 형태의 키가 들어올 수 있어서 점으로 분리해 값을 찾아갑니다.
        const value = key.split(".").reduce((obj, k) => obj?.[k], texts);

        if (value !== undefined && value !== null) {
            el.innerHTML = value; // 요소 내부 HTML을 대체
        }
    });

    // emitEvent가 true일 때만 currentLang를 갱신하고 이벤트를 발행합니다.
    if (emitEvent) {
        currentLang = lang;
        localStorage.setItem("lang", lang);
        try {
            window.dispatchEvent(new CustomEvent('langchange', { detail: { lang } }));
        } catch (e) {
            console.warn('Could not dispatch langchange event', e);
        }
    }
}

// getCurrentLang: 현재 메모리에 저장된 언어를 반환합니다.
export function getCurrentLang() {
    return currentLang;
}