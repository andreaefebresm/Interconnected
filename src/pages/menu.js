import * as React from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Header from '../components/Header';
import { ReactComponent as Assistant } from '../svg/assistant.svg';

import '../scss/style.scss';
import { useEffect, useRef } from 'react';

export default function Menu() {
  const choice = [
    {
      title: 'VOICE ASSISTANT',
      description: 'It can perform tasks or services for an individual based on commands or questions',
      items: 'Home pod, Google Home, Amazon Echo',
      icon: <Assistant />,
    },
    {
      title: 'VOICE ASSISTANT',
      description: 'It can perform tasks or services for an individual based on commands or questions',
      items: 'Home pod, Google Home, Amazon Echo',
      icon: <Assistant />,
    },
    {
      title: 'VOICE ASSISTANT',
      description: 'It can perform tasks or services for an individual based on commands or questions',
      items: 'Home pod, Google Home, Amazon Echo',
      icon: <Assistant />,
    },
    {
      title: 'VOICE ASSISTANT',
      description: 'It can perform tasks or services for an individual based on commands or questions',
      items: 'Home pod, Google Home, Amazon Echo',
      icon: <Assistant />,
    },
    {
      title: 'VOICE ASSISTANT',
      description: 'It can perform tasks or services for an individual based on commands or questions',
      items: 'Home pod, Google Home, Amazon Echo',
      icon: <Assistant />,
    },
  ];

  return (
    <div>
      <Header />
      <div className="container-fluid">
        <div className="row">
          <p>Do you know what smart objects can tell about you?</p>
        </div>

        <div className="row">
          {
            choice.map(({
              title, description, items, icon,
            }) => (
              <div className="col">
                {icon}
                <p className="display-3">{title}</p>
                <p className="display-6">{description}</p>
                <p className="display-6">{items}</p>
              </div>
            ))
          }
        </div>

      </div>

    </div>

  );
}
