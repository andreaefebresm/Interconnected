import * as React from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useEffect, useRef } from 'react';
import { Link, navigate } from 'gatsby';
import Header from '../components/Header';
import { ReactComponent as Assistant } from '../svg/assistant.svg';
import { ReactComponent as Bulb } from '../svg/bulb.svg';
import { ReactComponent as Thermostat } from '../svg/thermosta.svg';
import { ReactComponent as DoorBell } from '../svg/doorbell.svg';
import { ReactComponent as Vacuum } from '../svg/vacuum.svg';

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

        <div className="row justify-content-center" style={{ paddingTop: '15vh' }}>
          {
            data.map(({
              title, description, items, icon,
            }, index) => (
              <div className="col-2" key={title} onClick={() => navigate(`/start?selected=${index}`)} role="link" style={{ paddingRight: '20px', paddingLeft: '20px' }}>
                {icon}
                <p className="display-7 fontTextStrong pt-2 text-center">{title}</p>
                <p className="display-7 fontText">{description}</p>
                <p className="display-6 fontTextItalic">{items}</p>
              </div>

            ))
          }
        </div>

      </div>

    </div>

  );
}
