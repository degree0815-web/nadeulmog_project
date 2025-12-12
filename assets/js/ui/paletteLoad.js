import { colorPalettes } from "./colorPalette.js";


document.addEventListener("DOMContentLoaded", () => {
    const cards = document.querySelectorAll(".gallery__card");

    cards.forEach(card => {
        const region = card.dataset.region;
        const colors = colorPalettes[region];

        const wrap = card.querySelector(".colorPalette__wrap");

        if (colors && wrap) {
            wrap.innerHTML = "";
            colors.forEach(color => {
                const div = document.createElement("div");
                div.classList.add("colorPallet");
                div.style.backgroundColor = color;
                div.style.height = '25px';
                div.style.width = '25px';
                div.style.borderRadius = '50%';
                wrap.appendChild(div);
            });
        }
    });
});