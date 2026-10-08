/* 이상민 · Sangmin Lee — 모든 페이지 공용 */

document.addEventListener('DOMContentLoaded', () => {
    initI18n();
    initCards();
    initRail();
    document.querySelectorAll('.js-print').forEach(b => b.addEventListener('click', () => window.print()));
});

/* 대표 카드: 버튼으로 한 장씩, 끝에 닿으면 버튼 비활성 */
function initCards() {
    const track = document.querySelector('.cards');
    if (!track) return;
    const btns = document.querySelectorAll('.feat-btn');
    const step = () => {
        const card = track.querySelector('.card');
        const gap = parseFloat(getComputedStyle(track).columnGap) || 0;
        return card ? card.getBoundingClientRect().width + gap : 300;
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

/* 왼쪽 목차: 화면 위쪽 40% 선을 지난 마지막 섹션을 표시 */
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
        let current = null;
        pairs.forEach(([a, t]) => {
            if (t.offsetParent === null || t.getBoundingClientRect().top > line) return;
            current = a;
        });
        links.forEach(a => a.classList.toggle('is-active', a === current));
    };
    window.addEventListener('scroll', () => {
        if (!ticking) { ticking = true; requestAnimationFrame(mark); }
    }, { passive: true });
    mark();
}
