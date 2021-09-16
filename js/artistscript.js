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


let i = whichMovement();
const intro = document.createElement("p");
const introText = document.createTextNode(COLLECTION[i].movement + " began in " + COLLECTION[i].placeOfOrigin + " and took place between " + COLLECTION[i].period + ".");
intro.appendChild(introText);
const docMain = document.querySelector("main");
docMain.appendChild(intro);
const allPaintings = document.createElement("section")
allPaintings.classList.add("artwork");
docMain.appendChild(allPaintings);

let works = COLLECTION[i].paintings;
for (let j = 0; j < 6; j++){
    const newPainting = document.createElement("article");
    const imageLink = document.createElement("a");
    const fig = document.createElement("figure");
    const image = document.createElement("img");
    const title = document.createElement("figcaption");
    const titleName = document.createTextNode(works[j].title);
    title.appendChild(titleName);
    const year = document.createElement("p");
    const yearText = document.createTextNode(works[j].year);
    year.appendChild(yearText);
    const artist = document.createElement("p");
    const artistName = document.createTextNode(works[j].artist);
    artist.appendChild(artistName);
    image.setAttribute("src", works[j].link);
    imageLink.setAttribute("href", works[j].link);
    imageLink.setAttribute("target", "_blank");
    imageLink.appendChild(image);
    fig.appendChild(imageLink);
    fig.appendChild(title);
    newPainting.appendChild(fig);
    newPainting.appendChild(year);
    newPainting.appendChild(artist);
    allPaintings.appendChild(newPainting);
}
