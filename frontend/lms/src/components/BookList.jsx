// components/BookList.js
import React from 'react';

const BookList = ({ books }) => {
  return (
    <div>
      <h2>Available Books</h2>
      <ul>
         {books.map((book, index) => (
          <li key={index}>{book.title} <span>--</span> {book.author}</li>
        ))}       
      </ul>
    </div>
  );
};

export default BookList;

// {books.map((item, index) => (
//   <li key={index}>
//     {/* Display individual properties of each object */}
//     {item.title}
//   </li>
//   ))}