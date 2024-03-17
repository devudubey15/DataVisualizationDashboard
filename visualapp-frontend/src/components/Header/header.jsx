import React from 'react';
import { Link } from 'react-router-dom'; 
import './header.css';


const Header = () => {
  return (
    <header className="header">
      <div className="header__logo">
        <Link to="/">Data Visualization Dashboard</Link>
      </div>
      <nav className="header__nav">
        <ul>
          <li>
            {/* <Link to="/">Home</Link> */}
          </li>
          {/* <li>
            <Link to="/about">About</Link>
          </li> */}
        </ul>
      </nav>
     
      <div className="header__profile">
        <span style={{ color: 'lightblue' }}>Devasheesh Dubey</span>
      </div>
    </header>
  );
};

export default Header;
