document.addEventListener('DOMContentLoaded', () => {
    // 1. SISTEMA DE TRADUÇÃO DINÂMICA (PT / EN)
    const langToggle = document.getElementById('lang-toggle');
    let currentLang = localStorage.getItem('site-lang') || 'pt';

    const translations = {
        pt: {
            heroTitle: 'MÁXIMO DESEMPENHO, <br><span class="gradient-text">ZERO RISCO.</span>',
            heroDesc: 'Desenvolvido em Kernel Mode com driver totalmente exclusivo. Sinta a verdadeira fluidez e garanta estabilidade absoluta com o bypass mais seguro da atualidade.'
        },
        en: {
            heroTitle: 'MAXIMUM PERFORMANCE, <br><span class="gradient-text">ZERO RISK.</span>',
            heroDesc: 'Developed in Kernel Mode with a fully exclusive driver. Experience true fluidity and guarantee absolute stability with the safest bypass available today.'
        }
    };

    function applyTranslations(lang) {
        // Altera elementos simples usando atributos data
        document.querySelectorAll('[data-lang-pt]').forEach(el => {
            el.innerHTML = lang === 'pt' ? el.getAttribute('data-lang-pt') : el.getAttribute('data-lang-en');
        });

        // Altera elementos complexos da Home se existirem na página
        const heroTitle = document.getElementById('hero-title');
        const heroDesc = document.getElementById('hero-desc');
        if (heroTitle && heroDesc) {
            heroTitle.innerHTML = translations[lang].heroTitle;
            heroDesc.innerText = translations[lang].heroDesc;
        }

        langToggle.innerText = lang === 'pt' ? 'EN' : 'PT';
    }

    if (langToggle) {
        langToggle.addEventListener('click', () => {
            currentLang = currentLang === 'pt' ? 'en' : 'pt';
            localStorage.setItem('site-lang', currentLang);
            applyTranslations(currentLang);
        });
    }
    applyTranslations(currentLang);

    // 2. INTERAÇÃO DO FAQ (EFEITO SANFONA)
    const faqQuestions = document.querySelectorAll('.faq-question');
    faqQuestions.forEach(question => {
        question.addEventListener('click', () => {
            const item = question.parentElement;
            item.classList.toggle('active');
        });
    });

    // 3. SEGURANÇA E PROTEÇÃO CONTRA INSPEÇÃO
    document.addEventListener('contextmenu', (e) => e.preventDefault());
    document.addEventListener('keydown', (e) => {
        if (e.key === 'F12') { e.preventDefault(); return false; }
        if (e.ctrlKey && e.shiftKey && (e.key === 'I' || e.key === 'J' || e.key === 'C' || e.key === 'i' || e.key === 'j' || e.key === 'c')) { e.preventDefault(); return false; }
        if (e.ctrlKey && (e.key === 'U' || e.key === 'S' || e.key === 'u' || e.key === 's')) { e.preventDefault(); return false; }
    });
});
