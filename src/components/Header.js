import React from 'react';
import { Link } from 'gatsby';

export default function Header() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light sticky-top">
      <div className="container-fluid">
        <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
          <Link className="navbar-brand messapiaReg " to="/menu">InterConnected</Link>
          <Link className="navbar-brand ms-auto messapiaReg " to="/">Intro</Link>
          <Link className="navbar-brand messapiaReg" to="/useSafely">Use safely</Link>
          <Link className="navbar-brand messapiaReg" to="/about">About</Link>
        </div>
      </div>
    </nav>

  );
}
