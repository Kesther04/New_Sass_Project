const menuBtn = document.querySelector('.menu-btn');
const hamburger = document.querySelector('.menu-btn__burger');
const nav = document.querySelector('.head-con-wrapper');
const menuNav = document.querySelector('.nav-wrapper nav ul');
const navItems = document.querySelectorAll('.nav-wrapper nav ul li');
const headCon = document.querySelectorAll('.head-wrapper');
const conHead = document.querySelectorAll('.head-wrapper input,.head-wrapper button');
let showMenu = false;

menuBtn.addEventListener('click', toggleMenu);

function toggleMenu() {
    if (!showMenu) {
        hamburger.classList.add('open');
        nav.classList.add('open');
        menuNav.classList.add('open');
        navItems.forEach(item => item.classList.add('open'));
        headCon.forEach(item => item.classList.add('open'));
        conHead.forEach(item => item.classList.add('open'));

        showMenu = true;
    }else{
        hamburger.classList.remove('open');
        nav.classList.remove('open');
        menuNav.classList.remove('open');
        navItems.forEach(item => item.classList.remove('open'));
        headCon.forEach(item => item.classList.remove('open'));
        conHead.forEach(item => item.classList.remove('open'));

        showMenu = false;
    }
}