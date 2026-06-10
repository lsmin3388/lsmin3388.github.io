/**
 * i18n — Korean (ko) / English (en)
 * One shared dictionary for the root page and every detail page.
 * Unused keys on a given page are simply ignored.
 */

const translations = {
    ko: {
        /* Nav (shared) */
        'nav.brand': 'Curriculum Vitae',
        'nav.about': '소개',
        'nav.experience': '경력',
        'nav.projects': '프로젝트',
        'nav.research': '연구',
        'nav.awards': '수상',
        'nav.contact': '연락',
        'common.back': '← 메인으로',
        'proj.readmore': '자세히 보기 →',

        /* Hero */
        'hero.kicker': '이상민 · Sangmin Lee',
        'hero.gloss': '서두르지 않되, 멈추지 않는다.',
        'hero.identity': '소프트웨어 공학, 그리고 백엔드와 인프라, 그리고 연구.',
        'hero.cred': '경북대학교 컴퓨터학부 제17대 학생회장 · 과학기술전문사관 11기 기수 대표',
        'hero.cta.work': '작업 보기',
        'hero.cta.contact': '연락하기',

        /* About */
        'about.title': '소개',
        'about.p1': '안녕하십니까. 컴퓨터 과학을 전공하는 이상민입니다.',
        'about.p2': '<span class="es">Sin prisa, pero sin pausa.</span> 서두르지 않되, 멈추지 않는다 — 제가 일과 공부를 대하는 태도입니다. 아직 부족한 점이 많지만, 배움을 멈추지 않고 한 걸음씩 나아가 최신 기술을 선도하는 기업의 <span class="mark">CTO</span>가 되는 것을 목표로 합니다.',
        'about.p3': '경북대학교 컴퓨터학부에서 학사 과정을 마무리하고 있으며, 앞으로 대한민국 국군의 장교이자 <span class="mark">국방과학연구소(ADD)</span>의 연구원으로서 사명감을 잃지 않고 맡은 일에 최선을 다하겠습니다.',
        'about.stackLabel': '주로 쓰는 기술',

        /* Experience */
        'exp.title': '경력',
        'exp.dh.date': '2026.01 — 02', 'exp.dh.place': '다낭, 베트남',
        'exp.dh.role': '백엔드 개발자 <span class="exp-type">인턴</span>', 'exp.dh.org': 'DataHouse Vietnam',
        'exp.dh.d1': 'Node.js · TypeScript 기반 백엔드 개발',
        'exp.dh.d2': 'Slack 기반 투표·일정 챗봇 ‘TechTalk Hub’ 개발',
        'exp.dh.d3': '쿼리·UI 최적화로 응답시간 <strong>38% 단축</strong>',
        'exp.rond.date': '2025.05 — 12', 'exp.rond.place': '서울',
        'exp.rond.role': '풀스택 개발자 <span class="exp-type">정규직</span>', 'exp.rond.org': '론드코퍼레이션',
        'exp.rond.badge': '청년창업사관학교 선정 기업',
        'exp.rond.d1': '웹 풀스택 제품 개발 (프론트엔드 · 백엔드)',
        'exp.ha.date': '2024.07 — 2025.03', 'exp.ha.place': '산학 프로젝트',
        'exp.ha.role': 'DevOps 테크리드', 'exp.ha.org': '해피에이징',
        'exp.ha.d1': '노인 낙상 예방 어시스턴트 서버 개발 총괄',
        'exp.ha.d2': 'OpenAI 기반 가정 내 위험요소 감지 구현',
        'exp.ha.d3': 'Kotlin 안드로이드 앱 개발, AWS EC2 · Docker 배포',
        'exp.st.date': '2023.06 — 2024.03', 'exp.st.place': '서울',
        'exp.st.role': 'DevOps · 서버 개발자', 'exp.st.org': '주식·금융 교육 스타트업',
        'exp.st.d1': '코스피·코스닥 전 종목 실시간 시세 처리 인프라 설계',
        'exp.st.d2': '모놀리식 → <strong>MSA 전환 주도</strong>',

        /* Projects (cards) */
        'proj.title': '프로젝트',
        'proj.featured': '대표 프로젝트',
        'proj.stock.title': '실시간 주식 데이터 파이프라인',
        'proj.stock.desc': '코스피·코스닥 전 종목의 실시간 시세를 처리하는 파이프라인. 기존 모놀리식이 부하를 감당하지 못해 MSA로 전면 재설계했습니다.',
        'proj.stock.m1': '동시 종목 처리', 'proj.stock.m2': '실시간 지연', 'proj.stock.m3': '아키텍처 전환',
        'proj.fall.title': '낙상 예방 어시스턴트',
        'proj.fall.desc': '가정 내 이미지를 분석해 고령자의 낙상 위험을 감지하는 AI 서비스. 건강 설문과 맞춤형 안전 보고서 제공.',
        'proj.council.title': '경북대 학생회 통합 시스템',
        'proj.council.desc': '재학생 2,000명+ 대상 통합 관리 시스템. SSO 인증, QR 학생증 인증, 관리자 페이지를 물리서버에 직접 구축.',
        'proj.techtalk.title': 'TechTalk Hub',
        'proj.techtalk.desc': 'Slack 기반 투표·일정 관리 챗봇. 베트남 인턴십에서 개발, 쿼리·UI 최적화로 응답시간 38% 단축.',
        'proj.locker.title': '사물함 통합 관리 서비스',
        'proj.locker.desc': '학과 사물함 관리 웹 서비스. Ubuntu 물리서버에 방화벽·SSL·Nginx·Docker로 인프라를 직접 구성.',

        /* Research (root summary) */
        'research.title': '연구',
        'research.intro': '시스템을 만드는 일과 함께, 연구도 합니다.',
        'research.ts.title': '시계열 임베딩의 군집화 가능성 연구',
        'research.ts.paper': '「비군집화 임베딩의 군집화 가능성 탐구: 다중 도메인 다변량 시계열 데이터 기반 임베딩 모델 비교 연구」 · 공저자',
        'research.ts.desc': 'TS2Vec · PatchTST · MERIT · TimeCMA · TimeKD 5종 시계열 임베딩의 비지도 군집화 성능을 UEA 4개 데이터셋에서 체계적으로 비교. LLM 기반 방법의 군집 붕괴(NMI≈0) 현상을 규명하고, 데이터 특성별 방법 선택 가이드라인을 제시.',
        'research.sar.title': '편광 SAR 기반 저피탐 표적 탐지',
        'research.sar.paper': '「편광 SAR 신호 합성을 통한 저피탐 표적 탐지 기법」 · 밀리테크 챌린지 2025 대상',
        'research.sar.desc': 'KAIST 차세대 SAR 연구실 지도 하에 수행한 국방 연구. 단일 편파로는 탐지가 어려운 저피탐 표적을, 서로 다른 편파 영상을 위상 상관으로 정합·합성해 탐지하는 기법입니다. X-band FMCW 레이다 야외 실측에서 단일 편파로 보이지 않던 표적을 편광 RGB 합성 영상으로 탐지, 과기정통부 장관상(대상)을 수상.',

        /* Awards & Leadership */
        'awards.title': '수상 & 리더십',
        'awards.honors': '수상 · 선발',
        'awards.rond.t': 'ROND 11기 전문사관 후보생 선발', 'awards.rond.d': '국방과학연구소(ADD) R&D 인력 양성',
        'awards.mili.t': '밀리테크 챌린지 2025 · 대상', 'awards.mili.d': '과학기술정보통신부 장관상',
        'awards.topcit.t': 'TOPCIT 제22회 · 대상 (1등)', 'awards.topcit.d': '805점 · 경북대학교 총장상',
        'awards.hack1.t': 'SW교육원 아이디어 해커톤 · 대상 (1등)', 'awards.hack1.d': '대구·경북권 5개 대학',
        'awards.hack2.t': '대구를 빛내는 SW 해커톤 · 최우수상', 'awards.hack2.d': '블록체인 기반 교육권 침해 신고 서비스',
        'awards.wfk.t': 'WFK ICT 해외봉사단 · 원장상', 'awards.wfk.d': '인도네시아 · 소 품종·무게 감지 AI',
        'awards.sch.t': '이공계 국가우수장학금 · 샘 인재 장학기금', 'awards.sch.d': '한국장학재단 · 경북대 컴퓨터학부',
        'awards.cert.t': 'SQLD · 정보처리기능사', 'awards.cert.d': '자격증',
        'awards.leadership': '리더십 · 커뮤니티',
        'awards.vp.t': '학생회장', 'awards.vp.d': '경북대 컴퓨터학부 17대 학생회 Do:IT', 'awards.vp.y': '2026 — 현재',
        'awards.ll.t': 'BE Officer', 'awards.ll.d': '멋쟁이사자처럼 11–13기 · Java/Spring 교육', 'awards.ll.y': '2023 — 2025',
        'awards.gdg.t': 'Backend Core Member', 'awards.gdg.d': 'GDG on Campus KNU', 'awards.gdg.y': '2023 — 2025',
        'awards.goorm.t': 'Backend Officer', 'awards.goorm.d': '9oormthon Univ KNU', 'awards.goorm.y': '2024 — 2025',

        /* Timeline */
        'time.title': '학력 & 앞으로',
        'time.t1': '경북대학교 컴퓨터학부 입학 (플랫폼SW·데이터과학)',
        'time.t2': '경북대학교 컴퓨터학부 졸업 예정',
        'time.t3': '국방과학연구소(ADD) 복무 시작',
        'time.t4': 'ADD 복무 완료',
        'time.t5': '미국 박사과정 진학 예정',

        /* Contact */
        'contact.title': '연락해요',
        'contact.text': '제안이든 협업이든, 그냥 인사든 편하게 연락 주세요.',

        /* ===== Detail pages ===== */
        'd.role': '역할', 'd.period': '기간', 'd.stack': '기술 스택', 'd.links': '링크',
        'd.h.context': '배경', 'd.h.problem': '문제', 'd.h.solution': '해결', 'd.h.impact': '성과',

        /* Detail — Stock */
        'd.stock.eyebrow': 'Project', 'd.stock.title': '실시간 주식 데이터 파이프라인',
        'd.stock.role': 'DevOps · 서버 개발자', 'd.stock.period': '2023.06 — 2024.03 · 주식·금융 교육 스타트업',
        'd.stock.context': '주식·금융 교육 스타트업의 모의투자 서비스에서 시세 처리를 담당했습니다. 코스피·코스닥 전 종목(3,000+)의 실시간 시세를 안정적으로 다뤄야 했습니다.',
        'd.stock.problem': '기존 모놀리식 구조는 수천 종목의 실시간 데이터를 동시에 처리하지 못했습니다. 트래픽이 몰리면 지연과 장애가 그대로 전체 서비스로 번졌습니다.',
        'd.stock.solution': 'Spring WebFlux로 리액티브 처리, RabbitMQ로 메시지 큐잉, InfluxDB로 시계열 시세를 저장하는 MSA로 재설계했습니다. WebSocket으로 클라이언트에 실시간 시세를 푸시하고, 서비스를 도메인별로 분리해 장애를 격리했습니다.',
        'd.stock.impact': '3,000+ 종목의 동시 WebSocket 연결을 1초 미만 지연으로 처리했습니다. 부하가 몰려도 개별 서비스 단위로 확장·격리가 가능한 구조를 확보했습니다.',

        /* Detail — Fall */
        'd.fall.eyebrow': 'Project · 산학', 'd.fall.title': '낙상 예방 어시스턴트',
        'd.fall.role': 'DevOps 테크리드', 'd.fall.period': '2024.07 — 2025.03 · 해피에이징',
        'd.fall.context': '해피에이징과의 산학 프로젝트로, 고령자의 가정 내 낙상 위험을 줄이는 서비스 개발을 총괄했습니다.',
        'd.fall.problem': '낙상 위험은 바닥·가구 배치 같은 가정 환경에서 비롯되지만, 이를 일상적으로 점검할 방법이 없었습니다.',
        'd.fall.solution': '사용자가 찍은 가정 내 이미지를 OpenAI 기반으로 분석해 위험 요소를 감지하고, 군집화로 위험 등급을 분류했습니다. 건강 설문을 결합해 맞춤형 안전 보고서를 생성합니다. Kotlin 안드로이드 앱과 Spring Boot 서버로 구성하고 AWS EC2·Docker로 배포했습니다.',
        'd.fall.impact': '가정 내 위험 요소를 자동으로 감지하고 보고서까지 생성하는 파이프라인을 구축했습니다. (Google Play 배포)',

        /* Detail — Council */
        'd.council.eyebrow': 'Project · 학생회', 'd.council.title': '경북대 컴퓨터학부 학생회 통합 시스템',
        'd.council.role': '설계 · 구축 · 운영', 'd.council.period': '2024 — 현재 · 재학생 2,000명+',
        'd.council.context': '학부 학생회 운영을 위한 통합 웹 시스템을 직접 설계·구축하고 운영하고 있습니다. 재학생 2,000명 이상이 사용합니다.',
        'd.council.problem': '학생 정보·인증·학생회비·사물함 등이 흩어져 수기로 관리되어, 비효율과 개인정보 보안 리스크가 컸습니다.',
        'd.council.solution': '재학생 개인정보 DB를 설계하고(2,000건+), SSO 인증서버와 QR 기반 학생증 인증, 학생회 관리자 페이지를 구축했습니다. 학교 망에 연결된 물리서버를 직접 운영하며 Docker·Nginx로 통합 배포합니다.',
        'd.council.impact': '흩어져 있던 학사·학생회 업무를 하나의 인증 기반 시스템으로 통합했습니다. 2,000명 이상의 재학생이 사용하는 서비스를 직접 운영하고 있습니다.',

        /* Detail — TechTalk */
        'd.techtalk.eyebrow': 'Project · 해외 인턴', 'd.techtalk.title': 'TechTalk Hub',
        'd.techtalk.role': '백엔드 개발자 (인턴)', 'd.techtalk.period': '2026.01 — 02 · DataHouse Vietnam, 다낭',
        'd.techtalk.context': '베트남 다낭 DataHouse Vietnam 해외 인턴십에서 개발한 Slack 기반 협업 챗봇입니다.',
        'd.techtalk.problem': '팀 내 투표와 일정 조율이 Slack 안팎으로 흩어져, 매번 맥락이 끊기고 기록이 남지 않았습니다.',
        'd.techtalk.solution': 'Slack 워크스페이스에서 바로 투표를 만들고 일정을 관리하는 챗봇을 Node.js·TypeScript로 개발했습니다. 데이터베이스 쿼리와 UI 흐름을 함께 최적화했습니다.',
        'd.techtalk.impact': '쿼리·UI 최적화로 응답시간을 38% 단축했고, 의사결정과 일정 관리를 Slack 안에서 완결했습니다.',

        /* Detail — Locker */
        'd.locker.eyebrow': 'Project · 인프라', 'd.locker.title': '사물함 통합 관리 서비스',
        'd.locker.role': '인프라 · 백엔드', 'd.locker.period': '2024 · 경북대 컴퓨터학부',
        'd.locker.context': '학과 사물함 배정·관리를 위한 웹 서비스를, 클라우드가 아닌 학과 물리서버 위에 직접 구축했습니다.',
        'd.locker.problem': '사물함 배정이 수기로 이뤄져 충돌·분실이 잦았고, 서비스를 올릴 서버 인프라 자체가 없었습니다.',
        'd.locker.solution': 'Ubuntu 22.04 물리서버를 세팅하고 ufw 방화벽, Nginx 리버스 프록시, SSL 인증서, Docker 컨테이너로 인프라를 직접 구성했습니다. 그 위에 Spring Boot 기반 사물함 관리 서비스를 배포했습니다.',
        'd.locker.impact': '학과 자체 인프라 위에서 사물함 배정·조회를 디지털화했습니다. 인프라부터 서비스까지 단독으로 구축·운영했습니다.',

        /* Detail — Research page */
        'rs.eyebrow': 'Research', 'rs.title': '연구',
        'rs.intro': '시스템을 만드는 일과 함께, 시계열 표현학습과 국방 신호처리 연구를 해왔습니다.',
        'rs.ts.title': '시계열 임베딩의 군집화 가능성 연구',
        'rs.ts.venue': '2025 한국소프트웨어종합학술대회 (KSC 2025) · 공저자',
        'rs.ts.paper': '비군집화 임베딩의 군집화 가능성 탐구: 다중 도메인 다변량 시계열 데이터 기반 임베딩 모델 비교 연구',
        'rs.ts.abstract': '최신 시계열 표현학습 모델이 군집화 같은 비지도 태스크에서 어떤 특성을 보이는지는 아직 충분히 밝혀지지 않았습니다. 이 연구는 TS2Vec · PatchTST · MERIT · TimeCMA · TimeKD 5종 임베딩을 UEA 아카이브 4개 데이터셋(BasicMotions, Epilepsy, HandMovementDirection, Libras)에 대해 K-Means · Spectral 군집화로 평가하고, RI·NMI로 비교했습니다.',
        'rs.ts.f.label': '핵심 결과',
        'rs.ts.f1': 'TS2Vec이 선형·비선형 군집 구조 모두에서 가장 우수 (Spectral 기준 평균 RI 0.808 / NMI 0.568)',
        'rs.ts.f2': 'LLM 기반 TimeKD · TimeCMA는 RI는 높지만 NMI≈0 — 한쪽으로 쏠리는 군집 ‘붕괴’ 현상을 규명',
        'rs.ts.f3': 'PatchTST · MERIT은 Spectral 군집화에서 비선형 다양체 구조 포착에 강점',
        'rs.ts.f4': '데이터 특성에 따른 임베딩 · 군집화 방법 선택 가이드라인 제시',
        'rs.ts.note': '연구 지원: 과학기술정보통신부 · 정보통신기획평가원 SW중심대학사업 (2021-0-01082)',
        'rs.sar.title': '편광 SAR 기반 저피탐 표적 탐지',
        'rs.sar.venue': '밀리테크 챌린지 2025 · KAIST 차세대 SAR 연구실 지도 · 대상 (과기정통부 장관상) · 공저자(경북대)',
        'rs.sar.paper': '편광 SAR 신호 합성을 통한 저피탐 표적 탐지 기법',
        'rs.sar.abstract': '단일 편파 SAR는 표적의 편파 산란 특성에 따라 특정 조건에서 신호가 약해지는 ‘저피탐’ 문제가 있습니다. 이 연구는 서로 다른 편파(Co-polar·Cross-polar) 영상을 정합·합성해 그 한계를 보완하고, 저피탐 표적의 탐지 신뢰도를 높이는 기법을 제안했습니다. 주 전공인 소프트웨어 공학 밖의 신호처리 영역에 도전한 프로젝트로, 5인 대학 연합팀의 공저자(경북대)로 참여해 대상(과기정통부 장관상)을 받았습니다.',
        'rs.sar.f.label': '핵심 내용 · 접근',
        'rs.sar.f1': '군용 표적을 단순화한 Corner Reflector·Book-Shelf 모델로 RCS 시뮬레이션(CST), 편파별 산란 특성 규명',
        'rs.sar.f2': 'X-band FMCW 레이다를 차량에 실어 야외 SAR 실측 (stripmap, 다중 표적)',
        'rs.sar.f3': 'Range-Doppler Algorithm으로 편파별(HH·HV·VH·VV) SAR 영상 생성',
        'rs.sar.f4': '위상 상관(phase correlation) 기반 공간 정합 + 상대 강도 정규화로 편파 채널 정밀 정렬',
        'rs.sar.f5': 'HH/HV/VV → 편광 RGB 합성 + 파울리 분해(표면·이중반사·체적 산란)로 표적과 지형 클러터 구분',
        'rs.sar.f6': '단일 편파로는 보이지 않던 저피탐 표적을 합성 영상에서 명확히 탐지'
    },

    en: {
        /* Nav */
        'nav.brand': 'Curriculum Vitae',
        'nav.about': 'About', 'nav.experience': 'Experience', 'nav.projects': 'Projects',
        'nav.research': 'Research', 'nav.awards': 'Honors', 'nav.contact': 'Contact',
        'common.back': '← Back to home',
        'proj.readmore': 'Read more →',

        /* Hero */
        'hero.kicker': 'Sangmin Lee',
        'hero.gloss': 'Without haste, but without pause.',
        'hero.identity': 'Software engineering — backend, infrastructure, and research.',
        'hero.cred': '17th CSE Student Council President, KNU · ROND 11th cohort representative',
        'hero.cta.work': 'See my work',
        'hero.cta.contact': 'Get in touch',

        /* About */
        'about.title': 'About',
        'about.p1': 'Hello. I\'m Sangmin Lee, studying computer science.',
        'about.p2': '<span class="es">Sin prisa, pero sin pausa.</span> Without haste, but without pause — that\'s how I approach my work and my study. I still have much to learn, but by never stopping and moving forward one step at a time, I aim to become the <span class="mark">CTO</span> of a company at the forefront of technology.',
        'about.p3': 'I\'m finishing my B.S. at Kyungpook National University\'s School of Computer Science. Ahead lies my duty as an officer of the Republic of Korea Armed Forces and a researcher at the <span class="mark">Agency for Defense Development (ADD)</span> — one I intend to meet with steadfast commitment.',
        'about.stackLabel': 'Core stack',

        /* Experience */
        'exp.title': 'Experience',
        'exp.dh.date': 'Jan — Feb 2026', 'exp.dh.place': 'Da Nang, Vietnam',
        'exp.dh.role': 'Backend Developer <span class="exp-type">Intern</span>', 'exp.dh.org': 'DataHouse Vietnam',
        'exp.dh.d1': 'Built backend systems with Node.js · TypeScript',
        'exp.dh.d2': 'Developed ‘TechTalk Hub’, a Slack voting & scheduling bot',
        'exp.dh.d3': 'Cut response time by <strong>38%</strong> via query · UI optimization',
        'exp.rond.date': 'May — Dec 2025', 'exp.rond.place': 'Seoul',
        'exp.rond.role': 'Full-Stack Developer <span class="exp-type">Full-time</span>', 'exp.rond.org': 'Rond Corporation',
        'exp.rond.badge': 'Youth Startup Academy selected company',
        'exp.rond.d1': 'Built web products end to end (frontend · backend)',
        'exp.ha.date': 'Jul 2024 — Mar 2025', 'exp.ha.place': 'Industry–academia',
        'exp.ha.role': 'DevOps Technical Lead', 'exp.ha.org': 'Happy Aging',
        'exp.ha.d1': 'Led the elderly fall-prevention assistant server',
        'exp.ha.d2': 'Built AI home-hazard detection on OpenAI',
        'exp.ha.d3': 'Shipped a Kotlin Android app; deployed on AWS EC2 · Docker',
        'exp.st.date': 'Jun 2023 — Mar 2024', 'exp.st.place': 'Seoul',
        'exp.st.role': 'DevOps · Server Developer', 'exp.st.org': 'Fintech education startup',
        'exp.st.d1': 'Designed real-time price infra for all KOSPI/KOSDAQ tickers',
        'exp.st.d2': 'Led the <strong>monolith → MSA migration</strong>',

        /* Projects */
        'proj.title': 'Projects',
        'proj.featured': 'Featured',
        'proj.stock.title': 'Real-time Stock Data Pipeline',
        'proj.stock.desc': 'A real-time price pipeline for every KOSPI/KOSDAQ ticker. Rebuilt from a monolith to MSA when the old system couldn\'t keep up.',
        'proj.stock.m1': 'tickers, live', 'proj.stock.m2': 'real-time latency', 'proj.stock.m3': 'architecture shift',
        'proj.fall.title': 'Fall Prevention Assistant',
        'proj.fall.desc': 'An AI service that analyzes home images to detect fall hazards for elderly. Health surveys and tailored safety reports.',
        'proj.council.title': 'KNU Student Council System',
        'proj.council.desc': 'An integrated system for 2,000+ students — SSO, QR student-ID auth, and an admin console, built on a physical server.',
        'proj.techtalk.title': 'TechTalk Hub',
        'proj.techtalk.desc': 'A Slack voting & scheduling bot built during my Vietnam internship; 38% faster responses via query · UI optimization.',
        'proj.locker.title': 'Locker Management Service',
        'proj.locker.desc': 'A department locker service, with firewall · SSL · Nginx · Docker provisioned by hand on an Ubuntu physical server.',

        /* Research (root) */
        'research.title': 'Research',
        'research.intro': 'Alongside building systems, I do research.',
        'research.ts.title': 'Clusterability of Time-series Embeddings',
        'research.ts.paper': '"Exploring the Clusterability of Unclustered Embeddings: Multi-Domain Multivariate Time Series" · Co-author',
        'research.ts.desc': 'A systematic comparison of five time-series embeddings (TS2Vec, PatchTST, MERIT, TimeCMA, TimeKD) on unsupervised clustering across four UEA datasets — surfacing the cluster-collapse (NMI≈0) of LLM-based methods and a method-selection guideline.',
        'research.sar.title': 'Polarimetric SAR for Low-Observable Targets',
        'research.sar.paper': '"Polarimetric SAR Signal Synthesis for Low-Observable Target Detection" · Mili-Tech Challenge 2025 Grand Prize',
        'research.sar.desc': 'A defense study under KAIST\'s next-gen SAR lab. Detects low-observable targets — invisible to single-polarization SAR — by phase-correlation registration and synthesis of multiple polarization images. In X-band FMCW field tests, targets unseen in one polarization became clear in the synthesized polarimetric RGB image. Awarded the Minister of Science & ICT Grand Prize.',

        /* Awards */
        'awards.title': 'Honors & Leadership',
        'awards.honors': 'Honors & Selections',
        'awards.rond.t': 'ROND 11th Defense-Research Cadet', 'awards.rond.d': 'R&D talent program, Agency for Defense Development',
        'awards.mili.t': 'Mili-Tech Challenge 2025 · Grand Prize', 'awards.mili.d': 'Minister of Science & ICT Award',
        'awards.topcit.t': 'TOPCIT 22nd · 1st Place', 'awards.topcit.d': 'Score 805 · KNU President\'s Award',
        'awards.hack1.t': 'SW Edu. Idea Hackathon · 1st Place', 'awards.hack1.d': '5 universities, Daegu·Gyeongbuk',
        'awards.hack2.t': 'Daegu SW Hackathon · Excellence Award', 'awards.hack2.d': 'Blockchain education-rights reporting service',
        'awards.wfk.t': 'WFK ICT Volunteer Corps · Director\'s Award', 'awards.wfk.d': 'Indonesia · cattle breed/weight detection AI',
        'awards.sch.t': 'National Science Scholarship · Saem Talent Fund', 'awards.sch.d': 'KOSAF · KNU CSE',
        'awards.cert.t': 'SQLD · Engineer Information Processing', 'awards.cert.d': 'Certifications',
        'awards.leadership': 'Leadership & Community',
        'awards.vp.t': 'President', 'awards.vp.d': 'KNU CSE 17th Student Council Do:IT', 'awards.vp.y': '2026 — present',
        'awards.ll.t': 'BE Officer', 'awards.ll.d': 'LikeLion 11–13th · Java/Spring teaching', 'awards.ll.y': '2023 — 2025',
        'awards.gdg.t': 'Backend Core Member', 'awards.gdg.d': 'GDG on Campus KNU', 'awards.gdg.y': '2023 — 2025',
        'awards.goorm.t': 'Backend Officer', 'awards.goorm.d': '9oormthon Univ KNU', 'awards.goorm.y': '2024 — 2025',

        /* Timeline */
        'time.title': 'Education & Ahead',
        'time.t1': 'Entered KNU, School of Computer Science & Engineering',
        'time.t2': 'Graduating from KNU CSE (expected)',
        'time.t3': 'Begin service at the Agency for Defense Development (ADD)',
        'time.t4': 'Complete ADD service',
        'time.t5': 'Planning a PhD in the United States',

        /* Contact */
        'contact.title': 'Let\'s talk',
        'contact.text': 'Open to ideas, collaboration, or just a hello — reach out any time.',

        /* ===== Detail pages ===== */
        'd.role': 'Role', 'd.period': 'Period', 'd.stack': 'Tech stack', 'd.links': 'Links',
        'd.h.context': 'Context', 'd.h.problem': 'Problem', 'd.h.solution': 'Solution', 'd.h.impact': 'Impact',

        'd.stock.eyebrow': 'Project', 'd.stock.title': 'Real-time Stock Data Pipeline',
        'd.stock.role': 'DevOps · Server Developer', 'd.stock.period': 'Jun 2023 — Mar 2024 · Fintech education startup',
        'd.stock.context': 'At a fintech education startup, I owned price processing for a paper-trading product. It had to handle live prices for every KOSPI/KOSDAQ ticker (3,000+) reliably.',
        'd.stock.problem': 'The legacy monolith couldn\'t process real-time data for thousands of tickers at once. Under load, latency and failures spread across the whole service.',
        'd.stock.solution': 'I redesigned it as an MSA — Spring WebFlux for reactive processing, RabbitMQ for queuing, and InfluxDB for time-series prices. WebSocket pushed live prices to clients, and domain-split services isolated failures.',
        'd.stock.impact': 'Handled 3,000+ concurrent WebSocket connections with sub-second latency, in an architecture that scales and isolates per service under load.',

        'd.fall.eyebrow': 'Project · Industry–academia', 'd.fall.title': 'Fall Prevention Assistant',
        'd.fall.role': 'DevOps Technical Lead', 'd.fall.period': 'Jul 2024 — Mar 2025 · Happy Aging',
        'd.fall.context': 'An industry–academia project with Happy Aging, where I led development of a service to reduce in-home fall risk for the elderly.',
        'd.fall.problem': 'Fall risk comes from the home environment — flooring, furniture layout — yet there was no easy way to check it day to day.',
        'd.fall.solution': 'Home photos taken by users are analyzed on OpenAI to detect hazards, with clustering for risk grading. A health survey feeds a tailored safety report. Built as a Kotlin Android app + Spring Boot server, deployed on AWS EC2 · Docker.',
        'd.fall.impact': 'Built a pipeline that automatically detects home hazards and generates reports. (Released on Google Play.)',

        'd.council.eyebrow': 'Project · Student Council', 'd.council.title': 'KNU CSE Student Council System',
        'd.council.role': 'Design · Build · Ops', 'd.council.period': '2024 — present · 2,000+ students',
        'd.council.context': 'I designed, built, and run an integrated web system for the department student council, used by 2,000+ students.',
        'd.council.problem': 'Student records, auth, dues, and lockers were scattered and managed by hand — inefficient, with real privacy risk.',
        'd.council.solution': 'I designed the student records DB (2,000+ entries), an SSO auth server, QR student-ID verification, and an admin console. I operate a physical server on the campus network, deployed with Docker · Nginx.',
        'd.council.impact': 'Unified scattered academic and council operations into one auth-based system, running in production for 2,000+ students.',

        'd.techtalk.eyebrow': 'Project · Internship', 'd.techtalk.title': 'TechTalk Hub',
        'd.techtalk.role': 'Backend Developer (Intern)', 'd.techtalk.period': 'Jan — Feb 2026 · DataHouse Vietnam, Da Nang',
        'd.techtalk.context': 'A Slack collaboration bot built during my internship at DataHouse Vietnam in Da Nang.',
        'd.techtalk.problem': 'Team voting and scheduling were scattered in and out of Slack, breaking context and leaving no record.',
        'd.techtalk.solution': 'I built a bot in Node.js · TypeScript to create polls and manage schedules right inside Slack, optimizing DB queries and UI flow together.',
        'd.techtalk.impact': 'Cut response time by 38% and kept decisions and scheduling fully within Slack.',

        'd.locker.eyebrow': 'Project · Infra', 'd.locker.title': 'Locker Management Service',
        'd.locker.role': 'Infra · Backend', 'd.locker.period': '2024 · KNU CSE',
        'd.locker.context': 'A department locker service built not on the cloud, but on a physical server I provisioned myself.',
        'd.locker.problem': 'Locker assignment was done by hand — frequent conflicts and losses — and there was no server infrastructure to run a service on.',
        'd.locker.solution': 'I set up an Ubuntu 22.04 server with a ufw firewall, an Nginx reverse proxy, SSL certificates, and Docker containers, then deployed a Spring Boot locker service on top.',
        'd.locker.impact': 'Digitized locker assignment on the department\'s own infrastructure — built and operated end to end, from server to service.',

        'rs.eyebrow': 'Research', 'rs.title': 'Research',
        'rs.intro': 'Alongside building systems, I\'ve worked on time-series representation learning and defense signal processing.',
        'rs.ts.title': 'Clusterability of Time-series Embeddings',
        'rs.ts.venue': '2025 Korea Software Congress (KSC 2025) · Co-author',
        'rs.ts.paper': 'Exploring the Clusterability of Unclustered Embeddings: A Comparative Study of Embedding Models Based on Multi-Domain Multivariate Time Series Data',
        'rs.ts.abstract': 'It\'s still unclear how modern time-series representation models behave on unsupervised tasks like clustering. This study evaluates five embeddings — TS2Vec, PatchTST, MERIT, TimeCMA, TimeKD — across four UEA datasets (BasicMotions, Epilepsy, HandMovementDirection, Libras) with K-Means and Spectral clustering, compared by RI and NMI.',
        'rs.ts.f.label': 'Key findings',
        'rs.ts.f1': 'TS2Vec performed best on both linear and non-linear cluster structures (avg RI 0.808 / NMI 0.568, Spectral)',
        'rs.ts.f2': 'LLM-based TimeKD · TimeCMA showed high RI but NMI≈0 — surfacing a skewed cluster "collapse"',
        'rs.ts.f3': 'PatchTST · MERIT excelled at capturing non-linear manifold structure under Spectral clustering',
        'rs.ts.f4': 'Derived a guideline for choosing embeddings · clustering by data characteristics',
        'rs.ts.note': 'Supported by MSIT · IITP, SW-oriented University Program (2021-0-01082)',
        'rs.sar.title': 'Polarimetric SAR for Low-Observable Targets',
        'rs.sar.venue': 'Mili-Tech Challenge 2025 · KAIST next-gen SAR lab · Grand Prize (Minister of Science & ICT) · Co-author (KNU)',
        'rs.sar.paper': 'Polarimetric SAR Signal Synthesis for Low-Observable Target Detection',
        'rs.sar.abstract': 'Single-polarization SAR suffers "low observability" — a target\'s return weakens under certain conditions due to its polarization scattering. This study fuses multiple polarization images (Co-/Cross-polar) to overcome that limit and raise detection confidence for low-observable targets. A step outside my main field of software engineering, I took part as a co-author (KNU) on a 5-university team, and the work earned the Minister of Science & ICT Grand Prize.',
        'rs.sar.f.label': 'Approach',
        'rs.sar.f1': 'RCS simulation (CST) on simplified Corner-Reflector / Book-Shelf targets to characterize per-polarization scattering',
        'rs.sar.f2': 'Outdoor SAR capture with a vehicle-mounted X-band FMCW radar (stripmap, multiple targets)',
        'rs.sar.f3': 'Per-polarization (HH·HV·VH·VV) SAR imaging via the Range-Doppler Algorithm',
        'rs.sar.f4': 'Phase-correlation spatial registration + relative intensity normalization to align polarization channels',
        'rs.sar.f5': 'HH/HV/VV → polarimetric RGB synthesis + Pauli decomposition (surface / double-bounce / volume) to separate targets from clutter',
        'rs.sar.f6': 'Low-observable targets invisible in single polarization became clearly detectable in the synthesized image'
    }
};

