

const gridbutton = document.querySelector("#grid");
const listbutton = document.querySelector("#list");
const display = document.querySelector("#jerseys-container");

// Cambiar a vista de grid
gridbutton.addEventListener("click", () => {
  display.classList.add("grid");
  display.classList.remove("list");
});

// Cambiar a vista de lista
listbutton.addEventListener("click", showList);

function showList() {
  display.classList.add("list");
  display.classList.remove("grid");
}


fetch("data/clubes.json")
  .then((response) => response.json())
  .then((data) => {
    Object.keys(data.clubs).forEach((team) => {
      const teamSection = document.createElement("section");
      teamSection.classList.add("team");
      teamSection.innerHTML = `<h2>${team}</h2>`;

      data.clubs[team].forEach((club, index) => {
        const clubDiv = document.createElement("div");
        clubDiv.classList.add("club");
        clubDiv.innerHTML = `
          <img src="${club.image}" alt="${club.name}" loading="lazy" />
          <h3>${club.name}</h3>
          
          

          <p>Discount: ${
            club.jersey.discount.hasDiscount
              ? `${club.jersey.discount.percentage}%`
              : "No discount"
          }</p>
          <div class="input-box">
            <label for="size-${team}-${index}">Select Size:</label>
            <select id="size-${team}-${index}" name="size" required>
              <option value="" disabled selected>Select size</option>
              ${Object.keys(club.jersey.sizes)
                .map((size) => `<option value="${size}">${size}</option>`)
                .join("")}
            </select>
          </div>
          <p id="size-info-${team}-${index}"></p> <!-- Parrafo para mostrar disponibilidad -->
          <button class="carrito">Add to cart</button>
        `;

        // Agregar el div del club a la sección del equipo
        teamSection.appendChild(clubDiv);

        // Asegurarse de que el evento se agregue solo después de que los elementos estén en el DOM
        const sizeSelect = clubDiv.querySelector(`#size-${team}-${index}`);
        const sizeInfo = clubDiv.querySelector(`#size-info-${team}-${index}`);

        // Asegurarse de que el `sizeSelect` y `sizeInfo` existen
        if (sizeSelect && sizeInfo) {
          sizeSelect.addEventListener('change', () => {
            const selectedSize = sizeSelect.value;
            const qtyAvailable = club.jersey.sizes[selectedSize];

            // Mostrar la disponibilidad en el párrafo
            sizeInfo.textContent = qtyAvailable
              ? `Available units: ${qtyAvailable}`
              : "Size not available";
          });
        } else {
          console.error(`Error: No se encontraron los elementos para el club: ${club.name}`);
        }
      });

      // Agregar la sección del equipo al DOM
      display.appendChild(teamSection); // Usar display en lugar de document.body
    });
  })
  .catch((error) => {
    console.error("Error loading the JSON file:", error);
  });
