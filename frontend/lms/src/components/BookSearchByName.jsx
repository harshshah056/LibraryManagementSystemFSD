import React, { useState } from 'react';

function BookSearchByName({ onSearch }) {
  const [title, setTitle] = useState('');

  const handleSearch = () => {
    // Call the onSearch function with the title as parameter
    onSearch(title);
  };

  return (
    <div>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Enter book title"
      />
      <button onClick={handleSearch}>Search</button>
    </div>
  );
}

export default BookSearchByName;
