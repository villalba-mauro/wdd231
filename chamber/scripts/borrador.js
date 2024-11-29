// Obtener el formulario y el campo del timestamp
const form = document.getElementById('contactForm');
const timestampInput = document.getElementById('timestamp');

// Asignar el timestamp al campo oculto
function setTimestamp() {
    const timestamp = new Date().toISOString();
    timestampInput.value = timestamp;
}

// Mostrar el valor de una clave del formulario
function show(key, formData) {
    let result = '';
    formData.forEach((item) => {
        if (item.startsWith(key)) {
            result = decodeURIComponent(item.split("=")[1])
                .replace(/\+/g, " ");
        }
    });
    return result;
}

// Formatear el timestamp a un formato legible
function formatTimestamp(timestamp) {
    try {
        const date = new Date(timestamp);
        return new Intl.DateTimeFormat('en-US', {
            dateStyle: 'long',
            timeStyle: 'short',
        }).format(date);
    } catch (error) {
        console.error('Invalid timestamp:', error);
        return 'Invalid date';
    }
}

// Redirigir a la página thankyou.html con los datos del formulario
function redirectToThankYou(form) {
    // Obtener todos los datos del formulario
    const formData = new FormData(form);
    const queryString = new URLSearchParams(formData).toString();
    
    // Redirigir a la página thankyou.html con los datos del formulario
    window.location.href = `thankyou.html?${queryString}`;
}

// Evento de envío del formulario
form.addEventListener('submit', (event) => {
    // Evitar que el formulario se envíe automáticamente
    event.preventDefault();

    // Asignar el timestamp al campo oculto
    setTimestamp();

    // Redirigir a la página thankyou.html con los datos
    redirectToThankYou(form);
});

// Ejemplo de cómo mostrar los datos en la página "thankyou.html"
const currentUrl = window.location.href;
const everything = currentUrl.split('?');
let formData = everything[1].split('&');

// Mostrar los datos en la página thankyou.html
const showInfo = document.querySelector('#results');
showInfo.innerHTML = `
<h2>Thank you for your application</h2>
<table>
<tr>
    <td>Application for:</td>
    <td>${show("first-name", formData)} ${show("last-name", formData)}</td>
</tr>
<tr>
    <td>Your mobile number:</td>
    <td>${show("phone", formData)}</td>
</tr>
<tr>
    <td>Your email address:</td>
    <td><a href="mailto:${show("email", formData)}">${show("email", formData)}</a></td>
</tr>
<tr>
    <td>Your business / organisation's name:</td>
    <td>${show("org-name", formData)}</td>
</tr>
<tr>
    <td>Membership level selected:</td>
    <td>${show("membership", formData)}</td>
</tr>
<tr>
    <td>Date & Time:</td>
    <td>${formatTimestamp(show('timestamp', formData))}</td>
</tr>
</table>
`;
