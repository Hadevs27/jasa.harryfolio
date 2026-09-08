export const initNavigation = () => {
    const header = document.getElementById('siteHeader');
    const mobileBtn = document.getElementById('mobileMenuBtn');
    const mobileDrawer = document.getElementById('mobileDrawer');
    const drawerCloses = document.querySelectorAll('.js-drawer-close');

    const toggleDrawer = () => {
        if (!mobileDrawer || !mobileBtn) return;
        const isOpen = mobileDrawer.classList.contains('open');
        mobileDrawer.classList.toggle('open', !isOpen);
        mobileBtn.setAttribute('aria-expanded', !isOpen);
        
        const svg = mobileBtn.querySelector('svg');
        if (svg) {
            if (!isOpen) {
                svg.innerHTML = `<line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line>`;
            } else {
                svg.innerHTML = `<line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line>`;
            }
        }
    };

    const closeDrawer = () => {
        if (!mobileDrawer || !mobileBtn) return;
        mobileDrawer.classList.remove('open');
        mobileBtn.setAttribute('aria-expanded', 'false');
        const svg = mobileBtn.querySelector('svg');
        if (svg) {
            svg.innerHTML = `<line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line>`;
        }
    };

    const handleScrollHeader = () => {
        if (!header) return;
        if (window.scrollY > 20) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    };

    if (mobileBtn) {
        mobileBtn.addEventListener('click', toggleDrawer);
    }

    if (drawerCloses) {
        drawerCloses.forEach(link => {
            link.addEventListener('click', closeDrawer);
        });
    }

    window.addEventListener('scroll', handleScrollHeader, { passive: true });
    handleScrollHeader();
};
