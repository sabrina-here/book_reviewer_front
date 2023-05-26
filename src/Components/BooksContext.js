import React, { createContext, useEffect, useState } from "react";

export const BooksInfoContext = createContext();

function BooksContext({ children }) {
  const [bookReviews, setBookReviews] = useState([]);
  const [currentBook, setCurrentBook] = useState({});

  useEffect(() => {
    fetch(`http://localhost:5000/reviews/${currentBook.id}`)
      .then((res) => res.json())
      .then((data) => setBookReviews(data));
  }, [bookReviews, currentBook]);

  return (
    <BooksInfoContext.Provider
      value={{ bookReviews, setBookReviews, currentBook, setCurrentBook }}
    >
      {children}
    </BooksInfoContext.Provider>
  );
}

export default BooksContext;
