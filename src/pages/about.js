import React from 'react';
import Header from '../components/Header';

import '../scss/style.scss';
import { Link } from 'gatsby';

export default function About() {
  const intro = 'introduzione';
  const paragraph = [
    {
      title: 'Starting Point',
      content: 'primo testo',
    },
    {
      title: 'The Goal',
      content: 'secondo testo',
    },
    {
      title: 'Methodology',
      content: 'terzo testo',
    },
    {
      title: 'Relevance',
      content: 'quarto testo',
    },

  ];

  return (
    <div>
      <Header />
      <div className="container-fluid h-100">
        <div className="row">
          <p className="display-4">BECAUSE STORING THIS DATA COMPANIES KNOW DATA COMPANIES KNOW</p>
        </div>
        <div className="row bordoTopAbout bordoBottomAbout">
          <div className="col-2">
            <div className="row pt-2 pb-2">
              <Link to="#primo" className="upper">{paragraph[0].title}</Link>
            </div>
            <div className="row bordoTopAbout pt-2 pb-2">
              <Link to="#secondo" className="upper">{paragraph[1].title}</Link>
            </div>
            <div className="row bordoTopAbout pt-2 pb-2">
              <Link to="#terzo" className="upper">{paragraph[2].title}</Link>
            </div>
            <div className="row bordoTopAbout bordoBottomAbout pt-2 pb-2">
              <Link to="#quarto" className="upper">{paragraph[3].title}</Link>
            </div>
          </div>
          <div className="col-10 overflow-auto borderLeftAbout" style={{ height: '70vh' }}>
            <p className="fontText pt-2">{intro}</p>
            {
              paragraph.map(({
                content, title,
              }) => (
                <p className="fontText" id="primo">
                  <span className="fontTextStrong">{title}</span>
                  <br />
                  {content}
                </p>

              ))
            }
          </div>
        </div>

      </div>
    </div>
  );
}
