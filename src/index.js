// let title = require('./title')
// console.log(title)

let button = document.createElement('button')
button.innerHTML = 'Click me'
button.addEventListener('click', () => {
    import(/*webpackChunkName: 'title'*/'./title.js').then(result => {
        console.log(result.default)
    })
})

document.body.appendChild(button)