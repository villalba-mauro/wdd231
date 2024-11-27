// Seleccionamos el botón y el menú
// const menuButton = document.getElementById("menuButton");
// const menu = document.getElementById("menu");

// // Agregamos un evento de clic al botón para alternar la clase "open"
// menuButton.addEventListener("click", () => {
//     menu.classList.toggle("open"); // Añade o quita la clase "open"
// });

// script.js
const menuButton = document.getElementById('menuButton');
const menu = document.getElementById('menu');

menuButton.addEventListener('click', () => {
    menu.classList.toggle('show');
});



// get the date and time on form page load and send it to the html timestamp
document.addEventListener("DOMContentLoaded", () => {
    const timestampInput = document.getElementById("timestamp");
    const currentDateTime = new Date();
    // Format the timestamp as an ISO string (e.g., "2024-11-16T15:30:45.123Z")
    timestampInput.value = currentDateTime.toISOString();
});

// remove whitespace from textarea and move cursor to the start
document.getElementById("description").addEventListener("focus", function () {
    const textarea = this;
    textarea.value = textarea.value.trimStart();
    setTimeout(() => {
        textarea.setSelectionRange(0, 0);
    }, 0);
});

// MODAL
const membershipInfo = document.querySelector("#membership-info");
const npCard = document.querySelector("#np-info");
const bronzeCard = document.querySelector("#bronze-info");
const silverCard = document.querySelector("#silver-info");
const goldCard = document.querySelector("#gold-info");

function openMembershipInfo(membership) {
    // Clear the modal content
    membershipInfo.innerHTML = '';

    // Add close button to the modal
    const closeModal = document.createElement('button');
    closeModal.setAttribute('id', 'close-modal');
    closeModal.innerHTML = '❌';
    membershipInfo.appendChild(closeModal);

    // Add elements for membership description
    const modalH2 = document.createElement('h2');
    modalH2.style.color = 'black';
    const modalP = document.createElement('p');
    const modalTable = document.createElement('table');
    modalTable.setAttribute('class', 'modal-table');
    // Row 1
    const tr1 = document.createElement('tr');
    const td1 = document.createElement('td');
    td1.innerHTML = `Price per Year: `;
    td1.setAttribute('class', 'bold');
    const tdPrice = document.createElement('td');
    tdPrice.setAttribute('id', 'price');
    // Row 2
    const tr2 = document.createElement('tr');
    const td2 = document.createElement('td');
    td2.innerHTML = `Benefits: `;
    td2.setAttribute('class', 'bold');
    const tdBenefits = document.createElement('td');
    tdBenefits.setAttribute('id', 'benefits');

    // Populate contents based on membership type
    switch (membership) {
        case 'np':
            modalH2.innerHTML = 'Non-Profit Membership';
            modalP.innerHTML = 'Ideal for non-profit organizations with no membership fee.';
            tdPrice.innerHTML = 'FREE';
            tdBenefits.innerHTML = `Member Directory Listing. <br> Discounted Table at Summer Faire.`;
            modalH2.style.background = 'var(--sand)';
            break;
        case 'bronze':
            modalH2.innerHTML = 'Bronze Membership';
            modalP.innerHTML = 'Basic membership offering standard benefits for small businesses.';
            tdPrice.innerHTML = `500AED`;
            tdBenefits.innerHTML = `Member Directory Listing. <br> Discounted Table at Summer Faire.`;
            modalH2.style.background = 'linear-gradient(135deg, #fab979, #fab979, #ec9645, #fac77d, #f6a353, #fab979)';
            break;
        case 'silver':
            modalH2.innerHTML = 'Silver Membership';
            modalP.innerHTML = 'Enhanced membership with additional networking opportunities.';
            tdPrice.innerHTML = '1000AED';
            tdBenefits.innerHTML = `Member Directory Listing. <br> Discounted Table at Summer Faire. <br> Home Page Spotlight.`;
            modalH2.style.background = 'linear-gradient(135deg, #d4d4d4, #d4d4d4, #bfbfbf, #e8e8e8, #bfbfbf, #d4d4d4)';
            break;
        case 'gold':
            modalH2.innerHTML = 'Gold Membership';
            modalP.innerHTML = 'Premium membership with exclusive perks and maximum visibility.';
            tdPrice.innerHTML = '2000AED';
            tdBenefits.innerHTML = `Member Directory Listing. <br> Free Table at Summer Faire. <br> Home Page Spotlight. Training.`;
            modalH2.style.background = 'linear-gradient(135deg, #f7d34d, #f7d34d, #e6b422, #fbdd68, #e6b422, #f7d34d)';
            break;
        default:
            modalP.innerHTML = 'Invalid membership type selected.';
    }

    // Append description to the modal container
    membershipInfo.appendChild(modalH2);
    membershipInfo.appendChild(modalP);
    tr1.appendChild(td1);
    tr1.appendChild(tdPrice);
    modalTable.appendChild(tr1);
    tr2.appendChild(td2);
    tr2.appendChild(tdBenefits);
    modalTable.appendChild(tr2);
    membershipInfo.appendChild(modalTable);

    // Display the populated modal
    membershipInfo.showModal();

    // Add event listener to close button
    closeModal.addEventListener('click', () => {
        membershipInfo.close();
    });
}

// Attach event listeners to each membership card
npCard.addEventListener('click', () => {
    openMembershipInfo('np');
});
bronzeCard.addEventListener('click', () => {
    openMembershipInfo('bronze');
});
silverCard.addEventListener('click', () => {
    openMembershipInfo('silver');
});
goldCard.addEventListener('click', () => {
    openMembershipInfo('gold');
});