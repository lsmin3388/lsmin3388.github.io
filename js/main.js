/**
 * Portfolio — interactions
 * Shared across the root page and detail pages.
 */

/* Own the scroll position so every page load is predictable
   (no browser scroll restoration carrying over between pages). */
if ('scrollRestoration' in history) {
    history.scrollRestoration = 'manual';
}

document.addEventListener('DOMContentLoaded', () => {
    initI18n();
    initReveal();
    initNav();
    initMobileMenu();
    initActiveLink();
    initAnchorScroll();
    initInitialScroll();
});

window.addEventListener('load', () => {
    // Re-correct the hash position once fonts/images settle the layout.
    if (window.location.hash) positionToHash(false);
});

/* ---- Scroll helpers ---- */
function prefersReducedMotion() {
    return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
}
function navOffset() {
    const nav = document.getElementById('nav');
    return (nav ? nav.offsetHeight : 0) + 20;
}
function scrollToTarget(target, smooth) {
    const y = target.getBoundingClientRect().top + window.scrollY - navOffset();
    window.scrollTo({
        top: Math.max(0, y),
        behavior: (smooth && !prefersReducedMotion()) ? 'smooth' : 'auto'
    });
}
function positionToHash(smooth) {
    const hash = window.location.hash;
    if (!hash || hash.length < 2) return false;
    let target = null;
    try { target = document.querySelector(decodeURIComponent(hash)); } catch (e) { return false; }
    if (!target) return false;
    scrollToTarget(target, smooth);
    return true;
}

/* On first load: jump to the hash (instant, offset-corrected) or reset to top. */
function initInitialScroll() {
    if (window.location.hash) {
        requestAnimationFrame(() => requestAnimationFrame(() => positionToHash(false)));
    } else {
        window.scrollTo(0, 0);
    }
}

/* Smooth, offset-aware scrolling for same-page anchor links. */
function initAnchorScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(a => {
        const href = a.getAttribute('href');
        if (!href || href === '#') return;
        a.addEventListener('click', (e) => {
            let target = null;
            try { target = document.querySelector(href); } catch (err) { return; }
            if (!target) return;
            e.preventDefault();
            scrollToTarget(target, true);
            history.pushState(null, '', href);
        });
    });
}

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
