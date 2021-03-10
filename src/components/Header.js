import React from 'react';
import { Link } from 'gatsby';

export default function Header() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
          <Link to="/home">Logo</Link>
          <a className="navbar-brand ms-auto " href="#">Use safely</a>
          <Link to="/about">About</Link>
        </div>
      </div>
    </nav>

  );
}
