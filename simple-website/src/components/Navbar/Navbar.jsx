import React from 'react'
import "./Navbar.css"

const Navbar = () => {
  return (
    <div className="nav">
      <div className="nav-logo">Simple-Website</div>
      <ul className="nav-menu">
        <li className="nav-link">Home</li>
        <li className="nav-link">Explore</li>
        <li className="nav-link">About</li>
        <button className="nav-contact">Contact</button>
      </ul>
    </div>
  );
}

export default Navbar