

//MENU RESPONSIVE
const hamButton = document.getElementById('menu');
const navigation = document.querySelector('.navigation');

hamButton.addEventListener('click', () => {
	navigation.classList.toggle('open');
	hamButton.classList.toggle('open');
});

var scrollToTopBtn = document.getElementById("scrollToTopBtn");

// Función para mostrar u ocultar el botón dependiendo del ancho de la pantalla
function toggleScrollButton() {
    if (window.innerWidth < 640 && window.scrollY > 200) {
        scrollToTopBtn.style.display = "block"; // Muestra el botón si la pantalla es pequeña y el desplazamiento es mayor a 200px
    } else {
        scrollToTopBtn.style.display = "none"; // Oculta el botón en otros casos
    }
}

// Muestra u oculta el botón al cargar la página
window.addEventListener("load", toggleScrollButton);

// Muestra u oculta el botón al cambiar el tamaño de la pantalla
window.addEventListener("resize", toggleScrollButton);

// Muestra u oculta el botón al hacer scroll
window.addEventListener("scroll", toggleScrollButton);

// Agrega un evento de desplazamiento hacia arriba cuando se hace clic en el botón
scrollToTopBtn.addEventListener("click", function() {
    window.scrollTo({
        top: 0,
        behavior: "smooth" // Desplazamiento suave
    });
});