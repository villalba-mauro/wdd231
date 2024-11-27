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


//--------------------------modal

const np = document.querySelector("#np");
const bronze =document.querySelector("#bronze");
const silver= document.querySelector("#silver");
const gold = document.querySelector("#gold");


const openModal = document.querySelector(".open-button");
const closeModal = document.querySelector(".close-button");

const open_bronze =document.querySelector(".open-button-bronze")
const close_bronze =document.querySelector(".close-button-bronze")

const open_silver =document.querySelector(".open-button-silver")
const close_silver =document.querySelector(".close-button-silver")

const open_gold =document.querySelector(".open-button-gold")
const close_gold =document.querySelector(".close-button-gold")

openModal.addEventListener("click", () => {
    np.showModal();
});

closeModal.addEventListener("click", () => {
 np.close();
});

open_bronze.addEventListener("click", () => {
    bronze.showModal();
});

close_bronze.addEventListener("click", () => {
 bronze.close();
});

open_silver.addEventListener("click", () => {
    silver.showModal();
});

close_silver.addEventListener("click", () => {
 silver.close();
});

open_gold.addEventListener("click", () => {
    gold.showModal();
});

close_gold.addEventListener("click", () => {
 gold.close();
});