import React from "react";
import profile from "../Images/profile.png";
import { Container } from "react-bootstrap";

function ReviewCard({ r }) {
  const textStyles = {
    fontWeight: "300",
    fontSize: "15px",
  };

  return (
    <Container className="border border-4 rounded my-2">
      <div className="container my-3">
        <div className="d-flex">
          <img src={profile} alt="profile" style={{ width: "45px" }} />
          <p className="mt-2 mx-2">{r.reader}</p>
        </div>
        <hr />
        <p className="text-start" style={textStyles}>
          {r.review}
        </p>
      </div>
    </Container>
  );
}

export default ReviewCard;
