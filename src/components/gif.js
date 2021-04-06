import React from 'react';
import introGif from '../images/intro.gif';

export default function Gif() {
  return (
    <div className="d-flex justify-content-center">

      <img src={introGif} style={{ transform: 'scale(0.9)' }} />
    </div>
  );
}
