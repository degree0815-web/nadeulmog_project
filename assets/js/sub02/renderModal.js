import { getLocalizedCourses } from './courseData.js';

// 카카오맵 인스턴스 저장
let mapInstance = null;
let markers = [];
let polyline = null;

// Return the course object by courseKey and courseId (lang-aware)
export function renderCourseModal(courseKey, courseId, lang) {
    const data = getLocalizedCourses(courseKey, lang);
    if (!data || !data.courses) return null;
    return data.courses.find(c => c.id === courseId) || null;
}

// 카카오맵 초기화 및 렌더링
function initKakaoMap(mapContainer, course) {
    if (!mapContainer || !course || !course.locations || course.locations.length === 0) {
        console.warn('카카오맵을 렌더링할 수 없습니다: locations 데이터가 없습니다.');
        return;
    }

    // 기존 마커 및 경로 제거
    markers.forEach(marker => marker.setMap(null));
    markers = [];
    if (polyline) {
        polyline.setMap(null);
        polyline = null;
    }

    // 카카오맵 API가 로드되었는지 확인
    if (typeof kakao === 'undefined' || !kakao.maps) {
        console.error('카카오맵 API가 로드되지 않았습니다. API 키를 확인해주세요.');
        return;
    }

    const locations = course.locations;
    
    // 첫 번째 위치를 중심으로 지도 생성
    const firstLocation = locations[0];
    const mapOption = {
        center: new kakao.maps.LatLng(firstLocation.lat, firstLocation.lng),
        level: 4// 지도의 확대 레벨
    };

    // 지도 생성
    if (mapInstance) {
        mapInstance.setCenter(new kakao.maps.LatLng(firstLocation.lat, firstLocation.lng));
        mapInstance.setLevel(5);
    } else {
        mapInstance = new kakao.maps.Map(mapContainer, mapOption);
    }

    // 마커 생성 및 경로 그리기
    const path = [];
    
    locations.forEach((location, index) => {
        const position = new kakao.maps.LatLng(location.lat, location.lng);
        path.push(position);

        // 마커 생성
        const marker = new kakao.maps.Marker({
            position: position,
            map: mapInstance
        });

        // 마커에 인포윈도우 추가
        const infowindow = new kakao.maps.InfoWindow({
            content: `<div style="padding:5px;font-size:12px;">${location.name}</div>`
        });

        // 마커 클릭 이벤트
        kakao.maps.event.addListener(marker, 'click', function() {
            infowindow.open(mapInstance, marker);
        });

        markers.push(marker);
    });

    // 경로선 그리기
    if (path.length > 1) {
        polyline = new kakao.maps.Polyline({
            path: path,
            strokeWeight: 3,
            strokeColor: '#FF6B6B',
            strokeOpacity: 0.8,
            strokeStyle: 'solid'
        });
        polyline.setMap(mapInstance);
    }

    // 모든 마커가 보이도록 지도 범위 조정
    if (locations.length > 1) {
        const bounds = new kakao.maps.LatLngBounds();
        locations.forEach(location => {
            bounds.extend(new kakao.maps.LatLng(location.lat, location.lng));
        });
        mapInstance.setBounds(bounds);
    }
}

export function openModal(modalEl, course) {
    if (!modalEl || !course) return;
    
    const mapContainer = modalEl.querySelector('#modal__map');
    const title = modalEl.querySelector('.modal__title');
    const route = modalEl.querySelector('.modal__route');
    const qr = modalEl.querySelector('.modal__qr');
    const link = modalEl.querySelector('.modal__link');

    // 카카오맵 렌더링
    if (mapContainer && course.locations && course.locations.length > 0) {
        // 지도 컨테이너가 표시된 후에 지도를 초기화
        modalEl.style.display = 'block';
        setTimeout(() => {
            initKakaoMap(mapContainer, course);
        }, 100);
    }
    
    if (title) title.textContent = course.name || '';
    if (route) route.textContent = course.route || '';
    if (qr) qr.src = course.qr || '';
    if (link) link.href = course.url || '';

    document.body.style.overflow = 'hidden';
}

export function closeModal(modalEl) {
    if (!modalEl) return;
    
    // 마커 및 경로 제거
    markers.forEach(marker => marker.setMap(null));
    markers = [];
    if (polyline) {
        polyline.setMap(null);
        polyline = null;
    }
    
    modalEl.style.display = 'none';
    document.body.style.overflow = '';
}
