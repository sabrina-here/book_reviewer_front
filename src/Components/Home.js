import React, { useEffect, useState } from "react";
import CardsContainer from "./CardsContainer";

function Home() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetch("https://gutendex.com/books")
      .then((res) => res.json())
      .then((data) => {
        setBooks(data.results);
        // console.log(data.results);
      });
  }, []);

  return (
    <div>
      <CardsContainer books={books}></CardsContainer>
    </div>
  );
}

export default Home;
