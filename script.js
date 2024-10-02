let currentIndex = 0;
const slides = document.querySelectorAll('.slide');
const totalSlides = slides.length;

function showSlide(index) {
    if (index >= totalSlides) {
        currentIndex = 0;  
    } else if (index < 0) {
        currentIndex = totalSlides - 1;  
    }

    const slidesContainer = document.querySelector('.slides');
    slidesContainer.style.transform = `translateX(-${currentIndex * 100}%)`;
}

function startSlideShow() {
    setInterval(() => {
        currentIndex++;
        showSlide(currentIndex);
    }, 4000); 
}

startSlideShow();
