// regionData: 각 지역에 대한 원본 데이터입니다.
// - 각 지역 키(e.g. 'jung', 'dong') 아래에 이미지 경로, 다국어로 된 title/description,
//   그리고 attractions(추천 장소들)을 가지고 있습니다.
// - 각 attraction의 name은 { kr: '한국어', en: 'English' } 형태로 저장되어 있습니다.
export const regionData = {
    jung: {
        kvImg: "./assets/images/sub1/1.Jung-gu.png",


        title: {
            kr: "JUNG_GU",
            en: "JUNG_GU"
        },

        sectionDesc: {
            kr: "<span>중구</span>에서 구경하기 좋은 곳이에요!",
            en: "Great places to visit in <span>Jung_Gu</span>"
        },
        attractions: [
            {
                img: "./assets/images/sub1/recommend/1.jung-gu/jung-gu-img01.png",
                name: { kr: "차이나타운", en: "China Town" },
                desc: {
                    kr: "한국과 중국의 문화가 어우러진 관광·음식·역사 체험의 명소",
                    en: "The Place that cultures of Korea and China are combined.",
                },
                btn: { kr: "지도 보러가기", en: "View Map" },
            },
            {
                img: "./assets/images/sub1/recommend/1.jung-gu/jung-gu-img02.jpeg",
                name: { kr: "월미도", en: "Wolmido" },
                desc: {
                    kr: "바다 풍경과 즐길 거리, 먹거리를 한 번에 즐길 수 있는 인천의 대표 관광명소",
                    en: "A representative tourist attraction in Incheon where you can enjoy sea views, entertainment, and food all at once.",
                },
                btn: { kr: "지도 보러가기", en: "View Map" },
            },
            {
                img: "./assets/images/sub1/recommend/1.jung-gu/jung-gu-img03.jpg",
                name: { kr: "동화마을", en: "Donhwa-Mauel" },
                desc: {
                    kr: "도심 속 작은 동화나라 같은 공간으로, 산책과 사진 촬영을 즐기기에 인기 있는 명소",
                    en: "A small fairy tale-like space in the city, popular for walking and photography.",
                },
                btn: { kr: "지도 보러가기", en: "View Map" },
            },
            {
                img: "./assets/images/sub1/recommend/1.jung-gu/jung-gu-img04.jpeg",
                name: { kr: "신포시장", en: "Shinpo-Sijang" },
                desc: {
                    kr: "인천의 옛 정취와 풍성한 먹거리를 동시에 즐길 수 있는 전통시장",
                    en: "A traditional market where you can enjoy the old atmosphere of Incheon and a variety of food.",
                },
                btn: { kr: "지도 보러가기", en: "View Map" },
            },
            {
                img: "./assets/images/sub1/recommend/1.jung-gu/jung-gu-img05.jpg",
                name: { kr: "근대건축박물관", en: "Open Port Museum" },
                desc: {
                    kr: "개항기 인천의 도시 변화와 근대 건축 양식을 체계적으로 소개하는 전시 공간",
                    en: "An exhibition space that systematically introduces the urban changes and modern architectural styles of Incheon during the opening period.",
                },
                btn: { kr: "지도 보러가기", en: "View Map" },
            },
            {
                img: "./assets/images/sub1/recommend/1.jung-gu/jung-gu-img06.jpg",
                name: { kr: "개항장거리", en: "Open Port Street" },
                desc: {
                    kr: "인천 개항기의 흔적과 근대 문화를 체험할 수 있는 거리형 박물관 같은 공간",
                    en: "A street-like museum space where you can experience the traces of Incheon's opening period and modern culture.",
                },
                btn: { kr: "지도 보러가기", en: "View Map" },
            },
            {
                img: "./assets/images/sub1/recommend/1.jung-gu/jung-gu-img07.jpg",
                name: { kr: "영종도", en: "Yeongjongdo" },
                desc: {
                    kr: "공항 도시이자 바다·레저·휴양을 동시에 즐길 수 있는 인천의 대표 관광·국제 교류 거점",
                    en: "An airport city and a representative tourist and international exchange hub in Incheon where you can enjoy the sea, leisure, and relaxation at the same time.",
                },
                btn: { kr: "지도 보러가기", en: "View Map" },
            },
            {
                img: "./assets/images/sub1/recommend/1.jung-gu/jung-gu-img08.jpg",
                name: { kr: "자유공원", en: "Jayu-park" },
                desc: {
                    kr: "근대 개항의 역사와 한국전쟁의 흔적, 그리고 아름다운 전망을 동시에 즐길 수 있는 인천의 대표적인 역사공원",
                    en: "A representative historical park in Incheon where you can enjoy the history of the modern opening, traces of the Korean War, and beautiful views all at the same time.",
                },
                btn: { kr: "지도 보러가기", en: "View Map" },
            },

        ],
        directTitle: {
            kr: "중구",
            en: "JUNG_GU"
        },

    },
    dong: {
        kvImg: "./assets/images/sub1/2.Dong-gu.png",
        title: {
            kr: "DONG_GU",
            en: "DONG_GU"
        },
        sectionDesc: {
            kr: "<span>동구</span>에서 구경하기 좋은 곳이에요!",
            en: "<span>Dong_Gu</span> is a great place to visit!"
        },
        attractions: [
            {
                img: "./assets/images/sub1/recommend/2.dong-gu/dong-gu-img-01.jpeg",
                name: { kr: "배다리/헌책방거리", en: "Baedari" },
                desc: {
                    kr: "한국과 중국의 문화가 어우러진 관광·음식·역사 체험의 명소",
                    en: "The Place that cultures of Korea and China are combined.",
                },
                btn: { kr: "지도 보러가기", en: "View Map" },
            },
            {
                img: "./assets/images/sub1/recommend/2.dong-gu/dong-gu-img-02.jpg",
                name: { kr: "창영초등학교", en: "Changyeong Elementary School" },
                desc: {
                    kr: "한국과 중국의 문화가 어우러진 관광·음식·역사 체험의 명소",
                    en: "The Place that cultures of Korea and China are combined.",
                },
                btn: { kr: "지도 보러가기", en: "View Map" },
            },
            {
                img: "./assets/images/sub1/recommend/2.dong-gu/dong-gu-img-03.jpg",
                name: { kr: "수도국산달동네박물관", en: "Sudoguksan Museum" },
                desc: {
                    kr: "한국과 중국의 문화가 어우러진 관광·음식·역사 체험의 명소",
                    en: "The Place that cultures of Korea and China are combined.",
                },
                btn: { kr: "지도 보러가기", en: "View Map" },
            },
            {
                img: "./assets/images/sub1/recommend/2.dong-gu/dong-gu-img-04.jpg",
                name: { kr: "중앙시장", en: "Jungang Market" },
                desc: {
                    kr: "한국과 중국의 문화가 어우러진 관광·음식·역사 체험의 명소",
                    en: "The Place that cultures of Korea and China are combined.",
                },
                btn: { kr: "지도 보러가기", en: "View Map" },
            },
            {
                img: "./assets/images/sub1/recommend/2.dong-gu/dong-gu-img-05.jpg",
                name: { kr: "작약도", en: "Jakyakdo" },
                desc: {
                    kr: "한국과 중국의 문화가 어우러진 관광·음식·역사 체험의 명소",
                    en: "The Place that cultures of Korea and China are combined.",
                },
                btn: { kr: "지도 보러가기", en: "View Map" },
            },
            {
                img: "./assets/images/sub1/recommend/2.dong-gu/dong-gu-img-06.jpeg",
                name: { kr: "화도진공원", en: "Hwadojin Park" },
                desc: {
                    kr: "한국과 중국의 문화가 어우러진 관광·음식·역사 체험의 명소",
                    en: "The Place that cultures of Korea and China are combined.",
                },
                btn: { kr: "지도 보러가기", en: "View Map" },
            }
        ],
        directTitle: {
            kr: "동구",
            en: "DONG_GU"
        },
    },
    michuhol: {
        kvImg: "./assets/images/sub1/3.Michuhol-gu.png",
        title: {
            kr: "MICUHOL_GU",
            en: "MICUHOL_GU"
        },
        sectionDesc: {
            kr: "<span>미추홀구</span>에서 구경하기 좋은 곳이에요!",
            en: "<span>Michuhol_Gu</span> is a great place to visit!"
        },
        attractions: [
            {
                img: "./assets/images/sub1/recommend/3.michuhol-gu/michuholgu-img-01.png",
                name: { kr: "문학경기장", en: "Munhak Stadium" },
                desc: {
                    kr: "전국 대회 및 국제 경기 개최가 이루어지고 있는 인천 지역 스포츠와 대형 이벤트를 위한 핵심 경기·문화 시설",
                    en: "A core sports and cultural facility for Incheon region sports and large-scale events, hosting national and international competitions.",
                },
                btn: { kr: "지도 보러가기", en: "View Map" },
            },
            {
                img: "./assets/images/sub1/recommend/3.michuhol-gu/michuholgu-img-02.jpg",
                name: { kr: "인천향교", en: "Incheon Hyanggyo" },
                desc: {
                    kr: "인천 도호부의 정치·행정 중심지로, 조선 후기 지역 행정을 담당했던, 조선 시대 인천 지역 행정과 근대 역사 이해를 돕는 문화유산",
                    en: "A cultural heritage site that served as the political and administrative center of Incheon Dohobu, helping to understand the modern history of Incheon during the Joseon era.",
                },
                btn: { kr: "지도 보러가기", en: "View Map" },
            },
            {
                img: "./assets/images/sub1/recommend/3.michuhol-gu/michuholgu-img-03.png",
                name: { kr: "용화선원", en: "Yonghwa Seonwon" },
                desc: {
                    kr: "전통 한식 사찰 건축 양식을 갖추고 있는 전통 불교 문화를 체험하고 수행할 수 있는 사찰",
                    en: "A temple where traditional Korean Buddhist culture can be experienced and practiced, featuring traditional Korean temple architecture.",
                },
                btn: { kr: "지도 보러가기", en: "View Map" },
            },
            {
                img: "./assets/images/sub1/recommend/3.michuhol-gu/michuholgu-img-04.png",
                name: { kr: "석바위공원", en: "Seokbawi Park" },
                desc: {
                    kr: "한석바위를 비롯한 조형물과 공원 전경이 아름답고, 계절별 축제나 시민 참여 행사의 장으로써 활용되는 인천 미추홀구의 대표 공원",
                    en: "Seokbawi Park is a representative park in Michuhol-gu, Incheon, known for its beautiful sculptures including Seokbawi and park views, and is used as a venue for seasonal festivals and citizen participation events.",
                },
                btn: { kr: "지도 보러가기", en: "View Map" },
            },
            {
                img: "./assets/images/sub1/recommend/3.michuhol-gu/michuholgu-img-05.png",
                name: { kr: "수봉공원", en: "Subong Park" },
                desc: {
                    kr: "호수, 산책로, 숲길이 조성되어 있어 산책과 피크닉에 적합한 공원",
                    en: "A park with a lake, walking trails, and forest paths, suitable for walking and picnics.",
                },
                btn: { kr: "지도 보러가기", en: "View Map" },
            },
            {
                img: "./assets/images/sub1/recommend/3.michuhol-gu/michuholgu-img-06.jpeg",
                name: { kr: "독정이마을 박물관", en: "Dokjeongi Village Museum" },
                desc: {
                    kr: "인천의 역사와 문화를 주제로 한 다양한 전시물과 체험이 마련되어 있는 지역문화 체험의 장",
                    en: "A place offering various exhibitions and experiences focused on the history and culture of Incheon.",
                },
                btn: { kr: "지도 보러가기", en: "View Map" },
            },
            {
                img: "./assets/images/sub1/recommend/3.michuhol-gu/michuholgu-img-07.jpg",
                name: { kr: "신기시장", en: "Singi Market" },
                desc: {
                    kr: "오래된 전통시장 분위기를 느낄 수 있으며, 아직까지도 주민들의 장보기 장소로 활발히 이용되고 있는 인천의 대표 전통시장",
                    en: "A representative traditional market in Incheon where you can feel the atmosphere of an old traditional market and is still actively used as a shopping place for residents.",
                },
                btn: { kr: "지도 보러가기", en: "View Map" },
            }
        ],
        directTitle: {
            kr: "미추홀구",
            en: "MICHUHOL_GU"
        },
    },
    yeonsu: {
        kvImg: "./assets/images/sub1/4.Yeonsu-gu.png",
        title: {
            kr: "YEONSU_GU",
            en: "YEONSU_GU"
        },
        sectionDesc: {
            kr: "<span>연수구</span>에서 구경하기 좋은 곳이에요!",
            en: "<span>Yeonsu_Gu</span> is a great place to visit!"
        },
        attractions: [
            {
                img: "./assets/images/sub1/recommend/4.yeonsu-gu/yeonsugu-img-01.jpg",
                name: { kr: "인천 송도 센트럴 파크", en: "Central Park" },
                desc: {
                    kr: "도심 속 수로와 초록 공간, 마천루가 어우러진 영화 같은 풍경과 낮엔 카약, 밤엔 불빛 아래 로맨틱한 분위기를 즐길 수 있는 명소.",
                    en: "A movie-like scenery where waterways, green spaces, and skyscrapers blend in the city center. A place where you can enjoy kayaking during the day and a romantic atmosphere.",
                },
                btn: { kr: "지도 보러가기", en: "View Map" },
            },
            {
                img: "./assets/images/sub1/recommend/4.yeonsu-gu/yeonsugu-img-02.png",
                name: { kr: "솔찬 공원", en: "Solchan Park" },
                desc: {
                    kr: "바다와 가까운 산책길에서 해질 무렵 붉게 물든 노을과 바다 바람을 느끼며 서해의 잔잔한 리듬에 취할 수 있는 공간.",
                    en: "A space where you can feel the sunset dyed red and the sea breeze on a walking path close to the sea, and be intoxicated by the gentle rhythm of the West Sea.",
                },
                btn: { kr: "지도 보러가기", en: "View Map" },
            },
            {
                img: "./assets/images/sub1/recommend/4.yeonsu-gu/yeonsugu-img-03.jpeg",
                name: { kr: "영종도 마시안 해변", en: "Masian Beach" },
                desc: {
                    kr: "조용히 나만의 시간을 보내며 파도와 바람만 들리는 영종도 미시안 해변에서 오롯이 바다와 마주할 수 있는 곳.",
                    en: "A place where you can face the sea alone at Masian Beach in Yeongjongdo, also can spend your own time quietly and only hear the waves and wind.",
                },
                btn: { kr: "지도 보러가기", en: "View Map" },
            },
            {
                img: "./assets/images/sub1/recommend/4.yeonsu-gu/yeonsugu-img-04.jpg",
                name: { kr: "송도 달빛 축제 공원", en: "Moonlight Festival Park" },
                desc: {
                    kr: "잔디 위에 돗자리만 펼쳐도 하루가 특별해지고, 낮엔 바람, 밤엔 달빛과 음악이 어우러진 축제 같은 분위기를 즐길 수 있는 인천의 감성 피크닉 공간.",
                    en: "A place where spreading a mat on the grass makes the day special. During the day, you can feel the time flowing with the wind, and at night, the moonlight, music, and laughter of people create a festive atmosphere.",
                },
                btn: { kr: "지도 보러가기", en: "View Map" },
            },
            {
                img: "./assets/images/sub1/recommend/4.yeonsu-gu/yeonsugu-img-05.png",
                name: { kr: "인천 도시 역사관", en: "Urban History Museum" },
                desc: {
                    kr: "인천 도시 역사관은 도시의 기억을 마주하며 시간 여행을 하는 듯한 공간.",
                    en: "Here is a space where you can face the memories of the city and feel like you're traveling through time.",
                },
                btn: { kr: "지도 보러가기", en: "View Map" },
            },
            {
                img: "./assets/images/sub1/recommend/4.yeonsu-gu/yeonsugu-img-06.png",
                name: { kr: "해돋이 공원", en: "Sunrise Park" },
                desc: {
                    kr: "아침 햇살과 탁 트인 풍경 속에서 하루의 시작과 끝을 함께하기 좋은 장소.",
                    en: "A space where the morning sunlight fits best. The best place to spending the beginning and end of the day.",
                },
                btn: { kr: "지도 보러가기", en: "View Map" },
            },
            {
                img: "./assets/images/sub1/recommend/4.yeonsu-gu/yeonsugu-img-07.png",
                name: { kr: "인천광역시립관물관", en: "Incheon Metropolitan Museum" },
                desc: {
                    kr: "도시의 이야기를 감각적으로 담아, 인천의 시간을 여행하듯 경험할 수 있는 공간.",
                    en: "A space that sensibly captures the stories of the city, allowing you to experience Incheon's time as if traveling through it.",
                },
                btn: { kr: "지도 보러가기", en: "View Map" },
            },
            {
                img: "./assets/images/sub1/recommend/4.yeonsu-gu/yeonsugu-img-08.png",
                name: { kr: "송도해수온천 송해온", en: "Spa Songhaeon" },
                desc: {
                    kr: "바닷물의 따뜻함 속에서 실내와 야외탕을 즐기며 온전히 쉬어갈 수 있는 인천의 특별한 힐링 공간.",
                    en: "A special healing space in Incheon where you can fully relax while enjoying indoor and outdoor baths in the warmth of seawater.",
                },
                btn: { kr: "지도 보러가기", en: "View Map" },
            }
        ],
        directTitle: {
            kr: "연수구",
            en: "YEONSU_GU"
        },
    },
    namdong: {
        kvImg: "./assets/images/sub1/5.Namdong-gu.png",
        title: {
            kr: "NAMDONG_GU",
            en: "NAMDONG_GU"
        },
        sectionDesc: {
            kr: "<span>남동구</span>에서 구경하기 좋은 곳이에요!",
            en: "<span>Namdong_Gu</span> is a great place to visit!"
        },
        attractions: [
            {
                img: "./assets/images/sub1/recommend/5.namdong-gu/namdong-gu-img-01.png",
                name: { kr: "기차 왕국 박물관 카페", en: "Train Kingdom Museum Cafe" },
                desc: {
                    kr: "실제 기차를 개조한 전시와 카페에서 기차 여행의 낭만을 즐길 수 있는 이색 공간.",
                    en: "A unique space where you can enjoy the romance of train travel in an exhibition and cafe remodeled from an actual train.",
                },
                btn: { kr: "지도 보러가기", en: "View Map" },
            },
            {
                img: "./assets/images/sub1/recommend/5.namdong-gu/namdong-gu-img-02.png",
                name: { kr: "인천대공원", en: "Incheon Grand Park" },
                desc: {
                    kr: "넓은 숲과 호수, 사계절마다 변하는 풍경 속에서 자전거와 피크닉으로 자연을 즐길 수 있는 인천의 대표 공원.",
                    en: "A representative park in Incheon where you can enjoy changing landscapes throughout the four seasons.",
                },
                btn: { kr: "지도 보러가기", en: "View Map" },
            },
            {
                img: "./assets/images/sub1/recommend/5.namdong-gu/namdong-gu-img-03.png",
                name: { kr: "늘솔길공원 양떼목장", en: "Neulsolgil Park Sheep Ranch" },
                desc: {
                    kr: "도심 속 초원에서 양들과 함께 산책하며 작은 목장 같은 여유를 즐길 수 있는 색다른 경험.",
                    en: "A unique experience where you can take a walk with sheep in an urban meadow and enjoy the leisure of a small ranch.",
                },
                btn: { kr: "지도 보러가기", en: "View Map" },
            },
            {
                img: "./assets/images/sub1/recommend/5.namdong-gu/namdong-gu-img-04.png",
                name: { kr: "소래포구 해오름광장", en: "Sorae Port Sunrise Plaza" },
                desc: {
                    kr: "바다와 하늘이 맞닿은 탁 트인 풍경 속에서 해맞이를 즐기며 산책할 수 있는 인천의 명소.",
                    en: "A famous spot in Incheon where you can enjoy watching the sunrise and take a walk in an open landscape where the sea and sky meet.",
                },
                btn: { kr: "지도 보러가기", en: "View Map" },
            },
            {
                img: "./assets/images/sub1/recommend/5.namdong-gu/namdong-gu-img-05.png",
                name: { kr: "구월 로데오 음식 문화거리", en: "Guwol Rodeo" },
                desc: {
                    kr: "젊은 활기가 넘치는 골목마다 트렌디한 맛집과 개성 있는 카페가 펼쳐진 인천의 미식 핫플레이스.",
                    en: "A gourmet hot place in Incheon where trendy restaurants and unique cafes are spread throughout alleys full of youthful energy.",
                },
                btn: { kr: "지도 보러가기", en: "View Map" },
            },
        ],
        directTitle: {
            kr: "남동구",
            en: "NAMDONG_GU"
        },
    },
    bupyeong: {
        kvImg: "./assets/images/sub1/6.Bupyeong-gu.png",
        title: {
            kr: "BUPYEONG_GU",
            en: "BUPYEONG_GU"
        },
        sectionDesc: {
            kr: "<span>부평구</span>에서 구경하기 좋은 곳이에요!",
            en: "<span>Bupyeong_Gu</span> is a great place to visit!"
        },
        attractions: [
            {
                img: "./assets/images/sub1/recommend/6.bupyeong-gu/bupyeong-gu-img-01.png",
                name: { kr: "부평 공원", en: "Bupyeong Park" },
                desc: {
                    kr: "넓은 녹지와 산책로가 어우러져 계절마다 다른 매력을 즐기며 도심 속 힐링을 선사하는 부평의 대표 공원.",
                    en: "A representative park in Bupyeong that offers healing in the city center while enjoying different charms in each season with its wide green spaces and walking trails.",
                },
                btn: { kr: "지도 보러가기", en: "View Map" },
            },
            {
                img: "./assets/images/sub1/recommend/6.bupyeong-gu/bupyeong-gu-img-02.png",
                name: { kr: "원적산공원", en: "Wonjeoksan Park" },
                desc: {
                    kr: "완만한 산책로와 탁 트인 전망대로 주말 산책과 운동에 좋은 부평의 숨은 명소.",
                    en: "A hidden gem in Bupyeong, perfect for weekend walks and exercise with its gentle walking trails and open viewpoints.",
                },
                btn: { kr: "지도 보러가기", en: "View Map" },
            },
            {
                img: "./assets/images/sub1/recommend/6.bupyeong-gu/bupyeong-gu-img-03.png",
                name: { kr: "부평문화의거리", en: "Bupyeong Culture Street" },
                desc: {
                    kr: "공연과 전시, 개성 있는 카페와 상점이 모여 거리 예술과 음악으로 활기찬 분위기를 즐길 수 있는 인천의 젊은 거리.",
                    en: "Where performances, exhibitions, unique cafes, and shops gather, allowing you to enjoy a lively atmosphere with street art and music.",
                },
                btn: { kr: "지도 보러가기", en: "View Map" },
            },
            {
                img: "./assets/images/sub1/recommend/6.bupyeong-gu/bupyeong-gu-img-04.png",
                name: { kr: "부평 시장", en: "Bupyeong Market" },
                desc: {
                    kr: "다양한 먹거리와 활기찬 상인들의 에너지를 느끼며 인천의 로컬 문화를 경험할 수 있는 부평 전통시장.",
                    en: "Here you can experience Incheon's local culture while feeling the energy of lively merchants and enjoying a variety of food.",
                },
                btn: { kr: "지도 보러가기", en: "View Map" },
            },
            {
                img: "./assets/images/sub1/recommend/6.bupyeong-gu/bupyeong-gu-img-05.png",
                name: { kr: "부평아트센터", en: "Bupyeong Art Center" },
                desc: {
                    kr: "공연과 전시, 다양한 문화 프로그램이 열리는 최신 시설의 부평 복합 문화 공간이자 지역민과 관람객이 함께하는 문화 허브.",
                    en: "Where performances, exhibitions, and various cultural programs are held, serving as a cultural hub for locals and visitors alike.",
                },
                btn: { kr: "지도 보러가기", en: "View Map" },
            },
            {
                img: "./assets/images/sub1/recommend/6.bupyeong-gu/bupyeong-gu-img-06.png",
                name: { kr: "삼산월드체육관", en: "World Sports Center" },
                desc: {
                    kr: "국내외 스포츠 경기와 대형 공연이 열리는 부평의 랜드마크 체육관으로, 스포츠와 공연을 즐기는 이들에게 특별한 경험을 주는 공간.",
                    en: "A landmark gymnasium in Bupyeong where domestic and international sports events and large-scale performances are held.",
                },
                btn: { kr: "지도 보러가기", en: "View Map" },
            },
        ],
        directTitle: {
            kr: "부평구",
            en: "BUPYEONG_GU"
        },
    },
    gyeyang: {
        kvImg: "./assets/images/sub1/7.Gyeyang-gu.png",
        title: {
            kr: "GYEYANG_GU",
            en: "GYEYANG_GU"
        },
        sectionDesc: {
            kr: "<span>계양구</span>에서 구경하기 좋은 곳이에요!",
            en: "<span>Gyeyang_Gu</span> is a great place to visit!"
        },
        attractions: [
            {
                img: "./assets/images/sub1/recommend/7.gyeyang-gu/gyeyang-gu-img-01.jpg",
                name: { kr: "경인아라뱃길수향원", en: "Gyeongin Ara Waterway Suhyangwon" },
                desc: {
                    kr: "한국식 건축미를 감상할 수 있는 전통누각 수양루",
                    en: "A traditional pavilion where you can appreciate the beauty of Korean architecture.",
                },
                btn: { kr: "지도 보러가기", en: "View Map" },
            },
            {
                img: "./assets/images/sub1/recommend/7.gyeyang-gu/gyeyang-gu-img-02.png",
                name: { kr: "서부간선수로", en: "Seobu Canal" },
                desc: {
                    kr: "계양경기장, 서운 체육공원 근처의 하천 길로, 도심 속에서 야경을 즐기며 운동까지 할 수 있는 산책 길",
                    en: "A river path near Gyeyang Stadium and Seoun Sports Park, where you can enjoy the night view and exercise in the city center.",
                },
                btn: { kr: "지도 보러가기", en: "View Map" },
            },
            {
                img: "./assets/images/sub1/recommend/7.gyeyang-gu/gyeyang-gu-img-03.png",
                name: { kr: "계양산", en: "Gyeyang Mountain" },
                desc: {
                    kr: "인천에서 가장 높은 산,  초보 등산객도 쉽게 오를 수 있어 많은 등산객이 많이 찾고 있는 명소",
                    en: "The highest mountain in Incheon, a popular spot for many hikers as even beginners can easily climb it.",
                },
                btn: { kr: "지도 보러가기", en: "View Map" },
            },
            {
                img: "./assets/images/sub1/recommend/7.gyeyang-gu/gyeyang-gu-img-04.png",
                name: { kr: "부평향교", en: "Bupyeong Hyanggyo" },
                desc: {
                    kr: "계양구 계산동에 있는 향교로 성현의 위패를 모시고 제사를 지내며 지방 백성의 교육을 담당하기 위해 국가에서 세운 교육기관",
                    en: "Established by the state to enshrine the memorial tablets of sages, conduct rituals, and be responsible for the education of local people.",
                },
                btn: { kr: "지도 보러가기", en: "View Map" },
            },
            {
                img: "./assets/images/sub1/recommend/7.gyeyang-gu/gyeyang-gu-img-05.png",
                name: { kr: "아라마루 아라폭포", en: "Aramaru Ara Waterfall" },
                desc: {
                    kr: "아라마루는 아라뱃길과 계양산을 한눈에 볼 수 있는 전망대와 45m 높이 아라폭포가 있는 계양구의 복합 단지.",
                    en: "Aramaru is a complex in Gyeyang-gu with an observatory that offers a panoramic view of the Ara Waterway and Gyeyang Mountain, as well as the 45m high Ara Waterfall.",
                },
                btn: { kr: "지도 보러가기", en: "View Map" },
            },
        ],
        directTitle: {
            kr: "계양구",
            en: "GYEYANG_GU"
        },
    },
    seo: {
        kvImg: "./assets/images/sub1/8.Seo-gu.jpg",
        title: {
            kr: "SEO-GU",
            en: "SEO-GU"
        },
        sectionDesc: {
            kr: "<span>서구</span>에서 구경하기 좋은 곳이에요!",
            en: "<span>Seo_Gu</span> is a great place to visit!"
        },
        attractions: [
            {
                img: "./assets/images/sub1/recommend/8.seo-gu/seo-gu-img-01.png",
                name: { kr: "가현산", en: "Gahyeon Mountain" },
                desc: {
                    kr: "서쪽 바다의 석양 낙조와 황포 돛대가 어우러지는 경관을 감상하며 거문고를 타고 노래를 불렀다는 의미를 가진 명소",
                    en: "A famous spot where you can enjoy the scenery of the sunset and yellow sailboats on the western sea.",
                },
                btn: { kr: "지도 보러가기", en: "View Map" },
            },
            {
                img: "./assets/images/sub1/recommend/8.seo-gu/seo-gu-img-02.png",
                name: { kr: "드림파크 야생화단지", en: "Dream Park Wildflower Complex" },
                desc: {
                    kr: "과거 연탄재 야적장이었던 부지를 수도권매립지관리공사와 지역주민이 함께 가꾸어 꽃과 나무가 어우러진 생태녹지로 재탄생한 공간",
                    en: "in the past, it was a coal ash storage site, but it has been transformed into an ecological green space where flowers and trees harmonize.",
                },
                btn: { kr: "지도 보러가기", en: "View Map" },
            },
            {
                img: "./assets/images/sub1/recommend/8.seo-gu/seo-gu-img-03.jpg",
                name: { kr: "청라호수공원", en: "Cheongna Lake Park" },
                desc: {
                    kr: "호수공원 전체를 연결하는 순환동선 4개 공간으로 결합하여 과거, 현재, 미래를 잇는 새로운 패러다임을 제시",
                    en: "A waterfront space created through the use of various water features. It combines four interconnected circular routes throughout the lake park, presenting a new paradigm that connects the past, present, and future.",
                },
                btn: { kr: "지도 보러가기", en: "View Map" },
            },
            {
                img: "./assets/images/sub1/recommend/8.seo-gu/seo-gu-img-04.png",
                name: { kr: "정서진", en: "Jeongseojin" },
                desc: {
                    kr: "강원도 강릉에 있는 정동진의 대칭개념으로 광화문을 기준으로 정 서쪽에 육지가 끝나는 나루터",
                    en: "A ferry terminal located in Jeongdongjin, with the land ending due west of Gwanghwamun.",
                },
                btn: { kr: "지도 보러가기", en: "View Map" },
            },
        ],
        directTitle: {
            kr: "서구",
            en: "SEO_GU"
        },
    },
    ganghwa: {
        kvImg: "./assets/images/sub1/9.Ganghwa-gun.png",
        title: {
            kr: "GANGHWA_GUN",
            en: "GANGHWA_GUN"
        },
        sectionDesc: {
            kr: "<span>강화군</span>에서 구경하기 좋은 곳이에요!",
            en: "<span>Ganghwa_Gun</span> is a great place to visit!"
        },
        attractions: [
            {
                img: "./assets/images/sub1/recommend/9.ganghwa-gun/ganghwa-gun-img-01.png",
                name: { kr: "강화루지", en: "Ganghwaluge" },
                desc: {
                    kr: "강화도 놀거리 체험 루지를 타고 신나게 달리는 짜릿한 경험은 물론 봄철 설렘 가득한 야외 나들이 액티비티",
                    en: "An exciting experience of riding the Ganghwaluge luge in Ganghwa Island, as well as an outdoor outing activity full of spring excitement.",
                },
                btn: { kr: "지도 보러가기", en: "View Map" },
            },
            {
                img: "./assets/images/sub1/recommend/9.ganghwa-gun/ganghwa-gun-img-02.jpg",
                name: { kr: "강화평화전망대", en: "Ganghwa Peace Observatory" },
                desc: {
                    kr: "남한에서 가장 가까운 거리에서 북한 주민의 생활상을 육안으로 볼 수 있어 이북 실향민과 관광객이 많이 찾는 강화도의 명소",
                    en: "A famous spot in Ganghwa Island where many North Korean defectors and tourists visit, as it allows you to see the lives of North Korea from the closest distance in South Korea.",
                },
                btn: { kr: "지도 보러가기", en: "View Map" },
            },
            {
                img: "./assets/images/sub1/recommend/9.ganghwa-gun/ganghwa-gun-img-03.png",
                name: { kr: "소창체험관", en: "Sochang Experience Center" },
                desc: {
                    kr: "강화군 전통산업인 소창에 대한 전통문화유산 보존과 가치를 재조명하는 공간",
                    en: "A space that preserves and reexamines the traditional cultural heritage of Sochang, a traditional industry of Ganghwa-gun.",
                },
                btn: { kr: "지도 보러가기", en: "View Map" },
            },
            {
                img: "./assets/images/sub1/recommend/9.ganghwa-gun/ganghwa-gun-img-04.png",
                name: { kr: "아트팩토리 참기름", en: "Art Factory Sesame Oil" },
                desc: {
                    kr: "두 개의 대형 실내 미디어아트 전시관을 비롯해 카페, 레스토랑, 롤러스케이트장, 실내외 공연장, 산책로 등으로 구성된 공간",
                    en: "'A space consisting of two large indoor media art exhibition halls, as well as a cafe, restaurant, roller skating rink, indoor and outdoor performance halls, and walking trails.",
                },
                btn: { kr: "지도 보러가기", en: "View Map" },
            },
            {
                img: "./assets/images/sub1/recommend/9.ganghwa-gun/ganghwa-gun-img-05.jpg",
                name: { kr: "동막해변", en: "Dongmak Beach" },
                desc: {
                    kr: "백사장과 울창한 소나무 숲으로 둘러싸여 천혜의 자연경관을 자랑하는 장소",
                    en: "A place surrounded by sandy beaches and dense pine forests, boasting a natural landscape.",
                },
                btn: { kr: "지도 보러가기", en: "View Map" },
            },
            {
                img: "./assets/images/sub1/recommend/9.ganghwa-gun/ganghwa-gun-img-06.jpg",
                name: { kr: "강화고려궁지", en: "Ganghwa Goryeo Palace Site" },
                desc: {
                    kr: "고려가 몽골군의 침략에 대항하기 위해 고종 19년(1232)에 강화도로 수도를 옮기고 1234년에 세운 궁궐과 관아건물입니다.",
                    en: "A palace and government building built in 1234 when Goryeo moved its capital to Ganghwa Island in 1232 to resist the Mongol invasions during the 19th year of King Gojong's reign.",
                },
                btn: { kr: "지도 보러가기", en: "View Map" },
            },
        ],
        directTitle: {
            kr: "강화군",
            en: "GANGHWA_GUN"
        },
    },
    ongjin: {
        kvImg: "./assets/images/sub1/10.Ongjin-gun.png",
        title: {
            kr: "ONGJIN_GUN",
            en: "ONGJIN_GUN"
        },
        sectionDesc: {
            kr: "<span>옹진군</span>에서 구경하기 좋은 곳이에요!",
            en: "<span>Ongjin_Gun</span> is a great place to visit!"
        },
        attractions: [
            {
                img: "./assets/images/sub1/recommend/10.ongjin-gun/ongjin-gun-img-01.png",
                name: { kr: "노가리해변", en: "Nogari Beach" },
                desc: {
                    kr: "시원한 바닷바람과 탁 트인 풍경 속, 소박하면서도 한적한 분위기가 매력적인 노가리해변.",
                    en: "Nogari Beach, with its refreshing sea breeze and open scenery, offers a simple yet tranquil atmosphere.",
                },
                btn: { kr: "지도 보러가기", en: "View Map" },
            },
            {
                img: "./assets/images/sub1/recommend/10.ongjin-gun/ongjin-gun-img-02.png",
                name: { kr: "백령도", en: "Baengnyeongdo" },
                desc: {
                    kr: "푸른 바다와 절벽, 그리고 독특한 지형이 어우러져 다른 곳에서는 느낄 수 없는 웅장한 매력! 한반도의 서쪽 끝에서 만나는 특별한 섬 여행. ",
                    en: "A unique island trip at the westernmost point of the Korean Peninsula, where the blue sea, cliffs, and unique terrain come together to create a magnificent charm that cannot be felt elsewhere.",
                },
                btn: { kr: "지도 보러가기", en: "View Map" },
            },
            {
                img: "./assets/images/sub1/recommend/10.ongjin-gun/ongjin-gun-img-03.png",
                name: { kr: "소십리포해수욕장", en: "Sosipripo Beach" },
                desc: {
                    kr: "길게 이어진 모래사장과 푸른 바다가 시원하게 펼쳐지는 해수욕장. 여름은 물론 사계절 내내 찾고 싶은 바다",
                    en: "A beach where a long sandy beach and the blue sea stretch out refreshingly. A sea you want to visit not only in summer but all year round.",
                },
                btn: { kr: "지도 보러가기", en: "View Map" },
            },
            {
                img: "./assets/images/sub1/recommend/10.ongjin-gun/ongjin-gun-img-04.png",
                name: { kr: "선재도", en: "Seonjaedo" },
                desc: {
                    kr: "바닷길이 열릴 때 맞닿는 무의도와 연결되는 풍경은 선재도만의 특별한 여행 경험을 선사하는 장소",
                    en: "A place where the scenery connecting to Muui Island when the sea road opens offers a special travel experience unique to Seonjaedo.",
                },
                btn: { kr: "지도 보러가기", en: "View Map" },
            },
            {
                img: "./assets/images/sub1/recommend/10.ongjin-gun/ongjin-gun-img-05.png",
                name: { kr: "연평도", en: "Yeonpyeongdo" },
                desc: {
                    kr: "한적한 분위기 속에서 낚시와 바다 여행을 즐기기에 좋은 서해의 푸른 바다와 풍부한 해산물이 기다리는 섬.",
                    en: "Here you can enjoy fishing and sea trips in a tranquil atmosphere, with the blue sea of the West Sea and abundant seafood waiting for you.",
                },
                btn: { kr: "지도 보러가기", en: "View Map" },
            },
        ],
        directTitle: {
            kr: "옹진군",
            en: "ONGJIN_GUN"
        },
    },


};

