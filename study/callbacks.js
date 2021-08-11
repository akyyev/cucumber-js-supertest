
let posts = [
    { title: 'Post One', content: 'This is post one' },
    { title: 'Post Two', content: 'This is post two' }
]

// takes a second
const printPosts = (message) => {
    setTimeout(() => {
        let output = '';
        // example of passing argument from another call
        document.body.innerHTML = `<h1>${message}</h1>`;

        // higher order function
        posts.forEach(post => {
            output += `<li>${post.content}</li>`
        })
        document.body.innerHTML += output;
    }, 1000);
}

// takes 2 seconds
const createPost = (newPost, callback, message) => {
    setTimeout(() => {
        posts.push(newPost);
        callback(message);
    }, 2000);
}

const third = { title: 'Post Three', content: 'This is post three' };
// Here we want to get posts right after creating one
createPost(third, printPosts, 'Hello How Are You?');

