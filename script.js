document.addEventListener('DOMContentLoaded', function() {
    // Menu ativo ao rolar
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-link');
    
    window.addEventListener('scroll', () => {
        let current = '';
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            
            if (pageYOffset >= (sectionTop - 300)) {
                current = section.getAttribute('id');
            }
        });
        
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href').includes(current)) {
                link.classList.add('active');
            }
        });
    });
    
    // Carrossel de prévias
    const carrossel = document.querySelector('.carrossel');
    const carrosselItems = document.querySelectorAll('.carrossel-item');
    const btnAnterior = document.querySelector('.anterior');
    const btnProximo = document.querySelector('.proximo');
    
    let currentIndex = 0;
    const totalItems = carrosselItems.length;
    
    function updateCarrossel() {
        carrossel.style.transform = `translateX(-${currentIndex * 100}%)`;
    }
    
    btnProximo.addEventListener('click', () => {
        currentIndex = (currentIndex + 1) % totalItems;
        updateCarrossel();
    });
    
    btnAnterior.addEventListener('click', () => {
        currentIndex = (currentIndex - 1 + totalItems) % totalItems;
        updateCarrossel();
    });
    
    // Auto-play do carrossel (opcional)
    let intervalId = setInterval(() => {
        currentIndex = (currentIndex + 1) % totalItems;
        updateCarrossel();
    }, 5000);
    
    // Pausar auto-play quando o mouse estiver sobre o carrossel
    carrossel.addEventListener('mouseenter', () => {
        clearInterval(intervalId);
    });
    
    carrossel.addEventListener('mouseleave', () => {
        intervalId = setInterval(() => {
            currentIndex = (currentIndex + 1) % totalItems;
            updateCarrossel();
        }, 5000);
    });
    
    // Botão "Voltar ao Topo"
    const btnTopo = document.getElementById('voltarTopo');
    
    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 300) {
            btnTopo.classList.add('visible');
        } else {
            btnTopo.classList.remove('visible');
        }
    });
    
    btnTopo.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
    
    // Efeito suave para links de navegação
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Header com efeito ao rolar
    const header = document.getElementById('header');
    
    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 100) {
            header.style.padding = '1rem 5%';
            header.style.backgroundColor = 'rgba(0, 0, 0, 0.9)';
        } else {
            header.style.padding = '1.5rem 5%';
            header.style.backgroundColor = 'rgba(0, 0, 0, 0.8)';
        }
    });
});
