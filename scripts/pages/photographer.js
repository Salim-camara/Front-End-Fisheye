const id = window.location.hash.slice(1);
const url = '../../data/photographers.json';

let dataPhotographer = null;
let dataMediaPhotographer = null;

// class de récupération de la data
class FetchPhotographer {
    constructor(domain, id) {
        this.domain = domain;
        this.id = id;
    }

    // récupération des données d'un photographe
    async photographer() {
        await fetch(this.domain)
            .then((res) => {
                return res.json()
            })
            .then((data) => {
                dataPhotographer = data.photographers.find((item) => item.id == this.id);
                dataMediaPhotographer = data.media.filter((item) => item.photographerId == this.id);
            })
            .catch((err) => console.log('erreur récupération data ' + err))
    }
}
// eslint-disable-next-line no-undef
const photographer = new FetchPhotographer(url, id).photographer();
photographer.then(() => {
    // eslint-disable-next-line no-undef
    photographInfo(dataPhotographer);
    // eslint-disable-next-line no-undef
    photographerProject(dataMediaPhotographer);
})
.catch((err) => console.log(err));



// SECTION TRI
const triButton = document.querySelector('.tri');
// trier par ordre alphabétique
const titleSort = (x, y) => {
    return x.title.localeCompare(y.title);
}
// trier par popularité
const likeSort = (x, y) => {
    return y.likes - x.likes;
}
// trier par data
const dateSort = (x, y) => {
    return new Date(x.date) - new Date(y.date);
}

// pour ouvrir la liste de tri
const selectContainer = document.querySelector('.selectContainer');
triButton.addEventListener('click', () => {
    selectContainer.classList.toggle('selectContainerActive');
})

// Ajout de l'écouteur d'évenement sur les 3 tris
document.querySelector('.selectPop').addEventListener('click', () => {
    const container = document.querySelector('.photoContainer');
    container.innerHTML = '';
    // eslint-disable-next-line no-undef
    photographerProject(dataMediaPhotographer.sort(likeSort));
    document.querySelector('.tri_title').innerHTML = 'Popularité';
})
document.querySelector('.selectDate').addEventListener('click', () => {
    const container = document.querySelector('.photoContainer');
    container.innerHTML = '';
    // eslint-disable-next-line no-undef
    photographerProject(dataMediaPhotographer.sort(dateSort));
    document.querySelector('.tri_title').innerHTML = 'Date';
})
document.querySelector('.selectTitle').addEventListener('click', () => {
    const container = document.querySelector('.photoContainer');
    container.innerHTML = '';
    // eslint-disable-next-line no-undef
    photographerProject(dataMediaPhotographer.sort(titleSort));
    document.querySelector('.tri_title').innerHTML = 'Titre';
})





