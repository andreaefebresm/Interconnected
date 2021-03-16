import React, { useEffect, useRef } from 'react';
import Header from '../components/Header';

import '../scss/style.scss';
import { Link } from 'gatsby';
import { gsap } from 'gsap';

export default function UseSafely() {
  const article = [
    {
      who: 'aa',
      title: 'ee',
      decription: 'questa è una descrizione dellarticolo',
      link: '',
    },
    {
      who: 'aa',
      title: 'ee',
      decription: 'questa è una descrizione dellarticolo',
      link: '',
    },
    {
      who: 'aa',
      title: 'ee',
      decription: 'questa è una descrizione dellarticolo',
      link: '',
    },
    {
      who: 'aa',
      title: 'ee',
      decription: 'questa è una descrizione dellarticolo',
      link: '',
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
                who, title, decription,
              }) => (
                <div className="col-3">
                  <p>{who}</p>
                  <p>{title}</p>
                  <p>{decription}</p>
                </div>
              ))
            }

          </div>
        </div>
      </section>
    </div>

  );
}