let currentLang = 'ko';

function detectLanguage() {
    const saved = localStorage.getItem('portfolio-lang');
    if (saved) return saved;
    const browserLang = navigator.language || navigator.userLanguage || 'ko';
    return browserLang.startsWith('ko') ? 'ko' : 'en';
}

function setLanguage(lang) {
    currentLang = lang;
    localStorage.setItem('portfolio-lang', lang);
    document.documentElement.lang = lang;

    const dict = translations[lang] || {};
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        const text = dict[key];
        if (text === undefined) return;
        if (el.hasAttribute('data-i18n-html')) {
            el.innerHTML = text;
        } else {
            el.textContent = text;
        }
    });

    document.querySelectorAll('.lang-toggle').forEach(btn => {
        btn.textContent = lang === 'ko' ? 'EN' : 'KO';
    });

    const ogTitle = document.querySelector('meta[property="og:title"]');
    const ogDesc = document.querySelector('meta[property="og:description"]');
    if (ogTitle) ogTitle.content = lang === 'ko' ? '이상민 · Sangmin Lee' : 'Sangmin Lee · Portfolio';
    if (ogDesc) ogDesc.content = lang === 'ko' ? 'Sin prisa, pero sin pausa. — 소프트웨어 공학 · 백엔드·인프라 · 연구' : 'Sin prisa, pero sin pausa. — Software engineering · backend · research';
}

function toggleLanguage() {
    setLanguage(currentLang === 'ko' ? 'en' : 'ko');
}

function initI18n() {
    setLanguage(detectLanguage());
    document.querySelectorAll('.lang-toggle').forEach(btn => {
        btn.addEventListener('click', toggleLanguage);
    });
}
