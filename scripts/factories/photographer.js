// eslint-disable-next-line no-unused-vars
function photographerFactory(data) {
    const { name, portrait, city, country, tagline, price, id } = data;

    const picture = `assets/photographers/${portrait}`;

    function getUserCardDOM() {
        const article = document.createElement( 'article' );

        const img = document.createElement( 'img' );
        img.setAttribute("src", picture);
        img.style.borderRadius = '50%';
        img.style.objectFit = 'cover';

        const h2 = document.createElement( 'h2' );
        h2.textContent = name;
        h2.classList.add('h2');

        // container h2+image pour balise <a/>
        const linkContainer = document.createElement('a');
        linkContainer.appendChild(img);
        linkContainer.appendChild(h2);
        linkContainer.href = `/photographer.html#${id}`;
        linkContainer.classList.add('linkContainer');

        const descTitle = document.createElement( 'h4' );
        descTitle.textContent = `${city}, ${country}`;
        descTitle.classList.add('descTitle');

        const desc = document.createElement( 'h3' );
        desc.textContent = `${tagline}`;
        desc.classList.add('desc');

        const priceTotal = document.createElement( 'p' );
        priceTotal.textContent = `${price}€/jour`;
        priceTotal.classList.add('price');
        

        // article.appendChild(img);
        // article.appendChild(h2);
        article.appendChild(linkContainer);
        article.appendChild(descTitle);
        article.appendChild(desc);
        article.appendChild(priceTotal);
        return (article);
    }
    return { name, picture, getUserCardDOM }
}