const posts = [
    { title: 'Post One', body: 'This is post one'},
    { title: 'Post two', body: 'This is post one'},
]

const getPosts = () => {
     setTimeout(() => {
        let output = ''
        posts.forEach((post) => {
            output += `<li>${post.title}</li>`
        })
        document.body.innerHTML = output
     }, 1000)
}



createOne = (post, callback) => {
    setTimeout(() => {
        posts.push(post)
        callback()
    },2000)
}

createOne({ title: 'post three', body: 'their are three'}, getPosts)