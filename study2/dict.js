import { createDom, acar } from './utils/helper.js';
let giphyAPI = `https://api.giphy.com/v1/gifs/search?api_key=${acar.giphy}&q=`;

export async function init() {

    const word = await fetch('https://random-word-form.herokuapp.com/random/noun?count=1').then(res => res.json());
    const meaning = await fetch('https://api.dictionaryapi.dev/api/v2/entries/en/' + word[0]).then(res => res.json());

    const response2 = await fetch(giphyAPI + word[0]);
    const picture = await response2.json();

    const gifImage = picture?.data[0]?.images['fixed_height']?.url;
    const definition = meaning[0]?.meanings[0]?.definitions[0]?.definition;
    const audioUrl = meaning[0]?.phonetics[0]?.audio;

    $('#word').text(word[0]);
    $('#gif_image').attr('src', gifImage);
    $('#definition').text(definition);

    createDom(`<div class='audio-container'><audio controls autoplay> <source src="${audioUrl}" type="audio/mp3"></audio> </div>`);
}

init();
