
import { createDom, createImage, acar } from './helper.js';

const randomWord = `http://api.wordnik.com/v4/words.json/randomWords?hasDictionaryDef=true&minCorpusCount=8000&limit=1&api_key=${acar.wordnik}`;
let giphyAPI = `https://api.giphy.com/v1/gifs/search?api_key=${acar.giphy}&q=`;

let word = '';

function randomWordAndImage() {
    fetch(randomWord)
        .then(res => res.json())
        .then(data => {
            word = data[0].word;
            createDom(`<h1>${word}</h1>`, 'word');
            return fetch(giphyAPI + word).then(res => res.json())
        })
        .then(json => {
            const url = `<img src="${json?.data[0]?.images['fixed_height_small']?.url}`
            createImage(url);
        })
        .catch(err => {
            createDom("<div>Some error has happened while fetching word and gif, try again...</div>")
            console.log(err);
        })
}

// Returns promisified object
async function wordGIF(length) {
    const response = await fetch(randomWord + `&minLength=${length}&maxLength=${length}`);
    const json1 = await response.json();
    const response2 = await fetch(giphyAPI + json1[0].word);
    const json2 = await response2.json();

    return {
        word: json1[0].word,
        url: json2.data[0]?.images['fixed_height_small']?.url
    }
}

// Since wordGIF returns a promise we can call then and catch
// wordGIF(3)
//     .then((data) => {
//         createDom(data.word, 'word');
//         createImage(data.url, 'image');
//     })
//     .catch(console.error)


let promises = [wordGIF(3), wordGIF(4), wordGIF(5), wordGIF(7)];
// Promise.all works for making sequential calls and if any of them fail it will to catch block
Promise.all(promises)
    .then(results => {
        results.forEach(data => {
            createDom(data.word, 'word');
            createImage(data.url, 'image');
        });
    })
    .catch(console.error)