// getLocalizedRegion: regionData에서 요청한 언어로 값들을 꺼내서 반환하는 도우미 함수입니다.
// - regionKey: 'jung' 같은 지역 식별자
// - lang: 'kr' 또는 'en' (기본 'kr')
// 반환 형식 예시:
// {
//   kvImg: './assets/..',
//   title: '중구',
//   description: '...',
//   attractions: [ { img: '...', name: '차이나타운' }, ... ]
// }
export function getLocalizedRegion(regionKey, lang = 'kr') {
    // 원본 데이터 가져오기
    const base = regionData[regionKey];
    if (!base) return null; // 존재하지 않는 지역이면 null 반환

    // title/description은 존재하면 요청한 언어로, 없으면 한국어로 폴백합니다.
    const title = (base.title && (base.title[lang] || base.title.kr)) || '';
    const description = (base.description && (base.description[lang] || base.description.kr)) || '';

    // sectionDesc도 로컬라이즈 (섹션 설명)
    const sectionDesc = (base.sectionDesc && (base.sectionDesc[lang] || base.sectionDesc.kr)) || '';

    // attractions 배열은 각 항목의 name을 요청한 언어로 변환해서 새 배열로 반환합니다.
    const attractions = (base.attractions || []).map(att => ({
        img: att.img,
        // name도 요청한 언어가 없으면 kr로 폴백
        name: (att.name && (att.name[lang] || att.name.kr)) || '',
        // desc와 btn도 같은 방식으로 로컬라이즈해서 반환합니다.
        desc: (att.desc && (att.desc[lang] || att.desc.kr)) || '',
        btn: (att.btn && (att.btn[lang] || att.btn.kr)) || ''
    }));

    // 필요한 필드만 뽑아서 반환합니다. 이 결과는 렌더러에서 바로 사용하기 편합니다.
    return {
        kvImg: base.kvImg,
        directTitle: (base.directTitle && (base.directTitle[lang] || base.directTitle.kr)) || '',
        title,
        sectionDesc,
        attractions
    };
}