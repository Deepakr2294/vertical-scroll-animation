const slider = document.querySelector('.slider');
let slides = document.querySelectorAll('.slide');
let currentIndex = 0;

const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');

prevButton.addEventListener('click', () => {
    if (currentIndex > 0) {
        currentIndex--;
        slider.style.transform = `translateY(-${currentIndex * 100}%)`;
    } else {
        currentIndex = Math.floor(slides.length / 4) - 1;
        slider.style.transform = `translateY(-${currentIndex * 100}%)`;
    }
});

nextButton.addEventListener('click', () => {
    if (currentIndex < Math.floor(slides.length / 4) - 1) {
        currentIndex++;
        slider.style.transform = `translateY(-${currentIndex * 100}%)`;
    } else {
        currentIndex = 0;
        slider.style.transform = `translateY(0)`;
    }
});
