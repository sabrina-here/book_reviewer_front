import React from "react";
import { useLoaderData } from "react-router-dom";
import CardsContainer from "./CardsContainer";

function SearchedBooksPage() {
  const searchResult = useLoaderData();
  const books = searchResult.results;
  console.log(books);
  return (
    <div>
      <CardsContainer books={books}></CardsContainer>
    </div>
  );
}

export default SearchedBooksPage;
