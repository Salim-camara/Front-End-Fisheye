function displayModal() {
    const modal = document.getElementById("contact_modal");
	modal.classList.remove('contact_modalClose');
}

function closeModal() {
    const modal = document.getElementById("contact_modal");
    modal.classList.add('contact_modalClose');
}

function sendConsole() {
    event.preventDefault()
    const formulaireValues = {
        prénom: document.querySelector('.firstNameInput').value,
        nom: document.querySelector('.nameInput').value,
        email: document.querySelector('.emailInput').value,
        message: document.querySelector('.messageInput').value
    }
    console.log(formulaireValues);
}
