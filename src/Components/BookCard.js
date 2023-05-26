import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../Styles/BookCard.css";
import AllModal from "./AllModal";

function BookCard({ book }) {
  const [modalText, setModalText] = useState("Book not available yet!!");
  const [modalShow, setModalShow] = useState(false);
  // console.log(book);
  const { title, id } = book;
  const author = book.authors[0].name;
  const bookImage = book.formats["image/jpeg"];
  const bookLink = book.formats["text/html; charset=utf-8"];
  console.log(bookLink);
  return (
    <div>
      <AllModal
        modalText={modalText}
        modalShow={modalShow}
        setModalShow={setModalShow}
      ></AllModal>
      <div>
        <div className="card my-2 text-center " style={{ width: "18rem" }}>
          <img src={bookImage} className="card-img-top img-fluid" alt="" />
          <div className="card-body">
            <h5 className="card-title ">
              {title.length > 26 ? title.slice(0, 26) : title}
            </h5>

            <p className="card-text fw-bold text-secondary">Author: {author}</p>

            <div className="d-flex justify-content-around py-3">
              <a
                href={bookLink}
                className="btn btn-light border border-success px-4 "
                onClick={() => bookLink == null && setModalShow(true)}
              >
                Read
              </a>
              <Link
                to={`/reviewPage/${id}`}
                className="btn btn-light border border-success"
              >
                {" "}
                Reviews
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BookCard;
