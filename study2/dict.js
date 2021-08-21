import { acar } from './utils/helper.js';
let giphyAPI = `https://api.giphy.com/v1/gifs/search?api_key=${acar.giphy}&q=`;

async function init() {

    const word = await fetch('https://random-word-form.herokuapp.com/random/adjective?count=1').then(res => res.json());
    const meaning = await fetch('https://api.dictionaryapi.dev/api/v2/entries/en/' + word[0]).then(res => res.json());

    const giphyResp = await fetch(giphyAPI + word[0]);
    const picture = await giphyResp.json();

    const gifImage = picture?.data[0]?.images['fixed_height']?.url;
    const definition = meaning[0]?.meanings[0]?.definitions[0]?.definition;
    const audioUrl = meaning[0]?.phonetics[0]?.audio;

    document.getElementById('word').innerHTML = word[0];
    document.getElementById('gif_image').setAttribute('src', gifImage);
    document.getElementById('definition').innerHTML = definition? definition : 'Couldn\'t find definition';
    document.getElementsByTagName('audio')[0].src = audioUrl;

    // Jquery way of interacting with DOM elements
    // $('#word').text(word[0]);
    // $('#gif_image').attr('src', gifImage);
    // $('#definition').text(definition);
    // $('source').attr('src', audioUrl);

}

init();

document.getElementById("randomWord").onclick = init;
