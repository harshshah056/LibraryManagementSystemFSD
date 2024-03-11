import React, { useState } from 'react';
import axios from 'axios';

function IssueBookForm({ book }) {
  const [userId, setUserId] = useState('');
  const [issueError, setIssueError] = useState(null);

  const handleIssueBook = () => {
    // Send a request to your backend API to issue the book
    axios.post('http://localhost:8081/api/books/{bookId}/borrow/{userId}', {
      bookId: parseInt(book.id),
      userId: parseInt(userId) // Assuming userId is provided as a string
    })
    .then(response => {
      // Handle the successful issuance response, e.g., update the UI
      console.log('Book issued successfully:', response.data);
    })
    .catch(error => {
      // Handle the error, e.g., display an error message
      console.error('Error issuing book:', error);
      setIssueError('Failed to issue the book. Please try again.');
    });
  };

  return (
    <div>
      <h3>Issue Book</h3>
      <label htmlFor="userId">User ID:</label>
      <input
        type="text"
        id="userId"
        value={userId}
        onChange={(e) => setUserId(e.target.value)}
      />
      <button onClick={handleIssueBook}>Issue Book</button>
      {issueError && <p style={{ color: 'red' }}>{issueError}</p>}
    </div>
  );
}

export default IssueBookForm;




