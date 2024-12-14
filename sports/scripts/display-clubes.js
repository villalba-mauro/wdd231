
// DISPLAY 

const gridbutton = document.querySelector("#grid");
const listbutton = document.querySelector("#list");
const display = document.querySelector("#members-container");

gridbutton.addEventListener("click", () => {
  display.classList.add("grid");
  display.classList.remove("list");
});

listbutton.addEventListener("click", showList);

function showList() {
  display.classList.add("list");
  display.classList.remove("grid");
}


fetch("data/display-clubes.json")
  .then((response) => response.json())
  .then((data) => {
    data.forEach((club) => {
      const clubes = document.createElement("section");
      companyDiv.innerHTML = `
        <img src="${club.image}" alt="${club.name}" />
        <h3>${club.name}</h3>
        <p>${club.address}</p>
        <p>Phone: ${company.phone}</p>
        <p>Membership Level: <strong>${company.membership_level}</p></strong>
       	<p>Sector: <strong>${club.sector}</strong></p>
        <strong><a href="${club.website}" target="_blank">Website</a></strong>
      `;

      display.appendChild(clubes);
    });
  })
  .catch((error) => {
    console.error("Error loading the JSON file:", error);
  });

