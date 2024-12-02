

  

// const currentUrl =window.location.href;
// console.log(currentUrl);

// //dividir URL
// const everything = currentUrl.split('?')
// console.log(everything)

// //segundo array

// let formData = everything[1].split('&')
// console.log(formData)

// //dividir formData

// formData=formData.split('&')
// console.log(formData)

// function show(cup){
//     console.log(cup)
//     formData.forEach((element) => {
//         console.log(element)
//         if (element.startsWith(cup)){
//             result=element.split('=')[1].replace("%40","@")
//             // result=result[1]
//             // result=result.replace("%40","@")
//         }
        
//     })
//     return (result)
// }

// const showInfo = document.querySelector('#results')
// // showInfo.innerHTML = formData[0] + formData[1]
// // showInfo.innerHTML = show("email")

// showInfo.innerHTML =`
// <strong><p>First Name:</strong> ${show("applicant_first_name")} </p>
// <strong><p>Last Name:</strong> ${show("applicant_last_name")} </p>

// <strong><p>Title or Position:</strong> ${show("applicant_title")} </p>
// <strong><p>Email Adress:</strong>${show("email")} </p>

// <strong><p>Mobile Phone Number: </strong>${show("mobile_phone")} </p>


// <strong><p>Business/Organization's Name:</strong> ${show("organization")} </p>
// <strong><p>Membership Type:</strong> ${show("membership_type")} </p>
// <strong><p>Organization Type:</strong> ${show("organizationType")} </p>
// <strong><p>Timestamp:</strong> ${show("timestamp")} </p>

// `
// document.addEventListener("DOMContentLoaded", () => {
//     // Obtener el campo oculto de timestamp
//     const timestampInput = document.getElementById("timestamp");
    
//     // Obtener la fecha y hora actuales
//     const currentDateTime = new Date();
    
//     // Formatear el timestamp como un string ISO
//     const formattedDate = formatTimestamp(currentDateTime);

//     // Asignar el timestamp formateado al campo oculto
//     timestampInput.value = formattedDate;
// });

//     // Función para formatear la fecha al formato deseado
// function formatTimestamp(date) {
//     const options = {
//         day: 'numeric',
//         month: 'short',
//         year: 'numeric',
//         hour: '2-digit',
//         minute: '2-digit',
//         hour12: false,
//     };

//     // Usamos Intl.DateTimeFormat para formatear la fecha
//     const formattedDate = new Intl.DateTimeFormat('en-us', options).format(date);
    
//     // Concatenamos "at" en la posición correcta
//     const [day, month, year,hour] = formattedDate.split(' ');
//     return `${day} ${month} ${year} at ${hour}`;
// }
// Obtener los parámetros de la URL



// Cuando el contenido de la página haya cargado completamente
document.addEventListener("DOMContentLoaded", () => {
    // Obtener el campo oculto de timestamp
    const timestampInput = document.getElementById("timestamp");
    
    // Obtener la fecha y hora actuales
    const currentDateTime = new Date();
    
    // Formatear el timestamp como un string ISO
    const formattedDate = formatTimestamp(currentDateTime);

    // Asignar el timestamp formateado al campo oculto
    timestampInput.value = formattedDate;
});

    // Función para formatear la fecha al formato deseado
function formatTimestamp(date) {
    const options = {
        day: 'numeric',
        month: 'short',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
        hour12: false,
    };

    // Usamos Intl.DateTimeFormat para formatear la fecha
    const formattedDate = new Intl.DateTimeFormat('en-us', options).format(date);
    
    // Concatenamos "at" en la posición correcta
    const [day, month, year,hour] = formattedDate.split(' ');
    return `${day} ${month} ${year} at ${hour}`;
}



///////////////////////////////
// Obtener la URL actual
const currentUrl = window.location.href;

// Dividir la URL para obtener los parámetros
const urlParts = currentUrl.split('?');
if (urlParts.length > 1) {
    const params = new URLSearchParams(urlParts[1]);

    // Obtener valores del formulario
    const firstName = params.get('first');
    const lastName = params.get('last');
    const email = params.get('email')?.replace("%40", "@"); // Decodifica el símbolo "@" si es necesario
    const phone = params.get('phone');
    const businessName = params.get('business_name');
    const timestamp = params.get('timestamp');

    // Mostrar la información en la página
    const showInfo = document.querySelector('#results');
    showInfo.innerHTML = `
        <p><strong>First Name:</strong> ${firstName}</p>
        <p><strong>Last Name:</strong> ${lastName}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Business Name:</strong> ${businessName}</p>
        <p><strong>Submitted At:</strong> ${timestamp}</p>
    `;
} else {
    // Si no hay parámetros, muestra un mensaje de error
    const showInfo = document.querySelector('#results');
    showInfo.innerHTML = '<p>Error: No data received from the form submission.</p>';
}
    
    