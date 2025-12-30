import { getLocalizedRegion } from "./regionData.js";

// renderRegion: 화면의 'KV 이미지'와 지역 제목/설명을 업데이트하는 함수입니다.
// - regionKey: 'jung' 같은 지역 키
// - lang: 'kr' 또는 'en' (어떤 언어로 표시할지)
// 이 함수는 DOM 요소를 찾아 값을 바꾸고, 요소가 없으면 콘솔에 경고를 남깁니다.
export function renderRegion(regionKey, lang) {
    // 먼저 regionData에서 요청한 언어로 변환된 데이터를 받아옵니다.
    const data = getLocalizedRegion(regionKey, lang);
    if (!data) {
        // 잘못된 regionKey가 전달되면 더 이상 진행하지 않습니다.
        console.warn("No region data for:", regionKey);
        return;
    }

    // 1) KV(큰 헤더) 이미지 업데이트
    // HTML에서는 `.kv__img` 클래스를 실제로 사용하고 있으므로 우선 찾고,
    // 예전 코드에서 사용하던 `.sub01__kv__img`를 폴백으로 둡니다.
    const kvImgEl = document.querySelector(".kv__img") || document.querySelector(".sub01__kv__img");
    if (kvImgEl) {
        // src에 이미지 경로를 넣어주면 브라우저가 이미지를 불러옵니다.
        kvImgEl.src = data.kvImg;
        // 접근성을 위해 alt 속성도 설정해 줍니다.
        kvImgEl.alt = data.title || "";
    } else {
        // 요소가 없으면 콘솔에 알려주기만 합니다. (앱 동작에는 치명적이지 않음)
        console.warn("KV image element not found for region:", regionKey);
    }

    // 2) 제목과 설명 텍스트 업데이트
    // querySelector가 실패할 수 있으니 각 요소가 존재하는지 확인합니다.
    const titleEl = document.querySelector(".sub01__region__title");
    if (titleEl) titleEl.textContent = data.title; // 내부 텍스트만 변경

    // 3) Attraction 섹션 설명 업데이트
    // 언어별로 다른 템플릿을 사용해서 지역명과 설명을 결합합니다.
    const attractionDescEl = document.querySelector(".attraction__subTitle");
    if (attractionDescEl) {
        // 영어의 경우 단어 사이에 공백 추가, 한글은 그대로 붙여서 표현
        if (lang === 'en') {
            attractionDescEl.innerHTML = ` ${data.sectionDesc}`;
        } else {
            attractionDescEl.innerHTML = `${data.sectionDesc}`;
        }
    }
}