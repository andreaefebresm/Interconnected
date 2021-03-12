import * as React from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useEffect, useRef } from 'react';
import { Link } from 'gatsby';
import Header from '../components/Header';
import { ReactComponent as Assistant } from '../svg/assistant.svg';
import { ReactComponent as Bulb } from '../svg/bulb.svg';
import { ReactComponent as Thermostat } from '../svg/thermosta.svg';
import { ReactComponent as DoorBell } from '../svg/doorbell.svg';
import { ReactComponent as Vacuum } from '../svg/vacuum.svg';

import '../scss/style.scss';

export default function Menu() {
  const choice = [
    {
      title: 'VOICE ASSISTANT',
      description: 'It can perform tasks or services for an individual based on commands or questions',
      items: 'Home pod, Google Home, Amazon Echo',
      icon: <Assistant style={{ height: '15vh' }} />,
    },
    {
      title: 'VOICE ASSISTANT',
      description: 'It can perform tasks or services for an individual based on commands or questions',
      items: 'Home pod, Google Home, Amazon Echo',
      icon: <Bulb style={{ height: '15vh' }} />,
    },
    {
      title: 'VOICE ASSISTANT',
      description: 'It can perform tasks or services for an individual based on commands or questions',
      items: 'Home pod, Google Home, Amazon Echo',
      icon: <Thermostat style={{ height: '15vh' }} />,
    },
    {
      title: 'VOICE ASSISTANT',
      description: 'It can perform tasks or services for an individual based on commands or questions',
      items: 'Home pod, Google Home, Amazon Echo',
      icon: <DoorBell style={{ height: '15vh' }} />,
    },
    {
      title: 'VOICE ASSISTANT',
      description: 'It can perform tasks or services for an individual based on commands or questions',
      items: 'Home pod, Google Home, Amazon Echo',
      icon: <Vacuum style={{ height: '15vh' }} />,
    },
  ];

  return (
    <div>
      <Header />
      <div className="container-fluid">
        <div className="row">
          <p className="display-4 messapiaSerif">Do you know what smart objects can tell about you?</p>
          <p className="display-6 workSansStrong">Choose one device to discover it.</p>
        </div>

        <div className="row justify-content-center align-items-center" style={{ height: '70vh' }}>
          {
            choice.map(({
              title, description, items, icon,
            }) => (

              <div className="col-2">
                <Link to="/start">
                  {icon}
                  <p className="display-7 workSansStrong pt-2">{title}</p>
                  <p className="display-7 workSansReg">{description}</p>
                  <p className="display-7 workSansReg">{items}</p>
                </Link>
              </div>

            ))
          }
        </div>

      </div>

    </div>

  );
}
