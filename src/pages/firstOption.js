import React, { useEffect, useRef } from 'react';
import Header from '../components/Header';
import EndContent from '../components/endContent';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import '../scss/style.scss';
import { Link } from 'gatsby';
import { gsap } from 'gsap';

gsap.registerPlugin(ScrollTrigger);

export default function UseSafely() {
  const panels1 = useRef();

  useEffect(() => {
    gsap.utils.toArray('.panel1').forEach((panels1, i) => {
      ScrollTrigger.create({
        trigger: panels1,
        start: 'top top',
        pin: true,
        pinSpacing: false,
      });
    });

    ScrollTrigger.create({
      snap: 1 / 4, // snap whole page to the closest section!
    });
  });

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
    <div ref={panels1}>

      <section className="panel1 red full-screen bg-primary">
        <EndContent {...endContent[0]} />

      </section>
      <section className="panel1 full-screen bg-secondary">
        TWO
      </section>
      <section className="panel1 full-screen bg-dark">
        THREE
      </section>
      <section className="panel1 full-screen bg-light">
        THREE
      </section>
      <section className="panel1 full-screen bg-success">
        FOUR
      </section>

    </div>
  );
}
