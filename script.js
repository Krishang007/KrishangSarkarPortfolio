document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.querySelector('.menu-toggle');
    const nav = document.querySelector('.nav-links');

    menuToggle?.addEventListener('click', () => {
        const isOpen = nav.classList.toggle('open');
        menuToggle.setAttribute('aria-expanded', String(isOpen));
    });

    nav?.querySelectorAll('a').forEach((link) => {
        link.addEventListener('click', () => {
            nav.classList.remove('open');
            menuToggle?.setAttribute('aria-expanded', 'false');
        });
    });

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add('revealed');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.12 });

    document.querySelectorAll('.section-label, .about-grid, .section-heading, .project-card, .principles-grid, .contact-content').forEach((element) => {
        element.classList.add('reveal');
        observer.observe(element);
    });
});
