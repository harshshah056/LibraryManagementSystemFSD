// App.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import BookList from './components/BookList';
import IssueReturnBook from './components/IssueReturnBook';
import BookDetails from './components/BookDetails';
import SearchBookById from './components/SearchBookById';
import BookSearchByName from './components/BookSearchByName';
import IssueBookForm from './components/IssueBookForm';

const App = () => {
  const [books, setBooks] = useState([]);
  const [showBooksList,setshowBooksList] = useState(false);
  const [searchResult, setSearchResult] = useState(null);

  // useEffect(() => {
  //   fetchBooks();
  // }, []);

  const searchBooksByTitle = async (title) => {
    try {
      const response = await axios.get(`http://localhost:8081/api/books/search?title=${title}`);
      setSearchResult(response.data);
    } catch (error) {
      console.error('Error searching books:', error);
    }
  };

  const fetchBooks = async () => {
    try {
      const response = await axios.get('http://localhost:8081/api/books');
      setBooks(response.data);
      setshowBooksList(true);
    } catch (error) {
      console.error('Error fetching books: ', error);
    }
  };


  const issueBook = async (bookId) => {
    // Implement issue book functionality

  };

  const returnBook = async (bookId) => {
    // Implement return book functionality
  };

  return (
    <div>
      <h1>Library Management System</h1>

      <button onClick={fetchBooks}>Fetch all books </button>
      {
        showBooksList &&
        <BookList books={books}/>
      }

      <SearchBookById/>

      <div>
      <h1>Book Search</h1>
      <BookSearchByName onSearch={searchBooksByTitle} />
      {searchResult && <BookDetails book={searchResult} />}
    </div>
      <IssueReturnBook onIssue={issueBook} onReturn={returnBook} />
    </div>
  );
}
export default App;