import React from "react";
import profile from "../Images/profile.png";
import { Container } from "react-bootstrap";

function ReviewCard({ r }) {
  return (
    <Container>
      <div className="d-flex ">
        <img src={profile} alt="profile" style={{ width: "45px" }} />
        <p className="mt-2 mx-2">{r.reader}</p>
      </div>
      <p>{r.review}</p>
    </Container>
  );
}

export default ReviewCard;
