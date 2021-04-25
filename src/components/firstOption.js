import React, { useEffect, useRef } from 'react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import EndContent from './endContent';

import '../scss/style.scss';
import { gsap } from 'gsap';

gsap.registerPlugin(ScrollTrigger);

export default function FirstOption({ end }) {
  /**
   * Questo serve solo a dare un fallback finché non si completeranno gli oggetti in ./data
   * @type {*&{cta: string, what: string, links: [{href: string, text: string}, {href: string, text: string}, {href: string, text: string}]}}
   */
  const endContent = {
    what: 'how much you use your spaces in the house (map + dirtiness) how untidy you are',
    links: [
      {
        href: 'http://ww.....',
        text: 'A',
      },
      {
        href: 'http://ww.....',
        text: 'A',
      },
      {
        href: 'http://ww.....',
        text: 'A',
      },
    ],
    cta: 'can i use roomba more safely?',
    ...end,
  };

  return (

    <section className="bg-primary">
      <EndContent {...endContent} />
    </section>

  );
}
