import { applyI18n, getCurrentLang } from "../i18n/langChange.js";
import { initLangTab } from "../ui/langTab.js";
import { renderCourseCards } from "./renderCourses.js";
import { renderCourseModal, openModal, closeModal } from './renderModal.js';

// Track current state
let lang = localStorage.getItem("lang") || "kr";
let currentCourse = "date"; // default course

// Apply lang when page is loaded
applyI18n(getCurrentLang());

// Connect to tab Event
initLangTab();

// Listen to language changes
window.addEventListener('langchange', (e) => {
    if (e && e.detail && e.detail.lang) {
        lang = e.detail.lang;
        updateCourseDisplay();
    }
});

// SubMenu
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

// Course button click handler
const courseButtons = document.querySelectorAll('.sub02__course__btn__wrap .select__btn');
courseButtons.forEach(btn => {
    btn.addEventListener('click', () => {
        // Get the course key from the button's index
        const index = Array.from(courseButtons).indexOf(btn);
        const courseKeys = ['date', 'family', 'chilling', 'cafetour', 'traditional', 'driving', 'pet', 'food'];
        currentCourse = courseKeys[index];

        // Update active state
        courseButtons.forEach(b => b.classList.remove('is-active'));
        btn.classList.add('is-active');

        // Render courses
        updateCourseDisplay();
    });
});

// Update course display based on current course and language
function updateCourseDisplay() {
    renderCourseCards(currentCourse, lang);
    // re-bind modal handlers after rendering
    wireModalHandlers();
}

// Initial render
updateCourseDisplay();

// Modal wiring: delegate clicks from wrapper to buttons
function wireModalHandlers() {
    const wrapper = document.querySelector('.sub02__course__card__wrap');
    const modalEl = document.querySelector('.sub02__course__modal');
    if (!wrapper || !modalEl) return;

    // remove previous listener to avoid duplication
    wrapper.replaceWith(wrapper.cloneNode(true));
    const newWrapper = document.querySelector('.sub02__course__card__wrap');

    newWrapper.addEventListener('click', (e) => {
        const btn = e.target.closest('.course__card__btn');
        if (!btn) return;
        const courseId = btn.dataset.courseId;
        if (!courseId) return;

        const course = renderCourseModal(currentCourse, courseId, lang);
        if (!course) return;
        openModal(modalEl, course);
    });

    // close handlers
    const closeBtn = modalEl.querySelector('.modal__close__btn');
    if (closeBtn) closeBtn.addEventListener('click', () => closeModal(modalEl));
}