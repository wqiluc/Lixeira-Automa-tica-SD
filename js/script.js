document.addEventListener('DOMContentLoaded', () => {
    
    // --- 1. Lógica do Menu Mobile (Celular) ---
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');

    if(menuToggle) {
        menuToggle.addEventListener('click', () => {
            // Verifica se o menu está visível ou não e alterna
            if (navLinks.style.display === 'flex') {
                navLinks.style.display = 'none';
            } else {
                navLinks.style.display = 'flex';
                navLinks.style.flexDirection = 'column';
                navLinks.style.position = 'absolute';
                navLinks.style.top = '70px'; // Altura do header
                navLinks.style.right = '0';
                navLinks.style.backgroundColor = '#0a0a0a';
                navLinks.style.width = '100%';
                navLinks.style.padding = '20px';
                navLinks.style.borderBottom = '1px solid #333';
                navLinks.style.zIndex = '1000';
            }
        });
    }

    // --- 2. Animação de Entrada (Fade In) ---
    // Faz as seções aparecerem suavemente quando você rola a página ou abre ela
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = 1;
                entry.target.style.transform = 'translateY(0)';
            }
        });
    });

    // Aplica a animação em todas as 'sections' do site
    document.querySelectorAll('section').forEach(section => {
        section.style.opacity = 0;
        section.style.transform = 'translateY(20px)'; // Começa um pouco mais embaixo
        section.style.transition = 'all 0.6s ease-out'; // Tempo da animação
        observer.observe(section);
    });
});