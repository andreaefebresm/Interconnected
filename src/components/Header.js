import React from 'react';
import { Link } from 'gatsby';

export default function Header() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
          <Link className="navbar-brand " to="/menu">Logo</Link>
          <Link className="navbar-brand ms-auto " to="/useSafely">Use safely</Link>
          <Link className="navbar-brand  " to="/about">About</Link>
        </div>
      </div>
    </nav>

  );
}
