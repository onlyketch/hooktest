document.addEventListener('DOMContentLoaded', () => {
    const tabs = document.querySelectorAll('.search__tab');
    const cards = document.querySelectorAll('.search__cards');

    cards[0].classList.add('show');

    for (let i = 0; i < tabs.length; i++) {
        tabs[i].addEventListener('click', () => {
            for (item of tabs) {
                if (item.classList.contains('search__tab_active')) {
                    item.classList.remove('search__tab_active');
                }
            }

            tabs[i].classList.add('search__tab_active');

            for (item of cards) {
                if (item.classList.contains('show')) {
                    item.classList.remove('show');
                }
            }

            cards[i].classList.add('show');
        });
    }
});