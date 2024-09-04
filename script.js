const colorfulFactory = document.getElementById('colorful-factory');
const scrollContent = document.querySelector('.scroll-content');
const finalFactory = document.getElementById('final-factory');

window.addEventListener('scroll', () => {
    const scrollPercentage = window.scrollY / (scrollContent.offsetHeight - window.innerHeight);
    const opacity = Math.min(scrollPercentage * 2, 1); // Multiply by 2 to complete transition faster
    colorfulFactory.style.opacity = opacity;

    // Show the final image in the third screen
    if (scrollPercentage >= 0.95) {
        finalFactory.classList.add('show-final');
    } else {
        finalFactory.classList.remove('show-final');
    }
});
