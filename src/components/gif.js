import React from 'react';
import introGif from '../images/intro.gif';

export default function Gif() {
  return (
    <div className="d-flex justify-content-center">

      <img src={introGif} className="img-fluid p-md-1" />
    </div>
  );
}
