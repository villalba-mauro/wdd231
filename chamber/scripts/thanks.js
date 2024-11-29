// Obtener el formulario y el campo del timestamp
const form = document.getElementById('contactForm');
const timestampInput = document.getElementById('timestamp');
document.getElementById("timestamp").value = new Date().toISOString();
form.addEventListener('submit', (event) => {
  // Evitar que el formulario se envíe automáticamente
  event.preventDefault();

  // Obtener la fecha y hora actuales
  const now = new Date();
  const formattedTimestamp = now.toISOString(); // Guardar en formato ISO

  // Asignar el timestamp formateado al campo oculto
  timestampInput.value = formattedTimestamp;

  // Obtener todos los datos del formulario
  const formData = new FormData(form);
  const queryString = new URLSearchParams(formData).toString();

  // Redirigir a la página thankyou.html con los datos
  window.location.href = `thanks.html?${queryString}`;
});
