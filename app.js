let hamburger = document.querySelector('.hamburger');
let nav = document.querySelector('.menulist');

hamburger.addEventListener('click', function(){
    hamburger.classList.toggle('active');
    nav.classList.toggle('active');
})

nav.addEventListener('click', function(){
    nav.classList.toggle('active');
    hamburger.classList.toggle('active');
})