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
}






const photographerProject = (data) => {
    console.log('factory_media ' + JSON.stringify(data));
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