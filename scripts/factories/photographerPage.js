const photographInfo = (data) => {
    const { portrait, city, country, tagline, name } = data;
    const picture = `assets/photographers/${portrait}`;

    const titlePhotograph = document.querySelector('.photograph-info--title');
    titlePhotograph.innerHTML = `${name}`;

    const locationPhotograph = document.querySelector('.photograph-info--location');
    locationPhotograph.innerHTML = `${city}, ${country}`;

    const taglinePhotograph = document.querySelector('.photograph-info--desc');
    taglinePhotograph.innerHTML = `${tagline}`;

    const imgPhotograph = document.querySelector('.photograph-info--img');
    imgPhotograph.setAttribute("src", picture);

    // nom du photograhe dans la modal
    document.querySelector('.modalNamePhotographer').innerHTML = `${name}`;
}





let arrayLightBox = [];

const photographerProject = (data) => {
    arrayLightBox = data;
    let totleLikes = 0;
    const container = document.querySelector('.photoContainer');

    for(const element of data) {
        const { title, image, likes } = element;
        totleLikes += likes;
        const picture = `assets/images/${image}`;
        const cardContainer = document.createElement('div');
        const cardTextContainer = document.createElement('div');
        cardTextContainer.classList.add('cardTextContainer');

        const imgCard = document.createElement('img');
        imgCard.classList.add('imgCard');
        imgCard.setAttribute("src", picture);

        const titleCard = document.createElement('span');
        titleCard.innerHTML = `${title}`;
        titleCard.classList.add('titleCard');
        cardTextContainer.appendChild(titleCard);

        const likesCard = document.createElement('span');
        likesCard.innerHTML = `${likes}`;
        likesCard.classList.add('likesCard');
        cardTextContainer.appendChild(likesCard);

        cardContainer.appendChild(imgCard);
        cardContainer.appendChild(cardTextContainer);
        container.appendChild(cardContainer);  
    }
}

// lightbox
let maxCompteur = null;
let compteur = 0;
const imgContainer = document.querySelector('.imglight');
const leftButtonLight = document.querySelector('.leftlight');
const rightButtonLight = document.querySelector('.rightlight');
const lightboxImgContainer = document.querySelector('.lightbox__container');

// init first image
const handleArrayLightBox = async () => {
    setTimeout(() => {
        if(arrayLightBox[0].image) {
            const firstImg = document.createElement('img');
            firstImg.setAttribute('src', `assets/images/${arrayLightBox[0].image}`);
            firstImg.style.maxHeight = '100%';
            firstImg.style.maxWidth = '100%';
            lightboxImgContainer.appendChild(firstImg);
            
        } else {
            const firstVideo = document.createElement('video');
            firstVideo.setAttribute('src', `assets/images/${arrayLightBox[0].video}`);
            firstVideo.style.maxHeight = '100%';
            firstVideo.style.maxWidth = '100%';
            lightboxImgContainer.appendChild(firstVideo);
        }

        console.log(arrayLightBox);
        maxCompteur = arrayLightBox.length; 
    }, 100);
}
handleArrayLightBox();


leftButtonLight.addEventListener('click', () => {
    if(compteur > 0) {
        if(arrayLightBox[compteur - 1].video) {
            lightboxImgContainer.innerHTML = "";
            const video = document.createElement('video');
            video.setAttribute('src', `assets/images/${arrayLightBox[compteur - 1].video}`);
            video.style.maxHeight = '100%';
            video.style.maxWidth = '100%';
            lightboxImgContainer.appendChild(video);

        } else {
            lightboxImgContainer.innerHTML = "";
            const img = document.createElement('img');
            img.setAttribute('src', `assets/images/${arrayLightBox[compteur - 1].image}`);
            img.style.maxHeight = '100%';
            img.style.maxWidth = '100%';
            lightboxImgContainer.appendChild(img);
        }
        compteur -= 1;
    }
});

rightButtonLight.addEventListener('click', () => {
    if(compteur < maxCompteur) {
        if(arrayLightBox[compteur + 1].video) {
            lightboxImgContainer.innerHTML = "";
            const video = document.createElement('video');
            video.setAttribute('src', `assets/images/${arrayLightBox[compteur + 1].video}`);
            video.style.maxHeight = '100%';
            video.style.maxWidth = '100%';
            lightboxImgContainer.appendChild(video);

        } else {
            lightboxImgContainer.innerHTML = "";
            const img = document.createElement('img');
            img.setAttribute('src', `assets/images/${arrayLightBox[compteur + 1].image}`);
            img.style.maxHeight = '100%';
            img.style.maxWidth = '100%';
            lightboxImgContainer.appendChild(img);
        }
        compteur += 1;
    }
});