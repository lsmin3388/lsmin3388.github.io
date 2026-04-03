/**
 * Internationalization (i18n) Module
 * Supports Korean (ko) and English (en)
 * Detects browser language and allows manual toggle
 */

const translations = {
    en: {
        // Nav
        'nav.about': 'About',
        'nav.experience': 'Experience',
        'nav.projects': 'Projects',
        'nav.awards': 'Awards',
        'nav.contact': 'Contact',
        'nav.resume': 'Resume',

        // Hero
        'hero.greeting': 'Hi, my name is',
        'hero.name': 'Sangmin Lee.',
        'hero.title': 'I build things for the backend.',
        'hero.description': 'I\'m a software engineer specializing in building scalable backend systems. Currently, I\'m a <span class="highlight">ROND (Research Officers for National Defense) Cadet</span> preparing to serve at the Agency for Defense Development (ADD).',
        'hero.cta.work': 'View My Work',
        'hero.cta.contact': 'Get In Touch',
        'hero.scroll': 'Scroll',

        // About
        'about.title': 'About Me',
        'about.p1': 'Hello! I\'m Sangmin, a software engineer based in Daegu, South Korea. I enjoy building reliable and scalable systems that solve real-world problems.',
        'about.p2': 'I\'m currently in my final year at <span class="highlight">Kyungpook National University</span>, majoring in Computer Science. I\'ve been selected as a <span class="highlight">ROND 11th Cadet</span>, which means I\'ll be serving as a researcher at the Agency for Defense Development (ADD) after graduation.',
        'about.p3': 'I\'ve had the privilege of working at <span class="highlight">startups</span>, participating in <span class="highlight">international internships</span>, and leading <span class="highlight">university organizations</span>. Currently serving as Vice President of the 17th KNU CSE Student Council <span class="highlight">Do:IT</span>.',
        'about.p4': 'Here are some technologies I\'ve been working with:',
        'about.education.title': 'Education',
        'about.education.name': 'Kyungpook National University',
        'about.education.degree': 'B.S. in Computer Science & Engineering',
        'about.education.date': 'Mar 2023 — Feb 2027 (Expected)',

        // Experience
        'exp.title': 'Where I\'ve Worked',
        'exp.dh.role': 'Backend Developer',
        'exp.dh.company': '@ DataHouse Vietnam',
        'exp.dh.date': 'Jan 2026 — Feb 2026 · Da Nang, Vietnam',
        'exp.dh.d1': 'Developed backend systems using Node.js and TypeScript',
        'exp.dh.d2': 'Built TechTalk Hub: Slack-based voting & scheduling chatbot',
        'exp.dh.d3': 'Optimized database queries, reducing response time by 38%',
        'exp.rond.role': 'Full-Stack Developer',
        'exp.rond.company': '@ Rond Corporation',
        'exp.rond.date': 'May 2025 — Dec 2025 · Seoul, South Korea',
        'exp.rond.badge': 'Youth Startup Academy Selected Company',
        'exp.rond.d1': 'Developed web applications as a full-stack developer',
        'exp.rond.d2': 'Participated in government-backed startup program',
        'exp.ha.role': 'DevOps Technical Lead',
        'exp.ha.company': '@ Happy Aging',
        'exp.ha.date': 'Jul 2024 — Mar 2025',
        'exp.ha.d1': 'Led development of elderly fall prevention assistant service',
        'exp.ha.d2': 'Implemented AI-based home hazard detection using OpenAI APIs',
        'exp.ha.d3': 'Built Android application with Kotlin',
        'exp.ha.d4': 'Deployed on AWS EC2 with Docker containerization',
        'exp.st.role': 'DevOps Engineer / Server Developer',
        'exp.st.company': '@ Stocodi',
        'exp.st.date': 'Jun 2023 — Mar 2024',
        'exp.st.d1': 'Designed real-time stock data processing infrastructure',
        'exp.st.d2': 'Processed live data for 3000+ stocks (KOSPI & KOSDAQ)',
        'exp.st.d3': 'Migrated monolithic architecture to MSA',

        // Projects
        'proj.title': 'Things I\'ve Built',
        'proj.featured': 'Featured Project',
        'proj.stock.title': 'Real-time Stock Data Pipeline',
        'proj.stock.desc': 'A high-performance data pipeline processing real-time stock prices for all 3000+ stocks listed on KOSPI and KOSDAQ exchanges. Migrated from monolithic to microservices architecture to handle massive concurrent connections with low latency.',
        'proj.stock.problem.title': 'Problem',
        'proj.stock.problem': 'Legacy monolithic system couldn\'t handle real-time data for thousands of stocks simultaneously.',
        'proj.stock.solution.title': 'Solution',
        'proj.stock.solution': 'Redesigned as MSA using Spring Webflux for reactive processing, RabbitMQ for message queuing, and InfluxDB for time-series data.',
        'proj.stock.impact.title': 'Impact',
        'proj.stock.impact': 'Successfully handled 3000+ concurrent WebSocket connections with sub-second latency.',
        'proj.other': 'Other Noteworthy Projects',
        'proj.fall.title': 'Fall Prevention Assistant',
        'proj.fall.desc': 'AI-powered service that analyzes home images to detect fall hazards for elderly. Includes health surveys and generates personalized safety reports.',
        'proj.council.title': 'KNU Student Council System',
        'proj.council.desc': 'Integrated management system for 2000+ students. Features SSO authentication, QR-based student ID verification, and admin dashboard.',
        'proj.locker.title': 'Locker Management System',
        'proj.locker.desc': 'Web service for managing university department lockers. Built physical server infrastructure with SSL, firewall, and Docker containerization.',

        // Awards
        'awards.title': 'Honors & Leadership',
        'awards.honors': 'Honors & Awards',
        'awards.rond.title': 'ROND 11th Cohort',
        'awards.rond.desc': 'Research Officers for National Defense',
        'awards.mili.title': 'Mili-Tech Challenge 2025',
        'awards.mili.desc': 'Grand Prize (Minister of Science & ICT Award)',
        'awards.topcit.title': 'TOPCIT 22nd Assessment',
        'awards.topcit.desc': '1st Place (Score: 805) - President\'s Award',
        'awards.scholarship.title': 'National Science & Engineering Scholarship',
        'awards.scholarship.desc': 'Korea Student Aid Foundation',
        'awards.wfk.title': 'WFK ICT Volunteer Corps',
        'awards.wfk.desc': 'NIA Director\'s Award - Indonesia',
        'awards.leadership': 'Leadership',
        'awards.vp.title': 'Vice President',
        'awards.vp.desc': 'KNU CSE 17th Student Council Do:IT',
        'awards.likelion.title': 'Backend Officer',
        'awards.likelion.desc': 'LikeLion University (3 years)',
        'awards.gdg.title': 'Backend Core Member',
        'awards.gdg.desc': 'GDG on Campus KNU',
        'awards.goorm.title': 'Backend Officer',
        'awards.goorm.desc': '9oormthon Univ KNU',

        // Contact
        'contact.title': 'Get In Touch',
        'contact.text': 'I\'m currently open to new opportunities and collaborations. Whether you have a question, want to discuss a project, or just want to say hi, feel free to reach out!',
        'contact.btn': 'Say Hello',

        // Footer
        'footer.credit': 'Built by Sangmin Lee',
    },
    ko: {
        // Nav
        'nav.about': '소개',
        'nav.experience': '경력',
        'nav.projects': '프로젝트',
        'nav.awards': '수상',
        'nav.contact': '연락처',
        'nav.resume': '이력서',

        // Hero
        'hero.greeting': '안녕하세요, 저는',
        'hero.name': '이상민입니다.',
        'hero.title': '백엔드를 만듭니다.',
        'hero.description': '확장 가능한 백엔드 시스템 구축을 전문으로 하는 소프트웨어 엔지니어입니다. 현재 <span class="highlight">ROND (국방과학연구장교) 11기</span>로 선발되어 국방과학연구소(ADD) 복무를 준비하고 있습니다.',
        'hero.cta.work': '프로젝트 보기',
        'hero.cta.contact': '연락하기',
        'hero.scroll': '스크롤',

        // About
        'about.title': '소개',
        'about.p1': '안녕하세요! 대구에 거주하는 소프트웨어 엔지니어 이상민입니다. 실제 문제를 해결하는 안정적이고 확장 가능한 시스템을 구축하는 것을 즐깁니다.',
        'about.p2': '현재 <span class="highlight">경북대학교</span> 컴퓨터학부 마지막 학년에 재학 중입니다. <span class="highlight">ROND 11기</span>로 선발되어, 졸업 후 국방과학연구소(ADD)에서 연구원으로 복무할 예정입니다.',
        'about.p3': '<span class="highlight">스타트업</span> 근무, <span class="highlight">해외 인턴십</span> 참여, <span class="highlight">대학 단체</span> 리더십 등 다양한 경험을 쌓아왔습니다. 현재 경북대학교 컴퓨터학부 17대 학생회 <span class="highlight">Do:IT</span> 부학생회장으로 활동하고 있습니다.',
        'about.p4': '주로 사용하는 기술 스택입니다:',
        'about.education.title': '학력',
        'about.education.name': '경북대학교',
        'about.education.degree': '컴퓨터학부 학사',
        'about.education.date': '2023. 03 — 2027. 02 (졸업 예정)',

        // Experience
        'exp.title': '경력 사항',
        'exp.dh.role': '백엔드 개발자',
        'exp.dh.company': '@ DataHouse Vietnam',
        'exp.dh.date': '2026. 01 — 2026. 02 · 다낭, 베트남',
        'exp.dh.d1': 'Node.js와 TypeScript를 사용한 백엔드 시스템 개발',
        'exp.dh.d2': 'TechTalk Hub: Slack 기반 투표 및 일정 관리 챗봇 개발',
        'exp.dh.d3': '데이터베이스 쿼리 최적화로 응답 시간 38% 단축',
        'exp.rond.role': '풀스택 개발자',
        'exp.rond.company': '@ Rond Corporation',
        'exp.rond.date': '2025. 05 — 2025. 12 · 서울',
        'exp.rond.badge': '청년창업사관학교 선정 기업',
        'exp.rond.d1': '풀스택 개발자로서 웹 애플리케이션 개발',
        'exp.rond.d2': '정부 지원 스타트업 프로그램 참여',
        'exp.ha.role': 'DevOps 테크리드',
        'exp.ha.company': '@ Happy Aging',
        'exp.ha.date': '2024. 07 — 2025. 03',
        'exp.ha.d1': '고령자 낙상 예방 보조 서비스 개발 리드',
        'exp.ha.d2': 'OpenAI API를 활용한 AI 기반 가정 내 위험 요소 감지 구현',
        'exp.ha.d3': 'Kotlin으로 Android 애플리케이션 개발',
        'exp.ha.d4': 'AWS EC2에 Docker 컨테이너화하여 배포',
        'exp.st.role': 'DevOps 엔지니어 / 서버 개발자',
        'exp.st.company': '@ Stocodi',
        'exp.st.date': '2023. 06 — 2024. 03',
        'exp.st.d1': '실시간 주식 데이터 처리 인프라 설계',
        'exp.st.d2': 'KOSPI & KOSDAQ 3000+ 종목 실시간 데이터 처리',
        'exp.st.d3': '모놀리식 아키텍처를 MSA로 마이그레이션',

        // Projects
        'proj.title': '프로젝트',
        'proj.featured': '주요 프로젝트',
        'proj.stock.title': '실시간 주식 데이터 파이프라인',
        'proj.stock.desc': 'KOSPI, KOSDAQ 거래소에 상장된 3000개 이상 종목의 실시간 주가를 처리하는 고성능 데이터 파이프라인입니다. 대규모 동시 접속을 저지연으로 처리하기 위해 모놀리식에서 마이크로서비스 아키텍처로 전환했습니다.',
        'proj.stock.problem.title': '문제',
        'proj.stock.problem': '기존 모놀리식 시스템이 수천 개 종목의 실시간 데이터를 동시에 처리할 수 없었습니다.',
        'proj.stock.solution.title': '해결',
        'proj.stock.solution': 'Spring Webflux로 리액티브 처리, RabbitMQ로 메시지 큐잉, InfluxDB로 시계열 데이터를 관리하는 MSA로 재설계했습니다.',
        'proj.stock.impact.title': '성과',
        'proj.stock.impact': '3000개 이상의 동시 WebSocket 연결을 1초 미만의 지연 시간으로 처리했습니다.',
        'proj.other': '기타 프로젝트',
        'proj.fall.title': '낙상 예방 보조 서비스',
        'proj.fall.desc': 'AI를 활용하여 가정 내 이미지를 분석, 고령자 낙상 위험 요소를 감지하는 서비스입니다. 건강 설문과 맞춤형 안전 보고서를 제공합니다.',
        'proj.council.title': '경북대 학생회 시스템',
        'proj.council.desc': '2000명 이상의 학생을 위한 통합 관리 시스템입니다. SSO 인증, QR 기반 학생증 인증, 관리자 대시보드를 제공합니다.',
        'proj.locker.title': '사물함 관리 시스템',
        'proj.locker.desc': '대학교 학과 사물함 관리 웹 서비스입니다. SSL, 방화벽, Docker 컨테이너화를 포함한 물리 서버 인프라를 구축했습니다.',

        // Awards
        'awards.title': '수상 & 리더십',
        'awards.honors': '수상 경력',
        'awards.rond.title': 'ROND 11기',
        'awards.rond.desc': '국방과학연구장교',
        'awards.mili.title': '밀리테크 챌린지 2025',
        'awards.mili.desc': '대상 (과학기술정보통신부 장관상)',
        'awards.topcit.title': 'TOPCIT 제22회 정기평가',
        'awards.topcit.desc': '1등 (805점) - 총장상',
        'awards.scholarship.title': '이공계 국가장학금',
        'awards.scholarship.desc': '한국장학재단',
        'awards.wfk.title': 'WFK ICT 봉사단',
        'awards.wfk.desc': 'NIA 원장상 - 인도네시아',
        'awards.leadership': '리더십',
        'awards.vp.title': '부학생회장',
        'awards.vp.desc': '경북대 컴퓨터학부 17대 학생회 Do:IT',
        'awards.likelion.title': '백엔드 운영진',
        'awards.likelion.desc': '멋쟁이사자처럼 (3년)',
        'awards.gdg.title': '백엔드 코어 멤버',
        'awards.gdg.desc': 'GDG on Campus KNU',
        'awards.goorm.title': '백엔드 운영진',
        'awards.goorm.desc': '구름톤 유니브 KNU',

        // Contact
        'contact.title': '연락하기',
        'contact.text': '현재 새로운 기회와 협업에 열려 있습니다. 질문이 있거나, 프로젝트를 논의하고 싶거나, 인사를 나누고 싶으시면 편하게 연락 주세요!',
        'contact.btn': '메일 보내기',

        // Footer
        'footer.credit': 'Built by 이상민',
    }
};

