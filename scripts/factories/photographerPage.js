const photographInfo = (data) => {
    const { title, portrait, city, country, tagline, price, name } = data

    const titlePhotograph = document.querySelector('.photograph-info--title');
    titlePhotograph.innerHTML = `${name}`;
    titlePhotograph.style.color = 'green';
}






const photographerProject = () => {

}