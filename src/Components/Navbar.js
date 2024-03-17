
import React from 'react'
import PropTypes from 'prop-types'
// import { Link } from 'react-router-dom';

export default function Navbar(props) {
  return (
    <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
      <div className="container-fluid fw-bold ">
        {/* <Link className="navbar-brand" to="/">{props.title}</Link> */}
        <a className="navbar-brand" href="#">{props.title}</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              {/* <Link className="nav-link active" aria-current="page" to="/">Home</Link> */}
              <a className="nav-link active" aria-current="page" href="#">Home</a>
            </li>
            {/* <li className="nav-item">
              <Link className="nav-link" to="/about">{props.aboutText}</Link>
            </li> */}
          </ul>
          {/* <div className="btn-group" role="group" aria-label="Basic mixed styles example">
            <button type="button" className="btn" onClick={props.applyTheme("#290028")} style={{backgroundColor:"#590158"}}></button>
            <button type="button" className="btn" onClick={props.applyTheme("#000329")} style={{backgroundColor:"#040159"}}></button>
            <button type="button" className="btn" onClick={props.applyTheme("#002908")} style={{backgroundColor:"#01592d"}}></button>
          </div> */}
          <div className="form-check form-switch mx-2">
            <input className="form-check-input" type="checkbox" onClick={props.toggleMode} role="switch" id="flexSwitchCheckDefault"/>
            <label className={`form-check-label text-${props.mode==="light" ? "dark" : "light"}`} htmlFor="flexSwitchCheckDefault">Darkmode</label>
          </div>
          <form className="d-flex" role="search">
            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
            <button className="btn btn-outline-success" type="submit">Search</button>
          </form>
        </div>
      </div>
    </nav>
  );
}

// propTypes are used to set the types of the respective props
Navbar.propTypes = {
    title: PropTypes.string.isRequired,
    aboutText: PropTypes.string.isRequired
}

// if no props are passed then these will be used 
Navbar.defaultProps = {
    title: "title here",
    aboutText: "about here"
}