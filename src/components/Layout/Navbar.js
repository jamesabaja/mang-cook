import React from "react"
import { Link } from "gatsby"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faMortarPestle } from "@fortawesome/free-solid-svg-icons"

/* eslint-disable */

const Navbar = () => {
  return (
    <nav
      className="navbar is-primary"
      role="navigation"
      aria-label="main navigation"
    >
      <div className="navbar-brand">
        <Link className="navbar-item is-size-5 has-text-weight-bold" to="/">
          <FontAwesomeIcon icon={faMortarPestle} className="mr-1" />
          Mang Cook
        </Link>

        <a
          role="button"
          className="navbar-burger burger"
          aria-label="menu"
          aria-expanded="false"
          data-target="navbarBasicExample"
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>

      <div id="navbarBasicExample" className="navbar-menu">
        {/* <div className="navbar-start">
          <a className="navbar-item">Home</a>

          <a className="navbar-item">Documentation</a>

          <div className="navbar-item has-dropdown is-hoverable">
            <a className="navbar-link">More</a>

            <div className="navbar-dropdown">
              <a className="navbar-item">About</a>
              <a className="navbar-item">Jobs</a>
              <a className="navbar-item">Contact</a>
              <hr className="navbar-divider" />
              <a className="navbar-item">Report an issue</a>
            </div>
          </div>
        </div> */}

        <div className="navbar-end">
          <Link to="/ingredients" className="navbar-item">
            Ingredients
          </Link>
          <Link to="/about" className="navbar-item">
            About
          </Link>
          {/* <Link to="/" className="navbar-item">
            Contribute
          </Link> */}
        </div>
      </div>
    </nav>
  )
}

export default Navbar
