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
          <p className="offset-1 col-9 display-3 bigText">Do you know what smart objects can tell about you?</p>
          <p className="offset-1 display-5 fontTextItalic">Choose one device to discover it.</p>
        </div>

        <div className="row justify-content-center" style={{ paddingTop: '5vh' }}>
          {
            data.map(({
              title, description, items, Icon,
            }, index) => (
              <div className="card col-2 scuro" key={title} onClick={() => navigate(`/start?selected=${index}`)} role="link" style={{ cursor: 'pointer', marginRight: '20px', marginLeft: '20px' }}>
                <div className="card-body">
                  <Icon style={{ height: '15vh' }} className="mx-auto w-100" />
                  <p className="display-8 fontTextStrong pt-2 text-center">{title}</p>
                  <p className="display-8 fontText">{description}</p>
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
