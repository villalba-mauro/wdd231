// Seleccionamos el botón y el menú
// const menuButton = document.getElementById("menuButton");
// const menu = document.getElementById("menu");

// // Agregamos un evento de clic al botón para alternar la clase "open"
// menuButton.addEventListener("click", () => {
//     menu.classList.toggle("open"); // Añade o quita la clase "open"
// });

// script.js
const menuButton = document.getElementById('menuButton');
const menu = document.getElementById('menu');

menuButton.addEventListener('click', () => {
    menu.classList.toggle('show');
});