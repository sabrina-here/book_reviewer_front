import React, { useContext, useRef, useState } from "react";
import { BooksInfoContext } from "./BooksContext";

function AddReview({ id }) {
  const [reviews, setReviews] = useState({ book_id: id });
  const { setBookReviews, bookReviews } = useContext(BooksInfoContext);
  const inputRef = useRef(null);
  const nameRef = useRef(null);

  const handleOnChange = (e) => {
    setReviews({ ...reviews, [e.target.name]: e.target.value });
    console.log(reviews);
  };

  const handleSubmit = () => {
    console.log(reviews);

    fetch(`http://localhost:5000/review`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(reviews),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged) {
          alert("review added successfully");
          inputRef.current.value = "";
          nameRef.current.value = "";
          setBookReviews(...bookReviews, reviews);
        }
      });
  };

  return (
    <div>
      <div className="d-flex w-100 justify-content-between">
        <div className="mb-3">
          <input
            type="text"
            className="form-control "
            id="exampleFormControlInput1"
            placeholder="Enter name"
            required
            name="reader"
            onChange={handleOnChange}
            ref={nameRef}
          />
        </div>
        <div
          className="btn btn-success border-primary mb-3"
          onClick={handleSubmit}
        >
          POST
        </div>
      </div>
      <div className="mb-3">
        <textarea
          className="form-control w-80"
          id="exampleFormControlTextarea1"
          placeholder="Write a review"
          name="review"
          onChange={handleOnChange}
          rows="3"
          ref={inputRef}
        ></textarea>
      </div>
    </div>
  );
}

export default AddReview;
