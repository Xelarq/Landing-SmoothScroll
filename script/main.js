const burgerBtn = document.getElementById("burger-btn");
const closeBtn = document.getElementById("close-btn");
const mobileMenu = document.querySelector('.mobile-nav-menu-wrapper');

burgerBtn.addEventListener('click', (event) => {mobileMenu.classList.add('show')})
closeBtn.addEventListener('click', (event) => {mobileMenu.classList.remove('show')})




