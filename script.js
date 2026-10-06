
const botaoInicio = document.getElementById("inicio");
const botaoBiblioteca = document.getElementById("btn-biblioteca");

const secaoMusicas = document.getElementById("musicas");
const secaoAlbuns = document.getElementById("albuns");
const secaoArtistas = document.getElementById("artistas");



// PLAYER DE ÁUDIO


const audio = new Audio();

let musicaAtual = null;




const musicas = [
    {
        nome: "Bem Pior Que Eu",
        artista: "Marília Mendonça",
        capa: "./todososcantos.jpg",
        audio: "./bempiorqeu.mpeg"
    },
    {
         nome: "Cidade Vizinha",
        artista: "Henrique & Juliano",
        capa: "./hj.jpg",
        audio: "./henriqueejuliano.mpeg"
    },
    {
        nome: "Posso Até Não Te Dar Flores",
        artista: "Dj Japa NK & Mc Menok",
        capa: "./posso.jfif",
        audio: "./menok.mpeg"
    },
    {
        nome: "Bemba",
        artista: "Anitta",
        capa: "./anita.jpg",
        audio: "./anita.mpeg"
    },
    {
        nome: "Asa Branca",
        artista: "Luiz Gonzaga",
        capa: "./asabranca.jfif",
        audio: "./luisgonzaga.mpeg"
    },
    
];




musicas.forEach(function(musica) {

    const card = document.createElement("div");

    card.classList.add("card-musica");

    card.innerHTML = `
        <div class="capa-musica">
            <img src="${musica.capa}" alt="${musica.nome}">
        </div>

        <h2>${musica.nome}</h2>
        <p>${musica.artista}</p>
    `;

    secaoMusicas.appendChild(card);




    const capa = card.querySelector(".capa-musica");

    capa.addEventListener("click", function() {

        if (!musica.audio) {
            console.log("Essa música ainda não possui áudio.");
            return;
        }

        if (musicaAtual !== musica) {

            musicaAtual = musica;

            audio.src = musica.audio;
            audio.play();

            console.log("Tocando:", musica.nome);

        } else if (!audio.paused) {

            audio.pause();

            console.log("Pausada:", musica.nome);

        } else {

            audio.play();

            console.log("Continuando:", musica.nome);
        }
    });
});






const albuns = [
    {
        nome: "Patroas 35%",
        artista: "Marília Mendonça, Maiara & Maraísa",
        capa: "./patroas.jpg"
    },

    {
        nome: "Novas Histórias (Ao Vivo)",
        artista: "Henrique & Juliano",
        capa: "./hej.jfif"
    },

    
];




albuns.forEach(function(album) {

    const card = document.createElement("div");

    card.classList.add("card-musica");

    card.innerHTML = `
        <div class="capa-musica">
            <img src="${album.capa}" alt="${album.nome}">
        </div>

        <h2>${album.nome}</h2>
        <p>${album.artista}</p>
    `;

    secaoAlbuns.appendChild(card);
});




const artistas = [
    {
        nome: "Marília Mendonça",
        foto: "./marilia.png"
    },
    {
        nome: "Ana Castela",
        foto: "./ana.png"
    },
    {
        nome: "Henrique & Juliano",
        foto: "./hej.png"
    },
     {
        nome: "Maiara & Maraisa",
        foto: "./maiara.png"
    },
     {
        nome: "Ariana Grande",
        foto: "./ariana.png"
    },
     {
        nome: "Rihanna",
        foto: "./rihana.png"
    },
    {
        nome: "Anitta",
        foto: "./anita.png"
    },
    {
        nome: "Mc Menok",
        foto: "./menok.png"
    },
    {
        nome: "Alok",
        foto: "./alok.png"
    },
];




artistas.forEach(function(artista) {

    const card = document.createElement("div");

    card.classList.add("card-artista");

    card.innerHTML = `
        <div class="foto-artista">
            <img src="${artista.foto}" alt="${artista.nome}">
        </div>

        <h2>${artista.nome}</h2>
    `;

    secaoArtistas.appendChild(card);
});