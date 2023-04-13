class Book {
    constructor(author, language, subject, title, /*imgUrl*/){
        this.author = author
        this.language = language
        this.subject = subject
        this.title = title
    }

    render(){
        //Book Container
        const bookWrapper = document.createElement('div')
        bookWrapper.className = 'books'

        //Author
        const h2 = document.createElement('h2')
        h2.textContent = `${this.author}`
        h2.className = 'text'

        //Language
        const h4 = document.createElement('h4')
        h4.textContent = `${this.language}`
        h4.className = 'text'

        //Subject
        const h3 = document.createElement('h3')
        h3.textContent = `${this.subject}`
        h3.className = 'text'

        //Title
        const h1 = document.createElement('h1')
        h1.textContent = `${this.title}`
        h1.className = 'text'

        //Comment section
        const commentSection = document.createElement('div')
        commentSection.className = 'commentSection'
        commentSection.textContent = 'Add a comment'
        commentSection.style.color = 'white'

        //Comment box
        const commentBox = document.createElement('input')
        commentBox.className = 'commentBox'

        //Comment button
        const comment = document.createElement('button')
        comment.className = 'commentButton'
        comment.textContent = 'Submit'

        comment.addEventListener('click', ()=>{
            const commentLine = document.createElement('p')
            commentLine.className = 'commentLine'
            let commentList = []
            const newComment = commentBox.value
            if(newComment.length <= 0){
                return
            }
            commentLine.append(newComment)
            commentSection.append(commentLine)
            
        })



        //I changed the order of which the information is displayed in a way I think makes more sense
        bookWrapper.append(h1, h2, h3, h4, commentSection, commentBox, comment)
 

        return bookWrapper
    }
}

