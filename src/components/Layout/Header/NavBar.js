import React from 'react'
import './Navbar.css'
const NavBar = () => {
  return (
    <section className="Fixed--Header">
      <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
        <div className="logo">
          <p className="logo--info">HEXOVO</p>
        </div>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="collapse navbar-collapse header--socialIcons"
          id="navbarNavDropdown"
        >
          <ul className="navbar-nav">
            <li className="nav-item active">
              <a href="cms.hexovo.com" className="icon-button facebook">
                <i className="fa fa-facebook" aria-hidden="true"></i>
                <span></span>
              </a>
            </li>
            <li className="nav-item">
              <a href="cms.hexovo.com" className="icon-button google-plus">
                <i className="fa fa-google-plus" aria-hidden="true"></i>
                <span></span>
              </a>
            </li>
            <li className="nav-item">
              <a href="cms.hexovo.com" className="icon-button instagram">
                <i className="fa fa-instagram" aria-hidden="true"></i>
                <span></span>
              </a>
            </li>
            <li className="nav-item">
              <a href="cms.hexovo.com" className="icon-button twitter">
                <i className="fa fa-twitter" aria-hidden="true"></i>
                <span></span>
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </section>
  )
}

export default NavBar
