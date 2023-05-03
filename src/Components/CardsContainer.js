import React from "react";
import BookCard from "./BookCard";
import { Container } from "react-bootstrap";
import "../Styles/CardsContainer.css";

function CardsContainer({ books }) {
  return (
    <div>
      <Container className="cards-container">
        <div className="d-flex justify-content-between">
          {/* <h3>{title}</h3> */}
        </div>
        <hr className="border border-secondary mt-0" />
        <div className="book-cards">
          {books.map((book) => (
            <BookCard key={book.id} book={book}></BookCard>
          ))}
        </div>
      </Container>
    </div>
  );
}

export default CardsContainer;
