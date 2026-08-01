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
        'hero.identity': '직접 만들고, 직접 운영하고, 연구합니다.',
        'hero.cred': '경북대학교 컴퓨터학부 제17대 학생회장 · 과학기술전문사관 11기 기수 대표',
        'hero.cta.work': '프로젝트 보기',
        'hero.cta.contact': '연락하기',

        /* About */
        'about.title': '소개',
        'about.p1': '첫 컴퓨터는 없었습니다. 초등학생 때 5인치 휴대폰 화면에서 한 줄씩 코드를 쓰며 시작했고, 그 재미가 지금까지 이어졌습니다. 지금은 서버든 앱이든 인프라든 필요한 곳을 직접 만들고, 만든 것을 직접 운영합니다.',
        'about.p2': '<span class="es">Sin prisa, pero sin pausa.</span> 서두르지 않되, 멈추지 않는다 — 일과 공부를 대하는 제 태도입니다. 목표는 <span class="mark">만들어 본 사람으로 남는 연구자</span>입니다. 연구실의 결과가 실제 사용자 앞에서 어디부터 흔들리는지 아는 사람이고 싶습니다.',
        'about.p3': '지금은 경북대학교 컴퓨터학부 학사 과정을 마무리하고 있습니다. 졸업 후에는 대한민국 국군의 장교이자 <span class="mark">국방과학연구소(ADD)</span> 연구원으로 복무합니다. 하려는 연구는 가상 환경에서 학습한 <span class="mark">인공지능</span>이 현실에서도 제 몫을 하게 만드는 일입니다.',

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
        'exp.ha.d1': '고령자 낙상 예방 서비스 기술 총괄 — 서버 · AI · 앱 전 영역',
        'exp.ha.d2': 'OpenAI 기반 가정 내 위험요소 감지 구현',
        'exp.ha.d3': 'Kotlin 안드로이드 앱 개발 · <strong>Google Play 출시</strong>, AWS EC2 · Docker 배포',
        'exp.st.date': '2023.06 — 2024.03', 'exp.st.place': '서울',
        'exp.st.role': 'DevOps · 서버 개발자', 'exp.st.org': '주식·금융 교육 스타트업',
        'exp.st.d1': '코스피·코스닥 전 종목(<strong>3,000+</strong>) 실시간 시세 처리 인프라 설계',
        'exp.st.d2': '모놀리식 → <strong>MSA 전환 주도</strong> — 3,000+ 동시 WebSocket을 1초 미만 지연으로 처리',

        /* Projects (cards) */
        'proj.title': '프로젝트',
        'proj.featured': '대표 프로젝트',
        'proj.festival.title': '경북대 대동제 80주년 웹앱',
        'proj.festival.desc': '경북대 2026 대동제에서 실사용된 모바일 웹앱. 온라인 대기열·실시간 부스 랭킹·랜덤 매칭을 React + Spring Boot 풀스택으로 구축하고 프로덕션 운영을 맡았습니다.',
        'proj.festival.meta': '경북대 2026 대동제 · 3일 실운영 · 동시접속 1,500 설계 · 백엔드 커밋 53%',
        'proj.stock.title': '실시간 주식 데이터 파이프라인',
        'proj.stock.desc': '코스피·코스닥 전 종목(3,000+)의 실시간 시세를 1초 미만 지연으로 처리하는 파이프라인. 모놀리식이 부하를 감당하지 못해 MSA로 전면 재설계했습니다.',
        'proj.fall.title': '낙상 예방 어시스턴트',
        'proj.fall.desc': '가정 내 이미지를 분석해 고령자의 낙상 위험을 감지하는 AI 서비스. 건강 설문과 맞춤형 안전 보고서까지 담아 Google Play에 출시했습니다.',
        'proj.council.title': '경북대 학생회 통합 시스템',
        'proj.council.desc': '재학생 2,000명+이 실제로 쓰는 통합 관리 시스템. SSO 인증, QR 학생증, 관리자 페이지를 학교 망의 물리서버에 직접 구축해 운영합니다.',
        'proj.techtalk.title': 'TechTalk Hub',
        'proj.techtalk.desc': 'Slack 기반 투표·일정 관리 챗봇. 베트남 인턴십에서 개발, 쿼리·UI 최적화로 응답시간 38% 단축.',
        'proj.locker.title': '사물함 통합 관리 서비스',
        'proj.locker.desc': '학과 사물함 관리 웹 서비스. Ubuntu 물리서버에 방화벽·SSL·Nginx·Docker로 인프라를 직접 구성.',

        /* Research (root summary) */
        'research.title': '연구',
        'research.intro': '만드는 일과 연구하는 일을 함께 해왔습니다. 국방 신호처리부터 시계열·AI까지.',
        'research.ts.title': '시계열 임베딩의 군집화 가능성 연구',
        'research.ts.paper': '「비군집화 임베딩의 군집화 가능성 탐구: 다중 도메인 다변량 시계열 데이터 기반 임베딩 모델 비교 연구」 · 공저자',
        'research.ts.desc': 'TS2Vec · PatchTST · MERIT · TimeCMA · TimeKD 5종 시계열 임베딩의 비지도 군집화 성능을 UEA 4개 데이터셋에서 체계적으로 비교. LLM 기반 방법의 군집 붕괴(NMI≈0) 현상을 규명하고, 데이터 특성별 방법 선택 가이드라인을 제시.',
        'research.sar.title': '편광 SAR 기반 저피탐 표적 탐지',
        'research.sar.paper': '「편광 SAR 신호 합성을 통한 저피탐 표적 탐지 기법」 · 밀리테크 챌린지 2025 대상',
        'research.sar.desc': 'KAIST 차세대 SAR 연구실 지도 하에 수행한 국방 연구. 단일 편파로는 탐지가 어려운 저피탐 표적을, 서로 다른 편파 영상을 위상 상관으로 정합·합성해 탐지하는 기법입니다. X-band FMCW 레이다 야외 실측에서 단일 편파로 보이지 않던 표적을 편광 RGB 합성 영상으로 탐지, 과기정통부 장관상(대상)을 수상.',
        'research.uam.title': '드론 버티포트 CCTV 통합 감시 시스템',
        'research.uam.paper': '「드론 버티포트 환경을 위한 웹 기반 CCTV 통합 감시 시스템 설계 및 구현」 · 공동저자 · 대학생논문경진대회 동상',
        'research.uam.desc': '도심항공교통(UAM)의 핵심 거점인 버티포트를 위한 실시간 관제 연구. PTZ 카메라와 RTSP·ONVIF·HLS를 활용해, 제한된 수의 카메라만으로 버티포트 전체를 저지연으로 관제하는 웹 기반 모델을 제안하고 구현했습니다.',

        /* Awards & Leadership */
        'awards.title': '수상 & 리더십',
        'awards.honors': '수상 · 선발',
        'awards.rond.t': 'ROND 11기 전문사관 후보생 선발', 'awards.rond.d': '국방과학연구소(ADD) R&D 인력 양성',
        'awards.mili.t': '밀리테크 챌린지 2025 · 대상', 'awards.mili.d': '과학기술정보통신부 장관상',
        'awards.topcit.t': 'TOPCIT 제23회 · 대상 (1등)', 'awards.topcit.d': '805점 · 경북대학교 총장상',
        'awards.essay.t': 'AI·SW중심대학 에세이 공모전 2026 · 대상 + AI선정상', 'awards.essay.d': 'AI·SW중심대학 협의회장상 · 「사용설명서, 한 장씩 넘기는 중」', 'awards.essay.link': '에세이 읽기 →',
        'awards.kit.t': '대학생논문경진대회 · 동상', 'awards.kit.d': '2026 한국정보기술학회 하계종합학술대회',
        'awards.icp.t': '산학협력프로젝트 경진대회 · 인기상', 'awards.icp.d': '경북대학교 소프트웨어교육원 · 드론 버티포트 CCTV 감시 시스템',
        'awards.hack1.t': 'SW교육원 아이디어 해커톤 · 대상 (1등)', 'awards.hack1.d': '대구·경북권 5개 대학',
        'awards.hack2.t': '대구를 빛내는 SW 해커톤 · 최우수상', 'awards.hack2.d': '블록체인 기반 교육권 침해 신고 서비스',
        'awards.wfk.t': 'WFK ICT 해외봉사단 · 원장상', 'awards.wfk.d': '인도네시아 · 소 품종·무게 감지 AI',
        'awards.sch.t': '이공계 국가우수장학금 · 샘 인재 장학기금', 'awards.sch.d': '한국장학재단 · 경북대 컴퓨터학부',
        'awards.cert.t': 'NVIDIA DLI · SQLD · 프로그래밍기능사', 'awards.cert.d': 'LLM 응용개발(RAD) · 한국데이터산업진흥원 · 한국산업인력공단',
        'awards.leadership': '리더십 · 커뮤니티',
        'awards.vp.t': '학생회장', 'awards.vp.d': '경북대 컴퓨터학부 17대 학생회 Do:IT', 'awards.vp.y': '2026 — 현재',
        'awards.ll.t': 'BE Officer', 'awards.ll.d': '멋쟁이사자처럼 11–13기 · Java/Spring 교육', 'awards.ll.y': '2023 — 2025',
        'awards.gdg.t': 'Backend Core Member', 'awards.gdg.d': 'GDG on Campus KNU', 'awards.gdg.y': '2023 — 2025',
        'awards.goorm.t': 'Backend Officer', 'awards.goorm.d': '9oormthon Univ KNU', 'awards.goorm.y': '2024 — 2025',

        /* Press */
        'press.label': '언론', 'press.text': '틴매일경제 — 「국방과학연구소에서 군 복무하며 첨단기술 연구」 (2026.03)',

        /* Timeline */
        'time.title': '학력 & 앞으로',
        'time.t1': '경북대학교 컴퓨터학부 입학 (플랫폼SW·데이터과학)',
        'time.t1b': '산호세주립대학교 실리콘밸리 프로그램 수료 (LLM 응용개발)',
        'time.t2': '경북대학교 컴퓨터학부 졸업 예정',
        'time.t3': '국방과학연구소(ADD) 연구장교 복무 시작',
        'time.t4': 'ADD 복무 완료',
        'time.t5': '국방 AI 연구 계속',

        /* Contact */
        'contact.title': '연락해요',
        'contact.text': '제안이든 협업이든, 그냥 인사든 편하게 연락 주세요.',
        'contact.print': '이 페이지를 인쇄하면 그대로 CV가 됩니다 · 인쇄하기',

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

        /* Detail — Festival */
        'd.festival.eyebrow': 'Project · 실서비스', 'd.festival.title': '경북대 대동제 80주년 웹앱',
        'd.festival.role': '풀스택 개발 · 프로덕션 운영', 'd.festival.period': '2026.04 — 05 · 경북대학교 2026 대동제',
        'd.festival.context': '경북대학교 80주년 대동제(2026.05.20–22)에서 실제 관람객이 사용한 모바일 웹앱입니다. 부스·주막 정보, 온라인 대기열, 실시간 부스 랭킹, 롤링페이퍼, 랜덤 매칭을 제공합니다.',
        'd.festival.problem': '수천 명이 몰리는 축제 현장의 대기·정보·참여를, 한 번에 견디는 실서비스로 풀어야 했습니다.',
        'd.festival.solution': 'React 19 + Spring Boot 3.5 풀스택으로 구축했습니다. 전화 인증·SMS 호출 알림 기반 온라인 대기열, SSE·Redis 실시간 부스 랭킹, 시간대별 랜덤 매칭(공정성 알고리즘), 관리자 콘솔을 구현하고, Docker Compose·GitHub Actions로 학과 서버에 배포·운영했습니다.',
        'd.festival.impact': '대동제 사흘간 실제 운영 — 부스 59개, 롤링페이퍼 100보드, 실대기·매칭 데이터를 처리했습니다. 약 1,500 동시 접속을 대비해 용량을 설계하고, 런북·모니터링·장애 대응까지 프로덕션 운영을 맡았습니다. 백엔드 커밋의 약 53%를 담당한 최다 기여자였습니다.',

        /* Detail — Research page */
        'rs.eyebrow': 'Research', 'rs.title': '연구',
        'rs.intro': '만드는 일과 연구하는 일을 함께 해왔습니다. 국방 신호처리, 시계열 표현학습, 그리고 도심항공교통 관제까지.',
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
        'rs.sar.f6': '단일 편파로는 보이지 않던 저피탐 표적을 합성 영상에서 명확히 탐지',
        'rs.uam.title': '드론 버티포트 CCTV 통합 감시 시스템',
        'rs.uam.venue': '2026 한국정보기술학회 하계종합학술대회 · 대학생논문경진대회 동상 · 공동저자',
        'rs.uam.paper': '드론 버티포트 환경을 위한 웹 기반 CCTV 통합 감시 시스템 설계 및 구현',
        'rs.uam.abstract': '도심항공교통(UAM)의 핵심 거점인 버티포트는 높은 수준의 안전 관리와 실시간 관제가 필요하지만, 현재 대부분 수동 관제 중심에 머물러 있습니다. 이 연구는 버티포트 환경에 최적화된 웹 기반 CCTV 통합 감시 시스템을 설계·구현하고, 향후 관제 기준 수립을 위한 기술적 기반을 제시했습니다.',
        'rs.uam.f.label': '핵심 내용 · 접근',
        'rs.uam.f1': 'PTZ 카메라를 활용해 제한된 수의 카메라만으로 버티포트 전체 영역을 능동 관제',
        'rs.uam.f2': 'RTSP·ONVIF 표준 프로토콜 채택 — 하드웨어 제조사와 무관하게 적용 가능한 관제 시스템',
        'rs.uam.f3': 'HLS 스트리밍으로 웹 대시보드에 다중 CCTV 영상을 저지연 실시간 출력',
        'rs.uam.f4': '버티포트 관제 기준·운영 체계 수립을 위한 관제 모델 제안',
        'rs.uam.note': '연구 지원: 과학기술정보통신부 · 정보통신기획평가원 SW중심대학사업 (2021-0-01082)',

        /* Essay (full text) */
        'essay.eyebrow': 'Essay · 2026 AI·SW중심대학 에세이 공모전',
        'essay.title': '사용설명서, 한 장씩 넘기는 중',
        'essay.meta': '대상 · AI·SW중심대학 협의회장상 + AI선정상 · 경북대학교 컴퓨터학부 이상민',
        'essay.s1': '1 · 입학 전',
        'essay.s1p1': '컴퓨터가 없었습니다. 초등학생이던 저에게는 낡은 휴대폰 한 대가 전부였습니다. 그런데 이상하게도, 그 5인치 화면 안에서 코드를 한 줄씩 써 내려가는 일이 무엇보다 즐거웠습니다. 검색창에 모르는 것을 치고, 에러를 만나고, 다시 고치고. 누가 시킨 적 없습니다. 그저 재미있었습니다. 그렇게 혼자 만드는 것들이 늘었지만, 어느 날 진지하게 만들어 본 서비스에 아무도 들어오지 않는 걸 보며 깨달았습니다. 혼자서는 갈 수 있는 곳에 끝이 있다는 것. 기술만으로는 안 되는 것들이 있다는 것. 함께 부딪히고 피드백을 주고받을 환경이 절실했습니다.',
        'essay.s1p2': '그래서 찾기 시작했습니다. 대학을 알아보던 중 경북대학교 컴퓨터학부가 SW중심대학으로 선정되어, 산학협력 프로젝트와 해외 인턴십, SW마일리지 같은 체계가 갖춰져 있다는 것을 알게 되었습니다. 혼자 더듬거리던 저에게 필요한 건 바로 이런 사용설명서였습니다. 2023년 봄, 입학했습니다.',
        'essay.s2': '2 · 입학 후',
        'essay.s2p1': '입학 후, 원칙을 하나 세웠습니다. SW중심대학이 여는 문이 있다면 무조건 들어가 보자.',
        'essay.s2p2': '가장 먼저 눈에 들어온 것은 SW마일리지 제도였습니다. 활동을 기록하고 점수화하는 단순한 시스템처럼 보였지만, 저에게는 자신을 점검하는 거울이 되었습니다. TOPCIT 시험에 매 회차 응시하며 제가 어디쯤 서 있는지 확인했고, 부족한 영역을 발견할 때마다 그것이 다음 학기의 목표가 되었습니다. 매번 긴장했습니다. 그래도 계속 응시했습니다. 그 반복의 끝에 교내 1등, 총장상이라는 결과가 따라왔지만, 상보다 값진 건 꾸준히 자신을 측정하는 습관을 갖게 된 것이었습니다.',
        'essay.s2p3': '입학 후 처음 나간 대회는 SW교육원이 주최한 창업해커톤이었습니다. 개발에는 자신 있었습니다. 그런데 발표 시간, 옆 팀의 발표자가 청중의 눈을 하나하나 훑으며 자신들의 아이디어를 설명하고 있었습니다. 같은 주제인데 그쪽에만 사람이 몰렸습니다. 저는 노트북을 펼쳐 코드를 보여주며 설명했지만, 심사위원의 시선이 이미 멀어지고 있다는 걸 느꼈습니다. 만들 줄만 알았지, 왜 만들었는지를 말하는 법은 몰랐던 것입니다. 사용설명서의 첫 페이지가 기술이라면, 두 번째 페이지는 소통이라는 걸 그때 알았습니다.',
        'essay.s2p4': '그날 이후 저는 부족한 소통을 채우기 위해 움직였습니다. 전국 연합 IT 동아리 멋쟁이사자처럼에 들어갔고, 3년간 활동하며 나중에는 BE Officer로서 직접 대학생들에게 Java와 Spring Boot를 가르치는 자리에 섰습니다. 누군가에게 기술을 설명하려면, 내가 먼저 정확히 이해하고 있어야 합니다. 가르치는 일은 배우는 일의 연장이었고, 동시에 말하는 힘을 기르는 가장 확실한 훈련이었습니다. 그 훈련 덕분이었을까요. 과학기술전문사관 면접장에서 “왜 이 기술이 필요한가”를 설명했을 때 면접관이 고개를 끄덕이던 순간, 해커톤 무대에서의 그 막막함이 비로소 힘이 되었다는 걸 느꼈습니다.',
        'essay.s2p5': '산학협력프로젝트에도 참여했습니다. (주)해피에이징과 함께 노인 낙상 방지 서비스를 개발하는 프로젝트였고, 저는 Technical Lead를 맡았습니다. 위험을 감지하는 AI부터 어르신의 손에 쥐어질 앱까지, 서비스의 처음과 끝을 직접 만들어 Google Play에 내놓았습니다. 테스트 중 실제 어르신 한 분이 앱의 알림을 보고 안심했다는 이야기를 전해 들었을 때, 코드 한 줄이 누군가의 안전과 직결되어 있다는 사실이 비로소 실감 났습니다. 교실 안의 과제와는 무게가 달랐습니다.',
        'essay.s2p6': '그 무게를 더 넓은 곳에서 시험해 보고 싶었습니다. SW중심대학의 해외 인턴십 프로그램을 통해 베트남 소재 미국계 IT 기업에서 근무할 기회를 얻었습니다. 시니어 개발자가 제 코드를 리뷰하며 “Why did you choose this approach?”라고 물었을 때, 머릿속에서는 답이 맴도는데 입이 따라가질 않았습니다. 그날 밤 숙소에서 기술 영어 표현을 하나하나 정리하며 느꼈습니다. 세상은 생각보다 넓었습니다. 그리고 그 넓은 세상에서 소통할 수 있는 사람이 되어야 한다는 것을.',
        'essay.s3': '3 · 진로 및 향후 계획',
        'essay.s3p1': '돌아보면 저는 많은 것을 만들었습니다. 수십만 건의 실시간 데이터를 다루는 시스템부터 앱스토어에 올라간 서비스까지, 손이 닿는 곳마다 무언가를 만들었습니다. 그런데 어느 순간, 만드는 일 너머를 바라보게 되었습니다.',
        'essay.s3p2': '기술은 하루가 다르게 바뀌고 있었습니다. 저는 주어진 것을 구현하는 사람이 아니라, 기술이 나아갈 방향을 고민하는 사람이 되고 싶었습니다. KAIST 차세대 SAR 연구실의 문을 두드렸습니다. 논문 한 편을 제대로 읽는 데 일주일이 걸렸습니다. 코드를 짜는 것과 기술의 원리를 탐구하는 것은 전혀 다른 종류의 몰입이었는데, 오히려 그 막막함이 좋았습니다. 연구실에서 쌓은 결과물을 들고 나간 밀리테크 챌린지에서 과학기술정보통신부 장관상을 받았을 때, 개발자가 아닌 연구자로서의 가능성을 처음 확인한 순간이었습니다.',
        'essay.s3p3': '현재 과학기술전문사관 11기로 선발되어 졸업 후 국방과학연구소에서 근무하게 됩니다. 그곳에서 저는 확장현실(XR)을 연구하려 합니다. SW중심대학에서 산학협력과 해외 인턴십을 통해 기술이 현장에서 어떤 무게를 갖는지 배웠기에, 연구실 안에만 머무는 기술이 아니라 실제 현장의 문제를 해결하는 연구를 하고 싶습니다. 5인치 화면이 전부였던 아이가 이제는 현실 너머의 세계를 설계하겠다고 말하고 있습니다. SW중심대학이라는 사용설명서를 한 장 한 장 넘겨온 사람이기에 할 수 있는 말입니다.',
        'essay.s3p4': 'SW중심대학은 저에게 사용설명서였습니다. 혼자 더듬거리며 걸어온 길 위에, 방향을 알려주고 속도를 내게 해준 안내서. 다만 이 사용설명서에는 한 가지 조건이 있습니다. 먼저 펼쳐야 읽을 수 있다는 것. 그리고 펼친 사람만이 다음 페이지를 쓸 수 있다는 것. 지금 이 글이, 누군가에게 사용설명서를 펼쳐볼 용기가 되었으면 합니다.'
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
        'hero.identity': 'I build it, I run it, and I research it.',
        'hero.cred': '17th CSE Student Council President, KNU · ROND 11th cohort representative',
        'hero.cta.work': 'See projects',
        'hero.cta.contact': 'Get in touch',

        /* About */
        'about.title': 'About',
        'about.p1': 'There was no computer at first. As a kid I wrote code line by line on a 5-inch phone screen, and that same fun carried me here. Today I build whatever a service needs — server, app, or infrastructure — and I run what I build.',
        'about.p2': '<span class="es">Sin prisa, pero sin pausa.</span> Without haste, but without pause — that\'s how I approach my work and my study. My goal is to stay <span class="mark">a researcher who has actually built things</span>: someone who knows where a lab result starts to give way once a real user touches it.',
        'about.p3': 'I\'m finishing my B.S. at Kyungpook National University\'s School of Computer Science. After graduation I\'ll serve as an officer of the Republic of Korea Armed Forces and a researcher at the <span class="mark">Agency for Defense Development (ADD)</span>. The research I want to do is making <span class="mark">AI</span> that learned inside a virtual world hold its own in the real one.',

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
        'exp.ha.d1': 'Technical lead for the elderly fall-prevention service — server, AI, and app',
        'exp.ha.d2': 'Built AI home-hazard detection on OpenAI',
        'exp.ha.d3': 'Shipped a Kotlin Android app to <strong>Google Play</strong>; deployed on AWS EC2 · Docker',
        'exp.st.date': 'Jun 2023 — Mar 2024', 'exp.st.place': 'Seoul',
        'exp.st.role': 'DevOps · Server Developer', 'exp.st.org': 'Fintech education startup',
        'exp.st.d1': 'Designed real-time price infra for all <strong>3,000+</strong> KOSPI/KOSDAQ tickers',
        'exp.st.d2': 'Led the <strong>monolith → MSA migration</strong> — 3,000+ concurrent WebSockets at sub-second latency',

        /* Projects */
        'proj.title': 'Projects',
        'proj.featured': 'Featured',
        'proj.festival.title': 'KNU 80th Festival Web App',
        'proj.festival.desc': 'A mobile web app used live at KNU\'s 2026 festival — online queuing, real-time booth ranking, and random matching, built full-stack on React + Spring Boot, with production operations.',
        'proj.festival.meta': 'KNU 2026 Festival · 3 days live · designed for 1,500 concurrent · 53% of backend commits',
        'proj.stock.title': 'Real-time Stock Data Pipeline',
        'proj.stock.desc': 'A pipeline processing live prices for all 3,000+ KOSPI/KOSDAQ tickers at sub-second latency. Rebuilt from a monolith to MSA when the old system couldn\'t keep up.',
        'proj.fall.title': 'Fall Prevention Assistant',
        'proj.fall.desc': 'An AI service that analyzes home images to detect fall hazards for the elderly — shipped to Google Play with health surveys and tailored safety reports.',
        'proj.council.title': 'KNU Student Council System',
        'proj.council.desc': 'An integrated system 2,000+ students actually use — SSO, QR student-ID auth, and an admin console, built and operated on a physical server on the campus network.',
        'proj.techtalk.title': 'TechTalk Hub',
        'proj.techtalk.desc': 'A Slack voting & scheduling bot built during my Vietnam internship; 38% faster responses via query · UI optimization.',
        'proj.locker.title': 'Locker Management Service',
        'proj.locker.desc': 'A department locker service, with firewall · SSL · Nginx · Docker provisioned by hand on an Ubuntu physical server.',

        /* Research (root) */
        'research.title': 'Research',
        'research.intro': 'I\'ve done both — building and researching, from defense signal processing to time series and AI.',
        'research.ts.title': 'Clusterability of Time-series Embeddings',
        'research.ts.paper': '"Exploring the Clusterability of Unclustered Embeddings: Multi-Domain Multivariate Time Series" · Co-author',
        'research.ts.desc': 'A systematic comparison of five time-series embeddings (TS2Vec, PatchTST, MERIT, TimeCMA, TimeKD) on unsupervised clustering across four UEA datasets — surfacing the cluster-collapse (NMI≈0) of LLM-based methods and a method-selection guideline.',
        'research.sar.title': 'Polarimetric SAR for Low-Observable Targets',
        'research.sar.paper': '"Polarimetric SAR Signal Synthesis for Low-Observable Target Detection" · Mili-Tech Challenge 2025 Grand Prize',
        'research.sar.desc': 'A defense study under KAIST\'s next-gen SAR lab. Detects low-observable targets — invisible to single-polarization SAR — by phase-correlation registration and synthesis of multiple polarization images. In X-band FMCW field tests, targets unseen in one polarization became clear in the synthesized polarimetric RGB image. Awarded the Minister of Science & ICT Grand Prize.',
        'research.uam.title': 'Web-Based CCTV Surveillance for Drone Vertiports',
        'research.uam.paper': '"Design and Implementation of an Integrated Web-Based CCTV Surveillance System for Drone Vertiport Environments" · Co-author · Bronze Prize',
        'research.uam.desc': 'A real-time surveillance study for vertiports — the key ground hubs of urban air mobility (UAM). Proposed and implemented a web-based model that monitors an entire vertiport at low latency with a limited number of PTZ cameras over RTSP · ONVIF · HLS.',

        /* Awards */
        'awards.title': 'Honors & Leadership',
        'awards.honors': 'Honors & Selections',
        'awards.rond.t': 'ROND 11th Defense-Research Cadet', 'awards.rond.d': 'R&D talent program, Agency for Defense Development',
        'awards.mili.t': 'Mili-Tech Challenge 2025 · Grand Prize', 'awards.mili.d': 'Minister of Science & ICT Award',
        'awards.topcit.t': 'TOPCIT 23rd · 1st Place', 'awards.topcit.d': 'Score 805 · KNU President\'s Award',
        'awards.essay.t': 'SW University Essay Contest 2026 · Grand Prize + AI Award', 'awards.essay.d': 'Council Chair\'s Award · essay “A User Manual, Turning the Pages”', 'awards.essay.link': 'Read the essay →',
        'awards.kit.t': 'Undergraduate Paper Competition · Bronze Prize', 'awards.kit.d': 'KIT Summer Annual Conference 2026',
        'awards.icp.t': 'Industry–Academia Project Competition · Popularity Award', 'awards.icp.d': 'KNU Software Education Center · drone vertiport CCTV surveillance',
        'awards.hack1.t': 'SW Edu. Idea Hackathon · 1st Place', 'awards.hack1.d': '5 universities, Daegu·Gyeongbuk',
        'awards.hack2.t': 'Daegu SW Hackathon · Excellence Award', 'awards.hack2.d': 'Blockchain education-rights reporting service',
        'awards.wfk.t': 'WFK ICT Volunteer Corps · Director\'s Award', 'awards.wfk.d': 'Indonesia · cattle breed/weight detection AI',
        'awards.sch.t': 'National Science Scholarship · Saem Talent Fund', 'awards.sch.d': 'KOSAF · KNU CSE',
        'awards.cert.t': 'NVIDIA DLI · SQLD · Craftsman Programming', 'awards.cert.d': 'Rapid App Development with LLMs · KDATA · HRD Korea',
        'awards.leadership': 'Leadership & Community',
        'awards.vp.t': 'President', 'awards.vp.d': 'KNU CSE 17th Student Council Do:IT', 'awards.vp.y': '2026 — present',
        'awards.ll.t': 'BE Officer', 'awards.ll.d': 'LikeLion 11–13th · Java/Spring teaching', 'awards.ll.y': '2023 — 2025',
        'awards.gdg.t': 'Backend Core Member', 'awards.gdg.d': 'GDG on Campus KNU', 'awards.gdg.y': '2023 — 2025',
        'awards.goorm.t': 'Backend Officer', 'awards.goorm.d': '9oormthon Univ KNU', 'awards.goorm.y': '2024 — 2025',

        /* Press */
        'press.label': 'Press', 'press.text': 'Teen Maeil Business — “Researching advanced tech while serving at the ADD” (Mar 2026)',

        /* Timeline */
        'time.title': 'Education & Ahead',
        'time.t1': 'Entered KNU, School of Computer Science & Engineering',
        'time.t1b': 'Completed the Silicon Valley program at San José State University (LLM app development)',
        'time.t2': 'Graduating from KNU CSE (expected)',
        'time.t3': 'Begin service as a research officer at the Agency for Defense Development (ADD)',
        'time.t4': 'Complete ADD service',
        'time.t5': 'Continuing defense AI research',

        /* Contact */
        'contact.title': 'Let\'s talk',
        'contact.text': 'Open to ideas, collaboration, or just a hello — reach out any time.',
        'contact.print': 'Print this page and it\'s my CV · Print',

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

        'd.festival.eyebrow': 'Project · Production', 'd.festival.title': 'KNU 80th Festival Web App',
        'd.festival.role': 'Full-stack · Production ops', 'd.festival.period': 'Apr — May 2026 · KNU 2026 Festival',
        'd.festival.context': 'A mobile web app used by real attendees at KNU\'s 80th-anniversary festival (May 20–22, 2026) — booth/tavern info, online queuing, real-time booth ranking, a rolling-paper canvas, and a random matching game.',
        'd.festival.problem': 'A festival drawing thousands needed one service that could handle waiting, information, and participation at once, under real load.',
        'd.festival.solution': 'Built full-stack on React 19 + Spring Boot 3.5: an online queue with phone verification and SMS call notifications, real-time booth ranking over SSE + Redis, time-windowed random matching with a fairness algorithm, and operator consoles — deployed and operated on the department server via Docker Compose and GitHub Actions.',
        'd.festival.impact': 'Ran live across the three festival days — 59 booths, 100 canvas boards, and real waiting/matching data. Capacity was planned for ~1,500 concurrent users, and I owned production operations end to end (runbook, monitoring, incident response). I was the top contributor, with ~53% of backend commits.',

        'rs.eyebrow': 'Research', 'rs.title': 'Research',
        'rs.intro': 'I\'ve done both — building and researching: defense signal processing, time-series representation learning, and urban air mobility surveillance.',
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
        'rs.sar.f6': 'Low-observable targets invisible in single polarization became clearly detectable in the synthesized image',
        'rs.uam.title': 'Web-Based CCTV Surveillance for Drone Vertiports',
        'rs.uam.venue': 'KIIT Summer Conference 2026 · Bronze Prize, Undergraduate Paper Competition · Co-author',
        'rs.uam.paper': 'Design and Implementation of an Integrated Web-Based CCTV Surveillance System for Drone Vertiport Environments',
        'rs.uam.abstract': 'Vertiports — the key ground hubs of urban air mobility (UAM) — demand high safety standards and real-time monitoring, yet most still rely on manual oversight. This study designs and implements a web-based integrated CCTV surveillance system optimized for vertiport environments, laying a technical foundation for future surveillance standards.',
        'rs.uam.f.label': 'Approach',
        'rs.uam.f1': 'Active monitoring of an entire vertiport with a limited number of PTZ cameras',
        'rs.uam.f2': 'RTSP · ONVIF standard protocols — deployable regardless of camera manufacturer',
        'rs.uam.f3': 'Low-latency, real-time multi-CCTV output to a web dashboard via HLS streaming',
        'rs.uam.f4': 'A surveillance model toward future vertiport monitoring standards and operations',
        'rs.uam.note': 'Supported by MSIT · IITP, SW-oriented University Program (2021-0-01082)',

        /* Essay (full text) */
        'essay.eyebrow': 'Essay · 2026 SW-Oriented University Essay Contest',
        'essay.title': 'A User Manual, Turning the Pages',
        'essay.meta': 'Grand Prize · Council Chair\'s Award + AI Award · Sangmin Lee, CSE, Kyungpook National University',
        'essay.s1': '1 · Before I Enrolled',
        'essay.s1p1': 'There was no computer. For me, an elementary-school kid, a single worn-out phone was everything. And yet, strangely, writing code line by line inside that five-inch screen was more fun than anything. I\'d type what I didn\'t know into the search bar, hit an error, fix it, and try again. No one made me. It was simply fun. The things I built alone kept piling up — until one day, watching a service I\'d earnestly made sit empty with no visitors, I realized: there\'s a limit to how far you can go alone. There are things technology alone can\'t solve. I desperately needed an environment where I could push against others and trade feedback.',
        'essay.s1p2': 'So I started looking. While researching universities, I learned that Kyungpook National University\'s School of Computer Science had been designated a Software-Oriented University, with structures already in place — industry–academia projects, overseas internships, an SW Mileage system. What I, fumbling along on my own, needed was exactly this kind of user manual. In the spring of 2023, I enrolled.',
        'essay.s2': '2 · After I Enrolled',
        'essay.s2p1': 'After enrolling, I set myself one rule. If the Software-Oriented University opens a door, walk through it — no matter what.',
        'essay.s2p2': 'The first thing that caught my eye was the SW Mileage system. It looked like a simple scheme that logged activities and turned them into points, but for me it became a mirror to check myself against. I sat the TOPCIT exam every single round to see where I stood, and whenever I found a weak spot, it became the next semester\'s goal. I was nervous every time. Still, I kept taking it. At the end of all that repetition came first place in the university and a President\'s Award — but more valuable than the award was the habit I\'d gained of measuring myself, steadily.',
        'essay.s2p3': 'The first competition I entered was a startup hackathon hosted by the Software Education Center. I was confident about the building. But during the presentations, the speaker from the team beside us was explaining their idea while meeting the eyes of the audience one by one. Same topic — yet the crowd gathered only on their side. I opened my laptop and explained by showing code, but I could feel the judges\' attention already drifting away. I knew how to build, but not how to say why I\'d built it. If the first page of the manual is technology, the second page — I learned right then — is communication.',
        'essay.s2p4': 'From that day on, I moved to fill the communication I lacked. I joined Like Lion, a nationwide IT club, and over three years I eventually stood as a BE Officer, teaching Java and Spring Boot to university students myself. To explain a technology to someone, you first have to understand it precisely. Teaching was an extension of learning, and at the same time the surest training for building the power to speak. Maybe that\'s what did it — in the Science & Technology Officer interview, the moment the interviewer nodded as I explained “why this technology is needed,” I felt that the helplessness from that hackathon stage had finally turned into strength.',
        'essay.s2p5': 'I also took part in an industry–academia project: building a fall-prevention service for the elderly together with Happy Aging, where I served as Technical Lead. From the AI that detects danger to the app placed in an elder\'s hand, I built the service from beginning to end and released it on Google Play. When I heard during testing that an elderly user had felt reassured by the app\'s alert, the fact that a single line of code is tied directly to someone\'s safety finally hit home. It carried a different weight from any assignment inside a classroom.',
        'essay.s2p6': 'I wanted to test that weight somewhere wider. Through the university\'s overseas internship program, I had the chance to work at an American IT company based in Vietnam. When a senior developer reviewed my code and asked, “Why did you choose this approach?”, the answer circled in my head but my mouth couldn\'t keep up. That night at the dorm, organizing technical-English expressions one by one, I felt it: the world was wider than I\'d thought. And that I had to become someone who could communicate in that wide world.',
        'essay.s3': '3 · Path & What\'s Next',
        'essay.s3p1': 'Looking back, I\'ve built a lot. From systems handling hundreds of thousands of real-time records to a service up on the app store, I built something wherever my hands reached. But at some point, I began to look beyond the act of building.',
        'essay.s3p2': 'Technology was changing by the day. I wanted to be not someone who implements what\'s handed to him, but someone who considers where technology should head. I knocked on the door of KAIST\'s next-generation SAR lab. It took a week to properly read a single paper. Writing code and exploring the principles of a technology were entirely different kinds of immersion — and oddly, I liked that difficulty. When I won the Minister of Science and ICT\'s Award at the Mili-Tech Challenge with what I\'d built up in the lab, it was the moment I first confirmed my potential not as a developer, but as a researcher.',
        'essay.s3p3': 'I\'ve now been selected for the 11th cohort of the Science & Technology Officer program, and after graduation I\'ll serve at the Agency for Defense Development. There, I intend to research extended reality (XR). Because the Software-Oriented University taught me — through industry projects and an overseas internship — what weight technology carries in the field, I want to do research that solves real, on-the-ground problems, not technology that stays inside the lab. A kid for whom a five-inch screen was everything is now saying he\'ll design a world beyond reality. It\'s something I can say precisely because I\'m someone who has turned the pages of that user manual — a Software-Oriented University — one by one.',
        'essay.s3p4': 'The Software-Oriented University was a user manual to me. A guide that, on the road I\'d walked fumbling alone, told me the direction and let me pick up speed. This manual has one condition, though: you can only read it if you open it first. And only the one who opens it gets to write the next page. I hope these words, right now, become for someone the courage to open their own manual.'
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
    if (ogDesc) ogDesc.content = lang === 'ko' ? 'Sin prisa, pero sin pausa. — 직접 만들고, 직접 운영하고, 연구합니다.' : 'Sin prisa, pero sin pausa. — I build it, I run it, and I research it.';
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
