const navMenuToggle = document.querySelector('.js-nav-menu-toggle');
const navMenu = document.querySelector('.js-nav-menu');

navMenuToggle.addEventListener('click', function() {

    navMenu.classList.toggle('navigation-menu--open');
    document.addEventListener('click', closeMenuHandler )
});

const closeMenuHandler = (evt) => {

    if (!evt.target.closest('.js-nav-menu')) {

        navMenu.classList.remove('navigation-menu--open');
        document.removeEventListener('click', closeMenuHandler )

    }
}
