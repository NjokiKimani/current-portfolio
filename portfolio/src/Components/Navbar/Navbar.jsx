import React from 'react'
import './Navbar.css'
import logo from '../../Assets/logo.svg'
import {Link} from 'react-scroll'


function Navbar() {
  return (
    <div>
      <nav className="navbar">
        <img src={logo} alt="" className='logo' />
        <div className="menu">
          <Link className="menuListItem">Home</Link>
          <Link className="menuListItem">About</Link>{" "}
          <Link className="menuListItem">Skills</Link>{" "}
          <Link className="menuListItem">Projects</Link>{" "}
          <Link className="menuListItem">Contact</Link>
        </div>
      </nav>
    </div>
  );
}

export default Navbar