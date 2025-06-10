document.addEventListener('DOMContentLoaded', () => {

    // --- Funcionalidade do Carrossel ---
    const carrossel = document.querySelector('.carrossel');
    const items = document.querySelectorAll('.carrossel-item');
    const totalItems = items.length;
    let currentIndex = 0;

    document.querySelector('.proximo').addEventListener('click', () => {
        currentIndex = (currentIndex + 1) % totalItems;
        updateCarrossel();
    });

    document.querySelector('.anterior').addEventListener('click', () => {
        currentIndex = (currentIndex - 1 + totalItems) % totalItems;
        updateCarrossel();
    });

    function updateCarrossel() {
        const offset = -currentIndex * 100;
        carrossel.style.transform = `translateX(${offset}%)`;
    }

    // --- Botão "Voltar ao Topo" ---
    const voltarTopoBtn = document.getElementById('voltarTopo');

    window.onscroll = () => {
        if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
            voltarTopoBtn.style.display = 'block';
        } else {
            voltarTopoBtn.style.display = 'none';
        }
    };

    voltarTopoBtn.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });


    // --- Marcar link de navegação ativo ao rolar ---
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-menu a');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                navLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href').substring(1) === entry.target.id) {
                        link.classList.add('active');
                    }
                });
            }
        });
    }, { rootMargin: '-50% 0px -50% 0px' }); // Ativa quando a seção está no meio da tela

    sections.forEach(section => {
        observer.observe(section);
    });

});
