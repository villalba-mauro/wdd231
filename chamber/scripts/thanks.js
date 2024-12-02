// 
const currentUrl = window.location.href;
const everything = currentUrl.split('?');
let formData = everything[1].split('&');

function show(info) {
  let result = '';
  formData.forEach((element) => {
    if (element.startsWith(info)) {
      result = element.split('=')[1].replace('%40', '@').replace(/\+/g, ' ');

      if (info === 'description') {
        result = element.split('=')[1].split('+').join(' ');
      }
    }
  });
  return result;
}

const timestamp = new Date().toLocaleString();
const email = show('email');
const showInfo = document.querySelector('#results');
showInfo.innerHTML = `<strong><p>First Name:</strong> ${show('applicant_first_name')} </p>
<strong><p/> Last Name:</strong> ${show('applicant_last_name')}</p>
<strong><p>Title or Position:</strong> ${show('applicant_title')}</p>
<strong><p>Email Address: </strong><a href="${email}">${email}</a></p>
<strong><p> Business/Organization's Name: </strong>${show('organization_name')}</p>
<strong><p>Membership Level:</strong> ${show('membership_type')}</p>
<strong><p>Business Description:</strong> </strong>${show('organizationType')}</p> 

<strong><p> Date and time processed:</strong> ${timestamp}</p>
`;
