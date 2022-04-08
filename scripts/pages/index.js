// fonction de récupération de la data $$$$$$$$$$$$$$
let dataPhotographers = null;
// let dataMedia = null;
const url = '../../data/photographers.json';

class Fetchdata {
    constructor(domain) {
        this.domain = domain;
    }

    // récupération des données photographes
    async photographers() {
        await fetch(this.domain)
            .then((res) => {
                return res.json()
            })
            .then((data) => {
                dataPhotographers = data.photographers
            })
            .catch((err) => console.log('erreur récupération data ' + err))
    }
}
const photographers = new Fetchdata(url).photographers();

async function displayData(dataPhotographers) {
    const photographersSection = document.querySelector(".photographer_section");

    dataPhotographers.forEach((photographer) => {
        // eslint-disable-next-line no-undef
        const photographerModel = photographerFactory(photographer);
        const userCardDOM = photographerModel.getUserCardDOM();
        photographersSection.appendChild(userCardDOM);
    });
}

photographers.then(() => displayData(dataPhotographers));






    