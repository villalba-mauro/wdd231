// Seleccionar botones y contenedor para cambiar entre vista de grid y lista
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

// Cargar datos desde el archivo JSON
fetch("data/clubes.json")
  .then((response) => response.json())
  .then((data) => {
    // Iterar sobre los países en el JSON
    Object.keys(data.clubs).forEach((team) => {
      const teamSection = document.createElement("section");
      teamSection.classList.add("team");
      teamSection.innerHTML = `<h2>${team}</h2>`;

      // // Iterar sobre los clubes dentro de cada país
      // data.clubs[team].forEach((club) => {
      //   const clubDiv = document.createElement("div");
      //   clubDiv.classList.add("club");
      //   clubDiv.innerHTML = `
      //    <img src="${club.image}" alt="${club.name}" />
      //     <h3>${club.name}</h3>
      //     <p>Colors: ${club.jersey.colors.join(", ")}</p>
      //     <p>Sizes Available: ${Object.entries(club.jersey.sizes)
      //       .map(([size, qty]) => `${size} (${qty})`)
      //       .join(", ")}</p>
      //     <p>Discount: ${
      //       club.jersey.discount.hasDiscount
      //         ? `${club.jersey.discount.percentage}%`
      //         : "No discount"
      //     }</p>
      //   `;
      data.clubs[team].forEach((club) => {
        const clubDiv = document.createElement("div");
        clubDiv.classList.add("club");
        clubDiv.innerHTML = `
          <img src="${club.image}" alt="${club.name}" />
          <h3>${club.name}</h3>
          <p>Colors: ${club.jersey.colors.join(", ")}</p>
          <p>Sizes Available: ${Object.entries(club.jersey.sizes)
            .map(([size, qty]) => `${size} (${qty})`)
            .join(", ")}</p>
          <p>Discount: ${
            club.jersey.discount.hasDiscount
              ? `${club.jersey.discount.percentage}%`
              : "No discount"
          }</p>
          <div class="input-box">
            <label for="color-${club.name}">Select Color:</label>
            <select id="color-${club.name}" name="color" required>
              <option value="" disabled selected>Select color</option>
              ${club.jersey.colors
                .map((color) => `<option value="${color}">${color}</option>`)
                .join("")}
            </select>
          </div>
          <div class="input-box">
            <label for="size-${club.name}">Select Size:</label>
            <select id="size-${club.name}" name="size" required>
              <option value="" disabled selected>Select size</option>
              ${Object.keys(club.jersey.sizes)
                .map((size) => `<option value="${size}">${size}</option>`)
                .join("")}
            </select>
          </div>
        `;

        // Agregar cada club al contenedor del país
        teamSection.appendChild(clubDiv);
      });

      // Agregar cada país al contenedor principal
      display.appendChild(teamSection);
    });
  })
  .catch((error) => {
    console.error("Error loading the JSON file:", error);
});
