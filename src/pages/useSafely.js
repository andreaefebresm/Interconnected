import React, { useState } from 'react';
import article, { categories } from '../data/useSafely';
import '../scss/style.scss';
import Footer from '../components/Footer';
import Layout from '../components/Layout';

export default function UseSafely() {
  let filterDefault;
  if (typeof window !== 'undefined') {
    const params = new URLSearchParams(window.location.search);

    filterDefault = typeof params.get('cat') !== 'undefined' ? params.get('cat') : 0;
  }
  const [cat, setCat] = useState(filterDefault);

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
  ];

  return (
    <Layout title="What can you do?">
      <section className="pt-5 marginFilter" style={{ marginLeft: '30px', marginRight: '30px' }}>
        <h1 className="bigText display-4 text-dark">What can you do</h1>
        <h2 className="display-5 text-dark">
          This archive collects guides to opt out from personalisation and to use more safely
          your devices.
          {' '}
        </h2>
        {
          filters.map(({ label, name }) => (
            <button
              key={name}
              className={`btn btn-lg btn-outline-dark m-1 ${cat === categories[name] ? 'active' : ''}`}
              onClick={(e) => e.preventDefault() || setFilter(categories[name])}
            >
              {label}
            </button>
          ))
        }

      </section>
      <section style={{ marginLeft: '30px', marginRight: '30px' }}>
        <div>
          <div className="row ">
            {
              article.map(({
                who, title, decription, link, cat: category, classe, over,
              }) => (
                <a
                  target="_blank"
                  key={who + title}
                  className={`col-12 col-md-4 col-lg-3 article mt-4 px-4 ${cat ? (category === cat && 'show') : 'show'}`}
                  href={link}
                >
                  <div
                    className={`row row-cols-1 border  h-100 ${classe} ${over}`}
                  >
                    <div>
                      <p className="pt-2">{who}</p>
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
      <Footer />
    </Layout>

  );
}
