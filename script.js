// Agafem els elements del DOM
const botoHamburguesa = document.getElementById('hamburger');
const enllaçosNavegacio = document.getElementById('nav-links');

// Quan es fa clic a la icona hamburguesa
botoHamburguesa.addEventListener('click', () => {
  enllaçosNavegacio.classList.toggle('visible');
});