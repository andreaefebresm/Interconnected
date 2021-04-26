import React from 'react';
import { navigate } from 'gatsby';
import Header from '../components/Header';

import data from '../data';
import Layout from '../components/Layout';

export default function Menu() {
  const devices = [
    'thermostat',
    'doorbell',
    'assistant',
    'vacuum',
    'bulb',
  ];
  return (
    <Layout title="Menu">
      <div className="container-fluid pt-5">
        <div className="row">
          <div className="offset-md-1 col-12 col-md-9 ">
            <h1 className="display-3 bigText">Do you know what smart objects can tell about you?</h1>
            <h3 className="display-5 fontTextItalic">Choose one device to discover it.</h3>
          </div>
        </div>
        <div className="row  justify-content-center" style={{ paddingTop: '5vh' }}>
          {
            data.map(({
              title, description, items, Icon,
            }, index) => (
              <div
                className="col-12 col-md-3 col-lg-2 mx-lg-3 mb-3 mb-md-5"
                key={title}
                style={{
                  cursor: 'pointer',
                }}
              >
                <div
                  className="card h-100 card scuro "
                  onClick={() => navigate(`/${devices[index]}`)}
                  role="link"
                >

                  <div className="card-body">
                    <Icon
                      style={{ height: '15vh', paddingTop: '15px', paddingBottom: '15px' }}
                      className="mx-auto w-100"
                    />
                    <h2 className="display-7 fontTextStrong pt-2 ">{title}</h2>
                    <p className="display-10 fontText">{description}</p>
                    <p className="display-6 fontTextItalic">{items}</p>
                  </div>
                </div>
              </div>

            ))
          }
        </div>

      </div>

    </Layout>

  );
}
