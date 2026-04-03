/**
 * Portfolio Main JavaScript
 * Handles animations, navigation, and interactions
 */

document.addEventListener('DOMContentLoaded', () => {
    // Initialize all modules
    initI18n();
    initRevealAnimations();
    initNavigation();
    initMobileMenu();
    initSmoothScroll();
});

/**
 * Reveal Animations on Scroll
 * Uses Intersection Observer for performance
 */
function initRevealAnimations() {
    const reveals = document.querySelectorAll('.reveal');

    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const revealObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    reveals.forEach(reveal => {
        revealObserver.observe(reveal);
    });

    // Trigger hero animations immediately
    setTimeout(() => {
        document.querySelectorAll('.hero .reveal').forEach(el => {
            el.classList.add('active');
        });
    }, 100);
}

/**
 * Navigation Scroll Effects
 * Adds shadow on scroll and highlights active section
 */
function initNavigation() {
    const nav = document.getElementById('nav');
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');

    // Add shadow on scroll
    let lastScroll = 0;

    window.addEventListener('scroll', () => {
        const currentScroll = window.pageYOffset;

        // Add/remove scrolled class
        if (currentScroll > 50) {
            nav.classList.add('scrolled');
        } else {
            nav.classList.remove('scrolled');
        }

        // Hide/show nav on scroll direction
        if (currentScroll > lastScroll && currentScroll > 100) {
            nav.style.transform = 'translateY(-100%)';
        } else {
            nav.style.transform = 'translateY(0)';
        }

        lastScroll = currentScroll;

        // Update active nav link
        updateActiveNavLink(sections, navLinks);
    });
}

/**
 * Update Active Navigation Link
 */
function updateActiveNavLink(sections, navLinks) {
    let current = '';

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;

        if (window.pageYOffset >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
}

/**
 * Mobile Menu Toggle
 */
function initMobileMenu() {
    const hamburger = document.getElementById('hamburger');
    const mobileMenu = document.getElementById('mobile-menu');
    const mobileLinks = document.querySelectorAll('.mobile-nav-link');
    const body = document.body;

    if (!hamburger || !mobileMenu) return;

    // Toggle menu
    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        mobileMenu.classList.toggle('active');
        body.style.overflow = mobileMenu.classList.contains('active') ? 'hidden' : '';
    });

    // Close menu on link click
    mobileLinks.forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('active');
            mobileMenu.classList.remove('active');
            body.style.overflow = '';
        });
    });

    // Close menu on escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && mobileMenu.classList.contains('active')) {
            hamburger.classList.remove('active');
            mobileMenu.classList.remove('active');
            body.style.overflow = '';
        }
    });

    // Close menu on outside click
    document.addEventListener('click', (e) => {
        if (mobileMenu.classList.contains('active') &&
            !mobileMenu.contains(e.target) &&
            !hamburger.contains(e.target)) {
            hamburger.classList.remove('active');
            mobileMenu.classList.remove('active');
            body.style.overflow = '';
        }
    });
}

/**
 * Smooth Scroll for Anchor Links
 */
function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();

            const targetId = this.getAttribute('href');
            if (targetId === '#') return;

            const target = document.querySelector(targetId);
            if (target) {
                const navHeight = document.getElementById('nav').offsetHeight;
                const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - navHeight;

                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
}

/**
 * Typing Animation (optional - for hero section)
 */
function initTypingAnimation() {
    const text = "I build things for the backend.";
    const element = document.querySelector('.hero-title');

    if (!element) return;

    element.textContent = '';
    let index = 0;

    function type() {
        if (index < text.length) {
            element.textContent += text.charAt(index);
            index++;
            setTimeout(type, 50);
        }
    }

    // Start after initial animations
    setTimeout(type, 1000);
}

/**
 * Preloader (optional)
 */
function hidePreloader() {
    const preloader = document.querySelector('.preloader');
    if (preloader) {
        preloader.classList.add('hidden');
        setTimeout(() => preloader.remove(), 500);
    }
}

/**
 * Console Easter Egg
 */
console.log(
    '%c👋 Hi there!',
    'font-size: 24px; font-weight: bold; color: #64ffda;'
);
console.log(
    '%cInterested in my code? Check out my GitHub: https://github.com/lsmin3388',
    'font-size: 14px; color: #8892b0;'
);
