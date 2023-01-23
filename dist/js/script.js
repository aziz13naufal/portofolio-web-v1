//Hamburger
const hamburger = document.querySelector('#hamburger');
const navMenu = document.querySelector('#nav-menu');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('hamburger-active');
    navMenu.classList.toggle('hidden');
});

navMenu.addEventListener('click', () => {
  navMenu.classList.add('hidden');
  hamburger.classList.remove('hamburger-active');
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

// Pindahkan posisi toggle sesuai mode
if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    document.documentElement.classList.add('dark')
    darkToggle.checked = true;
  } else {
    document.documentElement.classList.remove('dark')
    darkToggle.checked = false;
  }

  // Skills
  const languageToggle = document.querySelector('#language-toggle');
  const frameworkToggle = document.querySelector('#framework-toggle');
  const uiFrameworkToggle = document.querySelector('#ui-framework-toggle');
  const dbmsToggle = document.querySelector('#dbms-toggle');
  const allToggle = document.querySelector('#all-toggle');

  // SKills Items
  const HTML = document.querySelector('#HTML');
  const CSS = document.querySelector('#CSS');
  const JS = document.querySelector('#JS');
  const NODE = document.querySelector('#NODE');
  const EXPRESS = document.querySelector('#EXPRESS');
  const TAILWIND = document.querySelector('#TAILWIND');
  const MONGO= document.querySelector('#MONGO');
  const MYSQL = document.querySelector('#MYSQL');

  // Language
  languageToggle.addEventListener('click', () => {
    HTML.classList.remove('hidden');
    CSS.classList.remove('hidden');
    JS.classList.remove('hidden');
    NODE.classList.add('hidden');
    EXPRESS.classList.add('hidden');
    TAILWIND.classList.add('hidden');
    MONGO.classList.add('hidden');
    MYSQL.classList.add('hidden');
  });

  // Framework
  frameworkToggle.addEventListener('click', () => {
    HTML.classList.add('hidden');
    CSS.classList.add('hidden');
    JS.classList.add('hidden');
    NODE.classList.remove('hidden');
    EXPRESS.classList.remove('hidden');
    TAILWIND.classList.add('hidden');
    MONGO.classList.add('hidden');
    MYSQL.classList.add('hidden');
  });

  // UI Framework
  uiFrameworkToggle.addEventListener('click', () => {
    HTML.classList.add('hidden');
    CSS.classList.add('hidden');
    JS.classList.add('hidden');
    NODE.classList.add('hidden');
    EXPRESS.classList.add('hidden');
    TAILWIND.classList.remove('hidden');
    MONGO.classList.add('hidden');
    MYSQL.classList.add('hidden');
  });

  // DBMS
  dbmsToggle.addEventListener('click', () => {
    HTML.classList.add('hidden');
    CSS.classList.add('hidden');
    JS.classList.add('hidden');
    NODE.classList.add('hidden');
    EXPRESS.classList.add('hidden');
    TAILWIND.classList.add('hidden');
    MONGO.classList.remove('hidden');
    MYSQL.classList.remove('hidden');
  })

  allToggle.addEventListener('click', () => {
    HTML.classList.remove('hidden');
    CSS.classList.remove('hidden');
    JS.classList.remove('hidden');
    NODE.classList.remove('hidden');
    EXPRESS.classList.remove('hidden');
    TAILWIND.classList.remove('hidden');
    MONGO.classList.remove('hidden');
    MYSQL.classList.remove('hidden');
  })