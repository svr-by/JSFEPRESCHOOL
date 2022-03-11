// Adaptive menu
const hamburger = document.querySelector('.hamburger');
const headerNav = document.querySelector('.header-nav');
const navList = document.querySelector('.nav-list');
// const itemLinks = document.querySelectorAll('.item-link');

function toggleMenu () {
    hamburger.classList.toggle('open');
    headerNav.classList.toggle('open');
}

function closeMenu() {
    if (event.target.classList.contains('item-link')) {
        hamburger.classList.remove('open');
        headerNav.classList.remove('open');
    }
}

hamburger.addEventListener('click', toggleMenu);
navList.addEventListener('click', closeMenu);
// itemLinks.forEach((link) => link.addEventListener('click', closeMenu));