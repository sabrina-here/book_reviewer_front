import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import CopyText from "./CopyText";

function ApiPage() {
  return (
    <div className="my-5">
      <Container>
        <Row>
          <Col>
            <h4 className="fw-bold">API's used by us </h4>
            <hr />
            <div className="d-flex flex-column align-items-center justify-content-center ">
              <p>Books rest API :</p>
              <CopyText text="https://gutendex.com/books/"></CopyText>
              <p>Get only the book with id 1513</p>
              <CopyText text="https://gutendex.com/books/1513"></CopyText>
            </div>
          </Col>
          <Col>
            <h4 className="fw-bold">API's Provided by us</h4>
            <hr />
            <div className="d-flex flex-column align-items-center justify-content-center ">
              <p>Get all reviews :</p>
              <CopyText text="http://localhost:5000/reviews"></CopyText>
              <p>Get all review of the book with id "1513" :</p>
              <CopyText text="http://localhost:5000/reviews/1513"></CopyText>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default ApiPage;
