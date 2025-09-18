// Espera o conteúdo da página carregar completamente antes de executar o script
document.addEventListener('DOMContentLoaded', () => {

    const track = document.querySelector('.slideshow-track');
    const slides = Array.from(track.children);
    const nextButton = document.querySelector('.next-btn');
    const prevButton = document.querySelector('.prev-btn');

    // Pega a largura de um slide (todas devem ser iguais)
    const slideWidth = slides[0].getBoundingClientRect().width;

    // Organiza os slides um ao lado do outro
    const setSlidePosition = (slide, index) => {
        // Esta linha não é estritamente necessária com flexbox, mas é uma boa prática
        // slide.style.left = slideWidth * index + 'px';
    };
    slides.forEach(setSlidePosition);

    // Função para mover o 'track' para o slide correto
    const moveToSlide = (currentSlide, targetSlide) => {
        track.style.transform = 'translateX(-' + targetSlide.style.left + ')';
        currentSlide.classList.remove('current-slide');
        targetSlide.classList.add('current-slide');
    };

    let currentIndex = 0; // Começa no primeiro slide (índice 0)

    // Evento de clique para o botão "Próximo"
    nextButton.addEventListener('click', e => {
        currentIndex++; // Move para o próximo índice
        if (currentIndex >= slides.length) {
            currentIndex = 0; // Se passar do último, volta para o primeiro
        }
        
        const targetPosition = slideWidth * currentIndex;
        track.style.transform = `translateX(-${targetPosition}px)`;
    });

    // Evento de clique para o botão "Anterior"
    prevButton.addEventListener('click', e => {
        currentIndex--; // Move para o índice anterior
        if (currentIndex < 0) {
            currentIndex = slides.length - 1; // Se passar do primeiro, vai para o último
        }

        const targetPosition = slideWidth * currentIndex;
        track.style.transform = `translateX(-${targetPosition}px)`;
    });
});