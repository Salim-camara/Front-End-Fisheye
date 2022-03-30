const id = window.location.hash.slice(1);
const url = '../../data/photographers.json';

let dataPhotographer = null;
let dataMediaPhotographer = null;

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

const photographer = new FetchPhotographer(url, id).photographer();
photographer.then(() => {
    photographInfo(dataPhotographer);
    photographerProject(dataMediaPhotographer);
});

// tri
const triButton = document.querySelector('.tri');
const titleSort = (x, y) => {
    return x.title.localeCompare(y.title);
}
const likeSort = (x, y) => {
    return x.likes - y.likes;
}
const dateSort = (x, y) => {
    return new Date(x.date) - new Date(y.date);
}

// to open tri
const selectContainer = document.querySelector('.selectContainer');
triButton.addEventListener('click', () => {
    selectContainer.classList.toggle('selectContainerActive');
})

// popularité
document.querySelector('.selectPop').addEventListener('click', () => {
    const container = document.querySelector('.photoContainer');
    container.innerHTML = '';
    photographerProject(dataMediaPhotographer.sort(likeSort));
    document.querySelector('.tri_title').innerHTML = 'Popularité';
})
// date
document.querySelector('.selectDate').addEventListener('click', () => {
    const container = document.querySelector('.photoContainer');
    container.innerHTML = '';
    photographerProject(dataMediaPhotographer.sort(dateSort));
    document.querySelector('.tri_title').innerHTML = 'Date';
})
// titre
document.querySelector('.selectTitle').addEventListener('click', () => {
    const container = document.querySelector('.photoContainer');
    container.innerHTML = '';
    photographerProject(dataMediaPhotographer.sort(titleSort));
    document.querySelector('.tri_title').innerHTML = 'Titre';
})





