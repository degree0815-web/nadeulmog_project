import { getLocalizedRegion } from "./regionData.js";

// renderAttractions: 선택된 지역의 추천 장소(어트랙션) 목록을 화면에 렌더링합니다.
// - regionKey: 'jung' 같은 지역 키
// - lang: 'kr' 또는 'en' (표시할 언어)
// 이 함수는 내부적으로 getLocalizedRegion을 호출해 이미 로컬라이즈된
// attraction.name 값을 받아와서 화면에 삽입합니다.
export function renderAttractions(regionKey, lang) {
  // 슬라이드들을 담는 컨테이너 요소를 찾습니다.
  const container = document.querySelector(".attraction__swiper .swiper-wrapper");
  if (!container) return; // 컨테이너가 없으면 아무 것도 하지 않음

  // 기존 내용을 비워줍니다 (새로 렌더링 하기 위해)
  container.innerHTML = "";

  // 요청한 언어로 변환된 데이터 가져오기
  const data = getLocalizedRegion(regionKey, lang);
  const list = (data && data.attractions) || [];

  // 각 추천 장소를 순회하면서 HTML을 추가합니다.
  // (간단한 방법으로 innerHTML += 를 사용하고 있는데, 성능이 문제가 되면
  //  DocumentFragment를 사용하는 방식으로 개선할 수 있습니다.)
  list.forEach(att => {
    container.innerHTML += `
      <div class="swiper-slide">
        <div class="attraction__card">
          <img src="${att.img}" alt="INCEON TRIP">
          <div class="attraction__txt__wrap">
            <h4>${att.name}</h4>
            <p class='attraction__card__desc'>${att.desc}</p>
            <button class='attraction__btn'>${att.btn}</button>
          </div>
          <div class='attraction__overlay'></div>
        </div>
      </div>
    `;
  });
}
