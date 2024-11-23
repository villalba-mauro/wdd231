// Function to get the current year and populate it in the footer
function getCurrentYear() {
    const currentYearElement = document.getElementById('currentyear');
    const currentYear = new Date().getFullYear();
    currentYearElement.textContent = currentYear;
}


// Function to get the date of last modification and populate it in the footer
function getLastModifiedDate() {
    const lastModifiedElement = document.getElementById('lastModified');
    const lastModified = new Date(document.lastModified);
    const formattedDate = `${lastModified.getDate()}/${lastModified.getMonth() + 1}/${lastModified.getFullYear()} ${lastModified.getHours()}:${lastModified.getMinutes().toString().padStart(2, '0')}`;
    lastModifiedElement.textContent = `Last Modified: ${formattedDate}`;
}

// Call the function to get and display the current year when the page loads
getCurrentYear();

// Call the function to get and display the date of last modification when the page loads
getLastModifiedDate();


//MENU RESPONSIVE
const hamButton = document.getElementById('menu');
const navigation = document.querySelector('.navigation');

hamButton.addEventListener('click', () => {
	navigation.classList.toggle('open');
	hamButton.classList.toggle('open');
});





////////////////////////////////
const display = document.querySelector("#members-container");



fetch("data/members.json")
  .then((response) => response.json())
  .then((data) => {
    // Filtrar miembros con membresía 'gold' o 'silver'
    const filteredMembers = data.filter((company) =>
      ["gold", "silver"].includes(company.membership_level.toLowerCase())
    );

    // Seleccionar 2-3 miembros al azar
    const randomMembers = [];
    const memberCount = Math.floor(Math.random() * 2) + 2; // Genera 2 o 3
    while (randomMembers.length < memberCount && filteredMembers.length > 0) {
      const randomIndex = Math.floor(Math.random() * filteredMembers.length);
      randomMembers.push(filteredMembers.splice(randomIndex, 1)[0]);
    }

    // Mostrar los miembros seleccionados
    randomMembers.forEach((company) => {
      const companyDiv = document.createElement("section");
      companyDiv.innerHTML = `
        <img src="${company.image}" alt="${company.name}" />
        <h3>${company.name}</h3>
        <p>${company.address}</p>
        <p>Phone: ${company.phone}</p>
        <p>Membership Level: <strong>${company.membership_level}</strong></p>
        <p>Sector: <strong>${company.sector}</strong></p>
        <strong><a href="${company.website}" target="_blank">Website</a></strong>
      `;

      display.appendChild(companyDiv);
    });
  })
  .catch((error) => {
    console.error("Error loading the JSON file:", error);
  });
