/* 이상민 · Sangmin Lee — 모든 페이지 공용 */

document.addEventListener('DOMContentLoaded', () => {
    initI18n();
    initRail();
    document.querySelectorAll('.js-print').forEach(b => b.addEventListener('click', () => window.print()));
});

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
        links.forEach(a => {
            a.classList.toggle('is-active', a === current);
            if (a === current) a.setAttribute('aria-current', 'location');
            else a.removeAttribute('aria-current');
        });
    };
    const schedule = () => {
        if (!ticking) { ticking = true; requestAnimationFrame(mark); }
    };
    window.addEventListener('scroll', schedule, { passive: true });
    window.addEventListener('resize', schedule);
    mark();
}
