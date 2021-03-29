import React from 'react';
import { Link } from 'gatsby';
import { ReactComponent as ArrowR } from '../svg/arrowR.svg';
import '../scss/style.scss';

export default function EndContent({
  links, what, cta,
}) {
  return (
    <div className="container-fluid" style={{ height: '90vh' }}>
      <div className="row">
        <div className="col-11">
          <div className="row">
            <p className="bigText display-2">STORING THIS DATA COMPANIES KNOW:</p>
            <p className="display-5">
              {what}
            </p>
            <p>Read more information about what companies know in these articles.</p>
          </div>

        </div>
        <div className="col-12">
          <div className="row row-cols-3 pb-5">
            {links.map(({ href, text }, i) => (
              <div key={i}>
                <div style={{ border: '1px solid black' }}>
                  <a href={href} target="blank" key={i + text}>
                    <img
                      src={text}
                      className="img-fluid imgOver"
                      alt="Responsive image"
                      height="100"
                    />
                  </a>
                </div>
              </div>
            ))}
          </div>
          <Link to="/useSafely">
            <div className="row animaz">
              <p className="bigText display-4" style={{ borderTop: '1px solid black' }}>
                {cta}

                <ArrowR />
              </p>
            </div>
          </Link>
          <Link to="/menu">
            <div className="row animaz">
              <p className="bigText display-4" style={{ borderTop: '1px solid black' }}>
                EXPLORE MORE DEVICES &nbsp;
                <ArrowR />
              </p>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
