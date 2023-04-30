import PropTypes from "prop-types"
import React from "react"
import Helmet from "react-helmet"
import "./header-style.scss"

const Header = () => (
  <>
    <Helmet>
      <style>
        @import
        "https://fonts.googleapis.com/css?family=Cinzel|Crimson+Text:400,400i,600i,700i";
      </style>
    </Helmet>
    <header>
      <div className="header__personal">
        <h1>Aaron Magil</h1>
        <div className="header__address">
          <span>88 Vernon St. #2</span>
          <span>Waltham, MA 02453</span>
        </div>
      </div>
      <address className="header__contact">
        <p style={addressStyles}>
          <a
            style={linkStyles}
            href="mailto:abmagil@gmail.com"
            rel="noopener noreferrer"
          >
            abmagil@gmail.com
          </a>
        </p>
        <p style={addressStyles} className="sm-hide">
          781-572-4387
        </p>
        <p style={addressStyles} className="github">
          <a
            style={linkStyles}
            href="http://github.com/abmagil"
            target="_blank"
            rel="noopener noreferrer"
          >
            github.com/abmagil
          </a>
        </p>
      </address>
    </header>
  </>
)

const addressStyles = {
  margin: "0",
  textAlign: "right",
}

const linkStyles = {
  textDecoration: "none",
  color: "inherit",
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

export default Header
