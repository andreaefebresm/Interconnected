import React, { useState } from 'react';
import Header from '../components/Header';
import article, { categories } from '../data/useSafely';
import '../scss/style.scss';

export default function UseSafely() {
  const [cat, setCat] = useState();

  function setFilter(value) {
    return cat === value ? setCat() : setCat(value);
  }

  const filters = [
    {
      label: 'Virtual Assistant',
      name: 'assistant',
    },
    {
      label: 'Smart Vacuum',
      name: 'vacuum',
    },
    {
      label: 'Smart Doorbell',
      name: 'doorbell',
    },
    {
      label: 'Smart Bulb',
      name: 'bulb',
    },
    {
      label: 'Smart Thermostat',
      name: 'thermostat',
    },
    {
      label: 'Privacy Policy',
      name: 'policy',
    },
  ];

  return (
    <div>
      <Header className="sticky-top" />
      <section className="pt-5 marginFilter" style={{ marginLeft: '30px', marginRight: '30px' }}>
        <h1 className="bigText display-4 text-dark">What can you do</h1>
        <h2 className="display-5 text-dark">
          This archive collects guides to opt out from personalisation and to use more safely
          your devices.
          {' '}
        </h2>
        {
          filters.map(({ label, name }) => (
            <a
              key={name}
              role="button"
              className={`btn btn-lg btn-outline-dark m-1 ${cat === categories[name] ? 'active' : ''}`}
              onClick={(e) => e.preventDefault() || setFilter(categories[name])}
            >
              {label}
            </a>
          ))
        }

      </section>
      <section style={{ marginLeft: '30px', marginRight: '30px' }}>
        <div className="container-fluid">
          <div className="row ">
            {
              article.map(({
                who, title, decription, link, cat: category,
              }) => (
                <a
                  target="_blank"
                  key={who + title}
                  className={`col-12 col-md-4 col-lg-3 article mt-4 px-4 ${cat ? (category === cat && 'show') : 'show'}`}
                  href={link}
                  style={{ cursor: 'pointer' }}
                >
                  <div
                    className="row row-cols-1 over border border-dark  h-100"
                  >
                    <div>
                      <p className="">{who}</p>
                      <h3 className="bigText display-5">{title}</h3>
                    </div>

                    <p className="fontTextItalic display-6 h-auto align-self-end">{decription}</p>

                  </div>

                </a>
              ))
            }
          </div>
        </div>
      </section>
    </div>

  );
}
