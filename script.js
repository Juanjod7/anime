const contenedor_cards = document.getElementById("contenedor_cards");

const inputBusqueda = document.getElementById('buscar');

let ciudadesFiltrados = [];

fetch("anime.json")
    .then(res => res.json())
    .then(animes => {
        console.log(animes);
        crearTarjetas(animes);

        // Guardamos las ciudades en una variable
        animesFiltrados = animes;
    });


let templateCard = "";

function crearTarjetas(animes) {
    templateCard = "";

    for (const anime of animes) {
        templateCard += `
        <div class="card">
            <img src="${anime.imagen}" alt="${anime.anime} ${anime.id}">
            <p>${anime.anime}</p>
            <a class="btn btn-danger" href="./info.html?id=${anime.id}">Mas info</a>
        </div>`;
    }

    contenedor_cards.innerHTML = templateCard;
}


inputBusqueda.addEventListener('input', () => {
    const inputValue = inputBusqueda.value;

    crearTarjetasInput();

    if (animesFiltradosInput.length === 0) {
        contenedor_cards.innerHTML = "<h2>Sin Resultados</h2>";
    }

    console.log(animesFiltradosInput);
    
    let labelBuscar = document.getElementById("labelBuscar");
    labelBuscar.innerHTML = inputValue;
    console.log(inputValue);
});

function crearTarjetasInput() {
    const textoBusqueda = inputBusqueda.value.toLowerCase();
    
    animesFiltradosInput = animesFiltrados.filter(anime => anime.anime.toLowerCase().includes(textoBusqueda));

    templateCard = "";

    for (const anime of animesFiltradosInput) {
        templateCard += `
        <div class="card">
            <img src="${anime.imagen}" alt="${anime.anime} ${anime.id}">
            <p>${anime.anime}</p>
            <a class="btn btn-danger" href="./info.html?id=${anime.id}">Mas info</a>
        </div>`;
    }
    
    contenedor_cards.innerHTML = templateCard;
}