
import { createDom } from './helper.js';


function setup() {
    delayES8('3000')
        .then(printHello)
        .then(() => createDom('Something else'))
        .catch(console.log)
}

// It's something to deal with promises
const delayES8 = async (time) => {
    await delay(time);
    return;
}


const delay = (secs) => {
    return new Promise((resolve, reject) => {
        if(isNaN(secs)) {
            reject(new Error('Please pass a number!'));
        }
        setTimeout(resolve, secs);
    })
}

const printHello = () => {
    createDom('<h1>Hello</h1>', 'hello');
}

setup();