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
              <CopyText text="http://localhost:5000/"></CopyText>
              <CopyText text="http://localhost:5000/"></CopyText>
            </div>
          </Col>
          <Col>
            <h4 className="fw-bold">API's Provided by us</h4>
            <hr />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default ApiPage;
