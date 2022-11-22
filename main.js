const navItems = document.querySelector('.nav_items');
const openNavBtn = document.querySelector('#open_nav-btn');
const CloseNavBtn = document.querySelector('#close_nav-btn');

// open nav dropdown
const openNav = () => {
    navItems.style.display = 'flex';
    openNavBtn.style.display = 'none';
    CloseNavBtn.style.display = 'inline-block';
}

// close nav dropdown
const closeNav = () => {
    navItems.style.display = 'none';
    openNavBtn.style.display = 'inline-block';
    CloseNavBtn.style.display = 'hide';
}

openNavBtn.addEventListener('click', openNav);
CloseNavBtn.addEventListener('click', closeNav)