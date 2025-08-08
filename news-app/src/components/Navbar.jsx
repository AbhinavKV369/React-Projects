import React from 'react'

const Navbar = ({setCategory}) => {
  return (
    <nav
      className="navbar navbar-expand-lg p-3 bg-body-tertiary fw-bold"
      data-bs-theme="dark">
      <div className="container-fluid">
        <a
          className="navbar-brand fw-bold p-2 bg-black border border-2 border-danger rounded"
          href="#">
          News-App
        </a>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a
                className="nav-link active"
                onClick={() => setCategory("general")}
                aria-current="page"
                href="#">
                General
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link active"
                onClick={() => setCategory("business")}
                aria-current="page"
                href="#">
                Business
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link active"
                onClick={() => setCategory("entertainment")}
                aria-current="page"
                href="#">
                Entertainment
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link active"
                onClick={() => setCategory("health")}
                aria-current="page"
                href="#">
                Health
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link active"
                onClick={() => setCategory("science")}
                aria-current="page"
                href="#">
                Science
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link active"
                onClick={() => setCategory("sports")}
                aria-current="page"
                href="#">
                Sports
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link active"
                onClick={() => setCategory("technology")}
                aria-current="page"
                href="#">
                Technology
              </a>
            </li>
          </ul>
          <form className="d-flex" role="search">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button className="btn btn-outline-success" type="submit">
              Search
            </button>
          </form>
        </div>
      </div>
    </nav>
  );
}

export default Navbar