let currentLang = 'en';

function detectLanguage() {
    const browserLang = navigator.language || navigator.userLanguage;
    return browserLang.startsWith('ko') ? 'ko' : 'en';
}

function setLanguage(lang) {
    currentLang = lang;
    localStorage.setItem('portfolio-lang', lang);
    document.documentElement.lang = lang;

    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        const text = translations[lang][key];
        if (text !== undefined) {
            if (el.getAttribute('data-i18n-html') !== null) {
                el.innerHTML = text;
            } else {
                el.textContent = text;
            }
        }
    });

    // Update toggle button text
    const toggleBtn = document.getElementById('lang-toggle');
    if (toggleBtn) {
        toggleBtn.textContent = lang === 'ko' ? 'EN' : 'KO';
    }

    // Update OG meta
    const ogTitle = document.querySelector('meta[property="og:title"]');
    const ogDesc = document.querySelector('meta[property="og:description"]');
    if (ogTitle) ogTitle.content = lang === 'ko' ? '이상민 | 포트폴리오' : 'Sangmin Lee | Portfolio';
    if (ogDesc) ogDesc.content = lang === 'ko' ? '백엔드 개발자 & 연구원' : 'Backend Developer & Researcher';
}

function toggleLanguage() {
    setLanguage(currentLang === 'en' ? 'ko' : 'en');
}

function initI18n() {
    const saved = localStorage.getItem('portfolio-lang');
    const lang = saved || detectLanguage();
    setLanguage(lang);

    const toggleBtn = document.getElementById('lang-toggle');
    if (toggleBtn) {
        toggleBtn.addEventListener('click', toggleLanguage);
    }

    const mobileToggleBtn = document.getElementById('mobile-lang-toggle');
    if (mobileToggleBtn) {
        mobileToggleBtn.addEventListener('click', toggleLanguage);
    }
}
