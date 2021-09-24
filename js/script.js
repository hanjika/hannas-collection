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

const docMain = document.querySelector("main");
docMain.classList.add("first-page");

const allMovements = document.createElement("section");
allMovements.classList.add("movements");
docMain.appendChild(allMovements);

for (let i = 0; i < 10; i++){
    const newMovement = document.createElement("article");
    allMovements.appendChild(newMovement);

    const image = document.createElement("img");
    const photo = randomImage(i);
    image.setAttribute("src", photo);
    newMovement.appendChild(image);

    const title = document.createElement("h2");
    title.innerText = COLLECTION[i].movement;
    newMovement.appendChild(title);

    const ul =  document.createElement("ul");
    newMovement.appendChild(ul);

    const period = document.createElement("p");
    period.innerText = "Period: " + COLLECTION[i].period;
    newMovement.appendChild(period);

    const place = document.createElement("p");
    place.innerText = "Place of origin: " + COLLECTION[i].placeOfOrigin;
    newMovement.appendChild(place);

    const discoverArt = document.createElement("a");
    const link = links[i];
    discoverArt.setAttribute("href", link);
    discoverArt.innerText = "Discover artwork";
    newMovement.appendChild(discoverArt);

    const traits = randomTraits(i);
    for (elem of traits){
        const li = document.createElement("li");
        li.innerText = elem;
        ul.appendChild(li);
        li.style.background = colour;
        li.style.color = textColour;
    }

    discoverArt.style.textDecorationColor = colour;
}