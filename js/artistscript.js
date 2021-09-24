function whichMovement(){
    if (document.body.classList.contains("realism")){
        return 0;
    } else if (document.body.classList.contains("impressionism")){
        return 1;
    } else if (document.body.classList.contains("post-impress")){
        return 2;
    } else if (document.body.classList.contains("cubism")){
        return 3;
    } else if (document.body.classList.contains("surrealism")){
        return 4;
    } else if (document.body.classList.contains("abstract")){
        return 5;
    } else if (document.body.classList.contains("pop")){
        return 6;
    } else if (document.body.classList.contains("nouveau")){
        return 7;
    } else if (document.body.classList.contains("photoreal")){
        return 8;
    } else if (document.body.classList.contains("renaissance")){
        return 9;
    }
}

function randomInteger(min, max){
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function randomColour(colourScheme){
    let randnum = randomInteger(0, colourScheme.length - 1);
    let finalCol = colourScheme[randnum];
    return finalCol;
}

let colourScheme = ["#264653", "#2a9d8f", "#e9c46a", "#f4a261", "#e76f51"];
let textColour = "white";
let colour = randomColour(colourScheme);
document.body.style.background = colour;
if (colour === "#e9c46a" || colour === "#f4a261"){
    textColour = "black";
}
document.body.style.color = textColour;

const docMain = document.querySelector("main");


const returnBtn = document.createElement("button");
returnBtn.addEventListener("click", () => {
    location.href = "index.html"
})
const topic = document.querySelector("h1");
document.querySelector("header").insertBefore(returnBtn, topic);
document.querySelector("header").classList.add("movement-header");

let i = whichMovement();
const intro = document.createElement("p");
intro.innerText = COLLECTION[i].movement + " began in " + COLLECTION[i].placeOfOrigin + " and took place between " + COLLECTION[i].period + ".";
docMain.appendChild(intro);

const allPaintings = document.createElement("section")
allPaintings.classList.add("artwork");
docMain.appendChild(allPaintings);

const works = COLLECTION[i].paintings;
for (const elem of works){
    const newPainting = document.createElement("article");
    allPaintings.appendChild(newPainting);

    const fig = document.createElement("figure");
    newPainting.appendChild(fig);

    const imageLink = document.createElement("a");
    imageLink.setAttribute("href", elem.link);
    imageLink.setAttribute("target", "_blank");
    fig.appendChild(imageLink);

    const image = document.createElement("img");
    image.setAttribute("src", elem.link);
    imageLink.appendChild(image);

    const title = document.createElement("figcaption");
    title.innerText = elem.title;
    fig.appendChild(title);

    const year = document.createElement("p");
    year.innerText = elem.year;
    newPainting.appendChild(year);

    const artist = document.createElement("p");
    artist.innerText = elem.artist;
    newPainting.appendChild(artist);
}
