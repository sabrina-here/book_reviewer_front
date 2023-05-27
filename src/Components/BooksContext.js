import React, { createContext, useState } from "react";

export const BooksInfoContext = createContext();

function BooksContext({ children }) {
  const [currentBook, setCurrentBook] = useState({});

  return (
    <BooksInfoContext.Provider value={{ currentBook, setCurrentBook }}>
      {children}
    </BooksInfoContext.Provider>
  );
}

export default BooksContext;
