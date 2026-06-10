/**
 * Portfolio — interactions
 * Shared across the root page and detail pages.
 */

document.addEventListener('DOMContentLoaded', () => {
    initI18n();
    initReveal();
    initNav();
    initMobileMenu();
    initActiveLink();
});

/* Reveal on scroll */
function initReveal() {
    const reveals = document.querySelectorAll('.reveal');
    if (!('IntersectionObserver' in window) || !reveals.length) {
        reveals.forEach(el => el.classList.add('active'));
        return;
    }
    const observer = new IntersectionObserver((entries, obs) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                obs.unobserve(entry.target);
            }
        });
    }, { threshold: 0.12 });

    reveals.forEach(el => observer.observe(el));

    // Hero reveals fire immediately
    requestAnimationFrame(() => {
        document.querySelectorAll('.hero .reveal').forEach(el => el.classList.add('active'));
    });
}

/* Nav border on scroll */
function initNav() {
    const nav = document.getElementById('nav');
    if (!nav) return;
    const onScroll = () => nav.classList.toggle('scrolled', window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
}

/* Mobile menu */
function initMobileMenu() {
    const hamburger = document.getElementById('hamburger');
    const menu = document.getElementById('mobile-menu');
    if (!hamburger || !menu) return;

    const close = () => {
        hamburger.classList.remove('active');
        hamburger.setAttribute('aria-expanded', 'false');
        menu.classList.remove('active');
        menu.setAttribute('aria-hidden', 'true');
    };
    const toggle = () => {
        const open = menu.classList.toggle('active');
        hamburger.classList.toggle('active', open);
        hamburger.setAttribute('aria-expanded', String(open));
        menu.setAttribute('aria-hidden', String(!open));
    };

    hamburger.addEventListener('click', toggle);
    menu.querySelectorAll('a').forEach(a => a.addEventListener('click', close));
    document.addEventListener('keydown', e => { if (e.key === 'Escape') close(); });
}

/* Active nav link (root page only) */
function initActiveLink() {
    const links = document.querySelectorAll('.nav-link');
    const sections = document.querySelectorAll('main section[id]');
    if (!links.length || !sections.length) return;

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (!entry.isIntersecting) return;
            const id = entry.target.getAttribute('id');
            links.forEach(l => l.classList.toggle('active', l.getAttribute('href') === `#${id}`));
        });
    }, { rootMargin: '-45% 0px -50% 0px' });

    sections.forEach(s => observer.observe(s));
}

/* Spanish console note */
console.log('%cHecho con calma. ¡Hola! 👋', 'font-family: Georgia, serif; font-style: italic; font-size: 18px; color: #c4634a;');
console.log('%cgithub.com/lsmin3388', 'font-size: 13px; color: #8c867c;');
