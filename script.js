// Adiciona um evento de clique para ampliar as imagens da galeria
document.querySelectorAll('.gallery img').forEach(image => {
    image.addEventListener('click', () => {
        window.open(image.src, '_blank');
    });
});