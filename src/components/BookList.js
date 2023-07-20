import React from 'react';

const BookList = ({ books }) => {
  return (
    <div className="book-list">
    
      <div className="animate__animated animate__fadeIn">
        <br></br>
        {books.map((book) => (
          <div className="box" key={book.title}>
              <h3  className="center-text" id="title">{book.title}</h3>

             {book.imageLink && (
              <img src={book.imageLink}  className="center-text" alt={`Cover of ${book.title}`} style={{ maxWidth: '150px' }} />
            )}  {/* To include images */}
           
          
            <p  className="center-text">
              <a href={book.link} target="_blank" rel="noopener noreferrer">
                View Book
              </a>
            </p> {/* To include book links */}

            {/* Booklist details */}
            <p  className="center-text">Author: {book.author}</p>
            <p  className="center-text">Country: {book.country}</p>
            <p  className="center-text">Language: {book.language}</p>
            <p  className="center-text">Pages: {book.pages}</p>
            <p  className="center-text">Year Published: {book.year}</p>
            
           
          </div>
        ))}
      </div>
    </div>
  );
};

export default BookList;
