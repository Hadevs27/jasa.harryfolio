export const initModal = () => {
    const modal = document.getElementById('certModal');
    const triggers = document.querySelectorAll('.js-cert-trigger');
    const closeBtn = document.querySelector('.js-modal-close');
    
    if (!modal) return;
    
    const openModal = () => {
        modal.classList.add('is-open');
        modal.setAttribute('aria-hidden', 'false');
        document.body.style.overflow = 'hidden';
        if (closeBtn) closeBtn.focus();
    };
    
    const closeModal = () => {
        modal.classList.remove('is-open');
        modal.setAttribute('aria-hidden', 'true');
        document.body.style.overflow = '';
    };
    
    triggers.forEach(btn => {
        btn.addEventListener('click', openModal);
    });
    
    if (closeBtn) {
        closeBtn.addEventListener('click', closeModal);
    }
    
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            closeModal();
        }
    });
    
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modal.classList.contains('is-open')) {
            closeModal();
        }
    });
};
