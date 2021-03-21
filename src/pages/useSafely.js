import React, { useEffect, useRef } from 'react';
import Header from '../components/Header';
import article from '../data/useSafely';
import '../scss/style.scss';

export default function UseSafely() {
  return (
    <div className="contentGreen">
      <Header className="sticky-top" />
      <section className="pt-5" style={{ marginLeft: '30px', marginRight: '30px' }}>
        <p className="bigText display-4">What can you do</p>
        <p className="display-5">This archive collects guides to opt out from personalisation and to use more safely your devices. </p>
      </section>
      <section style={{ marginLeft: '30px', marginRight: '30px' }}>
        <div className="container-fluid">
          <div className="row">
            {
              article.map(({
                who, title, decription, link,
              }) => (
                <div className="col-3 pt-4" onClick={() => document.location.href = link} style={{ cursor: 'pointer' }}>
                  <div style={{ border: '1px solid #497065', height: '100%' }}>
                    <div style={{ padding: '10px' }}>
                      <p>{who}</p>
                      <p className="bigText display-5">{title}</p>
                      <p className="fontTextItalic display-6">{decription}</p>
                    </div>
                  </div>

                </div>
              ))
            }

          </div>
        </div>
      </section>
    </div>

  );
}
