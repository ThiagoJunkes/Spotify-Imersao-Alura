const searchInput = document.getElementById('search-input');
const resultsArtist = document.getElementById('result-artist');
const resultPlaylist = document.getElementById('result-playlists');


// Iniciar fake api
// npm install -g json-server@0.17.4
// json-server --watch api-artists/artists.json --port 3000
const url = 'http://localhost:3000/artists';

function requestApi(searchTerm){
    const url_select = `${url}?name_like=${searchTerm}`;
    fetch(url_select)
        .then((response) => response.json())
        .then((result) => displayResults(result));
}

function displayResults(result){
    resultPlaylist.classList.add("hidden");
    const artistName = document.getElementById('artist-name');
    const artistImage = document.getElementById('artist-img');

    result.forEach(element => {
        artistName.innerText = element.name;
        artistImage.src = element.urlImg;
    });

    resultsArtist.classList.remove("hidden");
}

document.addEventListener('input', function() {
    const searchTerm = searchInput.value.toLowerCase();

    if(searchTerm === ""){
        resultPlaylist.classList.add("hidden");
        resultsArtist.classList.remove("hidden");
        return;
    }
    
    requestApi(searchTerm);
});