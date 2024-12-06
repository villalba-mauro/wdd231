

// // Obtener la fecha de la última modificación y formatearla
// const lastModified = new Date(document.lastModified);
// const options = { year: 'numeric', month: 'long', day: 'numeric' };
// const formattedDate = lastModified.toLocaleDateString('es-us', options);

// // Mostrar la fecha en el elemento con el id "lastModified"
// document.getElementById("lastModified").textContent = `Last Modified: ${formattedDate}`;
// Obtener la fecha de la última modificación y formatearla
// const lastModified = new Date(document.lastModified);
// const options = { year: 'numeric', month: 'long', day: 'numeric' };
// const formattedDate = lastModified.toLocaleDateString('en-US', options);

// // Mostrar la fecha en el elemento con el id "lastModified"
// document.getElementById("lastModified").textContent = `Last Modified: ${formattedDate}`;

// Obtener la fecha de la última modificación y formatearla con fecha y hora
const lastModified = new Date(document.lastModified);
const options = {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: false // Muestra la hora en formato AM/PM
};
const formattedDateTime = lastModified.toLocaleString('en-US', options);

// Mostrar la fecha y hora en el elemento con el id "lastModified"
document.getElementById("lastModified").textContent = `Last Modified: ${formattedDateTime}`;

