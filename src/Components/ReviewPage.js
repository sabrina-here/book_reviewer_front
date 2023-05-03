import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useLoaderData } from "react-router-dom";
import ReviewBookCard from "./ReviewBookCard";
import "../Styles/ReviewPage.css";
import AddReview from "./AddReview";
import ReviewCard from "./ReviewCard";

function ReviewPage() {
  const [bookReviews, setBookReviews] = useState([]);
  const book = useLoaderData();

  useEffect(() => {
    fetch(`http://localhost:5000/reviews/${book.id}`)
      .then((res) => res.json())
      .then((data) => setBookReviews(data));
  }, []);
  return (
    <div>
      <Container className="my-2 ">
        <Row className="my-5">
          <Col className="justify-content-center">
            <ReviewBookCard book={book}></ReviewBookCard>
          </Col>
          <Col className="mt-2">
            <div className="review-box border border-success rounded">
              <AddReview id={book.id}></AddReview>
              <hr />
              <div className="reviews">
                {bookReviews.map((r) => (
                  <ReviewCard key={r._id} r={r}></ReviewCard>
                ))}
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default ReviewPage;
