document.addEventListener('click', () => {
    const mouseBtn = document.querySelector('.mouse-btn');
    const loadingScreen = document.querySelector('.loading-screen');

    mouseBtn.addEventListener('click', () => {
        loadingScreen.style.display = 'none';
    });
});