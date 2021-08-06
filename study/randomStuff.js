
import { createDom } from './helper.js';

const randomWord = 'http://api.wordnik.com/v4/words.json/randomWords?hasDictionaryDef=true&minCorpusCount=8000&minLength=2&maxLength=15&limit=1&api_key=a2a73e7b926c924fad7001ca3111acd55af2ffabf50eb4ae5'
let giphyAPI = `https://api.giphy.com/v1/gifs/search?api_key=gULhDRsT8EXi5iku09zG7ndGOC61jQfH&q=`;

let word = '';

fetch(randomWord).then(res => res.json())
    .then(data => {
        word = data[0].word;
        createDom(`<h1>${word}</h1>`, 'word');
    })
    .catch(() => console.error(new Error('Too Many Requests. Try later!')))
    .then(() => {
        return fetch(giphyAPI + word).then(res => res.json())
    })
    .then(response => {
        const picture = `<img src="${response?.data[0]?.images['fixed_height_small']?.url}" alt="Gif is not found!">`
        createDom(picture, 'image');
    })
    .catch(console.error)
