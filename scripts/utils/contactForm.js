function displayModal() {
    const modal = document.getElementById("contact_modal");
	modal.classList.remove('contact_modalClose');
}

function closeModal() {
    const modal = document.getElementById("contact_modal");
    modal.classList.add('contact_modalClose');
}
