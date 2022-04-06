let pricePopup = 0;

const photographInfo = (data) => {
    const { portrait, city, country, tagline, name, price } = data;
    pricePopup = price;
    const picture = `assets/photographers/${portrait}`;

    const titlePhotograph = document.querySelector('.photograph-info--title');
    titlePhotograph.innerHTML = `${name}`;

    const locationPhotograph = document.querySelector('.photograph-info--location');
    locationPhotograph.innerHTML = `${city}, ${country}`;

    const taglinePhotograph = document.querySelector('.photograph-info--desc');
    taglinePhotograph.innerHTML = `${tagline}`;

    const imgPhotograph = document.querySelector('.photograph-info--img');
    imgPhotograph.setAttribute("src", picture);
    imgPhotograph.setAttribute("alt", name);
    imgPhotograph.style.objectFit = 'cover';

    // nom du photograhe dans la modal
    document.querySelector('.modalNamePhotographer').innerHTML = `${name}`;
}





let arrayLightBox = [];
// compteur pour lightbox
let compteur = 0;
let maxCompteur = 0;
let totleLikes = 0;
const textLight = document.querySelector('.textlight');

const photographerProject = (data) => {
    arrayLightBox = data;
    maxCompteur = data.length;
    const container = document.querySelector('.photoContainer');

    for(i = 0; i < data.length; i++) {
        const { title, image, likes, video } = data[i];
        totleLikes += likes;
        const videoForContainer = `assets/images/${video}`; 
        const picture = `assets/images/${image}`;
        const cardContainer = document.createElement('div');
        cardContainer.id = i;
        cardContainer.classList.add('cardContainer');
        const cardTextContainer = document.createElement('div');
        cardTextContainer.classList.add('cardTextContainer');

        const handleCardContainer = () => {
            compteur = cardContainer.id;
            textLight.innerHTML = `${data[cardContainer.id].title}`;
            // init first img in lightbox
            if(data[cardContainer.id].video) {
                lightboxImgContainer.innerHTML = "";
                const video = document.createElement('video');
                video.setAttribute('src', `assets/images/${data[cardContainer.id].video}`);
                video.setAttribute('controls', true);
                video.setAttribute('alt', `${title}, video closeup view`);
                video.style.maxHeight = '100%';
                video.style.maxWidth = '100%';
                lightboxImgContainer.appendChild(video);
    
            } else {
                lightboxImgContainer.innerHTML = "";
                const img = document.createElement('img');
                img.setAttribute('src', `assets/images/${data[cardContainer.id].image}`);
                img.setAttribute('alt', `${title}, image closeup view`);
                img.style.maxHeight = '100%';
                img.style.maxWidth = '100%';
                lightboxImgContainer.appendChild(img);
            }
            
        }

        if(video) {
            const videoCard = document.createElement('video');
            videoCard.classList.add('imgCard');
            videoCard.setAttribute("src", videoForContainer);
            videoCard.setAttribute("alt", `${title}, closeup view`);
            cardContainer.appendChild(videoCard);
            videoCard.addEventListener('click', () => {
                handleCardContainer();
                document.querySelector('.lightbox').classList.remove('closelightaction');
                document.querySelector('main').classList.add('addBlurLight');
            })
        } else {
            const imgCard = document.createElement('img');
            imgCard.classList.add('imgCard');
            imgCard.setAttribute("src", picture);
            imgCard.setAttribute("alt", `${title}, closeup view`);
            cardContainer.appendChild(imgCard);
            imgCard.addEventListener('click', () => {
                handleCardContainer();
                document.querySelector('.lightbox').classList.remove('closelightaction');
                document.querySelector('main').classList.add('addBlurLight');
            })
        }

        const titleCard = document.createElement('span');
        titleCard.innerHTML = `${title}`;
        titleCard.classList.add('titleCard');
        cardTextContainer.appendChild(titleCard);

        const likesCard = document.createElement('span');
        likesCard.innerHTML = `${likes} <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" width="20px" fill="currentColor">
        <path fill-rule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clip-rule="evenodd" />
        </svg>`;
        likesCard.classList.add('likesCard');
        likesCard.setAttribute('alt', 'likes');
        cardTextContainer.appendChild(likesCard);

        likesCard.addEventListener('click', () => {
            if(!likesCard.classList.contains('liked')) {
                likesCard.classList.add('liked');
                likesCard.innerHTML = `${likes + 1} <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" width="20px" fill="currentColor">
                <path fill-rule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clip-rule="evenodd" />
                </svg>`;

                const likesPopup = document.querySelector('.pop-up__likes');
                const likesPopupNewValue = parseInt(document.querySelector('.pop-up__likes').innerHTML.split(' ')[0]) + 1;
                likesPopup.innerHTML = `${likesPopupNewValue} <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" width="20px" fill="currentColor">
                <path fill-rule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clip-rule="evenodd" />
                </svg>`;
            }
        })

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
    document.querySelector('main').classList.remove('addBlurLight');
});

const handleRightButtonFunction = () => {
    if(compteur < maxCompteur) {
        textLight.innerHTML = arrayLightBox[parseInt(compteur) + 1].title;
        if(arrayLightBox[parseInt(compteur) + 1].video) {
            lightboxImgContainer.innerHTML = "";
            const video = document.createElement('video');
            video.setAttribute('src', `assets/images/${arrayLightBox[parseInt(compteur) + 1].video}`);
            video.style.maxHeight = '100%';
            video.style.maxWidth = '100%';
            video.setAttribute('controls', true);
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
}
const handleLeftButtonFunction = () => {
    if(compteur > 0) {
        textLight.innerHTML = arrayLightBox[compteur - 1].title;
        if(arrayLightBox[compteur - 1].video) {
            lightboxImgContainer.innerHTML = "";
            const video = document.createElement('video');
            video.setAttribute('src', `assets/images/${arrayLightBox[compteur - 1].video}`);
            video.style.maxHeight = '100%';
            video.style.maxWidth = '100%';
            video.setAttribute('controls', true);
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
}

leftButtonLight.addEventListener('click', () => handleLeftButtonFunction());
rightButtonLight.addEventListener('click', () => handleRightButtonFunction());
window.addEventListener('keydown', (e) => {
    if(e.code == "ArrowLeft") {
        handleLeftButtonFunction();
    } else if(e.code == "ArrowRight") {
        handleRightButtonFunction();
    } else if(e.code == "Escape") {
        document.querySelector('.lightbox').classList.add('closelightaction');
        document.querySelector('main').classList.remove('addBlurLight');
    }
});


// pop-up
const initTotalLikes = () => {
    const popupLikes = document.querySelector('.pop-up__likes');
    const popupPrice = document.querySelector('.pop-up__price');
    setTimeout(() => {
        popupLikes.innerHTML = `${totleLikes} <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" width="20px" fill="currentColor">
        <path fill-rule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clip-rule="evenodd" />
        </svg>`;

        popupPrice.innerHTML = `${pricePopup}€ / jour`

    }, 500);
}
initTotalLikes();