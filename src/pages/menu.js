import React from 'react';
import { navigate } from 'gatsby';
import Header from '../components/Header';

import '../scss/style.scss';

import data from '../data';

export default function Menu() {
  return (
    <div>
      <Header className="sticky-top" />
      <div className="container-fluid pt-5">
        <div className="row">
          <h1 className="offset-1 col-9 display-3 bigText">Do you know what smart objects can tell about you?</h1>
          <h3 className="offset-1 display-5 fontTextItalic">Choose one device to discover it.</h3>
        </div>

        <div className="row  justify-content-center" style={{ paddingTop: '5vh' }}>
          {
            data.map(({
              title, description, items, Icon,
            }, index) => (
              <div
                className="col-12 col-md-3 col-lg-2 mb-5 card scuro"
                key={title}
                onClick={() => navigate(`/start?selected=${index}`)}
                role="link"
                style={{ cursor: 'pointer', marginRight: '20px', marginLeft: '20px' }}
              >
                <div className="card-body">
                  <Icon style={{ height: '15vh', paddingTop: '15px', paddingBottom: '15px' }} className="mx-auto w-100" />
                  <h2 className="display-7 fontTextStrong pt-2 ">{title}</h2>
                  <p className="display-9 fontText">{description}</p>
                  <p className="display-6 fontTextItalic">{items}</p>
                </div>
              </div>

            ))
          }
        </div>

      </div>

    </div>

  );
}
