import React, { useEffect, useRef } from 'react';

import '../scss/style.scss';
import { Link } from 'gatsby';

export default function EndContent({
  link1, link2, link3, what, cta,
}) {
  return (
    <div className="container-fluid" style={{ height: '90vh' }}>
      <div className="row">
        <div className="col-9">
          <div className="row">
            <p>BECAUSE STORING THIS DATA COMPANIES KNOW:</p>
            <p>
              {what}
            </p>
          </div>

        </div>
        <div className="col-12">
          <div className="row">
            <div className="col-4">
              {link1}
            </div>
            <div className="col-4">
              { link2}
            </div>
            <div className="col-4">
              { link3}
            </div>
          </div>
          <div className="row">
            <p>
              { cta}
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
