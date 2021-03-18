import React, { useEffect, useRef } from 'react';
import Header from '../components/Header';
import EndContent from '../components/endContent';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import '../scss/style.scss';
import { Link } from 'gatsby';
import { gsap } from 'gsap';

gsap.registerPlugin(ScrollTrigger);

export default function FirstOption() {
  const endContent = [
    {
      what: 'how much you use your spaces in the house (map + dirtiness) how untidy you are',
      link1: 'a',
      link2: 'b',
      link3: 'c',
      cta: 'can i use roomba more safely?',
    },

  ];

  return (

    <section className="bg-primary">
      <EndContent {...endContent[0]} />

    </section>

  );
}
