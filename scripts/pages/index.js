// fonction de récupération de la data
let dataPhotographers = null;
let dataMedia = null;
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

    // récupération des images etc.
    async media() {
        await fetch(this.domain)
            .then((res) => {
                return res.json()
            })
            .then((data) => {
                dataMedia = data.media
            })
            .catch((err) => console.log('erreur récupération data ' + err))
    }
}

const photographers = new Fetchdata(url).photographers();
const media = new Fetchdata(url).media();


async function displayData(dataPhotographers) {
    const photographersSection = document.querySelector(".photographer_section");

    dataPhotographers.forEach((photographer) => {
        const photographerModel = photographerFactory(photographer);
        const userCardDOM = photographerModel.getUserCardDOM();
        photographersSection.appendChild(userCardDOM);
    });
};

async function init() {
    displayData(dataPhotographers);
};

photographers.then(() => init());



    