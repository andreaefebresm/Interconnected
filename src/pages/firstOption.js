import React, { useEffect, useRef } from 'react';
import Header from '../components/Header';
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

  return (
    <div ref={panels1}>

      <section className="panel1 red full-screen bg-primary">
        ONE
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
