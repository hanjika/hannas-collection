function randomInteger(min, max){
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function randomImage(n){
    let randnum = randomInteger(0, 5);
    return COLLECTION[n].paintings[randnum].link;
}

function randomTraits(n){
    let traits = COLLECTION[n].characteristics;
    let finalAr = [];
    let total = traits.length;
    for (j = 0; j < total; j++){
        let randnum = randomInteger(0, traits.length - 1);
        finalAr.push(traits[randnum]);
        traits.splice(randnum, 1);
    }
    return finalAr;
}

function randomColour(colourScheme){
    let randnum = randomInteger(0, colourScheme.length - 1);
    let finalCol = colourScheme[randnum];
    return finalCol;
}

let links = ["realism.html", "impressionism.html", "post-impressionism.html", "cubism.html", 
"surrealism.html", "abstract.html", "popart.html", "artnouveau.html", "photorealism.html", "renaissance.html"];

let colourScheme = ["#264653", "#2a9d8f", "#e9c46a", "#f4a261", "#e76f51"];
let textColour = "white";
let colour = randomColour(colourScheme);
document.body.style.background = colour;
if (colour === "#e9c46a" || colour === "#f4a261"){
    textColour = "black";
}
document.body.style.color = textColour;

const allMovements = document.createElement("section");
allMovements.classList.add("movements");
const docMain = document.querySelector("main");
docMain.appendChild(allMovements);

for (let i = 0; i < 10; i++){
    const newMovement = document.createElement("article");
    const title = document.createElement("h2");
    const name = document.createTextNode(COLLECTION[i].movement);
    const image = document.createElement("img");
    const photo = randomImage(i);
    image.setAttribute("src", photo);
    const ul =  document.createElement("ul");
    const p1 = document.createElement("p");
    const p2 = document.createElement("p");
    const artists = document.createElement("a");
    const link = links[i];
    artists.setAttribute("href", link);
    const discover = document.createTextNode("Discover artwork");
    const traits = randomTraits(i);
    const period = document.createTextNode("Period: " + COLLECTION[i].period);
    const place = document.createTextNode("Place of origin: " + COLLECTION[i].placeOfOrigin);
    for (elem of traits){
        let oneChar = document.createTextNode(elem);
        const li = document.createElement("li");
        li.appendChild(oneChar);
        ul.appendChild(li);
        li.style.background = colour;
        li.style.color = textColour;
    }
    artists.style.textDecorationColor = colour;
    newMovement.appendChild(image);
    title.appendChild(name);
    newMovement.appendChild(title);
    newMovement.appendChild(ul);
    p1.appendChild(period);
    p2.appendChild(place);
    newMovement.appendChild(p1);
    newMovement.appendChild(p2);
    artists.appendChild(discover);
    newMovement.appendChild(artists);
    allMovements.appendChild(newMovement);
}