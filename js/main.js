/* 이상민 · Sangmin Lee — 모든 페이지 공용 */

document.addEventListener('DOMContentLoaded', () => {
    initI18n();
    initFilters();
    initCards();
    initRail();
    document.querySelectorAll('.js-print').forEach(b => b.addEventListener('click', () => window.print()));
});

/* 기록 분류 필터. 항목이 하나도 안 남은 연도는 통째로 숨긴다. */
function initFilters() {
    const buttons = document.querySelectorAll('.filters [data-filter]');
    if (!buttons.length) return;
    const entries = document.querySelectorAll('.entry');
    const years = document.querySelectorAll('.year');

    const apply = (kind) => {
        buttons.forEach(b => b.setAttribute('aria-pressed', String(b.dataset.filter === kind)));
        entries.forEach(el => {
            const kinds = (el.dataset.kind || '').split(' ');
            el.hidden = kind !== 'all' && !kinds.includes(kind);
            el.classList.remove('is-first', 'is-last');
        });
        years.forEach(y => {
            const visible = y.querySelectorAll('.entry:not([hidden])');
            y.classList.toggle('is-empty', visible.length === 0);
            const railItem = document.querySelector(`.rail a[href="#${y.id}"]`);
            if (railItem) railItem.parentElement.hidden = visible.length === 0;
            if (visible.length) visible[visible.length - 1].classList.add('is-last');
            if (y.dataset.year === '2026' && visible.length) visible[0].classList.add('is-first');
        });
    };

    buttons.forEach(b => b.addEventListener('click', () => apply(b.dataset.filter)));
    // 인쇄는 항상 전체 기록으로
    window.addEventListener('beforeprint', () => apply('all'));
}

/* 대표 카드: 버튼으로 한 장씩, 끝에 닿으면 버튼 비활성 */
function initCards() {
    const track = document.querySelector('.cards');
    if (!track) return;
    const btns = document.querySelectorAll('.feat-btn');
    const step = () => {
        const card = track.querySelector('.card');
        return card ? card.getBoundingClientRect().width + 16 : 300;
    };
    const ctrl = document.querySelector('.feat-ctrl');
    const update = () => {
        const max = track.scrollWidth - track.clientWidth - 2;
        if (ctrl) ctrl.hidden = max <= 0;
        btns.forEach(b => {
            b.disabled = b.dataset.dir === '-1' ? track.scrollLeft <= 2 : track.scrollLeft >= max;
        });
    };
    btns.forEach(b => b.addEventListener('click', () => {
        track.scrollBy({ left: step() * Number(b.dataset.dir), behavior: 'smooth' });
    }));
    track.addEventListener('scroll', update, { passive: true });
    window.addEventListener('resize', update);
    update();
}

/* 왼쪽 목차: 화면 위쪽 40% 선을 지난 마지막 섹션·연도를 표시 */
function initRail() {
    const links = [...document.querySelectorAll('.rail a[href^="#"]')];
    if (!links.length) return;
    const pairs = links
        .map(a => [a, document.getElementById(a.getAttribute('href').slice(1))])
        .filter(([, t]) => t);
    let ticking = false;

    const mark = () => {
        ticking = false;
        const line = window.innerHeight * 0.4;
        let section = null, year = null;
        pairs.forEach(([a, t]) => {
            if (t.offsetParent === null || t.getBoundingClientRect().top > line) return;
            if (t.classList.contains('year')) year = a; else section = a;
        });
        links.forEach(a => a.classList.remove('is-active'));
        if (section) section.classList.add('is-active');
        if (year && section && section.getAttribute('href') === '#log') year.classList.add('is-active');
    };
    window.addEventListener('scroll', () => {
        if (!ticking) { ticking = true; requestAnimationFrame(mark); }
    }, { passive: true });
    mark();
}

console.log('%cHecho con calma.', 'font-family: Georgia, serif; font-style: italic; font-size: 16px; color: #c4634a;');
