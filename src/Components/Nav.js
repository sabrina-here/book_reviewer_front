import React, { useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

// https://gutendex.com/books/?search=dickens

function Nav() {
  const [searchedName, setSearchedName] = useState("");
  const navigate = useNavigate();
  const inputRef = useRef(null);

  const handleSetSearchedName = (event) => {
    setSearchedName(event.target.value);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    console.log(searchedName);
    navigate(`/searchedBooksPage/${searchedName}`);
    inputRef.current.value = "";
  };

  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <Link className="navbar-brand text-success" to="/">
            Book Reviewer
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link
                  to="/"
                  className="nav-link active"
                  aria-current="page"
                  href="#"
                >
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/apiPage"
                  className="nav-link active"
                  aria-current="page"
                  href="#"
                >
                  API
                </Link>
              </li>
            </ul>
            <form className="d-flex" role="search">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search by name/author/type"
                aria-label="Search"
                onChange={handleSetSearchedName}
                ref={inputRef}
              />
              <button
                className="btn btn-outline btn-outline-success"
                onClick={handleSearch}
                type="submit"
              >
                Search
              </button>
            </form>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Nav;
