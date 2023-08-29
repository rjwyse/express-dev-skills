console.log("working")

const btn = document.querySelector('#add-comment')
const input = document.querySelector('input')
const ulEl = document.querySelector('ul')


//create a new Li Element √
//set its text to be the input value √
//append it to the il block
//clear out the input so we can type something new



// Attach event listener to our button
btn.addEventListener('click', function(evt){
  // testing!
    const newCommentEl = document.createElement
    ('li')
    const commentText = inputEl.value
  
    newCommentEl.innerText = commentText
    ulEl.append(newCommentEl)
    inputEl.value = ""
})

function handleClick(evt) {
    console.log(evt.target)
}

ulEl.addEventListener('click', handleClick)

const redBtn = document.querySelector('#red')
const blueBtn = document.querySelector('#blue')

redBtn.addEventListener('click', function(){
    document.body.style.backgroundColor = "red"
})

blueBtn.addEventListener('click', function(){
    document.body.style.backgroundColor ="blue"
})

const hideBtn = document.querySelector('#hide')
const showBtn = document.querySelector('#show')

hideBtn.addEventListener('click', function(){
    ulEl.classList.add('hidden')
})


showBtn.addEventListener('click' , function(){
    ulEl.classList.remove('hidden')
})