export const initFAQ = () => {
    const faqTriggers = document.querySelectorAll('.faq-trigger');

    const toggleFAQ = (btn) => {
        const isExpanded = btn.getAttribute('aria-expanded') === 'true';
        const panelId = btn.getAttribute('aria-controls');
        const panel = document.getElementById(panelId);

        faqTriggers.forEach(otherBtn => {
            if (otherBtn !== btn) {
                otherBtn.setAttribute('aria-expanded', 'false');
                const otherPanelId = otherBtn.getAttribute('aria-controls');
                if (otherPanelId) {
                    const otherPanel = document.getElementById(otherPanelId);
                    if (otherPanel) otherPanel.setAttribute('aria-hidden', 'true');
                }
            }
        });

        btn.setAttribute('aria-expanded', !isExpanded);
        if (panel) {
            panel.setAttribute('aria-hidden', isExpanded ? 'true' : 'false');
        }
    };

    if (faqTriggers) {
        faqTriggers.forEach(btn => {
            btn.addEventListener('click', () => toggleFAQ(btn));
        });
    }
};
