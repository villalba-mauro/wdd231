
// Obtener los parámetros de la URL
const params = new URLSearchParams(window.location.search);

// Seleccionar el contenedor donde se mostrarán los datos
const submissionDetails = document.querySelector('.submission-details');

// Crear las variables para cada campo
const firstName = params.get('applicant_first_name') || 'Not provided';
const lastName = params.get('applicant_last_name') || 'Not provided';
const title = params.get('applicant_title') || 'Not provided';
const email = params.get('email') || 'Not provided';
const mobilePhone = params.get('mobile_phone') || 'Not provided';
const businessName = params.get('organization_name') || 'Not provided';
const membershipType = params.get('membership_type') || 'Not provided';
const organizationType = params.get('organizationType') || 'Not provided';
let timestamp = params.get('timestamp') || 'Not provided';

// Si el timestamp está presente, formatearlo
if (timestamp !== 'Not provided') {
    const date = new Date(timestamp);
    timestamp = date.toLocaleString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: 'numeric',
        minute: 'numeric',
        hour12: true,
    });
}

// Mostrar los datos en el HTML (incluido el timestamp)
submissionDetails.innerHTML = `
    <p><strong>First Name:</strong> ${firstName}</p>
    <p><strong>Last Name:</strong> ${lastName}</p>
    <p><strong>Title or Position:</strong> ${title}</p>
    <p><strong>Email:</strong> ${email}</p>
    <p><strong>Mobile Phone:</strong> ${mobilePhone}</p>
    <p><strong>Business/Organization Name:</strong> ${businessName}</p>
    <p><strong>Membership Type:</strong> ${membershipType}</p>
    <p><strong>Organization Description:</strong> ${organizationType}</p>
    <p><strong>Timestamp:</strong> ${timestamp}</p>
`;