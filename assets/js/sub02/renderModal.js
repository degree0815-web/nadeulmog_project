import { getLocalizedCourses } from './courseData.js';

// Return the course object by courseKey and courseId (lang-aware)
export function renderCourseModal(courseKey, courseId, lang) {
    const data = getLocalizedCourses(courseKey, lang);
    if (!data || !data.courses) return null;
    return data.courses.find(c => c.id === courseId) || null;
}

export function openModal(modalEl, course) {
    if (!modalEl || !course) return;
    const img = modalEl.querySelector('.modal__map');
    const title = modalEl.querySelector('.modal__title');
    const route = modalEl.querySelector('.modal__route');
    const qr = modalEl.querySelector('.modal__qr');
    const link = modalEl.querySelector('.modal__link');

    if (img) img.src = course.map || '';
    if (img) img.alt = course.name || '';
    if (title) title.textContent = course.name || '';
    if (route) route.textContent = course.route || '';
    if (qr) qr.src = course.qr || '';
    if (link) link.href = course.url || '';

    modalEl.style.display = 'block';
    document.body.style.overflow = 'hidden';
}

export function closeModal(modalEl) {
    if (!modalEl) return;
    modalEl.style.display = 'none';
    document.body.style.overflow = '';
}
