import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Link } from 'gatsby';
import { ReactComponent as Intro } from '../svg/intro.svg';
import { ReactComponent as Intro2 } from '../svg/intro2.svg';
import '../scss/style.scss';

gsap.registerPlugin(ScrollTrigger);

export default function Index() {
  const panelsContainer = useRef();
  const text = useRef();

  useEffect(() => {
    gsap.to('#fuck', {
      scrollTrigger: {
        trigger: '#panels-container',
        start: 'top top',
        pin: true,
        scrub: 0,

        end: () => `+=${panelsContainer.current.offsetWidth - innerWidth}`,
      },
      xPercent: -66, // Questo definisce a che punto si ferma il SVG
      ease: 'none',
    });

    const texts = [
      'Alexa',
      'Ok Google',
      'Hey Siri',
    ];

    document.getElementById('randomText').innerText = texts[Math.floor(Math.random() * texts.length)];
  }, []);

  return (
    <div>
      <main id="content" className="site-content" role="main">

        <section id="intro" className="full-screen bg-secondary">
          <p className="bigText text-center display-3">
            <span id="randomText" />
            {' '}
            I am home
          </p>
          <span className="scroll">scroll</span>

        </section>

        <section id="panels" className="bg-primary bigText">

          <div id="panels-container" style={{ width: '300%' }} ref={panelsContainer}>

            <div className="panel">
              <Intro className="position-relative" id="fuck" />

            </div>

          </div>

        </section>

        <section id="intro" className="full-screen bg-primary">
          <Intro2 />
        </section>

        <section id="intro" className="full-screen bg-primary">
          <div className="container-fluid">
            <div className="row">
              <p className="messapiaSerif finalQuote display-4">Do you know what smart objects can tell about you?</p>
              <p className="finalQuote"><Link to="/menu">Home</Link></p>
            </div>

          </div>
        </section>

      </main>
    </div>

  );
}
