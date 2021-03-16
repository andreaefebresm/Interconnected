import React, { useEffect, useRef } from 'react';

import '../scss/style.scss';
import { Link } from 'gatsby';

export default function EndContent() {
  const endContent = [
    {
      what: 'how much you use your spaces in the house (map + dirtiness) how untidy you are',
      link1: 'a',
      link2: 'b',
      link3: 'c',
      cta: 'can i use roomba more safely?',
    },

  ];

  return (
    <div className="container-fluid" style={{ height: '90vh' }}>
      <div className="row">
        <div className="col-9">
          <div className="row">
            <p>BECAUSE STORING THIS DATA COMPANIES KNOW:</p>
            <p>
              {endContent[0].what}
            </p>
          </div>

        </div>
        <div className="col-12">
          <div className="row">
            <div className="col-4">
              {endContent[0].link1}
            </div>
            <div className="col-4">
              {endContent[0].link2}
            </div>
            <div className="col-4">
              {endContent[0].link3}
            </div>
          </div>
          <div className="row">
            <p>
              {endContent[0].cta}
            </p>
          </div>
          <div className="row">
            <p>explore more</p>
          </div>
        </div>
      </div>
    </div>
  );
}
