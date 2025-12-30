import { getLocalizedCourses } from "./courseData.js";
import { applyI18n } from "../i18n/langChange.js";

export function renderCourseCards(courseKey, lang) {
    const wrapper = document.querySelector('.sub02__course__card__wrap');
    if (!wrapper) return;

    // Get localized course data
    const courseData = getLocalizedCourses(courseKey, lang);
    if (!courseData || !courseData.courses) {
        wrapper.innerHTML = '<p>코스 정보가 없습니다.</p>';
        return;
    }

    // Build card HTML
    const html = courseData.courses
        .map((course, idx) => `
            <div class="sub02__course__card card${String(idx + 1).padStart(2, '0')}">
                <img class="sub02__course__card__img" src="${course.img}" alt="${course.name}">
                <div class="course__card__overlay"></div>
                <div class="sub02__course__card__content__wrap">
                    <h3 class="sub02__course__card__title">${course.name}</h3>
                    <button class="select__btn course__card__btn" data-course-id="${course.id}" data-i18n="directCourse.desc"></button>
                </div>
            </div>
        `)
        .join('');

    wrapper.innerHTML = html;
    // apply translations to newly created elements without emitting a langchange event
    applyI18n(lang, false);
}
