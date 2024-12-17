
const np = document.querySelector("#np");

const openModal = document.querySelector(".open-button");
const closeModal = document.querySelector(".close-button");
openModal.addEventListener("click", () => {
    np.showModal();
});

closeModal.addEventListener("click", () => {
    np.close();
   });
   
const modal2 = document.querySelector('#modal2');

const open_button_modal2 =document.querySelector(".open-button-modal2")
const close_button_modal2 =document.querySelector(".close-button-modal2")

open_button_modal2.addEventListener("click", () => {
    modal2.showModal();
});

close_button_modal2.addEventListener("click", () => {
 modal2.close();
});

//local storage

// 1️⃣ Initialize display element variable
const visitsDisplay = document.querySelector(".visits");

// 2️⃣ Get the stored VALUE for the numVisits-ls KEY in localStorage if it exists. If the numVisits KEY is missing, then assign 0 to the numVisits variable.
let numVisits = Number(window.localStorage.getItem("numVisits-ls")) || 0;

// 3️⃣ Determine if this is the first visit or display the number of visits. We wrote this example backwards in order for you to think deeply about the logic.
if (numVisits !== 0) {
	visitsDisplay.textContent = numVisits;
} else {
	visitsDisplay.textContent = `This is your first visit. 🥳 Welcome!`;
}

// 4️⃣ increment the number of visits by one.
numVisits++;

// 5️⃣ store the new visit total into localStorage, key=numVisits-ls
localStorage.setItem("numVisits-ls", numVisits);

// 💡A client can view the localStorage data using the Applications panel in the browsers's DevTools - check it out on any major site.
