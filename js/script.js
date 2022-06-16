window.addEventListener('load', () => {

    const preloader = document.querySelector('.preloader');
    preloader.classList.add('hide');

    const ibg = () => {
        let ibgItem = document.querySelectorAll('.ibg');
        ibgItem.forEach(i => {
            if (i.querySelector('.ibg__img')) {
                i.style.backgroundImage =
                'url(' + i.querySelector('.ibg__img').getAttribute('src') + ')';
            }
        });
    }
    ibg();
});




