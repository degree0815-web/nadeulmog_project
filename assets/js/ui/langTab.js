import { applyI18n } from "../i18n/langChange.js";
// TabUI
export function initLangTab() {
    const tabBg = document.querySelector(".tab__bg");
    const kr = document.querySelector(".kr");
    const en = document.querySelector(".en");

    kr.addEventListener("click", () => {
        tabBg.style.transform = "translateX(0%)";
        kr.classList.add("tab--on");
        en.classList.remove("tab--on");
        applyI18n("kr");
    });

    en.addEventListener("click", () => {
        tabBg.style.transform = "translateX(100%)";
        en.classList.add("tab--on");
        kr.classList.remove("tab--on");
        applyI18n("en");
    });

    window.addEventListener("DOMContentLoaded", () => {
        const savedLang = localStorage.getItem("lang") || "kr";

        if (savedLang === "kr") {
            kr.click();
        } else {
            en.click();
        }
    });
}