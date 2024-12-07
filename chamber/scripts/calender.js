
// // Obtener el día actual
// const today = new Date();
// const currentDay = today.getDate(); // Día actual (número)

// // Seleccionar todos los días del calendario
// const days = document.querySelectorAll(".calender-container ol li");

// // Marcar el día actual con la clase "today"
// days.forEach((day) => {
// if (parseInt(day.textContent) === currentDay) {
//     day.classList.add("today");
// }
// });

// Obtener la fecha actual
const today = new Date();
const currentDay = today.getDate(); // Día actual (número)
const monthNames = [
"January", "February", "March", "April", "May", "June",
"July", "August", "September", "October", "November", "December"
];
const currentMonth = monthNames[today.getMonth()]; // Mes actual como texto

// Insertar el mes actual en el encabezado <h2>
const monthHeader = document.getElementById("current-month");
monthHeader.textContent = currentMonth;

// Seleccionar todos los días del calendario
const days = document.querySelectorAll(".calender-container ol li");

// Marcar el día actual con la clase "today"
days.forEach((day) => {
if (parseInt(day.textContent) === currentDay) {
    day.classList.add("today");
}
});