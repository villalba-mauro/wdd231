

const hamButton = document.getElementById('menu');
const navigation = document.querySelector('.navigation');

hamButton.addEventListener('click', () => {
	navigation.classList.toggle('open');
	hamButton.classList.toggle('open');
});


//MEMBER CHAMBER DISPLAY

const gridbutton = document.querySelector("#grid");
const listbutton = document.querySelector("#list");
const display = document.querySelector("article");

// The following code could be written cleaner. How? We may have to simplfiy our HTMl and think about a default view.

gridbutton.addEventListener("click", () => {
	// example using arrow function
	display.classList.add("grid");
	display.classList.remove("list");
});

listbutton.addEventListener("click", showList); // example using defined function

function showList() {
	display.classList.add("list");
	display.classList.remove("grid");
}




/////////////////////////////////////

// Definimos URL de datos JSON
const urlBusiness = "URL_DEL_ARCHIVO_JSON";

// Seleccionamos los elementos de la vista en cuadrícula o lista
const gridBtn = document.querySelector("#grid");
const listBtn = document.querySelector("#list");
const directoryContainer = document.querySelector(".directory-main article");

// Agregamos evento de clic para alternar entre vistas
if (gridBtn && listBtn) {
    gridBtn.addEventListener("click", () => {
        updateView("grid");
    });
    listBtn.addEventListener("click", () => {
        updateView("list");
    });
}

// Función para alternar la clase de vista en "grid" o "list"
function updateView(view) {
    directoryContainer.classList.toggle("grid", view === "grid");
    directoryContainer.classList.toggle("list", view === "list");
}

// Función asíncrona para obtener datos de empresas
async function getBusinessData() {
    try {
        const response = await fetch(urlBusiness);
        const data = await response.json();
        
        // Agregamos campos adicionales como imagen, URL y nivel de membresía
        const companies = data.map((item, index) => ({
            name: item.name,
            address: item.address,
            phone: item["phone number"],
            url: `https://www.example.com/${item.name.toLowerCase().replace(/\s+/g, '-')}`,  // URL simulada
            img: `images/company${index + 1}.jpg`,  // Ruta de imagen simulada
            membership: index % 3 + 1,  // Nivel de membresía aleatorio
            description: item.descripcion
        }));

        // Mostramos empresas en la vista "directory"
        displayBusiness(companies);
    } catch (error) {
        console.error("Error al obtener los datos:", error);
    }
}

// Función para mostrar información de empresas
function displayBusiness(companies) {
    // Limpiamos contenido existente
    directoryContainer.innerHTML = "";

    companies.forEach((company) => {
        // Creamos los elementos para cada tarjeta de empresa
        const card = document.createElement("section");
        const img = document.createElement("img");
        const h2 = document.createElement("h2");
        const membership = document.createElement("h3");
        const address = document.createElement("p");
        const phone = document.createElement("p");
        const url = document.createElement("a");
        const description = document.createElement("p");

        // Asignamos contenido y atributos
        h2.textContent = company.name;
        membership.textContent = `Membership: ${["Member", "Silver", "Gold"][company.membership - 1]}`;
        address.textContent = `Address: ${company.address}`;
        phone.textContent = `Phone: ${company.phone}`;
        url.textContent = "Visit Website";
        url.href = company.url;
        url.target = "_blank";
        description.textContent = company.description;
        
        img.setAttribute("src", company.img);
        img.setAttribute("alt", `Logo of ${company.name}`);
        
        // Añadimos los elementos a la tarjeta
        card.appendChild(img);
        card.appendChild(h2);
        card.appendChild(membership);
        card.appendChild(address);
        card.appendChild(phone);
        card.appendChild(url);
        card.appendChild(description);

        // Agregamos la tarjeta al contenedor
        directoryContainer.appendChild(card);
    });
}

// Llamada inicial para obtener y mostrar datos
getBusinessData();
