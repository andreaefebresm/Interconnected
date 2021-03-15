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

export default function Menu() {
  const choice = [
    {
      title: 'SMART THERMOSTAT',
      description: 'The thermostats can be controlled remotly and they regulate the temperature by themselves.',
      items: 'Nest, Ecobee Smart Thermostat, Honeywell Home',
      icon: <Thermostat style={{ height: '15vh' }} className="mx-auto w-100" />,
    },
    {
      title: 'SMART DOORBELL',
      description: 'Notifies the smartphone of the home owner when a visitor arrives at the door.',
      items: 'Ring Doorbell, Dingling Xiaomi, Xiaomi Mijia',
      icon: <DoorBell style={{ height: '15vh' }} className="mx-auto w-100" />,
    },
    {
      title: 'VOICE ASSISTANT',
      description: 'It can perform tasks or services for an individual based on commands or questions',
      items: 'Home pod, Google Home, Amazon Echo',
      icon: <Assistant style={{ height: '15vh' }} className="mx-auto w-100" />,
    },
    {
      title: 'SMART VACUUM CLEANER',
      description: 'Also called robot vacuums, they clean rooms automatically based on a virtual map.',
      items: 'Roomba, Roborock, Netbot',
      icon: <Vacuum style={{ height: '15vh' }} className="mx-auto w-100" />,
    },
    {
      title: 'SMART BULB',
      description: 'Light can be controlled with just a few taps on smartphone, tablet and virtual assistants.',
      items: 'Wyze Bulb, Philips Hue, Sengled Smart Wi-Fi LED',
      icon: <Bulb style={{ height: '15vh' }} className="mx-auto w-100" />,
    },
  ];

  return (
    <div>
      <Header />
      <div className="container-fluid">
        <div className="row">
          <p className="offset-1 col-9 display-3 bigText">Do you know what smart objects can tell about you?</p>
          <p className="offset-1 display-5 fontTextItalic">Choose one device to discover it.</p>
        </div>

        <div className="row justify-content-center" style={{ paddingTop: '15vh' }}>
          {
            choice.map(({
              title, description, items, icon,
            }) => (
              <div className="col-2" key={title} onClick={() => navigate('/start')} role="link" style={{ paddingRight: '20px', paddingLeft: '20px' }}>
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
