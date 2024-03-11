import React, { useState } from 'react';
import axios from 'axios';

function IssueBookForm() {
  const [bookId, setBookId] = useState('');
  const [userId, setUserId] = useState('');
  const [message, setMessage] = useState('');

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('your_backend_api_endpoint/issue-book', {
        bookId: bookId,
        userId: userId
      });
      
      setMessage(response.data.message);
    } catch (error) {
      console.error('Error issuing book:', error);
      setMessage('Error issuing book. Please try again.');
    }
  };

  return (
    <div>
      <h2>Issue Book</h2>
      <form onSubmit={handleFormSubmit}>
        <div>
          <label htmlFor="bookId">Book ID:</label>
          <input type="text" id="bookId" value={bookId} onChange={(e) => setBookId(e.target.value)} />
        </div>
        <div>
          <label htmlFor="userId">User ID:</label>
          <input type="text" id="userId" value={userId} onChange={(e) => setUserId(e.target.value)} />
        </div>
        <button type="submit">Issue Book</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
}

export default IssueBookForm;
