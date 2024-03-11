import React, { useState } from 'react';
import axios from 'axios';
import BookDetails from './BookDetails'; // Assuming BookDetails component is in a separate file

function SearchBookById() {
  const [bookId, setBookId] = useState('');
  const [bookfalse,setbooktrue] = useState(false);
  const [book, setBook] = useState([]);
  const [error, setError] = useState(null);

  const fetchBookById = async () => {
    try {
      const response = await axios.get(`http://localhost:8081/api/books/single/${bookId}`);
      setBook(response.data);
      setbooktrue(true);
      setError(null);
    } catch (error) {
      console.error('Error fetching book data:', error);
      setBook(null);
      setError('Book not found');
    }
  };

  return (
    <div>
      <input
        type="text"
        value={bookId}
        onChange={(e) => setBookId(e.target.value)}
        placeholder="Enter book ID"
      />
      <button onClick={fetchBookById}>Search</button>
      {error && <p>{error}</p>}
      {bookfalse && setBook && <BookDetails book={book} />}
    </div>
  );
}

export default SearchBookById;
