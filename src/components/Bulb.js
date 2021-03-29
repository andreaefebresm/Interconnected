import React from 'react';

import bulbPng from '../svg/bulb.png';

export default function BulbPng() {
  return (
    <div className="d-flex justify-content-center">
      <img
        src={bulbPng}
        className="img-fluid mx-auto"
        alt="Responsive image"
        style={{ height: '15vh' }}
      />
    </div>
  );
}
