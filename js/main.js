import { initNavigation } from './navigation.js';
import { initFAQ } from './faq.js';
import { initInteractions } from './interactions.js';
import { initModal } from './modal.js';

export const SITE_CONFIG = {
    whatsapp: "[PLACEHOLDER: NOMOR WHATSAPP]",
    whatsappMessage: "Halo Harnad Technologies, saya ingin berkonsultasi mengenai kebutuhan project saya.",
    portfolio: "https://harryfolio.my.id/"
};

export const handleWhatsAppRedirect = () => {
    const encodedMsg = encodeURIComponent(SITE_CONFIG.whatsappMessage);
    const waUrl = "https://wa.me/" + SITE_CONFIG.whatsapp + "?text=" + encodedMsg;
    window.open(waUrl, '_blank', 'noopener,noreferrer');
};

document.addEventListener('DOMContentLoaded', () => {
    const yearSpan = document.getElementById('js-copyright-year');
    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }

    const waTriggers = document.querySelectorAll('.js-wa-trigger');
    waTriggers.forEach(btn => {
        btn.addEventListener('click', handleWhatsAppRedirect);
    });

    initNavigation();
    initFAQ();
    initInteractions();
    initModal();
});
