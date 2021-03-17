import React from 'react';
import { Link } from 'gatsby';

export default function Header() {
  return (

    <nav className="navbar navbar-light bg-primary sticky-top">
      <div className="container-fluid justify-content-between">
        <div>
          <Link className="navbar-brand  " to="/menu">InterConnected</Link>
        </div>
        <div>
          <Link className="navbar-brand ms-auto  " to="/">Intro</Link>
          <Link className="navbar-brand " to="/useSafely">Use safely</Link>
          <Link className="navbar-brand " to="/about">About</Link>
        </div>
      </div>
    </nav>
  );
}
