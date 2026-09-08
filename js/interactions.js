export const initInteractions = () => {
    const reveals = document.querySelectorAll('.reveal-on-scroll');

    const initScrollObserver = () => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('is-visible');
                    observer.unobserve(entry.target);
                }
            });
        }, {
            threshold: 0.1,
            rootMargin: '0px 0px -40px 0px'
        });

        if (reveals) {
            reveals.forEach(el => observer.observe(el));
        }
    };

    initScrollObserver();
};
