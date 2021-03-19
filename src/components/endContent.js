import React, { useEffect, useRef } from 'react';

import '../scss/style.scss';
import { Link } from 'gatsby';

export default function EndContent({
  links, what, cta,
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
          <div className="row row-cols-3">
            {links.map(({ href, label }, i) => <div><a href={href} key={i + label}>{label}</a></div>)}
          </div>
          <div className="row">
            <p>
              {cta}
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
