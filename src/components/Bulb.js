import React from 'react';

import bulbPng from '../images/bulb.png';

export default function BulbPng({ style, className }) {
  return (
    <div className={`text-center ${className}`}>
      <img
        src={bulbPng}
        className="img-fluid mx-auto"
        alt="Responsive image"
        style={style}
      />
    </div>
  );
}
