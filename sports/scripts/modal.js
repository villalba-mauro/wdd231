// // Get the modal
// var modal = document.getElementById("myModal");

// // Get the button that opens the modal
// var btn = document.getElementById("myBtn");

// // Get the <span> element that closes the modal
// var span = document.getElementsByClassName("close")[0];

// // When the user clicks the button, open the modal 
// btn.onclick = function() {
//   modal.style.display = "block";
// }

// // When the user clicks on <span> (x), close the modal
// span.onclick = function() {
//   modal.style.display = "none";
// }

// // When the user clicks anywhere outside of the modal, close it
// window.onclick = function(event) {
//   if (event.target == modal) {
//     modal.style.display = "none";
//   }
// }
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