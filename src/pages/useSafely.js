import React, {  useState } from 'react';
import Header from '../components/Header';
import article, { categories } from '../data/useSafely';
import '../scss/style.scss';

export default function UseSafely() {
  const [cat, setCat] = useState();

  function setFilter(value) {
    return cat === value ? setCat() : setCat(value);
  }

  return (
    <div className="contentGreen">
      <Header className="sticky-top" />
      <section className="pt-5" style={{ marginLeft: '30px', marginRight: '30px' }}>
        <p className="bigText display-4">What can you do</p>
        <p className="display-5">
          This archive collects guides to opt out from personalisation and to use more safely
          your devices.
          {' '}
        </p>
        <a
          role="button"
          className={`btn btn-lg btn-outline-dark ${cat === categories.assistant ? 'active' : ''}`}
          onClick={(e) =>e.preventDefault() || setFilter(categories.assistant)}
        >
          Virtual Assistant
        </a>
        <a
          role="button"
          className={`btn btn-lg btn-outline-dark ${cat === categories.vacuum ? 'active' : ''}`}
          onClick={(e) =>e.preventDefault() || setFilter(categories.vacuum)}
        >
          Smart Vacuum
        </a>
        <a
          role="button"
          className={`btn btn-lg btn-outline-dark ${cat === categories.doorbell ? 'active' : ''}`}
          onClick={(e) =>e.preventDefault() || setFilter(categories.doorbell)}
        >
          Smart Doorbell
        </a>
        <a
          role="button"
          className={`btn btn-lg btn-outline-dark ${cat === categories.bulb ? 'active' : ''}`}
          onClick={(e) =>e.preventDefault() || setFilter(categories.bulb)}
        >
          Smart Bulb
        </a>
        <a
          role="button"
          className={`btn btn-lg btn-outline-dark ${cat === categories.thermostat ? 'active' : ''}`}
          onClick={(e) =>e.preventDefault() || setFilter(categories.thermostat)}
        >
          Smart Thermostat
        </a>
        <a
          role="button"
          className={`btn btn-lg btn-outline-dark ${cat === categories.policy ? 'active' : ''}`}
          onClick={(e) =>e.preventDefault() || setFilter(categories.policy)}
        >
          Privacy Policy
        </a>
      </section>
      <section style={{ marginLeft: '30px', marginRight: '30px' }}>
        <div className="container-fluid">
          <div className="row">
            {
              article.filter((i) => (cat ? i.cat === cat : true)).map(({
                who, title, decription, link,
              }) => (
                <a
                  target="_blank"
                  key={who + title}
                  className="col-3 pt-4"
                  href={link}
                  style={{ cursor: 'pointer' }}
                >
                  <div style={{ border: '1px solid #497065', height: '100%' }}>
                    <div style={{ padding: '10px' }}>
                      <p>{who}</p>
                      <p className="bigText display-5">{title}</p>
                      <p className="fontTextItalic display-6">{decription}</p>
                    </div>
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
