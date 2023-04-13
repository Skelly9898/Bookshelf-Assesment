const title = document.getElementById('title')
const author = document.getElementById('author')
const subject = document.getElementById('subject')
const language = document.getElementById('language')
const newBookButton = document.getElementById('newBookButton')

const bookInstance = new Bookshelf()

bookInstance.seed(bookData)

bookInstance.render()

newBookButton.addEventListener('click', ()=>{
    const addNewBook = {
        author: [author.value],
        language: language.value,
        subject: [subject.value],
        title: title.value
    }

    bookData.push(addNewBook)
    bookInstance.seed(bookData)
    bookInstance.render()
    console.log(bookData)
})

