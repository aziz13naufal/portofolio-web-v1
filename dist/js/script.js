//Hamburger
const hamburger = document.querySelector('#hamburger');
const navMenu = document.querySelector('#nav-menu');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('hamburger-active');
    navMenu.classList.toggle('hidden');
});


// Dark Mode
const darkToggle = document.querySelector('#dark-toggle');
const html = document.querySelector('html');

darkToggle.addEventListener('click', () => {
   if ( darkToggle.checked ) {
    html.classList.add('dark');
    localStorage.theme = 'dark';
   } else {
    html.classList.remove('dark');
    localStorage.theme = 'light';
   }
});