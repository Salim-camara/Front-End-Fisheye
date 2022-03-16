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
    imgPhotograph.style.borderRadius = '50%';
}






const photographerProject = () => {

}