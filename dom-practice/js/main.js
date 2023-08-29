const title = document.getElementById('title')
titleEl.style.textAlign = 'center'

const pEl = document.querySelector('.cool')
//console.dir(pEl)

pEl.innerText = "coments for <strong>Today</strong"
pEl.style.color = 'blue'

const linkEl = document.querySelector('a')
linkEl.setAttribute('href', 'https://www.google.com')

const commentEls = document.querySelectorAll('#comments > li')
//console.log(commentEls)

for ( let commentEl of commentEls) {
    //console.log(commentEl)
    commentEl.style.fontSize = '30px'
}
