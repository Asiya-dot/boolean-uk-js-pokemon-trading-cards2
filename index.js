// - Make sure you check and understand the data that is given to you!
// - Create a card using JS that represents a single pokemon, use the example image as a reference. You will also find an HTML example commented out in the index.html
// - Use the exact CSS classes you see in the example HTML to obtain the same style for each card
// - The cards should be nested inside <section class="cards"></section>
// - Use the official-artwork object key as the images for the card. The images are all inside of the sprites key, in each pokemon object
// pokemon.sprites.other['official-artwork'].front_default

// - Render all the cards on the page that represents all the pokemons, recreating the same layout, using JS
const cardSection = document.querySelector(".cards")
console.log("cardSection:", cardSection)
//card section
//pokemon is the parameter
function createCard(pokemon) {
    //article section
    //article is the parent of h2,image,div
    // creating article element
    const articleEl = document.createElement("article")
    articleEl.setAttribute("class", "card")

    //h2 section the title
    const h2El = document.createElement("h2");
    h2El.setAttribute("class", "card--title");
    h2El.innerText = pokemon.name;

    //pokemon.name
    //imagesection
    const imageEl = document.createElement("img")
    //imagesrc is the path of image
    const imagesource = pokemon.sprite.other["official-artwork"].front_default
    imageEl.setAttribute("class", "card--img")
    imageEl.setAttribute("src", imagesource)
    imageEl.setAttribute("width", "256")

    // div section
    const divEl = document.createElement("div")
    divEl.setAttribute("class", "card--text")
    //stats is an array
    //stat is one and stats is plural
    for (const stat of pokemon.stats) {
        const stateEl = document.createElement("p")
        stateEl.innerText = `${stat.stat.name.toupperCase()}: ${stat.base_stat}`
        divEl.append(stateEl)

    }
    //adding element to article
    articleEl.append(h2El, imageEl, divEl)
    //adding article to cardsection
    cardSection.append(articleEl)

    // a pokemon is a variable 
    for (const pokemon of data) {
        createCard(pokemon)
    }

}
console.log(data[0]);
