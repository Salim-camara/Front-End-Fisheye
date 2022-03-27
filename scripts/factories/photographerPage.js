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
// compteur pour lightbox
let compteur = 0;
let maxCompteur = 0;

const photographerProject = (data) => {
    arrayLightBox = data;
    maxCompteur = data.length;
    let totleLikes = 0;
    const container = document.querySelector('.photoContainer');

    for(i = 0; i < data.length; i++) {
        const { title, image, likes } = data[i];
        totleLikes += likes;
        const picture = `assets/images/${image}`;
        const cardContainer = document.createElement('div');
        cardContainer.id = i;
        const cardTextContainer = document.createElement('div');
        cardTextContainer.classList.add('cardTextContainer');

        const handleCardContainer = () => {
            compteur = cardContainer.id;
            // init first img in lightbox
            if(data[cardContainer.id].video) {
                lightboxImgContainer.innerHTML = "";
                const video = document.createElement('video');
                video.setAttribute('src', `assets/images/${data[cardContainer.id].video}`);
                video.style.maxHeight = '100%';
                video.style.maxWidth = '100%';
                lightboxImgContainer.appendChild(video);
    
            } else {
                lightboxImgContainer.innerHTML = "";
                const img = document.createElement('img');
                img.setAttribute('src', `assets/images/${data[cardContainer.id].image}`);
                img.style.maxHeight = '100%';
                img.style.maxWidth = '100%';
                lightboxImgContainer.appendChild(img);
            }
            
        }
        cardContainer.addEventListener('click', () => {
            handleCardContainer();
            document.querySelector('.lightbox').classList.remove('closelightaction');
        });

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
const imgContainer = document.querySelector('.imglight');
const leftButtonLight = document.querySelector('.leftlight');
const rightButtonLight = document.querySelector('.rightlight');
const lightboxImgContainer = document.querySelector('.lightbox__container');
const closeButtonLight = document.querySelector('.closelight');

closeButtonLight.addEventListener('click', () => {
    document.querySelector('.lightbox').classList.add('closelightaction');
});

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
        if(arrayLightBox[parseInt(compteur) + 1].video) {
            lightboxImgContainer.innerHTML = "";
            const video = document.createElement('video');
            video.setAttribute('src', `assets/images/${arrayLightBox[parseInt(compteur) + 1].video}`);
            video.style.maxHeight = '100%';
            video.style.maxWidth = '100%';
            lightboxImgContainer.appendChild(video);

        } else {
            lightboxImgContainer.innerHTML = "";
            const img = document.createElement('img');
            img.setAttribute('src', `assets/images/${arrayLightBox[parseInt(compteur) + 1].image}`);
            img.style.maxHeight = '100%';
            img.style.maxWidth = '100%';
            lightboxImgContainer.appendChild(img);
        }
        compteur = parseInt(compteur) + 1;
    }
});