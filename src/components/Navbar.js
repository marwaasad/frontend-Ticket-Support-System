import React ,{ useState } from 'react';
import { Link } from 'react-router-dom';
import logo from './images/logo.jpg';
import 'bootstrap/dist/js/bootstrap.bundle.min.js'; // If not already included in your project

function Navbar() {
  const [showBooksDropdown, setShowBooksDropdown] = useState(false);
  const [showAuthorsDropdown, setShowAuthorsDropdown] = useState(false);
  const [showResourcesDropdown, setShowResourcesDropdown] = useState(false);

    const toggleBooksDropdown = () => {
        setShowBooksDropdown(!showBooksDropdown);
    };

    const toggleAuthorsDropdown = () => {
      setShowAuthorsDropdown(!showAuthorsDropdown);
      setShowBooksDropdown(false);
    };

    const toggleResourcesDropdown = () => {
      setShowResourcesDropdown(!showResourcesDropdown);
      setShowBooksDropdown(false);
      setShowAuthorsDropdown(false);
    };

  return (
    <nav className="navbar navbar-expand-lg navbar-light" style={{ backgroundColor: '#5C4033' }}>
  <Link to="/" className="navbar-brand" style={{ color: 'white', marginLeft: '10px' }}>
    <img src={logo} alt="Logo" width="50" height="50" />
    Abyssal Publication House
  </Link>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item dropdown">
            <button
              className="nav-link dropdown-toggle"
              id="navbarDropdownBooks"
              onClick={toggleBooksDropdown}
              aria-haspopup="true"
              aria-expanded={showBooksDropdown}
              style={{ color: 'white' }}
            >
              Books
            </button>
            <div
              className={`dropdown-menu ${showBooksDropdown ? 'show' : ''}`}
              aria-labelledby="navbarDropdownBooks"
            >
              <Link to="#" className="dropdown-item">
                A Strange and Sublime Address
              </Link>
              <Link to="#" className="dropdown-item">
                A Bunch of Old Letter
              </Link>
              <Link to="#" className="dropdown-item">
                Circle of Silence
              </Link>
              <Link to="#" className="dropdown-item">
                Clear Light of Day
              </Link>
              <Link to="#" className="dropdown-item">
                Harry Potter
              </Link>
              {/* Other Book Genres */}
            </div>
          </li>
          <li className="nav-item dropdown">
            <button
              className="nav-link dropdown-toggle"
              id="navbarDropdownAuthors"
              onClick={toggleAuthorsDropdown}
              aria-haspopup="true"
              aria-expanded={showAuthorsDropdown}
              style={{ color: 'white' }}
            >
              Authors
            </button>
            <div
              className={`dropdown-menu ${showAuthorsDropdown ? 'show' : ''}`}
              aria-labelledby="navbarDropdownAuthors"
            >
              <Link to="#" className="dropdown-item">
                Amit Chaudhuri
              </Link>
              <Link to="#" className="dropdown-item">
                Jawaharlal Nehru
              </Link>
              <Link to="#" className="dropdown-item">
                Preeti Singh
              </Link>
              <Link to="#" className="dropdown-item">
                Anita Desai
              </Link>
              <Link to="#" className="dropdown-item">
                J.K. Rowling
                </Link>
                </div>
          </li>
          <li className="nav-item dropdown">
            <button
              className="nav-link dropdown-toggle"
              onClick={toggleResourcesDropdown}
              style={{ color: 'white' }}
              // rest of the attributes
            >
              Resources
            </button>
            <div
              className={`dropdown-menu ${showResourcesDropdown ? 'show' : ''}`}
              aria-labelledby="navbarDropdownResources"
            >
              <Link to="#" className="dropdown-item">
                E-books
              </Link>
              <Link to="#" className="dropdown-item">
                Research Papers
              </Link>
              {/* Other resource items */}
            </div>
          </li>
          <li className="nav-item">
  <Link to="#" className="nav-link" style={{ color: 'white' }}>
    Blogs
  </Link>
</li>
<li className="nav-item">
  <Link to="/create-ticket" className="nav-link" style={{ color: 'white' }}>
    Support
  </Link>
</li>

          <li className="nav-item">
            <form className="form-inline my-2 my-lg-0">
              <input className="form-control mr-2" type="search" placeholder="Search" aria-label="Search" />
              {/* <button className="btn btn-outline-success my-2 my-sm-0 ml-auto" type="submit">Search</button> */}
            </form>
          </li>
          <li className="nav-item">
  <Link to="/login" className="nav-link" style={{ color: 'white' }}>
    Login
  </Link>
</li>
<li className="nav-item">
  <Link to="/register" className="nav-link" style={{ color: 'white' }}>
    Register
  </Link>
</li>

        </ul>
      </div>
    </nav>
  );
}

export default Navbar;






