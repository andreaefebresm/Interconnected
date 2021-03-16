import React, { useEffect, useRef } from 'react';
import Header from '../components/Header';

import '../scss/style.scss';
import { Link, navigate } from 'gatsby';
import { gsap } from 'gsap';

export default function UseSafely() {
  const article = [
    {
      who: 'aa',
      title: 'ee',
      decription: 'questa è una descrizione dellarticolo',
      link: 'https://www.youtube.com/',
    },
    {
      who: 'aa',
      title: 'ee',
      decription: 'questa è una descrizione dellarticolo',
      link: 'https://www.youtube.com/',
    },
    {
      who: 'aa',
      title: 'ee',
      decription: 'questa è una descrizione dellarticolo',
      link: 'https://www.youtube.com/',
    },
    {
      who: 'aa',
      title: 'ee',
      decription: 'questa è una descrizione dellarticolo',
      link: 'https://www.youtube.com/',
    },
    {
      who: 'aa',
      title: 'ee',
      decription: 'questa è una descrizione dellarticolo',
      link: 'https://www.youtube.com/',
    },
    {
      who: 'aa',
      title: 'ee',
      decription: 'questa è una descrizione dellarticolo',
      link: 'https://www.youtube.com/',
    },
    {
      who: 'aa',
      title: 'ee',
      decription: 'questa è una descrizione dellarticolo',
      link: 'https://www.youtube.com/',
    },

  ];
  return (
    <div>
      <Header />
      <section>
        <p>What can you do</p>
        <p>This archive collects guides to opt out from personalisation and to use more safely your devices. </p>
      </section>
      <section>
        <div className="container-fluid">
          <div className="row">
            {
              article.map(({
                who, title, decription, link,
              }) => (
                <div className="col-3 pt-4" onClick={() => document.location.href = link}>
                  <div style={{ border: '1px solid black' }}>
                    <div style={{ padding: '10px' }}>
                      <p>{who}</p>
                      <p className="bigText display-4">{title}</p>
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
