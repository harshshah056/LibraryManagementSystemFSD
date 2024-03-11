import React from 'react';

//For search a book by id 

function BookDetails  ({ book })  {
   return  (
    <div>        
        <h2>Book Details</h2>
        <p>Title: {book.title}</p>        
      {/* Add more details as needed */}
    </div>
  );
};

export default BookDetails;
