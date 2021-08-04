
let posts = [
    { title: 'Post One', content: 'This is post one' },
    { title: 'Post Two', content: 'This is post two' }
]


const getPosts = () => {
    setTimeout(() => {
        let output = '';

        // higher order function
        posts.forEach(post => {
            output += `<li>${post.content}</li>`
        })
        document.body.innerHTML = output;
    }, 1000);
}

const createPost = (newPost) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            posts.push(newPost);
            const error = false;

            if(!error) {
                resolve();
            } else {
                reject('Error: Something went wrong!');
            }
            
        }, 2000);
    })
}

const third = { title: 'Post Three', content: 'This is post three' };
// Here we want to get posts right after creating one
// createPost(third)
// .then(getPosts)
// .catch(console.log);;

async function init() {
    await createPost({ title: 'Post Three', content: 'This is post three' });
    getPosts();
}

init();


const promise1 = Promise.resolve('Hello World!');
const promise2 = 10;
const promise3 = new Promise((res, rej) => {
    setTimeout(res, 2000, 'Hi');
})

const promise4 = fetch('https://jsonplaceholder.typicode.com/users').then(response => response.json());

const fetchUsers = async () => {
    // fetch with async await
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    const json = await response.json();
    return json;
}

console.log(fetchUsers());

Promise.all([ promise1, promise2, promise3, promise4, fetchUsers ]).then(data => console.log(data));