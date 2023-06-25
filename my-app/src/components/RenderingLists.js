import React from 'react'

function RenderingLists() {
    
    const bookList = [
        'to kill a mocking bird',
        'the great gatsby',
        'the catcher in the rye'
    ]

    const book = [
        {
            title: 'to kill a mocking bird',
            author: 'lee harper',
            pages: 281
        },
        {
            title: 'the great gatsby',
            author: 'f. scott fitzgerald',
            pages: 218
        },
        {
            title: 'the catcher in the rye',
            author: 'j. d. salinger',
            pages: 234
        },
    ]

  return (
    <div>
        {bookList.map(book => {
            return <h2>{book}</h2>
        })}
        {
            book.map(book => {
                return(
                   <div>
                    <h5>{book.title}</h5>
                    <p>{book.author}</p>
                    <p>{book.pages}</p>
                </div> 
            )
            })   
        }
    </div>
  )
}

export default RenderingLists