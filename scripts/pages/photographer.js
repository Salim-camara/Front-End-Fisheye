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

